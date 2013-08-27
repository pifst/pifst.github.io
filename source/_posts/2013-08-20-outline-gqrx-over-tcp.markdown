---
layout: post
title: "RTL-SDR Server Setup"
date: 2013-08-20 18:27
comments: true
categories: [SDR, RPI, GQRX]
---
RTL-SDR Server
--
  Software (debian):<br>
  Raspbian Wheezy, Build July 26th, 2013. - <a href="http://downloads.raspberrypi.org/images/raspbian/2013-07-26-wheezy-raspbian/2013-07-26-wheezy-raspbian.zip" target="_blank">(source)</a>
    {% codeblock Get %}
apt-get install libusb-1.0.0-dev
git clone git://git.osmocom.org/rtl-sdr.git
apt-get install cmake
    {% endcodeblock %}

         {% codeblock Do %}
cd rtl-sdr/
mkdir build
cd build
cmake ../ -DINSTALL_UDEV_RULES=ON # On to allow privlages for non-root users
make
sudo make install
sudo ldconfig
{% endcodeblock %}


Radio & Antenna
--
<ol>
<li> Dual band 2M / 70CM slim jim ladder with 16' of rg-58 extension <a href="http://www.2wayelectronix.com/Dual-band-2m-70cm-Slim-Jim-Antenna-with-16-rg-58-dual-slim-16.htm" target="_blank">(purchase)</a>.<br>
  {% codeblock Specifications %}
  Length - 6 Feet tip to connector.
  1.5:1 Bandwidth > 4mhz
  Power Handling - 100 watts
  Gain - Approx 6dbi 2m 5dbi 70cm
  Weight - 6oz
  Connector - Assorted
  Construction - 450 ohm ladder line.
  {% endcodeblock %}

<li> 6inch RG316 MCX male right angel to SMA female jack RF Pigtail <a href="http://www.ebay.com/itm/6inch-RG316-MCX-male-right-angel-to-SMA-female-jack-RF-Pigtail-Jumper-Cable-15cm-/170993798886" target="_blank">(purchase)</a>.<br>

<li> RTL2832U S.D.R. w/ E4000 Tuner <a href="http://www.amazon.com/gp/product/B009U7WZCA/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1" target="_blank">(purchase)</a>.<br>
  E4000 currently considered the best tuner, with minor draw backs.  This product uses an MCX Female jack, which is a relatively uncommon standard.  The provided antenna is useful for harvesting the MCX Male jack.

</ol>
<a href="{{ root_url }}/images/sdr_mcx-smaF-smaM-70cm2m.jpg"><img src="{{ root_url }}/images/sdr_mcx-smaF-smaM-70cm2m.jpg" /> </a><br>
