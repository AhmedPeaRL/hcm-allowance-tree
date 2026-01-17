(function () {
  window.HCM_ALLOWANCE_TREE = {
    check(state) {
      // مثال إيقاعي بسيط:
      if (state.silenceDuration > 7000) {
        return { open: true };
      }
      return { open: false };
    }
  };
})();
