jq-filmstrip-animatr
====================

Basic filmstrip animation with jQuery

I wrote this plugin when I couldn't find a basic way to create a pauseable animation with html/css/js. It uses a filmstrip image [i.e. each frame after each other in a long horizontal line, left to right] and the css background-position property. It is straightforward to use but in this version 0.9 tailored to what I needed, however it should be clear how to extend it to work for your needs.

[Demo here](http://patrickbest.github.com/jq-filmstrip-animatr/)

Usage
-----

The example.html should be relatively explanatory, however check the following:

* include jquery
* make sure the target div has a set height and width
* edit the default options in the plugin to set your required frames-per-second and width of frame
* make sure to include a html data value in your target div for the number of frames. e.g. data-frames="15"
* if you are passing options [fps/width] into the plugin the arg needs to be set to 'play' or 'stop'

-----

Cool. This is still a slightly raw plugin so any feedback or improvements would be much appreciated. :}


Licence
-------

Copyright 2013 Patrick Best

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.