<template><div><h1 id="set-bluetooth-off-as-default-at-rebooting-in-fedora" tabindex="-1"><a class="header-anchor" href="#set-bluetooth-off-as-default-at-rebooting-in-fedora"><span>Set Bluetooth off as default at rebooting in Fedora</span></a></h1>
<p>We need to edit the file <code v-pre>/etc/bluetooth/main.conf</code></p>
<p>Find the line <code v-pre>AutoEnable=true</code> , change it to <code v-pre>AutoEnable=false</code> and voila, Bluetooth is off as default when rebooting.</p>
</div></template>


