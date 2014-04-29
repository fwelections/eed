
@c1: 1.5 + 0.5;
@c2: 2.5 - 0.5;
@c3: 3.0 - 0.5;
@c4: 3.5 - 0.5;
@c5: 4.0 - 0.5;
@c6: 4.5 - 0.5; 

#turnout::chloro {
	[all_Percentage<= 25] { polygon-fill: #45b0e9;}
	[all_Percentage > 25] { polygon-fill:#0090d9;}
	[all_Percentage > 35] {polygon-fill: #0c5b90; }
    polygon-comp-op:hard-light;
}
#turnout::glow {
  opacity: 0.45;
  line-join: round;
  line-color:#f4ebf7;
  [zoom=2] { line-width: 3 / 5; }
  [zoom=3] { line-width: 5 / 5; }
  [zoom=4] { line-width: 8 / 5; }
  [zoom=5] { line-width: 12 / 5; }
  [zoom=6] { line-width: 17 / 5; }
  [zoom=7] { line-width: 23 / 5; }
  [zoom=8] { line-width: 30 / 5; }
  [zoom=9] { line-width: 38 / 5; }
  [zoom>9] { line-width: 47 / 5; }
image-filters: agg-stack-blur(6,6);
}
#turnout::numbers {
    text-name:[all_Percentagec]+'%';
    text-face-name:'Futura Condensed Medium';
    text-fill:#fff;
    text-dy:-5;
  [zoom=3] { 
    [all_Percentage<=5]{ text-size:(@c1 * 3); }
    [all_Percentage>5] { text-size:(@c2 * 3); }
    [all_Percentage>10] { text-size:(@c3 * 3); }
    [all_Percentage>15] { text-size:(@c4 * 3); }
    [all_Percentage>20]{ text-size:(@c5 * 3); }
    [all_Percentage>25]{ text-size:(@c6 * 3); }
  }
  [zoom=4] { 
    [all_Percentage<=5]{ text-size:(@c1 * 4); }
    [all_Percentage>5] { text-size:(@c2 * 4); }
    [all_Percentage>10] { text-size:(@c3 * 4); }
    [all_Percentage>15] { text-size:(@c4 * 4); }
    [all_Percentage>20]{ text-size:(@c5 * 4); }
    [all_Percentage>25]{ text-size:(@c6 * 4); }
  }
  [zoom=5] { 
    [all_Percentage<=5]{ text-size:(@c1 * 5); }
    [all_Percentage>5] { text-size:(@c2 * 5); }
    [all_Percentage>10] { text-size:(@c3 * 5); }
    [all_Percentage>15] { text-size:(@c4 * 5); }
    [all_Percentage>20]{ text-size:(@c5 * 5); }
    [all_Percentage>25]{ text-size:(@c6 * 5); }
  }
  [zoom=6] { 
    [all_Percentage<=5]{ text-size:(@c1 * 6); }
    [all_Percentage>5] { text-size:(@c2 * 6); }
    [all_Percentage>10] { text-size:(@c3 * 6); }
    [all_Percentage>15] { text-size:(@c4 * 6); }
    [all_Percentage>20]{ text-size:(@c5 * 6); }
    [all_Percentage>25]{ text-size:(@c6 * 6); }
  }
  [zoom=7] { 
    [all_Percentage<=5]{ text-size:(@c1 * 7); }
    [all_Percentage>5] { text-size:(@c2 * 7); }
    [all_Percentage>10] { text-size:(@c3 * 7); }
    [all_Percentage>15] { text-size:(@c4 * 7); }
    [all_Percentage>20]{ text-size:(@c5 * 7); }
    [all_Percentage>25]{ text-size:(@c6 * 7); }
  }
  [zoom=8] { 
    [all_Percentage<=5]{ text-size:(@c1 * 8); }
    [all_Percentage>5] { text-size:(@c2 * 8); }
    [all_Percentage>10] { text-size:(@c3 * 8); }
    [all_Percentage>15] { text-size:(@c4 * 8); }
    [all_Percentage>20]{ text-size:(@c5 * 8); }
    [all_Percentage>25]{ text-size:(@c6 * 8); }
  }
  [zoom=9] { 
    [all_Percentage<=5]{ text-size:(@c1 * 9); }
    [all_Percentage>5] { text-size:(@c2 * 9); }
    [all_Percentage>10] { text-size:(@c3 * 9); }
    [all_Percentage>15] { text-size:(@c4 * 9); }
    [all_Percentage>20]{ text-size:(@c5 * 9); }
    [all_Percentage>25]{ text-size:(@c6 * 9); }
  }
  [zoom=10]{ 
    [all_Percentage<=5]{ text-size:(@c1 * 9.5); }
    [all_Percentage>5] { text-size:(@c2 * 9.5); }
    [all_Percentage>10] { text-size:(@c3 * 9.5); }
    [all_Percentage>15] { text-size:(@c4 * 9.5); }
    [all_Percentage>20]{ text-size:(@c5 * 9.5); }
    [all_Percentage>25]{ text-size:(@c6 * 9.5); }
  }
  [zoom=11]{ 
    [all_Percentage<=5]{ text-size:(@c1 * 10); }
    [all_Percentage>5] { text-size:(@c2 * 10); }
    [all_Percentage>10] { text-size:(@c3 * 10); }
    [all_Percentage>15] { text-size:(@c4 * 10); }
    [all_Percentage>20]{ text-size:(@c5 * 10); }
    [all_Percentage>25]{ text-size:(@c6 * 10); }
  }
 [zoom=12]{ 
    [all_Percentage<=5]{ text-size:(@c1 * 10.5); }
    [all_Percentage>5] { text-size:(@c2 * 10.5); }
    [all_Percentage>10]{ text-size:(@c3 * 10.5); }
    [all_Percentage>15]{ text-size:(@c4 * 10.5); }
    [all_Percentage>20]{ text-size:(@c5 * 10.5); }
    [all_Percentage>25]{ text-size:(@c6 * 10.5); }
  }
}