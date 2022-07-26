import { api } from "./api";

describe("api", () => {
	it('getElectrolRole should contain data', async () => {
		const response = await api.getElectrolRole();
		expect(response).toBeTruthy();
	});

	it('getInsights should contain data', async () => {
		const response = await api.getInsights();
		expect(response).toBeTruthy();
	});

  test("fetching insights", async () => {
      await api.getInsights().then(data => {
          expect(data).toBeDefined();
      });
  })

  test("fetching electrolRole to be defined", async () => {
    await api.getElectrolRole().then(data => {
        expect(data).toBeDefined();
    });
})
})