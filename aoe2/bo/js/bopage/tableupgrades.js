// Wood upgrades
var s_src_img_building_lumber_camp     = "../../imgs/buildings/lumber_camp.png"
var s_src_img_icon_double_bit_axe      = "../../imgs/upgrades/double_bit_axe.png";
var s_src_img_icon_bow_saw             = "../../imgs/upgrades/bow_saw.png";
// Food upgrades
var s_src_img_building_mill            = "../../imgs/buildings/mill.png";
var s_src_img_icon_horse_collar        = "../../imgs/upgrades/horse_collar.png";
var s_src_img_icon_heavy_plow          = "../../imgs/upgrades/heavy_plow.png";
// Mining upgrades
var s_src_img_building_mining_camp     = "../../imgs/buildings/mining_camp.png";
// Gold upgrades
var s_src_img_icon_gold_mining         = "../../imgs/upgrades/gold_mining.png";
var s_src_img_icon_gold_shaft_mining   = "../../imgs/upgrades/gold_shaft_mining.png";
// Stone upgrades
// Town Center upgrades
var s_src_img_building_town_center     = "../../imgs/buildings/town_center.png"; 
var s_src_img_icon_loom                = "../../imgs/upgrades/loom.png";
var s_src_img_icon_wheelbarrow         = "../../imgs/upgrades/wheelbarrow.png"; 
var s_src_img_icon_hand_cart           = "../../imgs/upgrades/hand_cart.png"; 
// Barracks upgrades
var s_src_img_building_barracks        = "../../imgs/buildings/barracks.png"; 
var s_src_img_icon_man_at_arms         = "../../imgs/upgrades/man_at_arms.png"; 
// Archery Range upgrades
var s_src_img_building_archery_range   = "../../imgs/buildings/archery_range.png"; 
var s_src_img_icon_crossbowman         = "../../imgs/upgrades/crossbowman.png"; 
// Blacksmith upgrades
var s_src_img_building_blacksmith      = "../../imgs/buildings/blacksmith.png"; 
var s_src_img_icon_fletching           = "../../imgs/upgrades/fletching.png"; 
var s_src_img_icon_bodkin_arrow        = "../../imgs/upgrades/bodkin_arrow.png"; 
var s_src_img_icon_padded_archer_armor = "../../imgs/upgrades/padded_archer_armor.png"; 
// University upgrades
var s_src_img_building_university      = "../../imgs/buildings/university.png"; 
var s_src_img_icon_ballistics          = "../../imgs/upgrades/ballistics.png"; 

function GetSecondSpaceFromSpec (first_space_index, str_data)
{
  var index_second_space = str_data.indexOf(' ', first_space_index + 1);
  if (index_second_space == -1)
    index_second_space = str_data.length;
  return index_second_space;
}

