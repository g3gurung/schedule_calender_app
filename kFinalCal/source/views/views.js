/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    published: {
        curr_year: new Date().getFullYear(),
        curr_month: new Date().getMonth(),
        curr_date: new Date().getDate(),
        schedule: null
    },
    components: [
        {name: "Months_Arranger",
            arrangerKind: "LeftRightArranger",
            kind: "Panels",
            fit: true, realtimeFit: true,
            classes: "months-arranger", margin: 0,
            onTransitionFinish: "checkSchedule",
            components: [
                {kind: "Month_Kind", name:"Jan", month_index: 0,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                        this.$.Back_Month_Btn.applyStyle("color", "lightgrey").applyStyle("cursor", "default");
                    }
                },
                {kind: "Month_Kind", name:"Feb", month_index: 1,
                    day: 0, max_date: 0, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Mar", month_index: 2,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Apr", month_index: 3,
                    day: 0, max_date: 30, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"May", month_index: 4,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"June", month_index: 5,
                    day: 0, max_date: 30, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"July", month_index: 6,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Aug", month_index: 7,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Sep", month_index: 8,
                    day: 0, max_date: 30, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Oct", month_index: 9,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Nov", month_index: 10,
                    day: 0, max_date: 30, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                    }
                },
                {kind: "Month_Kind", name:"Dec", month_index: 11,
                    day: 0, max_date: 31, style: "height: auto",
                    rendered: function() {
                        this.inherited(arguments);
                        this.start_day_index = new Date(this.owner.getCurr_year()+"-"+this.month_index+1+"-1").getDay();
                        this.$.Year.setContent(this.owner.getCurr_year());
                        this.$.Month_Name.setContent(this.getName());
                        this.$.Next_Month_Btn.applyStyle("color", "lightgrey").applyStyle("cursor", "default");
                    }
                }
            ]
        },
        {name: "Add_Status", classes: "add-status", components: [
            {name: "Add_Status_Btn", kind: "onyx.Button", classes: "onyx-affirmative add-status-btn", ontap:"addStatus", 
                popup: "Status_Input_Popup", showing: false, components: [
                {tag: "img", attributes: {src: "assets/images/add_status.png", style: "padding-right: 5px"}},
                {classes: "add-status-txt", content: "Add New Status"}
            ]}
        ]},
        {name: "Schedule_Data", classes: "schedule-data" , components: [
            {name: "Delete_Schedules", kind: "Image", src: "assets/images/cross.png", style: "float: left; cursor: pointer"}, 
            {name: "Delete_Cancel", content: "delete", style: "float: left; padding: 2px; color: grey; cursor: pointer"},
            {name: "Schedule_Data_Title", classes: "schedule-data-title", components: [
                {name: "Schedule_Data_Title_Content", content: "", classes: "schedule-data-title-content"}
            ]}
        ]},
        {name: "Schedule_Repeater_Scroller",
            kind: "Scroller",
            horizontal: "hidden",
            classes: "enyo-fit", touch: true,
            style: "top: 310px",
            components: [
                {name: "Schedule_Repeater",
                    kind: "Repeater",
                    count: 0, 
                    month_schedule: [],
                    layoutKind: "FittableRowsLayout",
                    onSetupItem: "setupSchedule",
                    style: "background: white",
                    components: [
                        {kind: "Schedule_Data_Content", name: "Schedule"}
                    ]
                }
            ]
        },
        {kind: "Submit_Popup", name: "Status_Input_Popup", published: {year: null, month_index: null, date: null}},
        {name: "SuccessPopup", kind: "onyx.Popup", centered: true, scrim: true,
            floating: true, classes: "onyx-sample-popup app-popup", autoDismiss: false,
            components: [
                {kind: "onyx.Spinner"},
                {showing: false, components: [
                    {content: "Successfully Submitted!"},
                    {kind: "FittableColumns", style: "text-align: center", components: [
                        {kind: "onyx.Button", content: "OK", ontap: "closePopup",
                            popup: "SuccessPopup",
                            classes: "popup-btn"}
                        ]
                    }
                ]}
            ]
        },
        {name: "ConfirmationPopup", the_id: null,
            kind: "onyx.Popup", centered: true, scrim: true,
            floating: true, classes: "onyx-sample-popup app-popup", autoDismiss: false,
            components: [
                {content: "Are you sure want to remove this!"},
                    {kind: "FittableColumns", style: "text-align: center", components: [
                        {kind: "onyx.Button", content: "OK", ontap: "removeStatus",
                            popup: "ConfirmationPopup",
                            classes: "popup-btn"},
                        {kind: "onyx.Button", content: "NO", ontap: "closePopup",
                            popup: "ConfirmationPopup",
                            classes: "popup-btn"}
                        ]
                    }
            ]
        }
    ],
    addStatus: function(inSender, inEvent) {
        this.$[inSender.popup].show();
    },
    removeStatus: function(inSender, inEvent) {
        alert(this.$[inSender.popup].the_id);
    },
    setupSchedule: function(inSender, inEvent) {
        var index = inEvent.index;
        var item = inEvent.item.$.Schedule;
        item.$.Schedule_Data_Content_Container.the_id = inSender.month_schedule[index].id;
        item.$.Schedule_Data_Content_UserName.setContent(inSender.month_schedule[index].username);
        item.$.Schedule_Data_Content_DateInfo.setContent("On "+inSender.month_schedule[index].date+" of this month("+this.getMonthName(this.$.Months_Arranger.getIndex())+")");
        item.$.Schedule_Data_Content_Txt.setContent(inSender.month_schedule[index].schedule_info);
        item.$.Schedule_Data_Content_Info.setContent(inSender.month_schedule[index].extra_info);
        item.$.Schedule_Data_Content_DateOfRegister.setContent(inSender.month_schedule[index].d_o_r);
    },
    checkSchedule: function(inSender, inEvent) {
        this.updateSchedule(inEvent.toIndex, this);
        this.$.Months_Arranger.applyStyle("height", this.$.Months_Arranger.getPanels()[inEvent.toIndex].getBounds().height+"px");
        
        this.$.Months_Arranger.getPanels()[inEvent.fromIndex].$.Week_Repeater.children.forEach(function(week){
            week.$.Week_Repeater_Item.$.Days_Repeater.children.forEach(function(Day_Item){
                Day_Item.$.Day.removeClass("day-selected");
            });
        });
        this.$.Add_Status_Btn.setShowing(false);
        this.$.Add_Status_Btn.removeClass("add-status-btn-show");
        
        this.$.Schedule_Repeater_Scroller.applyStyle("top", "310px");
    },
    rendered: function() {
        this.inherited(arguments);
        this.$.Months_Arranger.setIndex(this.getCurr_month());
        
        var ajax = new enyo.Ajax({
            url: "schedule",
            method: "GET"
        });

        // send parameters the remote service using the 'go()' method
        ajax.go();
        // attach responders to the transaction object
        ajax.response(this, "processDataRes");
        // handle error
        ajax.error(this, "processDataErr");  
    },
    processDataRes: function(inSender, inResponse) {
        this.setSchedule(inResponse);
        this.updateSchedule(this.$.Months_Arranger.getActive().month_index, this);
        this.$.Months_Arranger.children.forEach(function(item) {
            item.$.Week_Repeater.set("count", 6, true);
            item.$.Month.applyStyle("width", item.$.Week_Repeater.getBounds().width+"px");
        });
    },
    processDataErr: function(inSender, inResponse) {
        alert(inResponse);
    },
    updateSchedule: function(month_index, mainApp, res_date) {
        mainApp.$.Schedule_Data_Title_Content.setContent(mainApp.getMonthName(month_index)+" Month Info");
        mainApp.$.Schedule_Repeater.month_schedule = [];
        var schedules = mainApp.getSchedule();
        if(schedules) {
            schedules.forEach(function(d) {
                if(res_date) {
                    if(parseInt(d.month_index) === month_index && parseInt(d.date) === res_date) {
                        mainApp.$.Schedule_Repeater.month_schedule.push(d);
                    }
                } else {
                    if(parseInt(d.month_index) === month_index) {
                        mainApp.$.Schedule_Repeater.month_schedule.push(d);
                    }
                }
            });
        }
        if(mainApp.$.Schedule_Repeater.month_schedule.length > 0) {
            mainApp.$.Schedule_Repeater.setCount(mainApp.$.Schedule_Repeater.month_schedule.length);
        }
        else {
            mainApp.$.Schedule_Repeater.setCount(0);
        }
    },
    getMonthName: function(month_index) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month_index] || undefined;
    },
    closePopup: function(inSender, inEvent) {
        this.$[inSender.popup].hide();
    }
});


