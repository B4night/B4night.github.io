---
author: B4night
date: 2024-02-08
title: Disable keyboard driver on win11
tags: []
categories:
  - Useful Skills
---

# Disable keyboard driver on win11

Today I ran into a hardware bug which was really annoying. My laptop keyboard inputed `r` constantly and I couldn't fix it. I think it's because the motherboard is rotten. I could not open and remove the corrupted part. So the easiest way is disabling keyboard driver and use external keyboard.

It takes 2 steps to disable keyboard driver.

1.  Open `Devide Manager` and **Uninstall** keyboard device. For me, it's `PS/2`.
2.  Then, run `cmd` as administrator and execute command `sc config i8042prt start= disabled`

Then, after rebooting, the build-in keyboard will be disabled.

## Re-able the driver

Run `cmd` as administator and execute command `sc config i8042prt start= auto`.

After rebooting and the keyboard driver will be loaded.
