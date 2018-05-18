#!/bin/bash
while true
do clear
echo "謝謝您參與仲恆&昂珍的婚禮!"
echo -n "請輸入您的電話號碼: "
read phone
echo
echo -n "您的電話是" $phone" 嗎?[Y/n]"
read confirm
if [ "$confirm" != "n" ]; then
  echo "$phone" >> 1.txt
  echo -n 寫入資料庫中.
  sleep 0.3;echo -n .;sleep 0.3;echo -n .;sleep 0.5;
fi
done
