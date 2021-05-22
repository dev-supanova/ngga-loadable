import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DefaultLoadableComponent } from "./default-loadable.component";

describe('DefaultLoadableComponent', () => {
    let component: DefaultLoadableComponent;
    let fixture: ComponentFixture<DefaultLoadableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DefaultLoadableComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultLoadableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});