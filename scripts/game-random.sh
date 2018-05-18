#!/bin/bash
arr=(你今天參加的婚禮新郎新娘的名字是\
     仲恆在哪裡和昂珍告白\
     仲恆和昂珍在哪裡認識\
     仲恆在哪裡和昂珍求婚\
     仲恆的車號中的數字是)

for ((i=0; i<${#arr[@]}; i++)); do
  clear
  echo "Q$((i+1)): ${arr[$i]}"

  read
  # do shuffle
  for j in {1..100} ; do
      echo -n "Shuffling.."`gshuf -n1 1.txt`$'\r'
  done
  LUCKY=$(gshuf -n1 1.txt)

  echo -n "The Lucky number is "
  echo -n `echo $LUCKY | cut -c1-2`
  echo -n `echo $LUCKY | tr 1234567890 \!@#\$%^\&*\(\) | cut -c3-6`
  echo -n $LUCKY | cut -c7-20

  read -n1 confirm
  if [ "$confirm" == "r" ]; then
    i=$((i-1))
  fi
done
