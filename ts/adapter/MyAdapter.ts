"use strict";
"use sound";

import BaseAdapter = require("yunos/ui/adapter/BaseAdapter");
import View = require("yunos/ui/view/View")
import CompositeView = require("yunos/ui/view/CompositeView")
import TextView = require("yunos/ui/view/TextView")
import LayoutManager = require('yunos/ui/markup/LayoutManager')

class MyAdapter extends BaseAdapter{

    private datas:String[]

    createItem(position: number, convertView: View): View {

         // 根据 position 获得当前 item 的 data
         var itemData = this.datas[position];
         // convertView 为空则创建新的 View
         if (!convertView) {
             convertView = LayoutManager.loadSync('item_list');
         }

         const titleTv = <TextView>convertView.findViewById('title')
         titleTv.text = `我是第${position}行` + " 数据:" + itemData
         convertView.tag = "" + position
         return convertView;
    }

    setData(datas:String[]){
        this.datas = datas
        this.data = this.datas
    }
}

export = MyAdapter