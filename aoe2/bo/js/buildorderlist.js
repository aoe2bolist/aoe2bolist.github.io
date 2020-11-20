function GetCivilizationImageFilePath (civ_name)
{
  return "../imgs/civs/" + civ_name + ".png";
}

function CreateBuildOrderItemTitle (title_name)
{
  var label_bo_name = document.createElement("label");
  label_bo_name.innerHTML = title_name;
  return label_bo_name;
}

function CreateBuildOrderItemAuthor (author_name)
{
  var label_bo_author = document.createElement("label");
  label_bo_author.classList.add("border_item_author");
  label_bo_author.innerHTML = author_name;
  return label_bo_author;
}

function CreateBuildOrderItemDate (bo_date)
{
  var label_bo_date = document.createElement("label");
  label_bo_date.classList.add("border_item_date");
  label_bo_date.innerHTML = bo_date;
  return label_bo_date;
}

function CreateBuildOrderItemDifficult (bo_difficult)
{
  var label_difficult = document.createElement("label");
  if (bo_difficult.indexOf("beginner") == 0)
  {
    label_difficult.classList.add("dif_beginner_label");
    label_difficult.innerHTML = "Beginner";
  }
  if (bo_difficult.indexOf("intermediate") == 0)
  {
    label_difficult.classList.add("dif_intermediate_label");
    label_difficult.innerHTML = "Intermediate";
  }
  if (bo_difficult.indexOf("advanced") == 0)
  {
    label_difficult.classList.add("dif_advanced_label");
    label_difficult.innerHTML = "Advanced";
  }
  if (bo_difficult.indexOf("tight") == 0)
  {
    label_difficult.classList.add("dif_tight_label");
    label_difficult.innerHTML = "Tight";
  }
  if (bo_difficult.indexOf("unreliable") == 0)
  {
    label_difficult.classList.add("dif_unreliable_label");
    label_difficult.innerHTML = "Unreliable";
  }
  if (bo_difficult.indexOf("outdated") == 0)
  {
    label_difficult.classList.add("dif_outdated_label");
    label_difficult.innerHTML = "Outdated";
  }
  return label_difficult;
}

function GetSecondSpaceFromSpec (first_space_index, str_data)
{
  var index_second_space = str_data.indexOf(' ', first_space_index + 1);
  if (index_second_space == -1)
    index_second_space = str_data.length;
  return index_second_space;
}

// https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function CheckSpecificCivilization (border_additional_info)
{
  var civ_index = border_additional_info.indexOf("-civ");
  if (civ_index >= 0)
  {
    // -civ XX
    //      |
    //      5
    // 'XX' is the civilization string 
    var str_from_civ = border_additional_info.substring(civ_index);
    var index_first_space = str_from_civ.indexOf(' ');
    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_civ);
    var string_civ = str_from_civ.substring(index_first_space + 1, index_second_space);

    var img_background_civ = null;
    var file_path_civ_img = GetCivilizationImageFilePath(string_civ);
    if (file_path_civ_img != null)
    {
      img_background_civ = document.createElement('img');
      img_background_civ.classList.add('background_civ');
      img_background_civ.setAttribute('src', file_path_civ_img);
    }    

    string_civ = string_civ.replaceAt(0,string_civ.charAt(0).toUpperCase());
    var label_civ = document.createElement("label");
    label_civ.classList.add("civ_label");
    label_civ.innerHTML = string_civ;
    
    return { label_civ, img_background_civ };
  }
  return null;
}

function CheckAndCreateFeudalAgePopulationFigure (border_additional_info)
{
  var feudalagepop_index = border_additional_info.indexOf("-feudalagepop");
  if (feudalagepop_index >= 0)
  {
    // -feudalagepop XX
    //               |
    //               14
    // 'XX' is the string to be shown as figure caption
    var str_from_feudal_age = border_additional_info.substring(feudalagepop_index);
    var index_first_space = str_from_feudal_age.indexOf(' ');
    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_feudal_age);
    var string_feudal_age_pop = str_from_feudal_age.substring(index_first_space + 1, index_second_space);

    var bo_feudal_figure = document.createElement('figure');
    bo_feudal_figure.classList.add('feudal_age');
    bo_feudal_figure.setAttribute('background-color', 'black');

    var bo_feudal_img = document.createElement("img");
    bo_feudal_img.classList.add('tc_age');
    bo_feudal_img.setAttribute('src', "../imgs/age/feudal.png");
    bo_feudal_figure.appendChild(bo_feudal_img);
    
    var bo_feudal_caption = document.createElement("figcaption");
    bo_feudal_caption.classList.add("tc_age");
    bo_feudal_caption.innerHTML = string_feudal_age_pop;
    bo_feudal_figure.appendChild(bo_feudal_caption);
  
    return bo_feudal_figure;
  }
  return null;
}

