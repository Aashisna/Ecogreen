import React from "react";
export default function Main() 
{
    return 
    (
        <>
            $(window).scroll(function()
            {
            if($(window).scrollTop()> 150)
            {
                $("header").addClass("n")
            }
            else
            {
                $("header").removeClass("n")
            }
            )}
        </>
    )
}
