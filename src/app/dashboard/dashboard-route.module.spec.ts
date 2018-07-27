import { DashboardRouteModule } from './dashboard-route.module';

describe('DashboardRouteModule', () => {
  let dashboardRouteModule: DashboardRouteModule;

  beforeEach(() => {
    dashboardRouteModule = new DashboardRouteModule();
  });

  it('should create an instance', () => {
    expect(dashboardRouteModule).toBeTruthy();
  });
});
