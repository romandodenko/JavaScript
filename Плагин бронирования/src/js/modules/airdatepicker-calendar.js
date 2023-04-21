// Календарь

const filterInit = document.querySelector(".filter");

if (filterInit) {
  if (document.body.clientWidth >= 1024) {
    new AirDatepicker('#arrivalDate', {});

    new AirDatepicker('#dateOfDeparture', {});
  }
  if (document.body.clientWidth <= 1024) {
    new AirDatepicker('#arrivalDate', {
      isMobile: true,
      autoClose: true,
    });

    new AirDatepicker('#dateOfDeparture', {
      isMobile: true,
      autoClose: true,
    });
  }
}