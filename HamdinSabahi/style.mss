
@c1: 1.5 + 0.5;
@c2: 2.5 - 0.5;
@c3: 3.0 - 0.5;
@c10: 3.5 - 0.5;
@c10: 4.0 - 0.5;
@c6: 4.5 - 0.5; 

#turnout::chloro {
	[candidates_c10pct<= 10] { polygon-fill: #45b0e9;}
	[candidates_c10pct > 10] { polygon-fill:#0090d9;}
	[candidates_c10pct > 25] {polygon-fill: #0c5b90; }
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
    text-name:[candidates_c10t]+'%';
    text-face-name:'Futura Condensed Medium';
    text-fill:#fff;
    text-dy:-5;
  [zoom=3] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 3); }
    [candidates_c10pct>5] { text-size:(@c2 * 3); }
    [candidates_c10pct>10] { text-size:(@c3 * 3); }
    [candidates_c10pct>15] { text-size:(@c10 * 3); }
    [candidates_c10pct>20]{ text-size:(@c10 * 3); }
    [candidates_c10pct>25]{ text-size:(@c6 * 3); }
  }
  [zoom=4] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 4); }
    [candidates_c10pct>5] { text-size:(@c2 * 4); }
    [candidates_c10pct>10] { text-size:(@c3 * 4); }
    [candidates_c10pct>15] { text-size:(@c10 * 4); }
    [candidates_c10pct>20]{ text-size:(@c10 * 4); }
    [candidates_c10pct>25]{ text-size:(@c6 * 4); }
  }
  [zoom=5] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 5); }
    [candidates_c10pct>5] { text-size:(@c2 * 5); }
    [candidates_c10pct>10] { text-size:(@c3 * 5); }
    [candidates_c10pct>15] { text-size:(@c10 * 5); }
    [candidates_c10pct>20]{ text-size:(@c10 * 5); }
    [candidates_c10pct>25]{ text-size:(@c6 * 5); }
  }
  [zoom=6] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 6); }
    [candidates_c10pct>5] { text-size:(@c2 * 6); }
    [candidates_c10pct>10] { text-size:(@c3 * 6); }
    [candidates_c10pct>15] { text-size:(@c10 * 6); }
    [candidates_c10pct>20]{ text-size:(@c10 * 6); }
    [candidates_c10pct>25]{ text-size:(@c6 * 6); }
  }
  [zoom=7] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 7); }
    [candidates_c10pct>5] { text-size:(@c2 * 7); }
    [candidates_c10pct>10] { text-size:(@c3 * 7); }
    [candidates_c10pct>15] { text-size:(@c10 * 7); }
    [candidates_c10pct>20]{ text-size:(@c10 * 7); }
    [candidates_c10pct>25]{ text-size:(@c6 * 7); }
  }
  [zoom=8] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 8); }
    [candidates_c10pct>5] { text-size:(@c2 * 8); }
    [candidates_c10pct>10] { text-size:(@c3 * 8); }
    [candidates_c10pct>15] { text-size:(@c10 * 8); }
    [candidates_c10pct>20]{ text-size:(@c10 * 8); }
    [candidates_c10pct>25]{ text-size:(@c6 * 8); }
  }
  [zoom=9] { 
    [candidates_c10pct<=5]{ text-size:(@c1 * 9); }
    [candidates_c10pct>5] { text-size:(@c2 * 9); }
    [candidates_c10pct>10] { text-size:(@c3 * 9); }
    [candidates_c10pct>15] { text-size:(@c10 * 9); }
    [candidates_c10pct>20]{ text-size:(@c10 * 9); }
    [candidates_c10pct>25]{ text-size:(@c6 * 9); }
  }
  [zoom=10]{ 
    [candidates_c10pct<=5]{ text-size:(@c1 * 9.5); }
    [candidates_c10pct>5] { text-size:(@c2 * 9.5); }
    [candidates_c10pct>10] { text-size:(@c3 * 9.5); }
    [candidates_c10pct>15] { text-size:(@c10 * 9.5); }
    [candidates_c10pct>20]{ text-size:(@c10 * 9.5); }
    [candidates_c10pct>25]{ text-size:(@c6 * 9.5); }
  }
  [zoom=11]{ 
    [candidates_c10pct<=5]{ text-size:(@c1 * 10); }
    [candidates_c10pct>5] { text-size:(@c2 * 10); }
    [candidates_c10pct>10] { text-size:(@c3 * 10); }
    [candidates_c10pct>15] { text-size:(@c10 * 10); }
    [candidates_c10pct>20]{ text-size:(@c10 * 10); }
    [candidates_c10pct>25]{ text-size:(@c6 * 10); }
  }
 [zoom=12]{ 
    [candidates_c10pct<=5]{ text-size:(@c1 * 10.5); }
    [candidates_c10pct>5] { text-size:(@c2 * 10.5); }
    [candidates_c10pct>10]{ text-size:(@c3 * 10.5); }
    [candidates_c10pct>15]{ text-size:(@c10 * 10.5); }
    [candidates_c10pct>20]{ text-size:(@c10 * 10.5); }
    [candidates_c10pct>25]{ text-size:(@c6 * 10.5); }
  }
}