//enyo kind for Month_Kind
enyo.kind({
    name: "Month_Kind",
    classes: "month-kind",
    components: [
        { name: "Month", kind: "FittableRows",
            classes: "month",
            components: [
                { name: "Year_Title_Bar", classes: "year-title-bar", components: [
                    {tag: "span", name: "Back_Year_Btn", content: "▲", ontap: "backYearBtnTapped"},  
                    {name: "Year", tag: "span", classes: "year"},
                    {tag: "span", name: "Next_Year_Btn", content: "▼", ontap: "nextYearBtnTapped"}
                ]},
                { name: "Month_Title_Bar", classes: "month-title-bar", components: [
                    {kind: "Image", name: "Back_Month_Btn", src: "assets/images/back.png", ontap: "backMonthBtnTapped", style:"float: left; cursor: pointer"},  
                    {name: "Month_Name", tag: "span", classes: "month-name"},
                    {kind: "Image", name: "Next_Month_Btn", src: "assets/images/next.png", ontap: "nextMonthBtnTapped", style:"float: right; cursor: pointer"}
                ]},
                { name: "Week_Names", 
                    kind: "FittableColumns",
                    classes: "week-names",
                    components: [
                        {content: "M", classes: "week-names"},{content: "Tu", classes: "week-names"},
                        {content: "W", classes: "week-names"},{content: "Th", classes: "week-names"},
                        {content: "F", classes: "week-names"},{content: "Sa", classes: "week-names weekend"},
                        {content: "Su", classes: "week-names weekend"}
                    ]
                },
                { name: "Week_Repeater",
                    kind: "Repeater",
                    count: 0, 
                    weekCount: 0,
                    layoutKind: "FittableRowsLayout",
                    onSetupItem: "setupWeeks",
                    components: [
                        {kind: "Week", name: "Week_Repeater_Item"}
                    ]
                }
            ]
        }
    ],
    setupWeeks: function(inSender, inEvent) {
        var index = inEvent.index;
        var item = inEvent.item;
        var mainApp = this.owner;
       
        this.$.Week_Repeater.weekCount ++;
        return true;
    },
    backYearBtnTapped: function(inSender, inEvent) {
        console.log("wtf");
    },
    nextYearBtnTapped: function(inSender, inEvent) {
        console.log("wtf");
    },
    backMonthBtnTapped: function(inSender, inEvent) {
        this.owner.$.Months_Arranger.previous();
    },
    nextMonthBtnTapped: function(inSender, inEvent) {
        this.owner.$.Months_Arranger.next();
    }
});

