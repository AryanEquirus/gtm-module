'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export default function GTM() {
	useEffect(() => {
		TagManager.initialize({
			gtmId: 'GTM-MDJMH549'
		});
	}, []);
	return <></>;
}