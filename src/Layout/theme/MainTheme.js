import { createTheme } from '@mui/material/styles';

export const firstTheme = createTheme({
    direction: "rtl",
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "1rem",
                    textTransform: "capitalize"
                },
                sizeLarge: {
                    backgroundColor: "info.main",
                    boxShadow: "-3px 3px 6px #b5b5b5, -3px -3px 6px #fff"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: "",
                    direction: 'rtl',
                    background: "primary.main"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                middle: {
                    height: "3px",
                    width: "80%",
                    margin: "10px auto",
                    border: "none",
                    background: "linear-gradient(90deg, transparent, #0c133b, transparent)"
                },
                root: {
                    width: "90%",
                    margin: "10px auto",
                    border: "none",

                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textAlign: "start"
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    fontSize: "1.5rem"
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: "50%",
                    backgroundColor: "#ebf4f1"
                }
            }
        },
        MuiSwipeableDrawer: {
            styleOverrides: {
                paper: {
                    width: "50%",
                    backgroundColor: "#ebf4f1"
                }
            }
        }
    },
    palette: {
        name: "first",
        primary: {
            main: "#0c133b"
        },
        secondary: {
            main: "#32d3e7"
        },
        warning: {
            main: "#ebf4f1"
        },
        info: {
            main: "#d1e0db"
        }
    },

    typography: {
        fontFamily: "Kalameh",
        button: {
            fontWeight: "bold"
        }
    }
})
export const secondTheme = createTheme({
    direction: "rtl",
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "1rem",
                    textTransform: "capitalize"
                },
                sizeLarge: {
                    backgroundColor: "info.main",
                    boxShadow: "-3px 3px 6px #b5b5b5, -3px -3px 6px #ffffff"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: "",
                    direction: 'rtl',
                    background: "primary.main"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                middle: {
                    height: "3px",
                    width: "80%",
                    margin: "10px auto",
                    border: "none",
                    background: "linear-gradient(90deg, transparent, #2c121b, transparent)"
                },
                root: {
                    width: "90%",
                    margin: "10px auto",
                    border: "none",

                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textAlign: "start"
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    fontSize: "1.5rem"
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: "50%",
                    backgroundColor: "#fbd3b7"
                }
            }
        },
        MuiSwipeableDrawer: {
            styleOverrides: {
                paper: {
                    width: "50%",
                    backgroundColor: "#fbd3b7"
                }
            }
        }
    },
    palette: {
        name: "second",
        primary: {
            main: "#2c121b"
        },
        secondary: {
            main: "#f26f14"
        },
        warning: {
            main: "#fbd3b7"
        },
        info: {
            main: "#eee7df"
        }
    },

    typography: {
        fontFamily: "Kalameh",
        button: {
            fontWeight: "bold"
        }
    }
})