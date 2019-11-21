console.clear();

$(function() {
	console.warn("Console --- HEY", 888);
	console.warn("52");
	$(document).on("click", 'a[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr("href");
		try {
			// target element
			var $id = $(id);
			if ($id.length === 0) {
				return;
			}

			// prevent standard hash navigation (avoid blinking in IE)
			e.preventDefault();

			// top position relative to the document
			var pos = $id.offset().top;

			// animated top scrolling
			$("body, html").animate({ scrollTop: pos });
		} catch (e) {}
	});

	var clock;

	// Grab the current date
	var currentDate = new Date();

	// Target future date/24 hour time/Timezone
	var targetDate = moment.tz("2019-11-29 09:00", "America/Los_Angeles");

	// Calculate the difference in seconds between the future and current date
	var diff = targetDate / 1000 - currentDate.getTime() / 1000;
	if (diff < 0) {
		$("body").addClass("deal-is-on");
	}

	$("body").on("click", ".get-deal", function(e) {
		if (diff > 0) {
			e.preventDefault();
			alert("Not ready yet!");
		}
	});

	if (diff <= 0) {
		// If remaining countdown is 0
		clock = $(".b-timer-widget").FlipClock(0, {
			clockFace: "DailyCounter",
			countdown: true,
			autostart: false
		});
		console.log("Date has already passed!");
	} else {
		// Run countdown timer
		clock = $(".b-timer-widget").FlipClock(diff, {
			clockFace: "DailyCounter",
			countdown: true,
			callbacks: {
				stop: function() {
					console.log("Timer has ended!");
				}
			}
		});

		// Check when timer reaches 0, then stop at 0
		setTimeout(function() {
			checktime();
		}, 1000);

		function checktime() {
			t = clock.getTime();
			if (t <= 0) {
				clock.setTime(0);
			}
			setTimeout(function() {
				checktime();
			}, 1000);
		}
	}
});
