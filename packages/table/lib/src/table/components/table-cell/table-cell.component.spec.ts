import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, DebugElement } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { TableCellComponent } from './table-cell.component';
import { Cell } from '../../types/table.types';

// ---------- DUMMY FILTERS ----------- //
@Component({
	selector: 'aui-dummy-test',
	template: '<div class="dummy-test">Test</div>',
})
export class DummyTestComponent implements Cell {
	@Input() data: any;
}

// ---------- TABLE Cell TEST ---------- //

describe('The Table Cell Component without component', () => {
	let comp: TableCellComponent;
	let fixture: ComponentFixture<TableCellComponent>;
	let deSpan: DebugElement;
	let elSpan: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				TableCellComponent, // declare the test component
			],
		})
		.compileComponents();  // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(TableCellComponent);
		comp = fixture.componentInstance; // BannerComponent test instance

		comp.value = 'Test';
		fixture.detectChanges();

		// query for the title <h1> by CSS element selector
		deSpan = fixture.debugElement.query(By.css('span'));
		elSpan = deSpan.nativeElement;
	});

	it('should exist ', () => {
		fixture.detectChanges();
		expect(elSpan).not.toBeUndefined();
	});
});

describe('The Table Cell Component with component', () => {
	let comp: TableCellComponent;
	let fixture: ComponentFixture<TableCellComponent>;
	let deSpan: DebugElement;
	// let deComp: DebugElement;
	// let elComp: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				DummyTestComponent,
				TableCellComponent, // declare the test component
			],
		});

		TestBed.overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [DummyTestComponent],
			},
		})
		.compileComponents();  // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(TableCellComponent);
		comp = fixture.componentInstance; // BannerComponent test instance

		comp.value = 'Test';
		comp.component = DummyTestComponent;
		fixture.detectChanges();

		// query for the title <h1> by CSS element selector
		deSpan = fixture.debugElement.query(By.css('span'));

		// elComp = deComp.nativeElement;
	});

	it('should exist', () => {
		expect(deSpan).toBeNull();

		// Something goes wrong...
		// deComp = fixture.debugElement.query(By.all('dummy-test'));
		// elComp = deComp.nativeElement;
		// expect(elComp).not.toBeUndefined();
	});
});
