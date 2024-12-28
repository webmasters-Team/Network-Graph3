var nodes = [
    {
       id: "source1:sales-row1", 
       label: "<Sales>\nRow 1", 
       group: "source1"
    },
    {
       id:"source1:sales-row1-revenue",
       shape:"box",
       label:"$20,125,776.00",
       group:"source1"
    },
    {
       id:"source1:sales-row1-region",
       label:"Northwest",
       group:"source1"
    },
    {
       id:"source1:sales-row1-period",
       label:"2017Q1",
       group:"source1"
    },
    {
       id: "source2:sales-row26", 
       label: "<SalesReport>\nRow 26", 
       group: "source2"
    },
    {
       id:"source2:sales-row26-revenue",
       shape:"box",
       label:"$20,125,784.00",
       group:"source2"
    },
    {
       id:"source2:sales-row26-region",
       label:"NW",
       group:"source2"
    },
    {
       id:"source2:sales-row26-period",
       label:"2017Q1",
       group:"source2"
    },
    {
       id: "source3:sales-row68", 
       label: "<Sales>\nRow 68", 
       group: "source3"
    },

    {
       id:"source3:sales-row68-revenue",
       shape:"box",
       label:"$20,125,794.00",
       group:"source3"
    },
    {
       id:"source3:sales-row68-region",
       label:"Northwest",
       group:"source3"
    },
    {
       id:"source3:sales-row68-period",
       label:"2017Q1",
       group:"source3"
    },
    {
       id:"canon:Sales_Report5",
       label:"<Sales_Report>\nSales Report 5",
       group:"canon"
    },
    {
       id:"canon:Sales_Report5-revenue",
       shape:"box",
       label:"$20,125,785.00",
       group:"canon"
    },
    {
       id:"canon:Sales_Report5-region",
       label:"Northwest",
       group:"canon"
    },
    {
       id:"canon:Sales_Report5-period",
       label:"2017Q1",
       group:"canon"
    }
  ];
  var edges = [
    {
       from: "source1:sales-row1", 
        to: "source1:sales-row1-revenue",
        label:"revenue",
        arrows:"to"
    },
    {
       from: "source1:sales-row1", 
        to: "source1:sales-row1-region",
        label:"region",
        arrows:"to"
    },
    {
       from: "source1:sales-row1", 
        to: "source1:sales-row1-period",
        label:"period",
        arrows:"to"
    },
    {
       from: "source2:sales-row26", 
        to: "source2:sales-row26-revenue",
        label:"netRevenue",
        arrows:"to"
    },
    {
       from: "source2:sales-row26", 
        to: "source2:sales-row26-region",
        label:"salesRegion",
        arrows:"to"
    },
    {
       from: "source2:sales-row26", 
        to: "source2:sales-row26-period",
        label:"period",
        arrows:"to"
    },

    {
       from: "source3:sales-row68", 
        to: "source3:sales-row68-revenue",
        label:"netRevenue",
        arrows:"to"
    },
    {
       from: "source3:sales-row68", 
        to: "source3:sales-row68-region",
        label:"salesRegion",
        arrows:"to"
    },
    {
       from: "source3:sales-row68", 
        to: "source3:sales-row68-period",
        label:"period",
        arrows:"to"
    },
    {
      from: "source1:sales-row1",
      to: "canon:Sales_Report5",
      label: "same as",
      arrows: "to"
    },
    {
      from: "source2:sales-row26",
      to: "canon:Sales_Report5",
      label: "same as",
      arrows: "to"
    }, 
    {
      from: "source3:sales-row68",
      to: "canon:Sales_Report5",
      label: "same as",
      arrows: "to"
    },
          {
       from: "canon:Sales_Report5", 
        to: "canon:Sales_Report5-revenue",
        label:"revenue",
        arrows:"to"
    },
    {
       from: "canon:Sales_Report5", 
        to: "canon:Sales_Report5-region",
        label:"region",
        arrows:"to"
    }, 
    {
       from: "canon:Sales_Report5", 
        to: "canon:Sales_Report5-period",
        label:"period",
        arrows:"to"
    }

  ]

  // create a network
 var container = document.querySelector('.network');

 var data = {
      nodes: nodes,
      edges: edges
  };
   var options = {
      mass:3,
      nodes: {
          shape: 'oval',
          size: 30,
          font: {
              size: 12,
              color: '#ffffff'
          },
          borderWidth: 2
      },
      edges: {
          width: 2
      },
      groups:{"source1":{
        color:{
           background:'red',
           border:'maroon'
              },
        shadow:{enabled:true,
                color:'rgba(0,0,0,0.5)',
                x:6,
                y:6 
               }
            
         },
         "source2":{
        color:{background:'blue',
           border:'navy'},
        shadow:{enabled:true,
                color:'rgba(0,0,0,0.5)',
                x:6,
                y:6 
               }
            
         },
         "source3":{
        color:{background:'green',
           border:'darkGreen'},
        shadow:{enabled:true,
                color:'rgba(0,0,0,0.5)',
                x:6,
                y:6 
               }
            
         }, 
        "canon":{
        color:{background:'gold',
           border:'brown'},
        font:{color:'black',size:14},
         shadow:{enabled:true,
                color:'rgba(0,0,0,0.5)',
                x:6,
                y:6 
               }
            
         }     
   
      }
  }; 
  network = new vis.Network(container, data, options);
  network.on('click',(obj)=>{document.querySelector('.report').innerHTML =obj.nodes[0]})