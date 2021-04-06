// ----------------------------------------------------------------------
// (c) Copyright 2021, Dark Star Systems, Inc.  All rights reserved.
// This file may contain proprietary and confidential information.
// DO NOT COPY or distribute in any form without prior written consent.
// ----------------------------------------------------------------------

/** Price table */
// (TODO: should extract this automatically from the price table in the db)
export const prices = {
  headers: [
    {text: 'Resolution', value: 'name', align: 'start'},
    {text: '$ per sec', value: 'pricePerSec', align: 'end'},
    {text: '$ per 5 sec', value: 'price5sec', align: 'end'},
    {text: '$ per 10 sec', value: 'price10sec', align: 'end'}
  ],
  prices: {
    academic: [
      {
        name: "SD (480p)",
        pricePerSec: "$4.50",
        price5sec: "$22.50",
        price10sec: "$45.00"
      },
      {
        name: "Standard HD (720p)",
        pricePerSec: "$9.00",
        price5sec: "$45.00",
        price10sec: "$90.00"
      },
      {
        name: "Full HD (1080p)",
        pricePerSec: "$15.00",
        price5sec: "$75.00",
        price10sec: "$150.00"
      },
      {
        name: "Huge 4K (2160p)",
        pricePerSec: "$60.00",
        price5sec: "$300.00",
        price10sec: "$600.00"
      },
    ],
    commercial: [
      {
        name: "SD (480p)",
        pricePerSec: "$18.00",
        price5sec: "$90.00",
        price10sec: "$180.00"
      },
      {
        name: "Standard HD (720p)",
        pricePerSec: "$36.00",
        price5sec: "$180.00",
        price10sec: "$360.00"
      },
      {
        name: "Full HD (1080p)",
        pricePerSec: "$60.00",
        price5sec: "$300.00",
        price10sec: "$600.00"
      },
      {
        name: "Huge 4K (2160p)",
        pricePerSec: "$240.00",
        price5sec: "$1200.00",
        price10sec: "$2400.00"
      },
    ]
  }
}
