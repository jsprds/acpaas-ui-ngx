import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
	FilterModule,
	LabelsModule,
	WindowModule,
	WINDOW_PROVIDERS,
} from '@acpaas-ui/ngx-components/utils';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		CodeSnippetModule,
		FilterModule,
		LabelsModule,
		WindowModule,
	],
	declarations: [
		Pages,
	],
	providers: [WINDOW_PROVIDERS],
})
export class UtilsExamplesModule {}
