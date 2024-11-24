(function() {
	jQuery.sap.declare("de.virtualforge.demochart");
	sap.ui.core.Control.extend("de.virtualforge.demochart", {
		metadata: {
			properties: {
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "400px"
				},
				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "400px"
				},
				chartType: {
					type: "string"
				},
				veryhigh: {
					type: "int"
				},
				high: {
					type: "int"
				},
				medium: {
					type: "int"
				},
				low: {
					type: "int"
				}
			}
		},
		
		onAfterRendering: function(evt) {
			var oControl = evt.srcControl;
			var canvas = document.getElementById("myCanvas");
			var canvasctx = canvas.getContext('2d');
			var id = oControl._getId();
			var chartType = oControl.getChartType();
			if (chartType == "bar") { alert("Chart bars are not supported"); }
			var data = [oControl.getVeryhigh()
                , oControl.getHigh()
                , oControl.getMedium()
                , oControl.getLow()];

			var datasets = {
				labels: ["Very High", "High", "Medium", "Low"],
				datasets: [{
					label: '# of Findings',
					data: data,
					backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(200, 80, 35, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
					borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
					borderWidth: 1
        }]
			};

			var options = {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
            }]
				}
			};

			var chart = new Chart(canvasctx, {
				type: chartType,
				data: datasets,
				options: options
			});
		},

		renderer: {
			render: function(oRm, oControl) {
				if (!oControl.getHeight().endsWith("px")) {
					console.log("Warning: Ending px not found");
				}
				oRm.write("<canvas id=\"myCanvas\" width=\"" + oControl.getWidth() + "\" height=\"" + oControl.getHeight() + "\">");
				oRm.write("></canvas>");
			}
		}
	});
}());