import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from "@angular/animations";

export let loginForm = trigger("enterLoginForm", [
  transition("* => *", [
    query(".enterLoginForm", style({ opacity: 0 }), {
      optional: true
    }),

    query(
      ".enterLoginForm",
      stagger("200ms", [
        animate(
          "1s ease-in",
          keyframes([
            style({
              opacity: 0,
              transform: "translateY(-100%)", //where it starts easing in
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: "translateY(-30px)", //adjust position
              offset: 0.5
            }),
            style({
              opacity: 1,
              transform: "translateY(0)", //default position
              offset: 1
            })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);