function CheckAndCreateCastleAgePopulationFigure (border_additional_info)
{
  var castleagepop_index = border_additional_info.indexOf("-castleagepop");
  if (castleagepop_index >= 0)
  {
    // -castleagepop XX
    //               |
    //               14
    // 'XX' is the string to be shown as figure caption
    var str_from_castle_age = border_additional_info.substring(castleagepop_index);
    var index_first_space = str_from_castle_age.indexOf(' ');
    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_castle_age);
    var string_castle_age_pop = str_from_castle_age.substring(index_first_space + 1, index_second_space);

    var bo_castle_figure = document.createElement('figure');
    bo_castle_figure.classList.add('castle_age');
    bo_castle_figure.setAttribute('background-color', 'black');

    var bo_castle_img = document.createElement("img");
    bo_castle_img.classList.add('tc_age');
    bo_castle_img.setAttribute('src', "../imgs/age/castle.png");
    bo_castle_figure.appendChild(bo_castle_img);
    
    var bo_castle_caption = document.createElement("figcaption");
    bo_castle_caption.classList.add("tc_age");
    bo_castle_caption.innerHTML = string_castle_age_pop;
    bo_castle_figure.appendChild(bo_castle_caption);
  
    return bo_castle_figure;
  }
  return null;
}

function CheckAndCreateImperialAgePopulationFigure (border_additional_info)
{
  var imperialagepop_index = border_additional_info.indexOf("-imperialagepop");
  if (imperialagepop_index >= 0)
  {
    // -imperialagepop XX
    //                 |
    //                 16
    // 'XX' is the string to be shown as figure caption
    var str_from_imperial_age = border_additional_info.substring(imperialagepop_index);
    var index_first_space = str_from_imperial_age.indexOf(' ');
    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_imperial_age);
    var string_imperial_age_pop = str_from_imperial_age.substring(index_first_space + 1, index_second_space);

    var bo_imperial_figure = document.createElement('figure');
    bo_imperial_figure.classList.add('imperial_age');
    bo_imperial_figure.setAttribute('background-color', 'black');

    var bo_imperial_img = document.createElement("img");
    bo_imperial_img.classList.add('tc_age');
    bo_imperial_img.setAttribute('src', "../imgs/age/imperial.png");
    bo_imperial_figure.appendChild(bo_imperial_img);
    
    var bo_imperial_caption = document.createElement("figcaption");
    bo_imperial_caption.classList.add("tc_age");
    bo_imperial_caption.innerHTML = string_imperial_age_pop;
    bo_imperial_figure.appendChild(bo_imperial_caption);
  
    return bo_imperial_figure;
  }
  return null;
}

function CheckAndCreateUnitFigure (border_additional_info)
{
  var unitfig_index = border_additional_info.indexOf("-imgunit");
  if (unitfig_index >= 0)
  {
    // -imgunit XX
    //          |
    //          9
    // 'XX' is the string to be shown as figure caption
    var str_from_imgunit = border_additional_info.substring(unitfig_index);
    var index_first_space = str_from_imgunit.indexOf(' ');
    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_imgunit);
    var unit_image_count = str_from_imgunit.substring(index_first_space + 1, index_second_space);

    var bo_figure = null;
    for (var ith_image = 0; ith_image < unit_image_count; ith_image++)
    {
      index_first_space = index_second_space;
      index_second_space = GetSecondSpaceFromSpec(index_first_space, str_from_imgunit);
      var str_imgunit = str_from_imgunit.substring(index_first_space + 1, index_second_space);

      var bo_figure = document.createElement('figure');
      bo_figure.classList.add('unit_figure');
 
      var bo_img = document.createElement('img');
      bo_img.setAttribute('src', str_imgunit);
      bo_img.setAttribute('width', '100%');
      bo_figure.appendChild(bo_img);
    }
    return bo_figure;
  }
  return null;
}

