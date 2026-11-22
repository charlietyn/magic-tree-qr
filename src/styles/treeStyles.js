/**
 * Extracted untouched from the V2 baseline monolith.
 * Original inline React style map; no changes to the visual values.
 * Avoid modifying colours, dimensions or spacing without baseline screenshots.
 */
export const treeStyles = {
  container: {
    backgroundColor: "#f6f1e7",
    width: "100%",
    height: "100dvh",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  canvasWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  topLogoLink: {
    position: "absolute",
    top: "calc(12px + env(safe-area-inset-top, 0px))",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 3,
    pointerEvents: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  topLogoLinkWide: {
    left: "max(16px, env(safe-area-inset-left, 0px))",
    transform: "none"
  },
  topLogoImage: {
    width: "min(163px, calc(62.5vw - 18px))",
    height: "auto",
    display: "block"
  },
  scanQrOverlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  },
  canvas: {
    backgroundColor: "#f6f1e7"
  },
  controlsOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "max(8px, env(safe-area-inset-bottom, 0px))",
    pointerEvents: "none"
  },
  helperText: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "rgba(92, 79, 63, 0.78)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.12,
    lineHeight: 1.3,
    minHeight: 34,
    maxWidth: "min(92vw, 360px)",
    padding: "8px 14px",
    marginBottom: 10,
    borderRadius: 9999,
    border: "1px solid rgba(158, 142, 121, 0.2)",
    background: "rgba(248, 242, 232, 0.76)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "none",
    pointerEvents: "auto",
    cursor: "pointer",
    textShadow: "none"
  },
  helperTextError: {
    color: "#dc2626",
    border: "1px solid rgba(220, 38, 38, 0.22)",
    background: "rgba(254, 242, 242, 0.9)",
    cursor: "default"
  },
  inputContainer: {
    padding: "10px 10px 10px",
    width: "min(640px, calc(100% - 16px))",
    maxWidth: "100%",
    boxSizing: "border-box",
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    borderRadius: "18px 18px 0 0",
    border: "none",
    background: "rgba(247, 241, 231, 0.62)",
    boxShadow: "none",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)"
  },
  inputContainerMobile: {
    padding: "8px 12px 8px",
    borderRadius: "16px 16px 0 0",
    gap: 6,
    width: "100%"
  },
  inputRow: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: "rgba(255, 250, 242, 0.9)",
    borderRadius: 12,
    border: "1px solid rgba(156, 140, 119, 0.26)",
    boxShadow: "none",
    color: "#3f352b",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.1,
    padding: "0 14px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    minWidth: 0,
    transition: "background-color 0.2s ease, border-color 0.2s ease"
  },
  inputFocused: {
    backgroundColor: "rgba(255, 252, 247, 0.98)",
    borderColor: "rgba(128, 112, 91, 0.4)"
  },
  submitBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    border: "none",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.2s"
  },
  submitBtnDisabled: {
    backgroundColor: "#ccc",
    color: "#999",
    cursor: "not-allowed"
  },
  inputError: {
    backgroundColor: "rgba(254, 242, 242, 0.95)",
    borderColor: "rgba(194, 108, 108, 0.42)"
  },
  seasonRow: {
    display: "flex",
    gap: 6,
    marginTop: 0,
    alignItems: "center"
  },
  seasonRowMobile: {
    marginTop: 0,
    gap: 5
  },
  seasonBtn: {
    flex: 1,
    minHeight: 48,
    padding: "0 10px",
    borderRadius: 11,
    border: "none",
    backgroundColor: "rgba(253, 247, 238, 0.78)",
    color: "#5f4e3d",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    boxShadow: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  seasonBtnActive: {
    border: "none",
    backgroundColor: "rgba(238, 227, 209, 0.95)",
    color: "#3f352b",
    fontWeight: 600,
    boxShadow: "none"
  },
  muteBtn: {
    width: 48,
    height: 48,
    borderRadius: 11,
    border: "none",
    backgroundColor: "rgba(253, 247, 238, 0.78)",
    color: "#5f4e3d",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "none",
    backgroundColor: "rgba(244, 233, 216, 0.94)",
    color: "#4c3f33",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  scanQrBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "1px solid rgba(160, 143, 121, 0.28)",
    backgroundColor: "rgba(255, 248, 238, 0.9)",
    color: "#473a2f",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  shareBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "none",
    backgroundColor: "#c07a3a",
    color: "#fff9f1",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 1px 0 rgba(123, 77, 38, 0.25)",
    transition: "all 0.22s ease"
  },
  iconBtnActive: {
    border: "none",
    backgroundColor: "rgba(232, 219, 199, 0.96)",
    color: "#3f352b",
    boxShadow: "none"
  },
  muteBtnActive: {
    border: "none",
    backgroundColor: "rgba(238, 227, 209, 0.95)",
    color: "#3f352b",
    boxShadow: "none"
  },
  generateAnotherBtn: {
    width: "100%",
    height: 48,
    border: "none",
    borderRadius: 12,
    backgroundColor: "#c07a3a",
    color: "#fff9f1",
    boxShadow: "0 1px 0 rgba(123, 77, 38, 0.25)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 600,
    padding: "0 16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  visitLinkBtn: {
    width: "100%",
    height: 48,
    border: "1px solid rgba(160, 143, 121, 0.28)",
    borderRadius: 12,
    backgroundColor: "rgba(255, 248, 238, 0.9)",
    color: "#473a2f",
    boxShadow: "none",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 600,
    padding: "0 16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  sharedActionRow: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },
  sharedActionBtn: {
    flex: 1,
    minWidth: 0
  },
  paletteRow: {
    display: "flex",
    gap: 8,
    marginTop: 0,
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    transition: "opacity 0.3s",
    minHeight: 34,
    alignItems: "center"
  },
  paletteRowMobile: {
    gap: 6,
    marginTop: 0
  },
  paletteSwatch: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    minWidth: 0,
    minHeight: 0,
    boxSizing: "border-box",
    boxShadow: "none",
    transition: "transform 0.2s ease",
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation"
  },
  paletteSwatchMobile: {
    width: 24,
    height: 24
  },
  paletteSwatchActive: {
    border: "none",
    outline: "2px solid rgba(95, 78, 61, 0.72)",
    outlineOffset: 1,
    boxShadow: "none",
    transform: "translateY(-1px)"
  },
  receiverRow: {
    display: "flex",
    gap: 8,
    marginTop: 0,
    justifyContent: "center"
  },
  sharePopoverWrap: {
    position: "relative"
  },
  sharePopoverBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 10,
    pointerEvents: "auto"
  },
  sharePopover: {
    position: "absolute",
    bottom: "calc(100% + 10px)",
    right: 0,
    minWidth: 190,
    padding: 6,
    borderRadius: 14,
    border: "1px solid rgba(158, 142, 121, 0.22)",
    background: "rgba(252, 248, 240, 0.92)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: "0 8px 32px rgba(80, 60, 30, 0.12), 0 1px 3px rgba(80, 60, 30, 0.08)",
    zIndex: 11,
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  sharePopoverItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    outline: "none",
    background: "none",
    WebkitAppearance: "none",
    color: "#3f352b",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent"
  },
  sharePopoverItemHover: {
    backgroundColor: "rgba(238, 227, 209, 0.7)"
  },
  sharePopoverIcon: {
    width: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#6b5a48"
  },
  errorMessage: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 40,
    textAlign: "center",
    color: "#666"
  },
  creditsHintWrap: {
    position: "absolute",
    right: "max(12px, env(safe-area-inset-right, 0px))",
    top: "max(12px, env(safe-area-inset-top, 0px))",
    zIndex: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    height: 28,
    pointerEvents: "auto"
  },
  githubButton: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "transparent",
    color: "#5f4e3d",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "color 0.2s ease, transform 0.2s ease"
  },
  creditsHintButton: {
    width: 28,
    height: 28,
    border: "none",
    borderRadius: "50%",
    background: "transparent",
    color: "#5f4e3d",
    fontFamily: "inherit",
    lineHeight: 1,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    boxShadow: "none"
  },
  creditsHintTooltip: {
    position: "absolute",
    top: "calc(100% + 8px)",
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 0
  },
  creditsHintCard: {
    minWidth: 220,
    maxWidth: "min(84vw, 320px)",
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid rgba(158, 142, 121, 0.28)",
    background: "rgba(252, 248, 240, 0.96)",
    color: "#5f4e3d",
    fontSize: 11,
    lineHeight: 1.35,
    textAlign: "left",
    boxShadow: "0 6px 18px rgba(80, 60, 30, 0.14)"
  },
  creditsHintArrow: {
    width: 0,
    height: 0,
    marginBottom: -1,
    marginRight: 8,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderBottom: "6px solid rgba(252, 248, 240, 0.96)"
  },
  creditsHintLink: {
    color: "#7d4f24",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    whiteSpace: "nowrap"
  }
};
