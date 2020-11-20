// This Second version tries to automatically check when a cell must be rendered using the active template from CSS, by comparing the last values.
var g_str_wood_vils = "";
var g_str_food_vils = "";
var g_str_gold_vils = "";
var g_str_stone_vils = "";

function AddAddTipsCell (tr, c)
{
  var td = document.createElement('td');
  td.classList.add("bo_col_tips")
  td.innerHTML = c;
  tr.appendChild(td)
}

function AddBuildingVillCell(tr, building_vils)
{
  var td = document.createElement('td');
  td.classList.add("building_data");
  td.innerHTML = building_vils;
  tr.appendChild(td)
}

function AddPopCell(tr, n_vills, pop_l, pop_r) {
  var td = document.createElement('td');
  td.classList.add("pop_data");
  td.innerHTML = "<math><sub>"+n_vills+"</sub> "+pop_l+"/"+pop_r+"</math></td>";
  tr.appendChild(td)
}

function AddStoneCell (tr, val,) {
  var td = document.createElement('td');

  if (val.localeCompare("r") == 0)
  {
    td.classList.add("i_stone");
  }
  else
  {
    if (g_str_stone_vils.localeCompare(val) == 0)
      td.classList.add("i_stone");
    else
      td.classList.add("a_stone");
    g_str_stone_vils = val;
  }

  td.innerHTML = g_str_stone_vils;
  tr.appendChild(td)
}

function AddGoldCell (tr, val) {
  var td = document.createElement('td');
  
  if (val.localeCompare("r") == 0)
  {
    td.classList.add("i_gold");
  }
  else
  {
    if (g_str_gold_vils.localeCompare(val) == 0)
      td.classList.add("i_gold");
    else
      td.classList.add("a_gold");
    g_str_gold_vils = val;
  }

  td.innerHTML = g_str_gold_vils;
  tr.appendChild(td)
}

function AddFoodCell (tr, val) {
  var td = document.createElement('td');
  
  if (val.localeCompare("r") == 0)
  {
    td.classList.add("i_food");
  }
  else
  {
    if (g_str_food_vils.localeCompare(val) == 0)
      td.classList.add("i_food");
    else
      td.classList.add("a_food");
    g_str_food_vils = val;
  }
  
  td.innerHTML = g_str_food_vils;
  tr.appendChild(td)
}

function AddWoodCell (tr, val) {
  var td = document.createElement('td');

  if (val.localeCompare("r") == 0)
  {
    td.classList.add("i_wood");
  }
  else
  {
    if (g_str_wood_vils.localeCompare(val) == 0)
      td.classList.add("i_wood");
    else
      td.classList.add("a_wood");
    g_str_wood_vils = val;
  }

  td.innerHTML = g_str_wood_vils;
  tr.appendChild(td)
}

function AddCommandCell (tr, val) {
  var td = document.createElement('td');
  td.innerHTML = val;
  tr.appendChild(td)
}

function AddRowDifferentPathBuildOrder (tbl, c)
{
  var row = tbl.insertRow();
  var cell = row.insertCell();
  cell.classList.add("bo_row_new_path");
  cell.setAttribute('colspan', '8');
  cell.innerHTML = c.bold();

  g_str_wood_vils = "";
  g_str_food_vils = "";
  g_str_gold_vils = "";
  g_str_stone_vils = "";
}

function AddRowAdvancingNextAge (tbl, c)
{
  var row = tbl.insertRow();
  var cell = row.insertCell();
  cell.setAttribute('colspan', '8');
  cell.innerHTML = c.bold();
  cell.classList.add('next_age');
  
  // Other way to implement this
  //var tr = document.createElement('tr');
  //
  //var td = document.createElement('td');
  //td.setAttribute('colspan', '8');
  //
  //td.innerHTML = c.bold();
  //
  //tr.appendChild(td);
  //tbl.appendChild(tr);

  //document.write
}

function AddRowNextStep (tbl, c_command, 
                         str_wood_val, str_food_val,
                         str_gold_val, str_stone_val,
                         pop_a, pop_b, pop_c,
                         str_build_state,
                         str_add_tips) {
  var tr = document.createElement('tr');

  AddCommandCell(tr, c_command);
  AddWoodCell(tr, str_wood_val);
  AddFoodCell(tr, str_food_val);
  AddGoldCell(tr, str_gold_val);
  AddStoneCell(tr, str_stone_val);
  AddPopCell(tr, pop_a, pop_b, pop_c);
  AddBuildingVillCell(tr, str_build_state);
  AddAddTipsCell(tr, str_add_tips);

  tbl.appendChild(tr)
}

