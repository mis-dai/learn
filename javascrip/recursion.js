/**
 * 递归遍历多层
 */


var data = {
    msg: '1',
    child: [{
        msg: '2',
        child: [{
            msg: '3',
            child: [{
                msg: '4',
                child: [{
                    msg: '5',
                    child: [{
                        msg: '6',
                        child: [{
                            msg: '7',
                            child: []
                        }]
                    }]
                }]
            }]
        }]
    }],
    
};
/**
 * 
 */
var data2 = [
    {
        name: "所有物品",
        children: [
            {
                name: "水果",
                children: [{name: "苹果", children: [{name: '青苹果'}, {name: '红苹果'}]}]
            },
            {
                name: '主食',
                children: [
                    {name: "米饭", children: [{name: '北方米饭'}, {name: '南方米饭'}]}
                ]
            },
            {
                name: '生活用品',
                children: [
                    {name: "电脑类", children: [{name: '联想电脑'}, {name: '苹果电脑'}]},
                    {name: "工具类", children: [{name: "锄头"}, {name: "锤子"}]},
                    {name: "生活用品", children: [{name: "洗发水"}, {name: "沐浴露"}]}
                ]
            }
     ]
   }]
/**
 * 
 */
   let menuTreeList = [
    {
          "id": "cfda8029dfb311e7b555201a068c6482",
          "name": "系统管理",
          "menuType": 0,
          "children": [
              {
                  "id": "3873ccc2dfda11e7b555201a068c6483",
                  "name": "菜单管理",
                  "menuType": 2,
                  "children": [
                      {
                          "id": "18bf8d5df09511e78a57201a068c6484",
                          "name": "新增",
                          "menuType": 1
                      },
                      {
                          "id": "18bf8d5df09511e78a57201a068c6485",
                          "name": "修改",
                          "menuType": 1
                      }
                  ]
              }
         ]
    },
    {
          "id": "cfda8029dfb311e7b555201a068c6486",
          "name": "设备管理",
          "menuType": 0,
          "children": [
               {
                   "id": "18bf8d5df09511e78a57201a068c6487",
                   "name": "新增",
                   "menuType": 1
               },
               {
                   "id": "18bf8d5df09511e78a57201a068c6488",
                   "name": "修改",
                   "menuType": 1
               }
         ]
    }
]

/**
 * 
 * @param {*} list 
 */
const getStr = function(list){
    var str = ''
    list.forEach(function(row){
        if(row.children){
            getStr(row.children)
        }else {
            console.log(str += row.name + ";")
        }
    })
}
/**
 * 
 * @param {*} list 
 */
    const recursion =  function (list) {
        for(let item in list) {
            if(typeof(list[item]) == 'object') {
                return recursion(list[item])
            } else {
                console.log(item + "=" + list[item])
            }
        }
    }
/**
 * 
 * @param {*} arr 
 */
    const check = (arr) => {
        var arrList = []
        arr.map((item,i) => {
             if(item.menuType == 1) {
                arrList.push(
                    {
                        "id": item.id,
                        "name": item.name,
                        "menuType": item.menuType
                    }
                )
             } else if (item.children.length>0){
                 return check(item.children)
             }
        })
        console.info(...arrList)
        return arrList
    }

    /**
     * 
     * @param {*} list 
     */

    const check2 = (list) => {
        for(let item in list) {
            if(typeof list[item] == 'object') {
                return check2(list[item])
            } else {
                console.log(item + "=" + list[item])
            }
        }
    }

    /**
     * 
     * @param {*} list 
     */
    const check3 =(list) => {
        list.map((item) => {
            if(typeof item.children == 'object') {
                return check3(item.children)
            } else {
                console.log('name:'+item.name)
            }
        })
    }




// recursion(data)

// getStr(data2)

check(menuTreeList)

// check2(data)

// check3(data2)
