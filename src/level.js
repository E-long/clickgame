import big from 'big.js'
export default{
    
	_0 : { 
		level: 0,
		name: "练体",
		max:  big(10).pow(3).toFixed(),
		top: false,
		getNext: () => { return level._1; }
	},
	_1 : { 
		level: 1,
		name: "练气",
		max:  big(10).pow(4).toFixed(),
		top: false,
		getNext: () => { return level._2; }
	},
	_2 : { 
		level:2,
		name: "筑基",
		max:  big(10).pow(5).toFixed(),
		top: false,
		getNext: () => { return level._3; }
	},
	_3 : { 
		level:3,
		name: "开光",
		max:  big(10).pow(6).toFixed(),
		top: false,
		getNext: () => { return level._4; }
	},
	_4 : { 
		level: 4,
		name: "结丹",
		max:  big(10).pow(7).toFixed(),
		top: false,
		getNext: () => { return level._5; }
	},
	_5 : { 
		level: 5,
		name: "元婴",
		max:  big(10).pow(8).toFixed(),
		top: false,
		getNext: () => { return level._6; }
	},
	_6 : { 
		level: 6,
		name: "分神",
		max:  big(10).pow(9).toFixed(),
		top: false,
		getNext: () => { return level._7; }
	},
	_7 : { 
		level: 7,
		name: "化神",
		max:  big(10).pow(10).toFixed(),
		top: false,
		getNext: () => { return level._8; }
	},
	_8 : { 
		level:8,
		name: "大乘",
		max:  big(10).pow(12).toFixed(),
		top: false,
		getNext: () => { return level._9; }
	},
	_9 : { 
		level: 9,
		name: "渡劫",
		max:  big(10).pow(15).toFixed(),
		top: true,
		getNext: () => { return null; }
	}
}