function AddRowTableHeader (bo_table)
{
  var table_header = document.createElement('thead');

  var tr = document.createElement('tr');
  tr.classList.add("bo_header");

  tr.appendChild(document.createElement('th'));

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

  // Stone image column
  var th_stone = document.createElement('th');
  var img_th_stone = document.createElement('img');
  img_th_stone.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/7/7d/Aoe2de_stone.png/revision/latest?cb=20200417075911');
  img_th_stone.setAttribute('height', '32px');
  img_th_stone.setAttribute('alt', 'Stone');
  th_stone.appendChild(img_th_stone);
  tr.appendChild(th_stone);

  // Pop image column
  var th_pop = document.createElement('th');
  var img_th_pop = document.createElement('img');
  img_th_pop.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/6/68/Towncenter_aoe2DE.png/revision/latest?cb=20200403062001');
  img_th_pop.setAttribute('height', '32px');
  img_th_pop.setAttribute('alt', 'Pop');
  th_pop.appendChild(img_th_pop);
  tr.appendChild(th_pop);

  // Building image column
  var th_build = document.createElement('th');
  var img_th_build = document.createElement('img');
  img_th_build.setAttribute('src','https://vignette.wikia.nocookie.net/ageofempires/images/0/0b/Villager_buildanim_aoe2de.gif/revision/latest?cb=20200430014825');
  img_th_build.setAttribute('height', '32px');
  img_th_build.setAttribute('alt', 'Builders');
  th_build.appendChild(img_th_build);
  tr.appendChild(th_build);

  // Add Tips column
  var th_tips = document.createElement('th');
  th_tips.appendChild(document.createTextNode('Additional Tips'))
  tr.appendChild(th_tips);

  // Add row header
  table_header.appendChild(tr);
  
  bo_table.appendChild(table_header);
}

function AddRowBuildOrderEnding (tbl)
{
  var tr = document.createElement('tr');

  var td = document.createElement('td');
  td.setAttribute('colspan', '8');
  td.classList.add('next_age')
  td.appendChild(document.createTextNode("Now Adapt and have fun"))

  tr.appendChild(td);
  tbl.appendChild(tr);
}