function AddUpgradeItem (bo_div, read_input_upgrade_line)
{
  var index_first_space = read_input_upgrade_line.indexOf(' ');
  var index_second_space = GetSecondSpaceFromSpec(index_first_space, read_input_upgrade_line);
  
  var str_upgrade_type_name = read_input_upgrade_line.substring(0, index_first_space);
  var str_upgrade_age = read_input_upgrade_line.substring(index_first_space + 1, index_second_space);
  var str_upgrade_line = read_input_upgrade_line.substring(index_second_space + 1);

  var ret_upgrade_item = [
    upgrade_class = null,
    upgrade_name  = null,
    img_building  = null,
    img_icon      = null,
    comment       = null,
  ];

  if (str_upgrade_type_name.indexOf("-EcoUp") == 0)
  {
    index_first_space = str_upgrade_line.indexOf(' ');
    var str_ecoup_type = str_upgrade_line.substring(0, index_first_space);
    
    index_second_space = GetSecondSpaceFromSpec(index_first_space, str_upgrade_line);
    var str_ecoup_number = str_upgrade_line.substring(index_first_space + 1, index_second_space);

    index_first_space = index_second_space;
    index_second_space = GetSecondSpaceFromSpec(index_first_space, str_upgrade_line);
    var str_ecoup_comment = str_upgrade_line.substring(index_first_space + 1);
    
    ret_upgrade_item.comment = str_ecoup_comment

    if (str_ecoup_type.indexOf("wood") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_ecoup_wood";
      ret_upgrade_item.img_building  = s_src_img_building_lumber_camp;
  
      var upgrade_number = parseInt(str_ecoup_number);
      if (upgrade_number == 1)
      {
        ret_upgrade_item.upgrade_name = "Double-Bit Axe";
        ret_upgrade_item.img_icon     = s_src_img_icon_double_bit_axe;
      }
      else if (upgrade_number == 2)
      {
        ret_upgrade_item.upgrade_name = "Bow Saw";
        ret_upgrade_item.img_icon     = s_src_img_icon_bow_saw;
      }
      else if (upgrade_number == 3)
      {
        ret_upgrade_item.upgrade_name = "Two-Man Saw";
        ret_upgrade_item.img_icon     = null;
      }
    }
    else if (str_ecoup_type.indexOf("food") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_ecoup_food";
      ret_upgrade_item.img_building  = s_src_img_building_mill;
  
      var upgrade_number = parseInt(str_ecoup_number);
      if (upgrade_number == 1)
      {
        ret_upgrade_item.upgrade_name = "Horse Collar";
        ret_upgrade_item.img_icon     = s_src_img_icon_horse_collar;
      }
      else if (upgrade_number == 2)
      {
        ret_upgrade_item.upgrade_name = "Heavy Plow";
        ret_upgrade_item.img_icon     = s_src_img_icon_heavy_plow;
      }
      else if (upgrade_number == 3)
      {
        ret_upgrade_item.upgrade_name = "Crop Rotation";
        ret_upgrade_item.img_icon     = null;
      }
    }
    else if (str_ecoup_type.indexOf("gold") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_ecoup_gold";
      ret_upgrade_item.img_building  = s_src_img_building_mining_camp;
  
      var upgrade_number = parseInt(str_ecoup_number);
      if (upgrade_number == 1)
      {
        ret_upgrade_item.upgrade_name = "Gold Mining";
        ret_upgrade_item.img_icon     = s_src_img_icon_gold_mining;
      }
      else if (upgrade_number == 2)
      {
        ret_upgrade_item.upgrade_name = "Gold Shaft Mining";
        ret_upgrade_item.img_icon     = s_src_img_icon_gold_shaft_mining;
      }
    }
    else if (str_ecoup_type.indexOf("stone") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_ecoup_stone";
      ret_upgrade_item.img_building  = s_src_img_building_mining_camp;
  
      var upgrade_number = parseInt(str_ecoup_number);
      if (upgrade_number == 1)
      {
        ret_upgrade_item.upgrade_name = "Stone Mining";
        ret_upgrade_item.img_icon     = null;
      }
      else if (upgrade_number == 2)
      {
        ret_upgrade_item.upgrade_name = "Stone Shaft Mining";
        ret_upgrade_item.img_icon     = null;
      }
    }
  }
  else if (str_upgrade_type_name.indexOf("-TcUp") == 0)
  {
    index_first_space = str_upgrade_line.indexOf(' ');
    var str_tcup_name = str_upgrade_line.substring(0, index_first_space);
    var str_tcup_comm = str_upgrade_line.substring(index_first_space + 1);

    ret_upgrade_item.comment       = str_tcup_comm; 
    ret_upgrade_item.img_building  = s_src_img_building_town_center; 

    if (str_tcup_name.indexOf("loom") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_tcup_1"; 
      ret_upgrade_item.upgrade_name  = "Loom";
      ret_upgrade_item.img_icon      = s_src_img_icon_loom; 
    }
    if (str_tcup_name.indexOf("wheelbarrow") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_tcup_2"; 
      ret_upgrade_item.upgrade_name  = "Wheelbarrow";
      ret_upgrade_item.img_icon      = s_src_img_icon_wheelbarrow; 
    }
    if (str_tcup_name.indexOf("handcart") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_tcup_2"; 
      ret_upgrade_item.upgrade_name  = "Hand Cart";
      ret_upgrade_item.img_icon      = s_src_img_icon_hand_cart; 
    }
  }
  else if (str_upgrade_type_name.indexOf("-ArmUp") == 0)
  {
    index_first_space = str_upgrade_line.indexOf(' ');
    var str_armup_build = str_upgrade_line.substring(0, index_first_space);

    var index_second_space = GetSecondSpaceFromSpec(index_first_space, str_upgrade_line);
    var str_armup_name = str_upgrade_line.substring(index_first_space + 1, index_second_space);
    var str_armup_comm = str_upgrade_line.substring(index_second_space + 1);
    
    ret_upgrade_item.comment       = str_armup_comm; 

    if(str_armup_build.indexOf("barracks") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_armup_barracks"; 
      ret_upgrade_item.img_building  = s_src_img_building_barracks; 
      if (str_armup_name.indexOf("manatarms") == 0)
      {
        ret_upgrade_item.upgrade_name  = "Man-at-Arms";
        ret_upgrade_item.img_icon      = s_src_img_icon_man_at_arms; 
      }
    }
    else if(str_armup_build.indexOf("archeryrange") == 0)
    {
      ret_upgrade_item.upgrade_class = "b_armup_archery_range"; 
      ret_upgrade_item.img_building  = s_src_img_building_archery_range; 
      if (str_armup_name.indexOf("crossbowman") == 0)
      {
        ret_upgrade_item.upgrade_name  = "Crossbowman";
        ret_upgrade_item.img_icon      = s_src_img_icon_crossbowman; 
      }
    }
  }
  else if (str_upgrade_type_name.indexOf("-BsmUp") == 0)
  {
    index_first_space = str_upgrade_line.indexOf(' ');
    var str_bsmup_name = str_upgrade_line.substring(0, index_first_space);
    var str_bsmup_comm = str_upgrade_line.substring(index_first_space + 1);

    ret_upgrade_item.upgrade_class = "b_bsm_up"; 
    ret_upgrade_item.img_building  = s_src_img_building_blacksmith; 
    ret_upgrade_item.comment       = str_bsmup_comm; 

    if (str_bsmup_name.indexOf("fletching") == 0)
    {
      ret_upgrade_item.upgrade_name  = "Fletching";
      ret_upgrade_item.img_icon      = s_src_img_icon_fletching; 
    }
    if (str_bsmup_name.indexOf("bodkinarrow") == 0)
    {
      ret_upgrade_item.upgrade_name  = "Bodkin Arrow";
      ret_upgrade_item.img_icon      = s_src_img_icon_bodkin_arrow; 
    }
    if (str_bsmup_name.indexOf("paddedarcherarmor") == 0)
    {
      ret_upgrade_item.upgrade_name  = "Padded Archer Armor";
      ret_upgrade_item.img_icon      = s_src_img_icon_padded_archer_armor; 
    }
  }
  else if (str_upgrade_type_name.indexOf("-UnvUp") == 0)
  {
    index_first_space = str_upgrade_line.indexOf(' ');
    var str_unvup_name = str_upgrade_line.substring(0, index_first_space);
    var str_unvup_comm = str_upgrade_line.substring(index_first_space + 1);
    
    ret_upgrade_item.upgrade_class = "b_unv_up"; 
    ret_upgrade_item.img_building  = s_src_img_building_university; 
    ret_upgrade_item.comment       = str_unvup_comm; 

    if (str_unvup_name.indexOf("ballistics") == 0)
    {
      ret_upgrade_item.upgrade_name  = "Ballistics";
      ret_upgrade_item.img_icon      = s_src_img_icon_ballistics; 
    }
  }

  if (ret_upgrade_item.upgrade_class != null)
  {
    return { b_title_class_name:  ret_upgrade_item.upgrade_class,
             name:                ret_upgrade_item.upgrade_name, 
             building_image_name: ret_upgrade_item.img_building,
             upgrade_icon_name:   ret_upgrade_item.img_icon,
             comment:             ret_upgrade_item.comment,
    };
  }
  return null
}