enyo.kind({ name: "Week", 
    classes: "week",
    components: [
        { name: "Days_Repeater",
            kind: "Repeater",
            count: 7,
            onSetupItem:"setupDays",
            layoutKind: "FittableColumnsLayout",
            components: [
                { name: "Day", classes: "day",
                    ontap: "dayTapped",
                    published: {
                        month: null, year: null, date: null
                    },
                    components: [
                        { name: "Day_num", classes: "day-num"},
                        { name: "Day_dot", showing: false, content: "●", classes: "day-dot"}
                    ]
                }
            ]
        }
    ],
    setupDays: function(inSender, inEvent) {
        var index = inEvent.index;
        var item = inEvent.item;
        var mainApp = inSender.owner.owner.owner.owner.owner;
        var month = inSender.owner.owner.owner.owner;
        if(month.getName() === "Feb") {
            if (((mainApp.getCurr_year() % 4 === 0) && (mainApp.getCurr_year() % 100 !== 0)) || (mainApp.getCurr_year() % 400 === 0)){
                month.max_date = 29;
            }else {
                month.max_date = 28;
            }
        }
        var start_day_index = new Date(mainApp.getCurr_year()+"-"+(parseInt(month.month_index)+1)+"-1").getDay()-1;
        if(start_day_index < 0) {
            start_day_index = 6;
        }
        
        if(month.$.Week_Repeater.weekCount === 0) {
            if (start_day_index === index) {
                item.$.Day_num.setContent(month.day += 1);
                item.$.Day.setYear(mainApp.getCurr_year());
                item.$.Day.setMonth(month.month_index);
                item.$.Day.setDate(item.$.Day_num.getContent());
                mainApp.getSchedule().forEach(function(d) {
                    if( item.$.Day.getYear() === parseInt(d.year) && item.$.Day.getDate() === parseInt(d.date) && item.$.Day.getMonth() === parseInt(d.month_index)) {
                        item.$.Day.applyStyle("font-weight", "bolder").applyStyle("text-decoration", "underline");
                    }
                });
                
            } else if (month.day > 0) {
                item.$.Day_num.setContent(month.day += 1);
                item.$.Day.setYear(mainApp.getCurr_year());
                item.$.Day.setMonth(month.month_index);
                item.$.Day.setDate(item.$.Day_num.getContent());
                mainApp.getSchedule().forEach(function(d) {
                    if( item.$.Day.getYear() === parseInt(d.year) && item.$.Day.getDate() === parseInt(d.date) && item.$.Day.getMonth() === parseInt(d.month_index)) {
                        item.$.Day.applyStyle("font-weight", "bolder").applyStyle("text-decoration", "underline");
                    }
                });
            }
        } else if(month.day < month.max_date) {
            item.$.Day_num.setContent(month.day += 1);
            item.$.Day.setYear(mainApp.getCurr_year());
            item.$.Day.setMonth(month.month_index);
            item.$.Day.setDate(item.$.Day_num.getContent());
            mainApp.getSchedule().forEach(function(d) {
                if( item.$.Day.getYear() === parseInt(d.year) && item.$.Day.getDate() === parseInt(d.date) && item.$.Day.getMonth() === parseInt(d.month_index)) {
                    item.$.Day.applyStyle("font-weight", "bolder").applyStyle("text-decoration", "underline");
                }
            });
        }
        if(index === 5 || index === 6) {
            item.$.Day.addClass("weekend");
        }
        
        return true;
    },
    dayTapped: function(inSender, inEvent) {
        var mainApp = inSender.owner.owner.owner.owner.owner;
        var item = inSender.children[inEvent.index];
        mainApp.$.Status_Input_Popup.setYear(item.$.Day.getYear());
        mainApp.$.Status_Input_Popup.setMonth_index(item.$.Day.getMonth());
        mainApp.$.Status_Input_Popup.setDate(item.$.Day.getDate());
        //mainApp.$.Months_Arranger.getPanels()[item.$.Day.getMonth()].$.Week_Repeater.set("count", mainApp.$.Schedule_Repeater.month_schedule.length, true);
        mainApp.$.Months_Arranger.getPanels()[item.$.Day.getMonth()].$.Week_Repeater.children.forEach(function(week){
            week.$.Week_Repeater_Item.$.Days_Repeater.children.forEach(function(Day_Item){
                Day_Item.$.Day.removeClass("day-selected");
            });
        });
        item.$.Day.addClass("day-selected");
        mainApp.$.Schedule_Repeater.month_schedule = [];
        mainApp.getSchedule().forEach(function(d) {
            if(parseInt(d.year) === item.$.Day.getYear() && parseInt(d.month_index) === item.$.Day.getMonth() && parseInt(d.date) === item.$.Day.getDate()) {
                mainApp.$.Schedule_Repeater.month_schedule.push(d);
            }
        });
        
        mainApp.$.Schedule_Repeater.set("count", mainApp.$.Schedule_Repeater.month_schedule.length, true);
       
        mainApp.$.Schedule_Repeater_Scroller.applyStyle("top", "340px");
        mainApp.$.Add_Status_Btn.setShowing(true);
        mainApp.$.Add_Status_Btn.addClass("add-status-btn-show");
        //mainApp.$.Status_Input_Popup.show();
        return true;
    }
});

