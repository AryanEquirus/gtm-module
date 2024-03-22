'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const loadGTM = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MDJMH549`;
    script.async = true;
    script.onload = () => {
        // GTM script loaded, initialize GTM
        TagManager.initialize({ gtmId: 'GTM-MDJMH549' });
    };

    // Append the script to the document's head
    document.head.appendChild(script);
};
export default function GTM() {
	useEffect(() => {
		loadGTM();
	}, []);
	return <></>;
}