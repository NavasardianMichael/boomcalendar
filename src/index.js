import React, { useState, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function BoomCalendar(props) {

    const VIEW_PLUGINS = {
        month: dayGridPlugin,
        week: timeGridPlugin,
        day: dayGridPlugin
    }

    function getViewFCName(view, showTime) {
        switch(view) {
            case 'month': return 'dayGridMonth';
            case 'week': return showTime ? 'timeGridWeek' : 'dayGridWeek';
            case 'day': return showTime ? 'timeGridDay' : 'dayGridDay';
            default: return 'dayGridMonth';
        }
    } 

    function getViewPlugins(views) {
        if(!views || !views.length) return [VIEW_PLUGINS.month];
        return views.filter(view => {
            if(!VIEW_PLUGINS.hasOwnProperty(view)) {
                console.error('provided view type ' + view + ' is not listed in permitted views');
                return false;
            }
        })
        .map(view => VIEW_PLUGINS[view])
    }

	return (
		<FullCalendar
			initialView={ getViewFCName(props.initialView, props.showTime) }
			plugins={ [interactionPlugin, ...getViewPlugins(props.views)] }
            hiddenDays = { props.hiddenDays }
		/>
	)
}