// ----------------------------------------------------------------------
// (c) Copyright 2021, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

import type {VueGTM} from './vue-gtm-types'

/** Use Google Tag Manager to track an event. Pass $root.$gtm as gtag arg. */
export function track(gtm: VueGTM, name: string, label?: string, category?: string) {
  const meta: any = {}
  if (label) meta.event_label = label
  if (category) meta.event_category = category
  gtm.push({event: name, ...meta})
}