function GenerateBuildOrderItemType1 (bo_array_of_lines, file_build_path)
{
  var l = 0;
  var border_type            = bo_array_of_lines[l++];
  var border_title           = bo_array_of_lines[l++];
  var border_author          = bo_array_of_lines[l++];
  var border_date            = bo_array_of_lines[l++];
  var border_difficult       = bo_array_of_lines[l++];
  var border_additional_info = bo_array_of_lines[l++];

  var div_border_item = document.createElement('div');
  div_border_item.classList.add('border_item_container');
  
  // add build order title
  div_border_item.appendChild(
    CreateBuildOrderItemTitle(border_title)
  );

  // add build order author
  div_border_item.appendChild(
    CreateBuildOrderItemAuthor(border_author)
  );

  // add build order date
  div_border_item.appendChild(
    CreateBuildOrderItemDate(border_date)
  );

  // add build order difficulty
  div_border_item.appendChild(
    CreateBuildOrderItemDifficult(border_difficult)
  );

  // check if the build is for a specific civilization
  // -civ
  var possible_civ_spec = CheckSpecificCivilization(border_additional_info);
  if (possible_civ_spec != null)
  {
    if (possible_civ_spec.label_civ != null) // label
      div_border_item.appendChild(possible_civ_spec.label_civ);
    if (possible_civ_spec.img_background_civ != null) // image
      div_border_item.appendChild(possible_civ_spec.img_background_civ);
  }

  var bo_div_additional_info = document.createElement('div');
  bo_div_additional_info.classList.add('pop_ages_and_specs');

  // add feudal age population
  // -feudalagepop
  var possible_feudal_age_pop_figure = CheckAndCreateFeudalAgePopulationFigure(border_additional_info);
  if (possible_feudal_age_pop_figure != null)
    bo_div_additional_info.appendChild(possible_feudal_age_pop_figure);
  
  // add castle age population
  // -castleagepop
  var possible_castle_age_pop_figure = CheckAndCreateCastleAgePopulationFigure(border_additional_info);
  if (possible_castle_age_pop_figure != null)
    bo_div_additional_info.appendChild(possible_castle_age_pop_figure);

  // add castle age population
  // -imperialagepop
  var possible_imperial_age_pop_figure = CheckAndCreateImperialAgePopulationFigure(border_additional_info);
  if (possible_imperial_age_pop_figure != null)
    bo_div_additional_info.appendChild(possible_imperial_age_pop_figure);


  // add unit figure if any
  // -imgunit
  var possible_unit_figure = CheckAndCreateUnitFigure(border_additional_info);
  if (possible_unit_figure != null)
    div_border_item.appendChild(possible_unit_figure);

  // span to link the to html build order page
  var a_href = document.createElement("a");
  a_href.setAttribute('href',  file_build_path + ".html");
  
  var span_href = document.createElement("span");
  span_href.classList.add('border_item_link');
  a_href.appendChild(span_href);
  
  div_border_item.appendChild(bo_div_additional_info);
  div_border_item.appendChild(a_href);

  return div_border_item;
}

const ReadAndGenerateBuildOrderItem = async (div_border_item_list, file_build_path, ith_border) => {
  var ar_file_path_build_order = file_build_path.split(' ');
  var div_border_item = null;

  // txt build order file
  if (ar_file_path_build_order[0].indexOf('txt') == 0)
  {
    const txt_response = await fetch("data/txt/" + ar_file_path_build_order[1] + ".txt");
    const txt_build_order = await txt_response.text();
    
    var bo_array_of_lines = txt_build_order.split('\n');
    var border_type = parseInt(bo_array_of_lines[0]);

    if (border_type == 1)
      div_border_item = GenerateBuildOrderItemType1(bo_array_of_lines, ar_file_path_build_order[1]);
  }
  
  if (div_border_item != null)
  {
    // Add a margin if is the second or third item in the same row
    div_border_item_list.appendChild(div_border_item);
  }
}

function AddBuildOrderListTitle (border_list_title_name)
{
  var bo_list_h3 = document.createElement('h3');
  bo_list_h3.setAttribute('align', 'center');
  bo_list_h3.innerHTML = border_list_title_name;
  return bo_list_h3;
}

const ReadBuildOrderItemLists = async (file_bo_link_list) => {
  var div_border_item_lists = document.getElementById('border_lists');

  const file_response = await fetch(file_bo_link_list);
  const txt_bo_link_list = await file_response.text();
  
  var bo_link_list_array_of_lines = txt_bo_link_list.split('\n');
  
  var l = 0;
  var number_of_bo_lists = parseInt(bo_link_list_array_of_lines[l++]);
  for (var bo_list = 0; bo_list < number_of_bo_lists; bo_list++)
  {
    var border_list_title_name = bo_link_list_array_of_lines[l++];
    div_border_item_lists.appendChild(AddBuildOrderListTitle(border_list_title_name));
 
    var number_of_borders = parseInt(bo_link_list_array_of_lines[l++]);
    var ith_border = 0; // to define when line breaks at ith_border = 3
    var div_border_block_container = null;
    for (var ith_bo_order_link = 0; ith_bo_order_link < number_of_borders; ith_bo_order_link++)
    {
      if (ith_border == 0)
      {
        div_border_block_container = document.createElement('div');
        div_border_block_container.classList.add('border_block_container');
        div_border_item_lists.appendChild(div_border_block_container);
      }

      var file_border_path = bo_link_list_array_of_lines[l++];
      ReadAndGenerateBuildOrderItem(div_border_block_container, file_border_path, ith_border);

      ith_border = ith_border + 1
      if (ith_border == 3)
      {
        var br_bo = document.createElement('br');
        br_bo.classList.add('br_border');
        
        div_border_item_lists.appendChild(br_bo);
        ith_border = 0;
      }
    } 
  }
}

function GenerateBuildOrderItemLists (border_list_file_path)
{
  ReadBuildOrderItemLists(border_list_file_path);
}