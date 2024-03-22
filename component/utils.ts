
export function pushAnalyticsEvent(event: string) {
	// @ts-ignore
	const dataLayer: Array<any> = window && window.dataLayer ? window.dataLayer : [];
	dataLayer.push({
		event:event.trim()
	});
}

export const ANALYTICS_EVENTS = {
	BUTTON_CLICKED: 'Hello world',
};
