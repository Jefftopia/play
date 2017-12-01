import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import * as d3 from 'd3';
import * as topojson from 'topojson';

@Component({
    selector: 'map',
    styleUrls: [ './map.scss' ],
    templateUrl: './map.html'
})
export class MapComponent implements AfterViewInit {
    @Input() private data: any;

    @ViewChild('svgWapper') public el: ElementRef;

    // constructor(activatedRoute: ActivatedRoute) {
        // activatedRoute.data.map((data: {}) => {
        //     console.info('data ', data);

        //     this.mapData = data;
        // });
    // }

    public ngAfterViewInit(): void {
        this.buildMap();
    }

    public buildMap(): void {
        const width: number = 960;
        const height: number = 720;
        const speed: number = 0.05;
        const start: number = Date.now();

        const sphere: {} = { type: 'Sphere' };

        const projection = d3.geoOrthographic()
            .scale(height / 2.1)
            .translate([width / 2, height / 2])
            .clipAngle(90)
            .precision(0.5);

        const graticule = d3.geoGraticule();

        const canvas = d3.select(this.el.nativeElement).append('canvas')
            .attr('width', width)
            .attr('height', height);

        const context = canvas.node().getContext('2d');

        const path = d3.geoPath()
            .projection(projection)
            .context(context);

        const land = topojson.feature(this.data, this.data.objects.land);
        const borders = topojson.mesh(this.data, this.data.objects.countries, function(a, b) { return a !== b; });
        const grid = graticule();

        d3.timer(function() {
            projection.rotate([speed * (Date.now() - start), -15]);

            context.clearRect(0, 0, width, height);

            context.beginPath();
            path(sphere);
            context.lineWidth = 3;
            context.strokeStyle = '#fff';
            context.stroke();

            context.beginPath();
            path(sphere);
            context.fillStyle = '#fff';
            context.fill();

            context.beginPath();
            path(land);
            context.fillStyle = '#256cee';
            context.fill();

            context.beginPath();
            path(borders);
            context.lineWidth = 0.5;
            context.strokeStyle = '#fff';
            context.stroke();

            context.beginPath();
            path(grid);
            context.lineWidth = 0.5;
            context.strokeStyle = 'rgba(119,119,119,.5)';
            context.stroke();
        });

        d3.select(self.frameElement).style('height', `${height}px`);
    }
}
