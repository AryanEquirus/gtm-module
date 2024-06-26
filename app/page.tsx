'use client'

import { ANALYTICS_EVENTS, pushAnalyticsEvent } from "@/component/utils"

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>GTM</h1>

        <section className='mt-12'>
          <h2 className='text-xl font-semibold'>Google Tag Manager</h2>
          <button
            className='mt-4 rounded bg-sky-500 px-4 py-2 text-white'
            onClick={() =>
              pushAnalyticsEvent(ANALYTICS_EVENTS.BUTTON_CLICKED)
            }
          >
            Send Event
          </button>
        </section>

        <section className='mt-12'>
          <h2 className='mb-4 text-xl font-semibold'>YouTube Embed</h2>
         
        </section>
      </div>
    </section>
  )
}
