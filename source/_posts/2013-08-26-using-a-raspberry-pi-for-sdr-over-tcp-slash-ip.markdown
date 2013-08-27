---
layout: post
title: "Using a Raspberry PI for SDR over TCP/IP"
date: 2013-08-26 18:11
comments: true
categories: [SDR, RPI, GQRX]
---
Assuming you are on ethernet (or fast Wifi N), audio quality should be great.  There will a slight delay in changing to frequencies, and a large (2 to 5 second) delay in changing the monitored frequency window.  These delays are reduced upon reducing the sample (step 4).

Confirm Installation
--
To confirm a proper setup and device stability etc, run the following code over SSH:
    {% codeblock %}
    rtl_test -t
    {% endcodeblock %}


  Resulting in an output similar to:
    {% codeblock Output of RTL_Test %}
    Found 1 device(s):
      0:  ezcap USB 2.0 DVB-T/DAB/FM dongle
    Using device 0: ezcap USB 2.0 DVB-T/DAB/FM dongle
    Found Elonics E4000 tuner
    Supported gain values (18): -1.0 1.5 4.0 6.5 9.0 11.5 14.0 16.5 19.0 21.5 24.0 29.0 34.0 42.0 43.0 45.0 47.0 49.0
    Benchmarking E4000 PLL...
    [E4K] PLL not locked for 51000000 Hz!
    [E4K] PLL not locked for 2227000000 Hz!
    [E4K] PLL not locked for 1114000000 Hz!
    [E4K] PLL not locked for 1241000000 Hz!
    E4K range: 52 to 2226 MHz
    E4K L-band gap: 1114 to 1241 MHz
    {% endcodeblock %}
Server IP
--
Obtain devices IP address, either thru;
  {% codeblock Obtain IP address of RPI %}
ipconfig # for wired lan
iwconfig # for wireless lan
  {% endcodeblock %}

Start RTL_TCP
--
Now over ssh put the device into listening mode, you can tell the program to only accept connections from a specific ip, or any.


  {% codeblock RTL_TCP - Open to all clients%}
  rtl_tcp -a 0.0.0.0
  {% endcodeblock %}

  {% codeblock RTL_TCP - Open to specific clients%}
  rtl_tcp -a 192.168.X.X
  {% endcodeblock %}

Configure Gqrx
--
Open Gqrx, goto the Configure I/O Devices prompt.
  {% codeblock Gqrx - Configure I/O Devices %}
Device: RTL-SDR Spectrum Server
Device String: tcp=192.168.1.X:1234  # IP of RPI
Sample Rate: 1,500,000hz # Default
                         # Ideal is between 375,000 to 500,000
{% endcodeblock %}

Results
--
Hit the power button, enjoy:
<a href="{{ root_url }}/images/Gqrx_rtl_tcp.jpg"><img src="{{ root_url }}/images/Gqrx_rtl_tcp.jpg" /> </a>

----
Notes:

1. SDR instability, is likely due to plugging directly into the raspberry pi.  Instead use a POWERED usb hub.
