// ----------------------------------------------------------------------
// (c) Copyright 2021, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

import type {VueGTM} from './vue-gtm-types'

declare module 'vue/types/vue' {
  interface Vue {
    $gtm: VueGTM
  }
}
