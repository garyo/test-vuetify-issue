// ----------------------------------------------------------------------
// (c) Copyright 2021, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

type VueGTMArgs = {
  event: string
  [key: string]: any
}
export type VueGTM = {
  init(id: string): void
  push(args: VueGTMArgs): void
}
