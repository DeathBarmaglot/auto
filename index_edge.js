/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_12',
                type: 'image',
                rect: ['-416px', '-1px','843px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['230px', '2px','190px','32px','auto', 'auto'],
                text: "АВТОШКОЛИ",
                font: ['Arial Black, Gadget, sans-serif', 27, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['273px', '42px','147px','59px','auto', 'auto'],
                text: "запрошують <br>на навчання",
                font: ['Arial Black, Gadget, sans-serif', 20, "rgba(0,27,144,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['273px', '61px','245px','59px','auto', 'auto'],
                text: "А1А • В1B • В• В1 • С1С<br>D1D •  DE • BE • C1E • CE",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,27,144,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['450px', '2px','430px','32px','auto', 'auto'],
                text: "Підготовка водіїв<br>категорій ",
                align: "right",
                font: ['Arial Black, Gadget, sans-serif', 24, "rgba(255,0,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['245px', '95px','396px','60px','auto', 'auto'],
                text: "095 125 99 91<br>098 107 70 77",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 23, "rgba(5,5,5,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['-52px', '2px','472px','85px','auto', 'auto'],
                opacity: 1,
                text: "м.Чернівці, <br>• вул. Головна, 200,<br>  корпус Б, оф.32<br>• вул. Сковороди, 5 <br>• Кишинівська, 2-А<br>Чернівецька обл <br>• с.Мамаївці, <br>вул.Кобилянської 2-А, ЗНЗ №2",
                align: "right",
                font: ['\'Arial Black\', Gadget, sans-serif', 13, "rgba(0,27,144,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["style", "top", '95px'],
                ["style", "font-size", '23px'],
                ["style", "line-height", '26px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(5,5,5,1.00)'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["style", "left", '447px'],
                ["style", "width", '396px']
            ],
            "${_Text3}": [
                ["style", "top", '2px'],
                ["style", "text-align", 'right'],
                ["style", "height", '85px'],
                ["style", "opacity", '1'],
                ["style", "left", '188px'],
                ["style", "font-size", '13px']
            ],
            "${_Text2}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '396px'],
                ["style", "top", '95px'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["color", "color", 'rgba(5,5,5,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '447px'],
                ["style", "font-size", '23px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '4px'],
                ["style", "height", '85px'],
                ["style", "opacity", '1'],
                ["style", "left", '188px'],
                ["style", "font-size", '13px']
            ],
            "${_Text2Copy2}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '396px'],
                ["style", "top", '95px'],
                ["style", "font-family", '\'Arial Black\', Gadget, sans-serif'],
                ["color", "color", 'rgba(5,5,5,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '447px'],
                ["style", "font-size", '23px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '42px'],
                ["style", "line-height", '22px'],
                ["style", "width", '147px'],
                ["color", "color", 'rgba(0,27,144,1.00)'],
                ["style", "height", '59px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '475px'],
                ["style", "font-size", '20px']
            ],
            "${_TextCopy}": [
                ["style", "line-height", '15px'],
                ["color", "color", 'rgba(0,27,144,1.00)'],
                ["style", "left", '475px'],
                ["style", "width", '245px'],
                ["style", "top", '61px'],
                ["style", "text-align", 'center'],
                ["style", "height", '59px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '2px'],
                ["style", "line-height", '26px'],
                ["style", "text-align", 'right'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '450px'],
                ["style", "width", '430px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '4px'],
                ["style", "height", '85px'],
                ["style", "opacity", '1'],
                ["style", "left", '188px'],
                ["style", "font-size", '13px']
            ],
            "${__12}": [
                ["style", "top", '-1px'],
                ["style", "height", '151px'],
                ["style", "clip", [0,738,151,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-316px'],
                ["style", "width", '843px']
            ],
            "${_Text}": [
                ["style", "top", '2px'],
                ["style", "width", '190px'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "left", '432px'],
                ["style", "font-size", '27px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14578,
            autoPlay: true,
            timeline: [
                { id: "eid214", tween: [ "style", "${__12}", "left", '-2px', { fromValue: '-316px'}], position: 0, duration: 369 },
                { id: "eid246", tween: [ "style", "${__12}", "left", '-316px', { fromValue: '-2px'}], position: 13881, duration: 369 },
                { id: "eid240", tween: [ "style", "${_Text3}", "left", '-63px', { fromValue: '188px'}], position: 10624, duration: 750, easing: "easeOutCubic" },
                { id: "eid244", tween: [ "style", "${_Text3}", "left", '188px', { fromValue: '-63px'}], position: 13750, duration: 828, easing: "easeOutCubic" },
                { id: "eid218", tween: [ "style", "${_TextCopy2}", "left", '273px', { fromValue: '475px'}], position: 750, duration: 620, easing: "easeOutCubic" },
                { id: "eid222", tween: [ "style", "${_TextCopy2}", "left", '475px', { fromValue: '273px'}], position: 5429, duration: 620, easing: "easeOutCubic" },
                { id: "eid229", tween: [ "style", "${_TextCopy}", "left", '203px', { fromValue: '475px'}], position: 5870, duration: 620, easing: "easeOutCubic" },
                { id: "eid230", tween: [ "style", "${_TextCopy}", "left", '475px', { fromValue: '203px'}], position: 10124, duration: 620, easing: "easeOutCubic" },
                { id: "eid226", tween: [ "style", "${_TextCopy4}", "left", '-14px', { fromValue: '450px'}], position: 5679, duration: 620, easing: "easeOutCubic" },
                { id: "eid233", tween: [ "style", "${_TextCopy4}", "left", '450px', { fromValue: '-14px'}], position: 10124, duration: 620, easing: "easeOutCubic" },
                { id: "eid219", tween: [ "style", "${_Text2Copy}", "left", '241px', { fromValue: '447px'}], position: 1306, duration: 620, easing: "easeOutCubic" },
                { id: "eid238", tween: [ "style", "${_Text2Copy}", "left", '447px', { fromValue: '241px'}], position: 10124, duration: 620, easing: "easeOutCubic" },
                { id: "eid217", tween: [ "style", "${_Text}", "left", '215px', { fromValue: '432px'}], position: 549, duration: 620, easing: "easeOutCubic" },
                { id: "eid223", tween: [ "style", "${_Text}", "left", '432px', { fromValue: '215px'}], position: 5250, duration: 620, easing: "easeOutCubic" },
                { id: "eid215", tween: [ "style", "${__12}", "clip", [0,738,151,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,738,151,0]}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2760905");
