/**
 * Album plugin
 *
 * Copyright (c) 2010 T Vishwesh Prabhu (vish_last@yahoo.co.in && www.visu.co.nr)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * 
 *
 * @example 				$.album();
 *
 * @name 				$.album
 * @cat 				Plugins/Photo Albums
 * @author 				T Vishwesh Prabhu(vish_last@yahoo.co.in && www.visu.co.nr)
 */

(function($){

    $.fn.extend({

        album: function(o) {   
            //Set the default values, use comma to separate the settings, example:   
            var defaults = { 
                number_of_images : 5,
                image_width : 180,
                image_height : 100,
                image_percent_displayed : 0.40,
                display_item : 3,
                display_id : ""		
            }   
                   
            var options =  $.extend(defaults, o); 
            album_width = options.image_width+((options.number_of_images-1)*options.image_width*options.image_percent_displayed)+options.number_of_images*2;
            album_height = options.image_height;
            animation_time = 200;
            return this.each(function() {
                $(this).css("width", album_width);
                $(this).css("height", album_height);
                $(this).css("overflow-x", "hidden");
                $(this).css("overflow-y", "hidden");
                options.display_id = "album_image_"+options.display_item;
                for(i=1;i<=options.number_of_images;i++){
                    $(this).append("<div id=\"album_image_"+i+"\"></div>");
                    $("#album_image_"+i).css("width", options.image_width*options.image_percent_displayed);                    
                    $("#album_image_"+i).css("height", options.image_height);
                    $("#album_image_"+i).css("float", "left");
                    $("#album_image_"+i).css("position", "relative");
                    $("#album_image_"+i).css("overflow-x", "hidden");
                    $("#album_image_"+i).html("<img src=\"images\\"+i+".png\"/>");
                    $("#album_image_"+i).live("click",function(){
                        $("#"+options.display_id).animate({
                            width :   options.image_width*options.image_percent_displayed
                        },animation_time);
                        $("#"+options.display_id).css('overflow-x',"hidden");
                        options.display_id = this.id;
                        $("#"+options.display_id).css("overflow-x", "visible")
                        $("#"+options.display_id).animate({
                            width :   options.image_width
                        },animation_time);
                        
                    });
                    if(i==options.display_item){
                        $("#album_image_"+i).css("width", options.image_width);
                        $("#album_image_"+i).css("overflow-x", "visible");
                    }
                }               
               
            });
        }
    });

})(jQuery);