const ReadAndGenerateBuildOrderPage = async (file_path) => {
  const file_response = await fetch(file_path);
  const txt_build_order = await file_response.text();

  var array_of_lines = txt_build_order.split('\n');
  var i = 5;
  var border_additional_info = array_of_lines[i++];
  var border_about_paragraph = array_of_lines[i++];

  var bo_page_div = document.getElementById('bo_div');
  bo_page_div.setAttribute('align', 'center');

  // initial paragraph with an overview about the build
  var bo_p_about = document.createElement('p');
  bo_p_about.innerHTML = border_about_paragraph;
  bo_page_div.appendChild(bo_p_about);
  
  // check if there is any ecoup or tcup to build a table before the build order
  var number_of_upgrades = 0
  var list_upgrades = [];
  while(array_of_lines[i].indexOf("-EcoUp") == 0  ||
         array_of_lines[i].indexOf("-TcUp") == 0  ||
         array_of_lines[i].indexOf("-ArmUp") == 0 ||
         array_of_lines[i].indexOf("-BsmUp") == 0 ||
         array_of_lines[i].indexOf("-UnvUp") == 0)
  {
    var up_item = AddUpgradeItem(bo_page_div, array_of_lines[i]);
    if (up_item != null) 
    {
      list_upgrades.push(up_item);
      number_of_upgrades++;
    }
    i++;
  }
  if (list_upgrades.length > 0)
  {
    var row_ith = 0;
    var max_row_ith = 4;
    var upgrades_table = document.createElement("table");
    upgrades_table.classList.add("upgrades_list");
    upgrades_table.setAttribute('border', '1');
    var curr_row = null;
    for(up_ith = 0; up_ith < number_of_upgrades; up_ith++)
    {
      if (row_ith == 0)
      {
        curr_row = upgrades_table.insertRow();
      }

      var cell = curr_row.insertCell();
      cell.classList.add("upgrades_list");
      
      if (list_upgrades[up_ith].building_image_name != null)
      {
        var img_building = document.createElement("img");
        //var pti = "../../imgs/buildings/";
        //var file_bp = pti + list_upgrades[up_ith].building_image_name + ".png";
        var file_bp = list_upgrades[up_ith].building_image_name;
        img_building.setAttribute("src", file_bp);
        img_building.setAttribute("width", "16px");
        cell.appendChild(img_building);
      }

      if (list_upgrades[up_ith].upgrade_icon_name != null)
      {
        var img_building = document.createElement("img");
        //var pti = "../../imgs/upicons/";
        //var file_bp = pti + list_upgrades[up_ith].upgrade_icon_name + ".png";
        var file_bp = list_upgrades[up_ith].upgrade_icon_name;
        img_building.setAttribute("src", file_bp);
        img_building.setAttribute("width", "16px");
        cell.appendChild(img_building);
      }
      
      var p_title_upgrade_name = document.createElement("b");
      p_title_upgrade_name.classList.add(list_upgrades[up_ith].b_title_class_name);
      p_title_upgrade_name.innerHTML = " " + list_upgrades[up_ith].name;
      cell.appendChild(p_title_upgrade_name);
      
      cell.appendChild(document.createElement("br"));
      
      var p_d = document.createElement("b");
      p_d.classList.add("comment_upgrade");
      p_d.innerHTML = list_upgrades[up_ith].comment;
      cell.appendChild(p_d);
      
      if (row_ith == 0)
      {
        row_ith++;
      }
      else if (row_ith > 0)
      {
        row_ith++;
        row_ith = row_ith % max_row_ith;
      }
    }
    // already add the table with step-by-step guide
    bo_page_div.appendChild(upgrades_table);
  }

  // main table with row resource header
  var bo_main_table = document.createElement('table');
  bo_main_table.setAttribute('border', '1');
  bo_main_table.classList.add('build_order_txt');

  // already add the table with step-by-step guide
  bo_page_div.appendChild(bo_main_table);

  // add resource header table
  AddRowTableHeader(bo_main_table);    

  var bo_current_table = bo_main_table;
  for (; i < array_of_lines.length; i++)
  {
    var step_type = array_of_lines[i];
    if(step_type.indexOf('1') == 0)
    {
      var str_step = array_of_lines[++i];
      var str_vils_state = array_of_lines[++i];
      var str_vils_array = str_vils_state.split(' ');
      var str_tips = array_of_lines[++i];
      AddRowNextStep(bo_current_table, str_step,
                     str_vils_array[0], str_vils_array[1],
                     str_vils_array[2], str_vils_array[3], 
                     str_vils_array[4], str_vils_array[5], str_vils_array[6],
                     str_vils_array[7], str_tips);
    }
    else if(step_type.indexOf('2') == 0)
    {
      AddRowAdvancingNextAge(bo_current_table, array_of_lines[++i]);
    }
    else if(step_type.indexOf('3') == 0)
    {
      AddRowDifferentPathBuildOrder(bo_current_table, array_of_lines[++i]);
    }
    else if(step_type.indexOf('-1') == 0)
    {
      AddRowBuildOrderEnding(bo_current_table); 
      break;
    }
  }
  
  //// Second Table with the testes civilizations
  //////////////////////////////////////////////
  ////n_civ_table = parseInt(array_of_lines[++i]);
  ////if (n_civ_table > 0)
  ////{
  ////  var civ_th = document.createElement('thead');
  ////  var tr = document.createElement('tr');
  ////  var th_tips = document.createElement('th');
  ////  th_tips.appendChild(document.createTextNode('List of Civs: ' + n_civ_table))
  ////  th_tips.setAttribute('colspan', '2');
  ////  tr.appendChild(th_tips);
  ////  civ_th.appendChild(tr);
  ////  civ_table.appendChild(civ_th);
  ////  for(var civ = 0; civ < n_civ_table; civ++)
  ////  {
  ////    var str_civ = array_of_lines[++i];
  ////    var first_space = str_civ.indexOf(' ');
  ////    var str_civ_state = str_civ.substr(0, first_space);
  ////    
  ////    var str_sub_2 = str_civ.substr(first_space+1);
  ////    var str_civ_name = str_sub_2; 
  ////    var str_civ_comment = " ";
  ////    
  ////    var row = civ_table.insertRow();
  ////    var civ_name_cell = row.insertCell();
  ////    var cmm_cell = row.insertCell();
  //
  ////    if(parseInt(str_civ_state) > 0)
  ////    {
  ////      var second_space = str_sub_2.indexOf(' ');
  ////      str_civ_name = str_sub_2.substr(0, second_space);
  ////      str_civ_comment = str_sub_2.substr(second_space+1);
  ////      if (parseInt(str_civ_state) == 1)
  ////      {
  ////        civ_name_cell.classList.add('valid_civ');
  ////        cmm_cell.classList.add('valid_civ');
  ////      }
  ////      else if (parseInt(str_civ_state) == 2)
  ////      {
  ////        civ_name_cell.classList.add('notvalid_civ');
  ////        cmm_cell.classList.add('notvalid_civ');
  ////      }
  ////    }
  ////    else
  ////    {
  ////      civ_name_cell.classList.add('nottested_civ');
  ////      cmm_cell.classList.add('nottested_civ');
  ////    }
  //
  ////    civ_name_cell.innerHTML = str_civ_name;
  ////    cmm_cell.innerHTML = str_civ_comment.bold();
  ////  }
  ////}
  //////////////////////////////////////////////
//

  ////div.appendChild(document.createElement('br'));
  ////div.appendChild(civ_table);
}

function SetBuildOrderElements (file_path)
{
  ReadAndGenerateBuildOrderPage(file_path);
}