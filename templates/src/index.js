import { extend, Text } from "@shoplinedev/checkout-ui-extensions";

extend("Checkout::Dynamic::Render", (root, { extensionPoint, i18n }) => {
  root.appendChild(
    root.createComponent(
      Text,
      {},
      i18n.translate("welcome", { extensionPoint })
    )
  );
  root.mount();
});
