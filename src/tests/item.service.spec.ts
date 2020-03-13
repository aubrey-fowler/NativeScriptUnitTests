import { ItemService } from '../app/item/item.service';

import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender
} from 'nativescript-angular/testing';

describe('ItemsService Test', () => {

    beforeEach(nsTestBedBeforeEach([ItemService]));
    afterEach(nsTestBedAfterEach(false));

    return nsTestBedRender(ItemService).then((fixture) => {
        // fixture.detectChanges();
        // const component = fixture.componentInstance;
        expect(fixture).toBeTruthy;
    });

});