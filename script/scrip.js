$(function () {

    'use strict';

    $("#img").height($(window).height());
    $("#img").width($(window).width());


    $(window).on("resize", function () {
        $("#img").height($(window).height());
        $("#img").width($(window).width());
    });







})

