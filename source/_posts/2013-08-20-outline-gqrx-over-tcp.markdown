---
layout: post
title: "Outline - GQRX over TCP"
date: 2013-08-20 18:27
comments: true
categories: [SDR, RPI, GQRX] 
---
GQRX Client:
  Gqrx 2.2 - [http://gqrx.dk/download]

GQRX Server:
  Software:
    Get:
      libusb-1.0.0-dev
      git clone git://git.osmocom.org/rtl-sdr.git
      cmake
     Do:
      cd rtl-sdr/
      mkdir build
      cd build
      cmake ../ -DINSTALL_UDEV_RULES=ON # On to allow privlages for non-root users
      make
      sudo make install
      sudo ldconfig
     Use:
       rtl_tcp -a 0.0.0.0
  Linux:
      Raspbian Wheezy, Build July 26th, 2013. - http://downloads.raspberrypi.org/images/raspbian/2013-07-26-wheezy-raspbian/2013-07-26-wheezy-raspbian.zip
    SSH:
        http://steve.dynedge.co.uk/2012/05/29/enabling-ssh-on-debian-raspberry-pi/
    More:


   Hardware - (RaspberryPi):
    Network Connectivity - Test Thruput
      Ethernet
      Wifi
        http://www.geothread.net/cookbook-configuring-wifi-on-raspberry-pi/
    SDR
      NooElec TV28T v2 - RTL2832U & R820T, E4000 Tuner [http://www.amazon.com/gp/product/B009U7WZCA/]

   Drivers:

Antenna Design:
  Colinnear
