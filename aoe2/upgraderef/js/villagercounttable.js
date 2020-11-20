function AddGoldCell (tr, val) {
  var td = document.createElement('td');
  td.classList.add("a_gold")
  td.innerHTML = val;
  tr.appendChild(td)
}

function AddFoodCell (tr, val) {
  var td = document.createElement('td');
  td.classList.add("a_food")
  td.innerHTML = val;
  tr.appendChild(td)
}

function AddWoodCell (tr, val) {
  var td = document.createElement('td');
  td.classList.add("a_wood")
  td.innerHTML = val;
  tr.appendChild(td)
}

function AddUnitCell (tr, val) {
  var td = document.createElement('td');
  td.innerHTML = val;
  tr.appendChild(td)
}

function AddNextRow (tbl, unit_name, wood_vils, food_vils, gold_vils) {
  var tr = document.createElement('tr');

  AddUnitCell(tr, unit_name)
  AddWoodCell(tr, wood_vils);
  AddFoodCell(tr, food_vils);
  AddGoldCell(tr, gold_vils);

  tbl.appendChild(tr)
}

function AddRowTableHeader (vc_table)
{
  var table_header = document.createElement('thead');

  var tr = document.createElement('tr');

  var th_unit = document.createElement('th');
  th_unit.innerHTML = "Unit line";
  tr.appendChild(th_unit);

  // Wood image column
  var th_wood = document.createElement('th');
  var img_th_wood = document.createElement('img');
  img_th_wood.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/8/84/Aoe2de_wood.png/revision/latest?cb=20200417075938');
  img_th_wood.setAttribute('height', '32px');
  img_th_wood.setAttribute('alt', 'Wood');
  th_wood.appendChild(img_th_wood);
  tr.appendChild(th_wood);

  // Food image column
  var th_food = document.createElement('th');
  var img_th_food = document.createElement('img');
  img_th_food.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/5/5f/Aoe2de_food.png/revision/latest?cb=20200417075725');
  img_th_food.setAttribute('height', '32px');
  img_th_food.setAttribute('alt', 'Food');
  th_food.appendChild(img_th_food);
  tr.appendChild(th_food);

  // Gold image column
  var th_gold = document.createElement('th');
  var img_th_gold = document.createElement('img');
  img_th_gold.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/4/49/Aoe2de_gold.png/revision/latest?cb=20200417080000');
  img_th_gold.setAttribute('height', '32px');
  img_th_gold.setAttribute('alt', 'Gold');
  th_gold.appendChild(img_th_gold);
  tr.appendChild(th_gold);

  // Add row header
  table_header.appendChild(tr);
  
  vc_table.appendChild(table_header);
}

function SetTableVillUnitCount ()
{
  var div = document.getElementById('vc_div');
  div.setAttribute('align', 'center');
    
  var vc_table = document.createElement('table');
  vc_table.setAttribute('border', '1');
  vc_table.classList.add('buid_order_txt');

  AddRowTableHeader(vc_table);  
  AddNextRow(vc_table, "Militia Line", 0, 9.4, 3.2);
  AddNextRow(vc_table, "Spearman Line", 4.1, 6.2, 0);
  AddNextRow(vc_table, "Eagle Warrior", 0, 2.6, 5.1);
  AddNextRow(vc_table, "Elite Eagle Warrior", 0, 4.8, 9.9);
  AddNextRow(vc_table, "Archer Line", 2.6, 0, 4.15);
  AddNextRow(vc_table, "Skirmisher Line", 5.8, 4.4, 0);
  AddNextRow(vc_table, "Cav Archer Line", 4.3, 0, 6.6);
  AddNextRow(vc_table, "Hand Cannoneer", 0, 5.2, 4.7);
  AddNextRow(vc_table, "Scout Line", 0, 10.5, 0);
  AddNextRow(vc_table, "Knight Line", 0, 7.9, 8.1);
  AddNextRow(vc_table, "Camel Line", 0, 9.7, 8.7);
  AddNextRow(vc_table, "Monk", 0, 0, 6.4);
  AddNextRow(vc_table, "Plummed Archer", 8.7, 0, 7.6);
  AddNextRow(vc_table, "Plummed Archer (Imp)", 7.5, 0, 6.6);
  AddNextRow(vc_table, "Longbowman", 6.9, 0, 6.9);
  AddNextRow(vc_table, "Janissary", 0, 13.7, 10.4);
  AddNextRow(vc_table, "Mangudai", 7.8, 0, 8);
  AddNextRow(vc_table, "Conquistador", 0, 9.9, 9.5);
  AddNextRow(vc_table, "Huskarl", 0, 12.5, 2);
  AddNextRow(vc_table, "War Elephant", 0, 25.1, 7.7);
  AddNextRow(vc_table, "Mameluke", 0, 9.4, 11.9);
  AddNextRow(vc_table, "Teutonic Knight", 0, 28, 10);
  AddNextRow(vc_table, "Throwing Axeman", 0, 13.2, 4.9);
  AddNextRow(vc_table, "Jaguar Warrior", 0, 13.8, 5.7);
  AddNextRow(vc_table, "Cataphract", 0, 13.7, 12);
  AddNextRow(vc_table, "Woad Raider", 0, 25.4, 8);
  AddNextRow(vc_table, "Chu Ko Nu", 7.9, 0, 6.1);
  AddNextRow(vc_table, "Tarkan", 0, 15.8, 13);
  AddNextRow(vc_table, "Samurai", 0, 26.4, 10.8);
  AddNextRow(vc_table, "War Wagon", 17.5, 0, 7.6);
  AddNextRow(vc_table, "Beserk", 0, 15.6, 4.9);
  AddNextRow(vc_table, "Galley (Feudal)", 4.5, 0, 1.3);
  AddNextRow(vc_table, "Galley (Castle)", 7.6, 0, 2.2);
  AddNextRow(vc_table, "Villagers", 0, 6.4, 0);

  div.appendChild(vc_table);

  div.appendChild(document.createElement('br'));

  var wood_table = document.createElement('table');
  wood_table.setAttribute('border', '1');
  wood_table.classList.add('buid_order_txt');

  var table_header = document.createElement('thead');
  var tr = document.createElement('tr');
  
  var th_farm_age = document.createElement('th');
  th_farm_age.innerHTML = "";
  tr.appendChild(th_farm_age);

  var th_wood_cutters = document.createElement('th');
  th_wood_cutters.innerHTML = "Wood Cutters for 10 farms";
  tr.appendChild(th_wood_cutters);

  table_header.appendChild(tr);
  wood_table.appendChild(table_header);

  var tr_dark_age = document.createElement('tr');
  AddUnitCell(tr_dark_age, "Dark Age");
  AddUnitCell(tr_dark_age, "4.3");
  wood_table.appendChild(tr_dark_age);

  var tr_feudal_age = document.createElement('tr');
  AddUnitCell(tr_feudal_age, "Feudal Age");
  AddUnitCell(tr_feudal_age, "3");
  wood_table.appendChild(tr_feudal_age);

  var tr_castle_age = document.createElement('tr');
  AddUnitCell(tr_castle_age, "Castle Age");
  AddUnitCell(tr_castle_age, "2");
  wood_table.appendChild(tr_castle_age);

  var tr_imperial_age = document.createElement('tr');
  AddUnitCell(tr_imperial_age, "Imperial Age");
  AddUnitCell(tr_imperial_age, "1.4");
  wood_table.appendChild(tr_imperial_age);


  div.appendChild(wood_table);
}