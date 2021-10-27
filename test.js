var hrup = {
    'Work Order Related': 'TRUE',
    'Non-Work Order Related': 'TRUE',
    'Display':'TRUE',
    'Default':{
        'NL-PGEP':'HOM>CUS',
        'NL-PGGI':'HOM>CUS',
        'NL-EL Dalfsen':'HOM>CUS',
        'NL-RMRO':'HOM>CUS',
        'NL-RMDR':'HOM>CUS',
        'NL-EPPE':'HOM>CUS',
        'NL-IAEN':'HOM>OFF',
        'NL-IAPI-DCS':'HOM>CUS',
        'NL-IAPI-QCS':'HOM>CUS',
        'NL-IAPG':'HOM>OFF',
        'NL-IAMA':'HOM>CUS',
        'NL-IAMP':'HOT>CUS',
        'NL-IATU':'OFF>CUS',
        'NL-ELDS_':'HOM>CUS',
        'NL-ELIP':'HOM>CUS'
    }
}

function getTerriteryEntry(saname)
{
    // var entries = Object.entries(hrup.Default);
    for(var k in hrup.Default)
    {
        if(  saname.includes(k) )
          return [k,hrup.Default[k]]; 
        
    }
}
console.log(getTerriteryEntry("NL-IAEN.FSL"));