enyo.kind({name: "Submit_Popup", 
    classes: "onyx-sample-popup submit-popup", showTransitions: true,
    kind: "onyx.Popup", centered: true, modal: true, 
    floating: true, onShow: "popupShown", 
    onHide: "popupHidden", scrim: true,
    components: [
        {kind: "onyx.PickerDecorator", components: [
                {kind: "onyx.PickerButton", content: "pick your status", style: "width: 200px"},
                {kind: "onyx.Picker", name: "PopupContent", components: [
                        {content: "Need Day Off"},
                        {content: "Need Half Day"},
                        {content: "Busy"}
                ]}
        ]},
        {tag: "br"},
        {kind: "onyx.InputDecorator", components: [
            {kind: "onyx.Input", name: "PopupUserName", placeholder: "User Name Here"}
        ]},
        {tag: "br"},{tag: "br"},
        {kind: "onyx.InputDecorator", components: [
            {kind: "onyx.TextArea", name: "PopupTextArea", placeholder: "Info", onchange:"textAreaChanged"}
        ]},
        {tag: "br"},{tag: "br"},
        {name: "Submit_Btn_Wrapper", classes: "popup-submit-btn", components: [
            {kind: "onyx.Button", content: "Submit", ontap: "submitBtnTapped", popup: "Status_Input_Popup"}
        ]},
        {name: "Close_modal_Btn_Wrapper", classes: "popup-close-btn", components: [
            {kind: "onyx.Button", content: "Close", ontap: "closePopup", popup: "Status_Input_Popup"}
        ]}		
    ],
    submitBtnTapped: function(inSender, inEvent) {
        var mainApp = this.owner;
        var params = {year: mainApp.$.Status_Input_Popup.getYear(),
            month_index: mainApp.$.Status_Input_Popup.getMonth_index(), 
            date: mainApp.$.Status_Input_Popup.getDate(),
            content: this.$.PopupContent.getSelected().getContent(), 
            username: this.$.PopupUserName.getValue(),
            extra_info: this.$.PopupTextArea.getValue()
        };
        var ajax = new enyo.Ajax({
            url: "http://localhost:3000/schedule",
            method: "POST",
            postBody: params
        });
        // send parameters the remote service using the 'go()' method
        ajax.go();
        // attach responders to the transaction object
        ajax.response(this, "processRes");
        // handle error
        ajax.error(this, "processErr");
        
        this.owner.$[inSender.popup].hide();
        this.owner.$.SuccessPopup.show();
        this.owner.$.SuccessPopup.children[0].setShowing(true);
    },
    processRes: function(inSender, inResponse) {
        var mainApp = this.owner;
        mainApp.setSchedule(inResponse);
        
        mainApp.updateSchedule(mainApp.$.Status_Input_Popup.getMonth_index(), mainApp, mainApp.$.Status_Input_Popup.getDate());
        //mainApp.$.Schedule_Repeater.set("count", mainApp.$.Schedule_Repeater.month_schedule.length, true);
        /*
        mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].$.Week_Repeater.children.forEach(function(week){
            week.$.Week_Repeater_Item.$.Days_Repeater.children.forEach(function(Day_Item){
                Day_Item.$.Day.removeClass("day-selected");
            });
        });*/
        
        //mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].render();
        mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].$.Month.children[3].weekCount = 0;
        mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].day = 0;
        mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].$.Month.children[3].build();
        
        mainApp.$.Months_Arranger.getPanels()[mainApp.$.Status_Input_Popup.getMonth_index()].$.Week_Repeater.children.forEach(function(week){
            week.$.Week_Repeater_Item.$.Days_Repeater.children.forEach(function(Day_Item){
                if(Day_Item.$.Day_num.getContent() === mainApp.$.Status_Input_Popup.getDate())
                    Day_Item.$.Day.addClass("day-selected");
            });
        });
        
        mainApp.$.SuccessPopup.children[0].setShowing(false);
        mainApp.$.SuccessPopup.children[1].setShowing(true);
    },
    processErr: function(inSender, inResponse) {
        
    },
    closePopup: function(inSender, inEvent) {
        this.owner.$[inSender.popup].hide();
    }
});

enyo.kind({ name: "Schedule_Data_Content", classes: "schedule-data-content", kind: "FittableColumns", 
    components: [
        {name: "Schedule_Data_Content_Container", fit: true,  kind: "FittableRows", the_id: null, components: [
            {name: "Schedule_Data_Content_UserName", classes: "schedule-data-content-username"},
            {name: "Schedule_Data_Content_DateInfo", classes: "schedule-data-content-dateinfo"},
            {name: "Schedule_Data_Content_Txt", classes: "schedule-data-content-txt"},
            {name: "Schedule_Data_Content_Info", classes: "schedule-data-content-info"},
            {name: "Schedule_Data_Content_DateOfRegister", classes: "schedule-data-content-dataofregister"}
        ]},
        {name: "Schedule_Data_Status_Remover", style: "float: right; cursor: pointer", ontap: "confirm", popup: "ConfirmationPopup", components: [
                {name: "Status-Remover-Btn", tag: "span", content: "", classes: "status-remover"}
        ]}
    ],
    confirm: function(inSender, inResponse) {
        this.owner.owner.owner.$[inSender.popup].the_id = this.$.Schedule_Data_Content_Container.the_id;
        this.owner.owner.owner.$[inSender.popup].show();
    }
}
);
