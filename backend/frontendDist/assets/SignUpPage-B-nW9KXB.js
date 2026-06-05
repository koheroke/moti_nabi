import {
  A as e,
  B as t,
  I as n,
  N as r,
  Nt as i,
  Y as a,
  _ as o,
  g as s,
  l as c,
  mt as l,
  ot as u,
  p as d,
  u as f,
  v as p,
} from "./runtime-core.esm-bundler-BxSeyN28.js";
import { t as m } from "./_plugin-vue_export-helper-CXTkFu_Z.js";
import { c as h, i as g, n as _, o as v, s as y } from "./index-4jhALLK4.js";
import { t as b } from "./userAuthstore-y9warsrk.js";
import { t as x } from "./BaseInput-DBFJL_17.js";
import { t as S } from "./FormField-CPrY9Zsu.js";
var C = b(),
  w = `http://localhost:3000/auth/signup`,
  T = () => {
    let e = u(!1),
      t = u(null);
    return {
      signup: async (n) => {
        ((e.value = !0), (t.value = null));
        try {
          let { userId: e, res: t } = await (
              await fetch(w, {
                method: `POST`,
                headers: { "Content-Type": `application/json` },
                body: JSON.stringify(n),
              })
            ).json(),
            r = { id: e, name: n.name, email: n.email };
          return (C.login(r, `token`), t);
        } catch {
          t.value = `登録失敗`;
        } finally {
          e.value = !1;
        }
      },
      loading: e,
      error: t,
    };
  },
  E = [`disabled`],
  D = m(
    p({
      __name: `SignUp`,
      setup(e) {
        let t = _(),
          s = g(),
          p = v(),
          m = u(`azuma`),
          h = u(`kouhei_24s1101798@nnn.ed.jp `),
          b = u(`azumax1000`),
          C = u(`azumax1000`),
          w = c(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h.value)),
          D = c(() => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(b.value)),
          { signup: O, loading: ee } = T(),
          te = async () => {
            if (b.value !== C.value) {
              p.showAlert(`パスワードが一致しません`, !0);
              return;
            }
            if (!w.value) {
              p.showAlert(`メールアドレスが正しくありません`, !0);
              return;
            }
            if (!D.value) {
              p.showAlert(`パスワードが正しくありません`, !0);
              return;
            }
            grecaptcha.enterprise.ready(async () => {
              let e = await grecaptcha.enterprise.execute(
                  `6LerNccsAAAAABAI5TvYl4D2gN4ByCej9jbXavs1`,
                  { action: `SIGNUP` },
                ),
                { error: n, loading: i } = await O({
                  email: h.value,
                  password: b.value,
                  name: m.value,
                  recaptchaToken: e,
                });
              (n && p.showAlert(`登録に失敗しました`, !0),
                n == null &&
                  !i &&
                  (r(() => {
                    p.showAlert(`アカウントが作成されました`);
                  }),
                  s.showDialog(
                    `続けて2段階認証を行いますか`,
                    `機能の使用には2段階認証が必要です`,
                    () => {
                      t.push(`/2fa`);
                    },
                  ),
                  t.push(`/home`)));
            });
          };
        return (e, t) => (
          n(),
          d(
            `form`,
            { onSubmit: y(te, [`prevent`]), class: `form` },
            [
              o(
                l(S),
                { label: `名前`, required: `` },
                {
                  default: a(() => [
                    o(
                      l(x),
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue": (t[0] ||= (e) => (m.value = e)),
                      },
                      null,
                      8,
                      [`modelValue`],
                    ),
                  ]),
                  _: 1,
                },
              ),
              o(
                l(S),
                { label: `メール`, required: `` },
                {
                  default: a(() => [
                    o(
                      l(x),
                      {
                        modelValue: h.value,
                        "onUpdate:modelValue": (t[1] ||= (e) => (h.value = e)),
                        type: `email`,
                      },
                      null,
                      8,
                      [`modelValue`],
                    ),
                  ]),
                  _: 1,
                },
              ),
              o(
                l(S),
                { label: `パスワード`, required: `` },
                {
                  default: a(() => [
                    o(
                      l(x),
                      {
                        modelValue: b.value,
                        "onUpdate:modelValue": (t[2] ||= (e) => (b.value = e)),
                        title: `8文字以上・英字と数字を含めてください`,
                        type: `password`,
                        pattern: `^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$`,
                      },
                      null,
                      8,
                      [`modelValue`],
                    ),
                  ]),
                  _: 1,
                },
              ),
              o(
                l(S),
                { label: `パスワード確認`, required: `` },
                {
                  default: a(() => [
                    o(
                      l(x),
                      {
                        modelValue: C.value,
                        "onUpdate:modelValue": (t[3] ||= (e) => (C.value = e)),
                        type: `passwordConfirm`,
                      },
                      null,
                      8,
                      [`modelValue`],
                    ),
                  ]),
                  _: 1,
                },
              ),
              f(
                `button`,
                { disabled: l(ee) },
                i(l(ee) ? `作成中...` : `アカウントを作成`),
                9,
                E,
              ),
            ],
            32,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-d3ad5260`]],
  ),
  O = h({
    ACESFilmicToneMapping: () => 4,
    AddEquation: () => 100,
    AddOperation: () => 2,
    AdditiveAnimationBlendMode: () => Dt,
    AdditiveBlending: () => 2,
    AlphaFormat: () => _e,
    AlwaysDepth: () => 1,
    AlwaysStencilFunc: () => 519,
    AmbientLight: () => df,
    AmbientLightProbe: () => Of,
    AnimationClip: () => Pd,
    AnimationLoader: () => Ud,
    AnimationMixer: () => op,
    AnimationObjectGroup: () => ip,
    AnimationUtils: () => Q,
    ArcCurve: () => Bl,
    ArrayCamera: () => uc,
    ArrowHelper: () => Yp,
    Audio: () => zf,
    AudioAnalyser: () => Gf,
    AudioContext: () => Tf,
    AudioListener: () => Rf,
    AudioLoader: () => Ef,
    AxesHelper: () => Xp,
    AxisHelper: () => bm,
    BackSide: () => 1,
    BasicDepthPacking: () => It,
    BasicShadowMap: () => 0,
    BinaryTextureLoader: () => Tm,
    Bone: () => Yc,
    BooleanKeyframeTrack: () => Dd,
    BoundingBoxHelper: () => xm,
    Box2: () => gp,
    Box3: () => Kn,
    Box3Helper: () => Wp,
    BoxBufferGeometry: () => qi,
    BoxGeometry: () => qi,
    BoxHelper: () => Up,
    BufferAttribute: () => K,
    BufferGeometry: () => J,
    BufferGeometryLoader: () => vf,
    ByteType: () => ue,
    Cache: () => Ld,
    Camera: () => ea,
    CameraHelper: () => Bp,
    CanvasRenderer: () => Dm,
    CanvasTexture: () => El,
    CatmullRomCurve3: () => Kl,
    CineonToneMapping: () => 3,
    CircleBufferGeometry: () => Ol,
    CircleGeometry: () => Ol,
    ClampToEdgeWrapping: () => A,
    Clock: () => Mf,
    Color: () => W,
    ColorKeyframeTrack: () => Od,
    CompressedTexture: () => Tl,
    CompressedTextureLoader: () => Wd,
    ConeBufferGeometry: () => Al,
    ConeGeometry: () => Al,
    CubeCamera: () => ia,
    CubeReflectionMapping: () => 301,
    CubeRefractionMapping: () => 302,
    CubeTexture: () => aa,
    CubeTextureLoader: () => Kd,
    CubeUVReflectionMapping: () => 306,
    CubeUVRefractionMapping: () => 307,
    CubicBezierCurve: () => ru,
    CubicBezierCurve3: () => iu,
    CubicInterpolant: () => Cd,
    CullFaceBack: () => 1,
    CullFaceFront: () => 2,
    CullFaceFrontBack: () => 3,
    CullFaceNone: () => 0,
    Curve: () => Rl,
    CurvePath: () => du,
    CustomBlending: () => 5,
    CustomToneMapping: () => 5,
    CylinderBufferGeometry: () => kl,
    CylinderGeometry: () => kl,
    Cylindrical: () => mp,
    DataTexture: () => Xc,
    DataTexture2DArray: () => ro,
    DataTexture3D: () => lo,
    DataTextureLoader: () => qd,
    DataUtils: () => em,
    DecrementStencilOp: () => Vt,
    DecrementWrapStencilOp: () => Ut,
    DefaultLoadingManager: () => zd,
    DepthFormat: () => Ce,
    DepthStencilFormat: () => we,
    DepthTexture: () => Dl,
    DirectionalLight: () => uf,
    DirectionalLightHelper: () => Lp,
    DiscreteInterpolant: () => Td,
    DodecahedronBufferGeometry: () => Ml,
    DodecahedronGeometry: () => Ml,
    DoubleSide: () => 2,
    DstAlphaFactor: () => 206,
    DstColorFactor: () => 208,
    DynamicBufferAttribute: () => um,
    DynamicCopyUsage: () => Qt,
    DynamicDrawUsage: () => Kt,
    DynamicReadUsage: () => Yt,
    EdgesGeometry: () => Ll,
    EdgesHelper: () => Sm,
    EllipseCurve: () => zl,
    EqualDepth: () => 4,
    EqualStencilFunc: () => 514,
    EquirectangularReflectionMapping: () => 303,
    EquirectangularRefractionMapping: () => 304,
    Euler: () => kr,
    EventDispatcher: () => tn,
    ExtrudeBufferGeometry: () => Yu,
    ExtrudeGeometry: () => Yu,
    FaceColors: () => 1,
    FileLoader: () => Hd,
    FlatShading: () => 1,
    Float16BufferAttribute: () => vi,
    Float32Attribute: () => vm,
    Float32BufferAttribute: () => q,
    Float64Attribute: () => ym,
    Float64BufferAttribute: () => yi,
    FloatType: () => R,
    Fog: () => yc,
    FogExp2: () => vc,
    Font: () => Pm,
    FontLoader: () => Nm,
    FrontSide: () => 0,
    Frustum: () => pa,
    GLBufferAttribute: () => lp,
    GLSL1: () => `100`,
    GLSL3: () => en,
    GammaEncoding: () => At,
    GreaterDepth: () => 6,
    GreaterEqualDepth: () => 5,
    GreaterEqualStencilFunc: () => 518,
    GreaterStencilFunc: () => 516,
    GridHelper: () => Mp,
    Group: () => dc,
    HalfFloatType: () => fe,
    HemisphereLight: () => Xd,
    HemisphereLightHelper: () => jp,
    HemisphereLightProbe: () => Df,
    IcosahedronBufferGeometry: () => Qu,
    IcosahedronGeometry: () => Qu,
    ImageBitmapLoader: () => Cf,
    ImageLoader: () => Gd,
    ImageUtils: () => In,
    ImmediateRenderObject: () => Fm,
    IncrementStencilOp: () => Bt,
    IncrementWrapStencilOp: () => Ht,
    InstancedBufferAttribute: () => el,
    InstancedBufferGeometry: () => _f,
    InstancedInterleavedBuffer: () => cp,
    InstancedMesh: () => al,
    Int16Attribute: () => mm,
    Int16BufferAttribute: () => mi,
    Int32Attribute: () => gm,
    Int32BufferAttribute: () => gi,
    Int8Attribute: () => dm,
    Int8BufferAttribute: () => di,
    IntType: () => I,
    InterleavedBuffer: () => xc,
    InterleavedBufferAttribute: () => Cc,
    Interpolant: () => Sd,
    InterpolateDiscrete: () => bt,
    InterpolateLinear: () => xt,
    InterpolateSmooth: () => St,
    InvertStencilOp: () => Wt,
    JSONLoader: () => Om,
    KeepStencilOp: () => Rt,
    KeyframeTrack: () => Ed,
    LOD: () => Hc,
    LatheBufferGeometry: () => $u,
    LatheGeometry: () => $u,
    Layers: () => Ar,
    LensFlare: () => Am,
    LessDepth: () => 2,
    LessEqualDepth: () => 3,
    LessEqualStencilFunc: () => 515,
    LessStencilFunc: () => 513,
    Light: () => Yd,
    LightProbe: () => mf,
    Line: () => fl,
    Line3: () => yp,
    LineBasicMaterial: () => ol,
    LineCurve: () => au,
    LineCurve3: () => ou,
    LineDashedMaterial: () => bd,
    LineLoop: () => gl,
    LinePieces: () => 1,
    LineSegments: () => hl,
    LineStrip: () => 0,
    LinearEncoding: () => Ot,
    LinearFilter: () => P,
    LinearInterpolant: () => wd,
    LinearMipMapLinearFilter: () => ce,
    LinearMipMapNearestFilter: () => oe,
    LinearMipmapLinearFilter: () => se,
    LinearMipmapNearestFilter: () => ae,
    LinearToneMapping: () => 1,
    Loader: () => Bd,
    LoaderUtils: () => gf,
    LoadingManager: () => Rd,
    LogLuvEncoding: () => Mt,
    LoopOnce: () => _t,
    LoopPingPong: () => yt,
    LoopRepeat: () => vt,
    LuminanceAlphaFormat: () => xe,
    LuminanceFormat: () => be,
    MOUSE: () => ee,
    Material: () => ni,
    MaterialLoader: () => hf,
    Math: () => On,
    MathUtils: () => On,
    Matrix3: () => kn,
    Matrix4: () => H,
    MaxEquation: () => 104,
    Mesh: () => Wi,
    MeshBasicMaterial: () => li,
    MeshDepthMaterial: () => nc,
    MeshDistanceMaterial: () => rc,
    MeshFaceMaterial: () => tm,
    MeshLambertMaterial: () => vd,
    MeshMatcapMaterial: () => yd,
    MeshNormalMaterial: () => _d,
    MeshPhongMaterial: () => hd,
    MeshPhysicalMaterial: () => md,
    MeshStandardMaterial: () => pd,
    MeshToonMaterial: () => gd,
    MinEquation: () => 103,
    MirroredRepeatWrapping: () => j,
    MixOperation: () => 1,
    MultiMaterial: () => nm,
    MultiplyBlending: () => 4,
    MultiplyOperation: () => 0,
    NearestFilter: () => M,
    NearestMipMapLinearFilter: () => ie,
    NearestMipMapNearestFilter: () => ne,
    NearestMipmapLinearFilter: () => re,
    NearestMipmapNearestFilter: () => N,
    NeverDepth: () => 0,
    NeverStencilFunc: () => 512,
    NoBlending: () => 0,
    NoColors: () => 0,
    NoToneMapping: () => 0,
    NormalAnimationBlendMode: () => Et,
    NormalBlending: () => 1,
    NotEqualDepth: () => 7,
    NotEqualStencilFunc: () => 517,
    NumberKeyframeTrack: () => kd,
    Object3D: () => U,
    ObjectLoader: () => yf,
    ObjectSpaceNormalMap: () => 1,
    OctahedronBufferGeometry: () => ed,
    OctahedronGeometry: () => ed,
    OneFactor: () => 201,
    OneMinusDstAlphaFactor: () => 207,
    OneMinusDstColorFactor: () => 209,
    OneMinusSrcAlphaFactor: () => 205,
    OneMinusSrcColorFactor: () => 203,
    OrthographicCamera: () => wa,
    PCFShadowMap: () => 1,
    PCFSoftShadowMap: () => 2,
    PMREMGenerator: () => Ha,
    ParametricGeometry: () => jm,
    Particle: () => im,
    ParticleBasicMaterial: () => sm,
    ParticleSystem: () => am,
    ParticleSystemMaterial: () => cm,
    Path: () => fu,
    PerspectiveCamera: () => ta,
    Plane: () => ua,
    PlaneBufferGeometry: () => ga,
    PlaneGeometry: () => ga,
    PlaneHelper: () => Gp,
    PointCloud: () => rm,
    PointCloudMaterial: () => om,
    PointLight: () => cf,
    PointLightHelper: () => Dp,
    Points: () => Sl,
    PointsMaterial: () => _l,
    PolarGridHelper: () => Np,
    PolyhedronBufferGeometry: () => jl,
    PolyhedronGeometry: () => jl,
    PositionalAudio: () => Wf,
    PropertyBinding: () => $,
    PropertyMixer: () => Kf,
    QuadraticBezierCurve: () => su,
    QuadraticBezierCurve3: () => cu,
    Quaternion: () => Un,
    QuaternionKeyframeTrack: () => jd,
    QuaternionLinearInterpolant: () => Ad,
    REVISION: () => `134`,
    RGBADepthPacking: () => Lt,
    RGBAFormat: () => ye,
    RGBAIntegerFormat: () => Ae,
    RGBA_ASTC_10x10_Format: () => $e,
    RGBA_ASTC_10x5_Format: () => Xe,
    RGBA_ASTC_10x6_Format: () => Ze,
    RGBA_ASTC_10x8_Format: () => Qe,
    RGBA_ASTC_12x10_Format: () => et,
    RGBA_ASTC_12x12_Format: () => tt,
    RGBA_ASTC_4x4_Format: () => He,
    RGBA_ASTC_5x4_Format: () => Ue,
    RGBA_ASTC_5x5_Format: () => We,
    RGBA_ASTC_6x5_Format: () => Ge,
    RGBA_ASTC_6x6_Format: () => Ke,
    RGBA_ASTC_8x5_Format: () => qe,
    RGBA_ASTC_8x6_Format: () => Je,
    RGBA_ASTC_8x8_Format: () => Ye,
    RGBA_BPTC_Format: () => nt,
    RGBA_ETC2_EAC_Format: () => Ve,
    RGBA_PVRTC_2BPPV1_Format: () => Re,
    RGBA_PVRTC_4BPPV1_Format: () => Le,
    RGBA_S3TC_DXT1_Format: () => Me,
    RGBA_S3TC_DXT3_Format: () => Ne,
    RGBA_S3TC_DXT5_Format: () => Pe,
    RGBDEncoding: () => Ft,
    RGBEEncoding: () => jt,
    RGBEFormat: () => Se,
    RGBFormat: () => ve,
    RGBIntegerFormat: () => ke,
    RGBM16Encoding: () => Pt,
    RGBM7Encoding: () => Nt,
    RGB_ETC1_Format: () => ze,
    RGB_ETC2_Format: () => Be,
    RGB_PVRTC_2BPPV1_Format: () => Ie,
    RGB_PVRTC_4BPPV1_Format: () => Fe,
    RGB_S3TC_DXT1_Format: () => je,
    RGFormat: () => De,
    RGIntegerFormat: () => Oe,
    RawShaderMaterial: () => Ta,
    Ray: () => yr,
    Raycaster: () => up,
    RectAreaLight: () => ff,
    RedFormat: () => Te,
    RedIntegerFormat: () => Ee,
    ReinhardToneMapping: () => 2,
    RepeatWrapping: () => k,
    ReplaceStencilOp: () => zt,
    ReverseSubtractEquation: () => 102,
    RingBufferGeometry: () => td,
    RingGeometry: () => td,
    SRGB8_ALPHA8_ASTC_10x10_Format: () => mt,
    SRGB8_ALPHA8_ASTC_10x5_Format: () => dt,
    SRGB8_ALPHA8_ASTC_10x6_Format: () => ft,
    SRGB8_ALPHA8_ASTC_10x8_Format: () => pt,
    SRGB8_ALPHA8_ASTC_12x10_Format: () => ht,
    SRGB8_ALPHA8_ASTC_12x12_Format: () => gt,
    SRGB8_ALPHA8_ASTC_4x4_Format: () => rt,
    SRGB8_ALPHA8_ASTC_5x4_Format: () => it,
    SRGB8_ALPHA8_ASTC_5x5_Format: () => at,
    SRGB8_ALPHA8_ASTC_6x5_Format: () => ot,
    SRGB8_ALPHA8_ASTC_6x6_Format: () => st,
    SRGB8_ALPHA8_ASTC_8x5_Format: () => ct,
    SRGB8_ALPHA8_ASTC_8x6_Format: () => lt,
    SRGB8_ALPHA8_ASTC_8x8_Format: () => ut,
    Scene: () => bc,
    SceneUtils: () => km,
    ShaderChunk: () => Y,
    ShaderLib: () => _a,
    ShaderMaterial: () => $i,
    ShadowMaterial: () => fd,
    Shape: () => pu,
    ShapeBufferGeometry: () => nd,
    ShapeGeometry: () => nd,
    ShapePath: () => Zp,
    ShapeUtils: () => Ku,
    ShortType: () => F,
    Skeleton: () => $c,
    SkeletonHelper: () => Tp,
    SkinnedMesh: () => Jc,
    SmoothShading: () => 2,
    Sphere: () => dr,
    SphereBufferGeometry: () => id,
    SphereGeometry: () => id,
    Spherical: () => pp,
    SphericalHarmonics3: () => pf,
    SplineCurve: () => lu,
    SpotLight: () => nf,
    SpotLightHelper: () => xp,
    Sprite: () => Rc,
    SpriteMaterial: () => wc,
    SrcAlphaFactor: () => 204,
    SrcAlphaSaturateFactor: () => 210,
    SrcColorFactor: () => 202,
    StaticCopyUsage: () => Zt,
    StaticDrawUsage: () => Gt,
    StaticReadUsage: () => Jt,
    StereoCamera: () => jf,
    StreamCopyUsage: () => $t,
    StreamDrawUsage: () => qt,
    StreamReadUsage: () => Xt,
    StringKeyframeTrack: () => Md,
    SubtractEquation: () => 101,
    SubtractiveBlending: () => 3,
    TOUCH: () => te,
    TangentSpaceNormalMap: () => 0,
    TetrahedronBufferGeometry: () => ad,
    TetrahedronGeometry: () => ad,
    TextGeometry: () => Mm,
    Texture: () => Rn,
    TextureLoader: () => Jd,
    TorusBufferGeometry: () => od,
    TorusGeometry: () => od,
    TorusKnotBufferGeometry: () => sd,
    TorusKnotGeometry: () => sd,
    Triangle: () => ei,
    TriangleFanDrawMode: () => 2,
    TriangleStripDrawMode: () => 1,
    TrianglesDrawMode: () => 0,
    TubeBufferGeometry: () => cd,
    TubeGeometry: () => cd,
    UVMapping: () => 300,
    Uint16Attribute: () => hm,
    Uint16BufferAttribute: () => hi,
    Uint32Attribute: () => _m,
    Uint32BufferAttribute: () => _i,
    Uint8Attribute: () => fm,
    Uint8BufferAttribute: () => fi,
    Uint8ClampedAttribute: () => pm,
    Uint8ClampedBufferAttribute: () => pi,
    Uniform: () => sp,
    UniformsLib: () => X,
    UniformsUtils: () => Xi,
    UnsignedByteType: () => le,
    UnsignedInt248Type: () => ge,
    UnsignedIntType: () => L,
    UnsignedShort4444Type: () => pe,
    UnsignedShort5551Type: () => me,
    UnsignedShort565Type: () => he,
    UnsignedShortType: () => de,
    VSMShadowMap: () => 3,
    Vector2: () => z,
    Vector3: () => V,
    Vector4: () => B,
    VectorKeyframeTrack: () => Nd,
    Vertex: () => lm,
    VertexColors: () => 2,
    VideoTexture: () => wl,
    WebGL1Renderer: () => _c,
    WebGLCubeRenderTarget: () => oa,
    WebGLMultipleRenderTargets: () => Vn,
    WebGLMultisampleRenderTarget: () => Hn,
    WebGLRenderTarget: () => Bn,
    WebGLRenderTargetCube: () => Em,
    WebGLRenderer: () => Z,
    WebGLUtils: () => lc,
    WireframeGeometry: () => ld,
    WireframeHelper: () => Cm,
    WrapAroundEnding: () => Tt,
    XHRLoader: () => wm,
    ZeroCurvatureEnding: () => Ct,
    ZeroFactor: () => 200,
    ZeroSlopeEnding: () => wt,
    ZeroStencilOp: () => 0,
    sRGBEncoding: () => kt,
  }),
  ee = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  te = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  k = 1e3,
  A = 1001,
  j = 1002,
  M = 1003,
  N = 1004,
  ne = 1004,
  re = 1005,
  ie = 1005,
  P = 1006,
  ae = 1007,
  oe = 1007,
  se = 1008,
  ce = 1008,
  le = 1009,
  ue = 1010,
  F = 1011,
  de = 1012,
  I = 1013,
  L = 1014,
  R = 1015,
  fe = 1016,
  pe = 1017,
  me = 1018,
  he = 1019,
  ge = 1020,
  _e = 1021,
  ve = 1022,
  ye = 1023,
  be = 1024,
  xe = 1025,
  Se = ye,
  Ce = 1026,
  we = 1027,
  Te = 1028,
  Ee = 1029,
  De = 1030,
  Oe = 1031,
  ke = 1032,
  Ae = 1033,
  je = 33776,
  Me = 33777,
  Ne = 33778,
  Pe = 33779,
  Fe = 35840,
  Ie = 35841,
  Le = 35842,
  Re = 35843,
  ze = 36196,
  Be = 37492,
  Ve = 37496,
  He = 37808,
  Ue = 37809,
  We = 37810,
  Ge = 37811,
  Ke = 37812,
  qe = 37813,
  Je = 37814,
  Ye = 37815,
  Xe = 37816,
  Ze = 37817,
  Qe = 37818,
  $e = 37819,
  et = 37820,
  tt = 37821,
  nt = 36492,
  rt = 37840,
  it = 37841,
  at = 37842,
  ot = 37843,
  st = 37844,
  ct = 37845,
  lt = 37846,
  ut = 37847,
  dt = 37848,
  ft = 37849,
  pt = 37850,
  mt = 37851,
  ht = 37852,
  gt = 37853,
  _t = 2200,
  vt = 2201,
  yt = 2202,
  bt = 2300,
  xt = 2301,
  St = 2302,
  Ct = 2400,
  wt = 2401,
  Tt = 2402,
  Et = 2500,
  Dt = 2501,
  Ot = 3e3,
  kt = 3001,
  At = 3007,
  jt = 3002,
  Mt = 3003,
  Nt = 3004,
  Pt = 3005,
  Ft = 3006,
  It = 3200,
  Lt = 3201,
  Rt = 7680,
  zt = 7681,
  Bt = 7682,
  Vt = 7683,
  Ht = 34055,
  Ut = 34056,
  Wt = 5386,
  Gt = 35044,
  Kt = 35048,
  qt = 35040,
  Jt = 35045,
  Yt = 35049,
  Xt = 35041,
  Zt = 35046,
  Qt = 35050,
  $t = 35042,
  en = `300 es`,
  tn = class {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return !1;
      let n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      let n = this._listeners[e];
      if (n !== void 0) {
        let e = n.indexOf(t);
        e !== -1 && n.splice(e, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      let t = this._listeners[e.type];
      if (t !== void 0) {
        e.target = this;
        let n = t.slice(0);
        for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
        e.target = null;
      }
    }
  },
  nn = 1234567,
  rn = Math.PI / 180,
  an = 180 / Math.PI,
  on = [];
for (let e = 0; e < 256; e++) on[e] = (e < 16 ? `0` : ``) + e.toString(16);
var sn = typeof crypto < `u` && `randomUUID` in crypto;
function cn() {
  if (sn) return crypto.randomUUID().toUpperCase();
  let e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    r = (Math.random() * 4294967295) | 0;
  return (
    on[e & 255] +
    on[(e >> 8) & 255] +
    on[(e >> 16) & 255] +
    on[(e >> 24) & 255] +
    `-` +
    on[t & 255] +
    on[(t >> 8) & 255] +
    `-` +
    on[((t >> 16) & 15) | 64] +
    on[(t >> 24) & 255] +
    `-` +
    on[(n & 63) | 128] +
    on[(n >> 8) & 255] +
    `-` +
    on[(n >> 16) & 255] +
    on[(n >> 24) & 255] +
    on[r & 255] +
    on[(r >> 8) & 255] +
    on[(r >> 16) & 255] +
    on[(r >> 24) & 255]
  ).toUpperCase();
}
function ln(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function un(e, t) {
  return ((e % t) + t) % t;
}
function dn(e, t, n, r, i) {
  return r + ((e - t) * (i - r)) / (n - t);
}
function fn(e, t, n) {
  return e === t ? 0 : (n - e) / (t - e);
}
function pn(e, t, n) {
  return (1 - n) * e + n * t;
}
function mn(e, t, n, r) {
  return pn(e, t, 1 - Math.exp(-n * r));
}
function hn(e, t = 1) {
  return t - Math.abs(un(e, t * 2) - t);
}
function gn(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e));
}
function _n(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * e * (e * (e * 6 - 15) + 10));
}
function vn(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function yn(e, t) {
  return e + Math.random() * (t - e);
}
function bn(e) {
  return e * (0.5 - Math.random());
}
function xn(e) {
  return (
    e !== void 0 && (nn = e % 2147483647),
    (nn = (nn * 16807) % 2147483647),
    (nn - 1) / 2147483646
  );
}
function Sn(e) {
  return e * rn;
}
function Cn(e) {
  return e * an;
}
function wn(e) {
  return (e & (e - 1)) == 0 && e !== 0;
}
function Tn(e) {
  return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function En(e) {
  return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Dn(e, t, n, r, i) {
  let a = Math.cos,
    o = Math.sin,
    s = a(n / 2),
    c = o(n / 2),
    l = a((t + r) / 2),
    u = o((t + r) / 2),
    d = a((t - r) / 2),
    f = o((t - r) / 2),
    p = a((r - t) / 2),
    m = o((r - t) / 2);
  switch (i) {
    case `XYX`:
      e.set(s * u, c * d, c * f, s * l);
      break;
    case `YZY`:
      e.set(c * f, s * u, c * d, s * l);
      break;
    case `ZXZ`:
      e.set(c * d, c * f, s * u, s * l);
      break;
    case `XZX`:
      e.set(s * u, c * m, c * p, s * l);
      break;
    case `YXY`:
      e.set(c * p, s * u, c * m, s * l);
      break;
    case `ZYZ`:
      e.set(c * m, c * p, s * u, s * l);
      break;
    default:
      console.warn(
        `THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` +
          i,
      );
  }
}
var On = Object.freeze({
    __proto__: null,
    DEG2RAD: rn,
    RAD2DEG: an,
    generateUUID: cn,
    clamp: ln,
    euclideanModulo: un,
    mapLinear: dn,
    inverseLerp: fn,
    lerp: pn,
    damp: mn,
    pingpong: hn,
    smoothstep: gn,
    smootherstep: _n,
    randInt: vn,
    randFloat: yn,
    randFloatSpread: bn,
    seededRandom: xn,
    degToRad: Sn,
    radToDeg: Cn,
    isPowerOfTwo: wn,
    ceilPowerOfTwo: Tn,
    floorPowerOfTwo: En,
    setQuaternionFromProperEuler: Dn,
  }),
  z = class {
    constructor(e = 0, t = 0) {
      ((this.x = e), (this.y = t));
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return ((this.x = e), (this.y = t), this);
    }
    setScalar(e) {
      return ((this.x = e), (this.y = e), this);
    }
    setX(e) {
      return ((this.x = e), this);
    }
    setY(e) {
      return ((this.y = e), this);
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw Error(`index is out of range: ` + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error(`index is out of range: ` + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return ((this.x = e.x), (this.y = e.y), this);
    }
    add(e, t) {
      return t === void 0
        ? ((this.x += e.x), (this.y += e.y), this)
        : (console.warn(
            `THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`,
          ),
          this.addVectors(e, t));
    }
    addScalar(e) {
      return ((this.x += e), (this.y += e), this);
    }
    addVectors(e, t) {
      return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
    }
    addScaledVector(e, t) {
      return ((this.x += e.x * t), (this.y += e.y * t), this);
    }
    sub(e, t) {
      return t === void 0
        ? ((this.x -= e.x), (this.y -= e.y), this)
        : (console.warn(
            `THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`,
          ),
          this.subVectors(e, t));
    }
    subScalar(e) {
      return ((this.x -= e), (this.y -= e), this);
    }
    subVectors(e, t) {
      return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
    }
    multiply(e) {
      return ((this.x *= e.x), (this.y *= e.y), this);
    }
    multiplyScalar(e) {
      return ((this.x *= e), (this.y *= e), this);
    }
    divide(e) {
      return ((this.x /= e.x), (this.y /= e.y), this);
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      let t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)),
        (this.y = Math.min(this.y, e.y)),
        this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)),
        (this.y = Math.max(this.y, e.y)),
        this
      );
    }
    clamp(e, t) {
      return (
        (this.x = Math.max(e.x, Math.min(t.x, this.x))),
        (this.y = Math.max(e.y, Math.min(t.y, this.y))),
        this
      );
    }
    clampScalar(e, t) {
      return (
        (this.x = Math.max(e, Math.min(t, this.x))),
        (this.y = Math.max(e, Math.min(t, this.y))),
        this
      );
    }
    clampLength(e, t) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(
        Math.max(e, Math.min(t, n)),
      );
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        this
      );
    }
    ceil() {
      return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), this);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      let t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t),
        (this.y += (e.y - this.y) * t),
        this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n),
        (this.y = e.y + (t.y - e.y) * n),
        this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return ((this.x = e[t]), (this.y = e[t + 1]), this);
    }
    toArray(e = [], t = 0) {
      return ((e[t] = this.x), (e[t + 1] = this.y), e);
    }
    fromBufferAttribute(e, t, n) {
      return (
        n !== void 0 &&
          console.warn(
            `THREE.Vector2: offset has been removed from .fromBufferAttribute().`,
          ),
        (this.x = e.getX(t)),
        (this.y = e.getY(t)),
        this
      );
    }
    rotateAround(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = this.x - e.x,
        a = this.y - e.y;
      return (
        (this.x = i * n - a * r + e.x),
        (this.y = i * r + a * n + e.y),
        this
      );
    }
    random() {
      return ((this.x = Math.random()), (this.y = Math.random()), this);
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y);
    }
  };
z.prototype.isVector2 = !0;
var kn = class {
  constructor() {
    ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          `THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.`,
        ));
  }
  set(e, t, n, r, i, a, o, s, c) {
    let l = this.elements;
    return (
      (l[0] = e),
      (l[1] = r),
      (l[2] = o),
      (l[3] = t),
      (l[4] = i),
      (l[5] = s),
      (l[6] = n),
      (l[7] = a),
      (l[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    let t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    let t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[3],
      s = n[6],
      c = n[1],
      l = n[4],
      u = n[7],
      d = n[2],
      f = n[5],
      p = n[8],
      m = r[0],
      h = r[3],
      g = r[6],
      _ = r[1],
      v = r[4],
      y = r[7],
      b = r[2],
      x = r[5],
      S = r[8];
    return (
      (i[0] = a * m + o * _ + s * b),
      (i[3] = a * h + o * v + s * x),
      (i[6] = a * g + o * y + s * S),
      (i[1] = c * m + l * _ + u * b),
      (i[4] = c * h + l * v + u * x),
      (i[7] = c * g + l * y + u * S),
      (i[2] = d * m + f * _ + p * b),
      (i[5] = d * h + f * v + p * x),
      (i[8] = d * g + f * y + p * S),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      c = e[7],
      l = e[8];
    return (
      t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      c = e[7],
      l = e[8],
      u = l * a - o * c,
      d = o * s - l * i,
      f = c * i - a * s,
      p = t * u + n * d + r * f;
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let m = 1 / p;
    return (
      (e[0] = u * m),
      (e[1] = (r * c - l * n) * m),
      (e[2] = (o * n - r * a) * m),
      (e[3] = d * m),
      (e[4] = (l * t - r * s) * m),
      (e[5] = (r * i - o * t) * m),
      (e[6] = f * m),
      (e[7] = (n * s - c * t) * m),
      (e[8] = (a * t - n * i) * m),
      this
    );
  }
  transpose() {
    let e,
      t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, i, a, o) {
    let s = Math.cos(i),
      c = Math.sin(i);
    return (
      this.set(
        n * s,
        n * c,
        -n * (s * a + c * o) + a + e,
        -r * c,
        r * s,
        -r * (-c * a + s * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    let n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    let t = Math.cos(e),
      n = Math.sin(e),
      r = this.elements,
      i = r[0],
      a = r[3],
      o = r[6],
      s = r[1],
      c = r[4],
      l = r[7];
    return (
      (r[0] = t * i + n * s),
      (r[3] = t * a + n * c),
      (r[6] = t * o + n * l),
      (r[1] = -n * i + t * s),
      (r[4] = -n * a + t * c),
      (r[7] = -n * o + t * l),
      this
    );
  }
  translate(e, t) {
    let n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    let t = this.elements,
      n = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
kn.prototype.isMatrix3 = !0;
function An(e) {
  if (e.length === 0) return -1 / 0;
  let t = e[0];
  for (let n = 1, r = e.length; n < r; ++n) e[n] > t && (t = e[n]);
  return t;
}
var jn = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
};
function Mn(e, t) {
  return new jn[e](t);
}
function Nn(e) {
  return document.createElementNS(`http://www.w3.org/1999/xhtml`, e);
}
function Pn(e, t = 0) {
  let n = 3735928559 ^ t,
    r = 1103547991 ^ t;
  for (let t = 0, i; t < e.length; t++)
    ((i = e.charCodeAt(t)),
      (n = Math.imul(n ^ i, 2654435761)),
      (r = Math.imul(r ^ i, 1597334677)));
  return (
    (n =
      Math.imul(n ^ (n >>> 16), 2246822507) ^
      Math.imul(r ^ (r >>> 13), 3266489909)),
    (r =
      Math.imul(r ^ (r >>> 16), 2246822507) ^
      Math.imul(n ^ (n >>> 13), 3266489909)),
    4294967296 * (2097151 & r) + (n >>> 0)
  );
}
var Fn,
  In = class {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > `u`) return e.src;
      let t;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        (Fn === void 0 && (Fn = Nn(`canvas`)),
          (Fn.width = e.width),
          (Fn.height = e.height));
        let n = Fn.getContext(`2d`);
        (e instanceof ImageData
          ? n.putImageData(e, 0, 0)
          : n.drawImage(e, 0, 0, e.width, e.height),
          (t = Fn));
      }
      return t.width > 2048 || t.height > 2048
        ? (console.warn(
            `THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,
            e,
          ),
          t.toDataURL(`image/jpeg`, 0.6))
        : t.toDataURL(`image/png`);
    }
  },
  Ln = 0,
  Rn = class e extends tn {
    constructor(
      t = e.DEFAULT_IMAGE,
      n = e.DEFAULT_MAPPING,
      r = A,
      i = A,
      a = P,
      o = se,
      s = ye,
      c = le,
      l = 1,
      u = Ot,
    ) {
      (super(),
        Object.defineProperty(this, `id`, { value: Ln++ }),
        (this.uuid = cn()),
        (this.name = ``),
        (this.image = t),
        (this.mipmaps = []),
        (this.mapping = n),
        (this.wrapS = r),
        (this.wrapT = i),
        (this.magFilter = a),
        (this.minFilter = o),
        (this.anisotropy = l),
        (this.format = s),
        (this.internalFormat = null),
        (this.type = c),
        (this.offset = new z(0, 0)),
        (this.repeat = new z(1, 1)),
        (this.center = new z(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new kn()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.encoding = u),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1));
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y,
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.image = e.image),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.encoding = e.encoding),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.5,
          type: `Texture`,
          generator: `Texture.toJSON`,
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      if (this.image !== void 0) {
        let r = this.image;
        if (
          (r.uuid === void 0 && (r.uuid = cn()),
          !t && e.images[r.uuid] === void 0)
        ) {
          let t;
          if (Array.isArray(r)) {
            t = [];
            for (let e = 0, n = r.length; e < n; e++)
              r[e].isDataTexture ? t.push(zn(r[e].image)) : t.push(zn(r[e]));
          } else t = zn(r);
          e.images[r.uuid] = { uuid: r.uuid, url: t };
        }
        n.image = r.uuid;
      }
      return (
        JSON.stringify(this.userData) !== `{}` && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    transformUv(e) {
      if (this.mapping !== 300) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case k:
            e.x -= Math.floor(e.x);
            break;
          case A:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case j:
            Math.abs(Math.floor(e.x) % 2) === 1
              ? (e.x = Math.ceil(e.x) - e.x)
              : (e.x -= Math.floor(e.x));
            break;
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case k:
            e.y -= Math.floor(e.y);
            break;
          case A:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case j:
            Math.abs(Math.floor(e.y) % 2) === 1
              ? (e.y = Math.ceil(e.y) - e.y)
              : (e.y -= Math.floor(e.y));
            break;
        }
      return (this.flipY && (e.y = 1 - e.y), e);
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
  };
((Rn.DEFAULT_IMAGE = void 0),
  (Rn.DEFAULT_MAPPING = 300),
  (Rn.prototype.isTexture = !0));
function zn(e) {
  return (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
    ? In.getDataURL(e)
    : e.data
      ? {
          data: Array.prototype.slice.call(e.data),
          width: e.width,
          height: e.height,
          type: e.data.constructor.name,
        }
      : (console.warn(`THREE.Texture: Unable to serialize Texture.`), {});
}
var B = class {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((this.x = e), (this.y = t), (this.z = n), (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = r), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw Error(`index is out of range: ` + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error(`index is out of range: ` + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w === void 0 ? 1 : e.w),
      this
    );
  }
  add(e, t) {
    return t === void 0
      ? ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this)
      : (console.warn(
          `THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`,
        ),
        this.addVectors(e, t));
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t === void 0
      ? ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this)
      : (console.warn(
          `THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`,
        ),
        this.subVectors(e, t));
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    let t = this.x,
      n = this.y,
      r = this.z,
      i = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    let t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t,
      n,
      r,
      i,
      a = 0.01,
      o = 0.1,
      s = e.elements,
      c = s[0],
      l = s[4],
      u = s[8],
      d = s[1],
      f = s[5],
      p = s[9],
      m = s[2],
      h = s[6],
      g = s[10];
    if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
      if (
        Math.abs(l + d) < o &&
        Math.abs(u + m) < o &&
        Math.abs(p + h) < o &&
        Math.abs(c + f + g - 3) < o
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      let e = (c + 1) / 2,
        s = (f + 1) / 2,
        _ = (g + 1) / 2,
        v = (l + d) / 4,
        y = (u + m) / 4,
        b = (p + h) / 4;
      return (
        e > s && e > _
          ? e < a
            ? ((n = 0), (r = 0.707106781), (i = 0.707106781))
            : ((n = Math.sqrt(e)), (r = v / n), (i = y / n))
          : s > _
            ? s < a
              ? ((n = 0.707106781), (r = 0), (i = 0.707106781))
              : ((r = Math.sqrt(s)), (n = v / r), (i = b / r))
            : _ < a
              ? ((n = 0.707106781), (r = 0.707106781), (i = 0))
              : ((i = Math.sqrt(_)), (n = y / i), (r = b / i)),
        this.set(n, r, i, t),
        this
      );
    }
    let _ = Math.sqrt(
      (h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l),
    );
    return (
      Math.abs(_) < 0.001 && (_ = 1),
      (this.x = (h - p) / _),
      (this.y = (u - m) / _),
      (this.z = (d - l) / _),
      (this.w = Math.acos((c + f + g - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          `THREE.Vector4: offset has been removed from .fromBufferAttribute().`,
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
};
B.prototype.isVector4 = !0;
var Bn = class extends tn {
  constructor(e, t, n = {}) {
    (super(),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new B(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new B(0, 0, e, t)),
      (this.texture = new Rn(
        void 0,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.encoding,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.image = { width: e, height: t, depth: 1 }),
      (this.texture.generateMipmaps =
        n.generateMipmaps === void 0 ? !1 : n.generateMipmaps),
      (this.texture.internalFormat =
        n.internalFormat === void 0 ? null : n.internalFormat),
      (this.texture.minFilter = n.minFilter === void 0 ? P : n.minFilter),
      (this.depthBuffer = n.depthBuffer === void 0 ? !0 : n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer === void 0 ? !1 : n.stencilBuffer),
      (this.depthTexture = n.depthTexture === void 0 ? null : n.depthTexture));
  }
  setTexture(e) {
    ((e.image = { width: this.width, height: this.height, depth: this.depth }),
      (this.texture = e));
  }
  setSize(e, t, n = 1) {
    ((this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.image = { ...this.texture.image }),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
};
Bn.prototype.isWebGLRenderTarget = !0;
var Vn = class extends Bn {
  constructor(e, t, n) {
    super(e, t);
    let r = this.texture;
    this.texture = [];
    for (let e = 0; e < n; e++) this.texture[e] = r.clone();
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let r = 0, i = this.texture.length; r < i; r++)
        ((this.texture[r].image.width = e),
          (this.texture[r].image.height = t),
          (this.texture[r].image.depth = n));
      this.dispose();
    }
    return (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this);
  }
  copy(e) {
    (this.dispose(),
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      (this.texture.length = 0));
    for (let t = 0, n = e.texture.length; t < n; t++)
      this.texture[t] = e.texture[t].clone();
    return this;
  }
};
Vn.prototype.isWebGLMultipleRenderTargets = !0;
var Hn = class extends Bn {
  constructor(e, t, n) {
    (super(e, t, n), (this.samples = 4));
  }
  copy(e) {
    return (super.copy.call(this, e), (this.samples = e.samples), this);
  }
};
Hn.prototype.isWebGLMultisampleRenderTarget = !0;
var Un = class {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ((this._x = e), (this._y = t), (this._z = n), (this._w = r));
  }
  static slerp(e, t, n, r) {
    return (
      console.warn(
        `THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.`,
      ),
      n.slerpQuaternions(e, t, r)
    );
  }
  static slerpFlat(e, t, n, r, i, a, o) {
    let s = n[r + 0],
      c = n[r + 1],
      l = n[r + 2],
      u = n[r + 3],
      d = i[a + 0],
      f = i[a + 1],
      p = i[a + 2],
      m = i[a + 3];
    if (o === 0) {
      ((e[t + 0] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
      return;
    }
    if (o === 1) {
      ((e[t + 0] = d), (e[t + 1] = f), (e[t + 2] = p), (e[t + 3] = m));
      return;
    }
    if (u !== m || s !== d || c !== f || l !== p) {
      let e = 1 - o,
        t = s * d + c * f + l * p + u * m,
        n = t >= 0 ? 1 : -1,
        r = 1 - t * t;
      if (r > 2 ** -52) {
        let i = Math.sqrt(r),
          a = Math.atan2(i, t * n);
        ((e = Math.sin(e * a) / i), (o = Math.sin(o * a) / i));
      }
      let i = o * n;
      if (
        ((s = s * e + d * i),
        (c = c * e + f * i),
        (l = l * e + p * i),
        (u = u * e + m * i),
        e === 1 - o)
      ) {
        let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
        ((s *= e), (c *= e), (l *= e), (u *= e));
      }
    }
    ((e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u));
  }
  static multiplyQuaternionsFlat(e, t, n, r, i, a) {
    let o = n[r],
      s = n[r + 1],
      c = n[r + 2],
      l = n[r + 3],
      u = i[a],
      d = i[a + 1],
      f = i[a + 2],
      p = i[a + 3];
    return (
      (e[t] = o * p + l * u + s * f - c * d),
      (e[t + 1] = s * p + l * d + c * u - o * f),
      (e[t + 2] = c * p + l * f + o * d - s * u),
      (e[t + 3] = l * p - o * u - s * d - c * f),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw Error(
        `THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.`,
      );
    let n = e._x,
      r = e._y,
      i = e._z,
      a = e._order,
      o = Math.cos,
      s = Math.sin,
      c = o(n / 2),
      l = o(r / 2),
      u = o(i / 2),
      d = s(n / 2),
      f = s(r / 2),
      p = s(i / 2);
    switch (a) {
      case `XYZ`:
        ((this._x = d * l * u + c * f * p),
          (this._y = c * f * u - d * l * p),
          (this._z = c * l * p + d * f * u),
          (this._w = c * l * u - d * f * p));
        break;
      case `YXZ`:
        ((this._x = d * l * u + c * f * p),
          (this._y = c * f * u - d * l * p),
          (this._z = c * l * p - d * f * u),
          (this._w = c * l * u + d * f * p));
        break;
      case `ZXY`:
        ((this._x = d * l * u - c * f * p),
          (this._y = c * f * u + d * l * p),
          (this._z = c * l * p + d * f * u),
          (this._w = c * l * u - d * f * p));
        break;
      case `ZYX`:
        ((this._x = d * l * u - c * f * p),
          (this._y = c * f * u + d * l * p),
          (this._z = c * l * p - d * f * u),
          (this._w = c * l * u + d * f * p));
        break;
      case `YZX`:
        ((this._x = d * l * u + c * f * p),
          (this._y = c * f * u + d * l * p),
          (this._z = c * l * p - d * f * u),
          (this._w = c * l * u - d * f * p));
        break;
      case `XZY`:
        ((this._x = d * l * u - c * f * p),
          (this._y = c * f * u - d * l * p),
          (this._z = c * l * p + d * f * u),
          (this._w = c * l * u + d * f * p));
        break;
      default:
        console.warn(
          `THREE.Quaternion: .setFromEuler() encountered an unknown order: ` +
            a,
        );
    }
    return (t !== !1 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    let n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    let t = e.elements,
      n = t[0],
      r = t[4],
      i = t[8],
      a = t[1],
      o = t[5],
      s = t[9],
      c = t[2],
      l = t[6],
      u = t[10],
      d = n + o + u;
    if (d > 0) {
      let e = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / e),
        (this._x = (l - s) * e),
        (this._y = (i - c) * e),
        (this._z = (a - r) * e));
    } else if (n > o && n > u) {
      let e = 2 * Math.sqrt(1 + n - o - u);
      ((this._w = (l - s) / e),
        (this._x = 0.25 * e),
        (this._y = (r + a) / e),
        (this._z = (i + c) / e));
    } else if (o > u) {
      let e = 2 * Math.sqrt(1 + o - n - u);
      ((this._w = (i - c) / e),
        (this._x = (r + a) / e),
        (this._y = 0.25 * e),
        (this._z = (s + l) / e));
    } else {
      let e = 2 * Math.sqrt(1 + u - n - o);
      ((this._w = (a - r) / e),
        (this._x = (i + c) / e),
        (this._y = (s + l) / e),
        (this._z = 0.25 * e));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 2 ** -52
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ln(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    let n = this.angleTo(e);
    if (n === 0) return this;
    let r = Math.min(1, t / n);
    return (this.slerp(e, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x *= e),
          (this._y *= e),
          (this._z *= e),
          (this._w *= e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t === void 0
      ? this.multiplyQuaternions(this, e)
      : (console.warn(
          `THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.`,
        ),
        this.multiplyQuaternions(e, t));
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let n = e._x,
      r = e._y,
      i = e._z,
      a = e._w,
      o = t._x,
      s = t._y,
      c = t._z,
      l = t._w;
    return (
      (this._x = n * l + a * o + r * c - i * s),
      (this._y = r * l + a * s + i * o - n * c),
      (this._z = i * l + a * c + n * s - r * o),
      (this._w = a * l - n * o - r * s - i * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    let n = this._x,
      r = this._y,
      i = this._z,
      a = this._w,
      o = a * e._w + n * e._x + r * e._y + i * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = r), (this._z = i), this);
    let s = 1 - o * o;
    if (s <= 2 ** -52) {
      let e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * n + t * this._x),
        (this._y = e * r + t * this._y),
        (this._z = e * i + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    let c = Math.sqrt(s),
      l = Math.atan2(c, o),
      u = Math.sin((1 - t) * l) / c,
      d = Math.sin(t * l) / c;
    return (
      (this._w = a * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = r * u + this._y * d),
      (this._z = i * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    this.copy(e).slerp(t, n);
  }
  random() {
    let e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      r = 2 * Math.PI * Math.random(),
      i = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(i),
      n * Math.cos(i),
      t * Math.sin(r),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
};
Un.prototype.isQuaternion = !0;
var V = class {
  constructor(e = 0, t = 0, n = 0) {
    ((this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw Error(`index is out of range: ` + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error(`index is out of range: ` + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e, t) {
    return t === void 0
      ? ((this.x += e.x), (this.y += e.y), (this.z += e.z), this)
      : (console.warn(
          `THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`,
        ),
        this.addVectors(e, t));
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e, t) {
    return t === void 0
      ? ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this)
      : (console.warn(
          `THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`,
        ),
        this.subVectors(e, t));
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e, t) {
    return t === void 0
      ? ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this)
      : (console.warn(
          `THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.`,
        ),
        this.multiplyVectors(e, t));
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          `THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.`,
        ),
      this.applyQuaternion(Gn.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Gn.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    let t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6] * r),
      (this.y = i[1] * t + i[4] * n + i[7] * r),
      (this.z = i[2] * t + i[5] * n + i[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    let t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements,
      a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    return (
      (this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a),
      (this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a),
      (this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    let t = this.x,
      n = this.y,
      r = this.z,
      i = e.x,
      a = e.y,
      o = e.z,
      s = e.w,
      c = s * t + a * r - o * n,
      l = s * n + o * t - i * r,
      u = s * r + i * n - a * t,
      d = -i * t - a * n - o * r;
    return (
      (this.x = c * s + d * -i + l * -o - u * -a),
      (this.y = l * s + d * -a + u * -i - c * -o),
      (this.z = u * s + d * -o + c * -a - l * -i),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    let t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[4] * n + i[8] * r),
      (this.y = i[1] * t + i[5] * n + i[9] * r),
      (this.z = i[2] * t + i[6] * n + i[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return t === void 0
      ? this.crossVectors(this, e)
      : (console.warn(
          `THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.`,
        ),
        this.crossVectors(e, t));
  }
  crossVectors(e, t) {
    let n = e.x,
      r = e.y,
      i = e.z,
      a = t.x,
      o = t.y,
      s = t.z;
    return (
      (this.x = r * s - i * o),
      (this.y = i * a - n * s),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    let t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    let n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (Wn.copy(this).projectOnVector(e), this.sub(Wn));
  }
  reflect(e) {
    return this.sub(Wn.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    let n = this.dot(e) / t;
    return Math.acos(ln(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    let r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    let t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = r), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          `THREE.Vector3: offset has been removed from .fromBufferAttribute().`,
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    let e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)),
      (this.y = n * Math.sin(t)),
      (this.z = e),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
};
V.prototype.isVector3 = !0;
var Wn = new V(),
  Gn = new Un(),
  Kn = class {
    constructor(
      e = new V(1 / 0, 1 / 0, 1 / 0),
      t = new V(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromArray(e) {
      let t = 1 / 0,
        n = 1 / 0,
        r = 1 / 0,
        i = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let s = 0, c = e.length; s < c; s += 3) {
        let c = e[s],
          l = e[s + 1],
          u = e[s + 2];
        (c < t && (t = c),
          l < n && (n = l),
          u < r && (r = u),
          c > i && (i = c),
          l > a && (a = l),
          u > o && (o = u));
      }
      return (this.min.set(t, n, r), this.max.set(i, a, o), this);
    }
    setFromBufferAttribute(e) {
      let t = 1 / 0,
        n = 1 / 0,
        r = 1 / 0,
        i = -1 / 0,
        a = -1 / 0,
        o = -1 / 0;
      for (let s = 0, c = e.count; s < c; s++) {
        let c = e.getX(s),
          l = e.getY(s),
          u = e.getZ(s);
        (c < t && (t = c),
          l < n && (n = l),
          u < r && (r = u),
          c > i && (i = c),
          l > a && (a = l),
          u > o && (o = u));
      }
      return (this.min.set(t, n, r), this.max.set(i, a, o), this);
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = Jn.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    setFromObject(e) {
      return (this.makeEmpty(), this.expandByObject(e));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    expandByObject(e) {
      e.updateWorldMatrix(!1, !1);
      let t = e.geometry;
      t !== void 0 &&
        (t.boundingBox === null && t.computeBoundingBox(),
        Yn.copy(t.boundingBox),
        Yn.applyMatrix4(e.matrixWorld),
        this.union(Yn));
      let n = e.children;
      for (let e = 0, t = n.length; e < t; e++) this.expandByObject(n[e]);
      return this;
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y ||
        e.z < this.min.z ||
        e.z > this.max.z
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y &&
        this.min.z <= e.min.z &&
        e.max.z <= this.max.z
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y ||
        e.max.z < this.min.z ||
        e.min.z > this.max.z
      );
    }
    intersectsSphere(e) {
      return (
        this.clampPoint(e.center, Jn),
        Jn.distanceToSquared(e.center) <= e.radius * e.radius
      );
    }
    intersectsPlane(e) {
      let t, n;
      return (
        e.normal.x > 0
          ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
          : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
        e.normal.y > 0
          ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
          : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
        e.normal.z > 0
          ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
          : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
        t <= -e.constant && n >= -e.constant
      );
    }
    intersectsTriangle(e) {
      if (this.isEmpty()) return !1;
      (this.getCenter(nr),
        rr.subVectors(this.max, nr),
        Xn.subVectors(e.a, nr),
        Zn.subVectors(e.b, nr),
        Qn.subVectors(e.c, nr),
        $n.subVectors(Zn, Xn),
        er.subVectors(Qn, Zn),
        tr.subVectors(Xn, Qn));
      let t = [
        0,
        -$n.z,
        $n.y,
        0,
        -er.z,
        er.y,
        0,
        -tr.z,
        tr.y,
        $n.z,
        0,
        -$n.x,
        er.z,
        0,
        -er.x,
        tr.z,
        0,
        -tr.x,
        -$n.y,
        $n.x,
        0,
        -er.y,
        er.x,
        0,
        -tr.y,
        tr.x,
        0,
      ];
      return !or(t, Xn, Zn, Qn, rr) ||
        ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !or(t, Xn, Zn, Qn, rr))
        ? !1
        : (ir.crossVectors($n, er),
          (t = [ir.x, ir.y, ir.z]),
          or(t, Xn, Zn, Qn, rr));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return Jn.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    getBoundingSphere(e) {
      return (
        this.getCenter(e.center),
        (e.radius = this.getSize(Jn).length() * 0.5),
        e
      );
    }
    intersect(e) {
      return (
        this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    applyMatrix4(e) {
      return this.isEmpty()
        ? this
        : (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.setFromPoints(qn),
          this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  };
Kn.prototype.isBox3 = !0;
var qn = [
    new V(),
    new V(),
    new V(),
    new V(),
    new V(),
    new V(),
    new V(),
    new V(),
  ],
  Jn = new V(),
  Yn = new Kn(),
  Xn = new V(),
  Zn = new V(),
  Qn = new V(),
  $n = new V(),
  er = new V(),
  tr = new V(),
  nr = new V(),
  rr = new V(),
  ir = new V(),
  ar = new V();
function or(e, t, n, r, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    ar.fromArray(e, a);
    let o = i.x * Math.abs(ar.x) + i.y * Math.abs(ar.y) + i.z * Math.abs(ar.z),
      s = t.dot(ar),
      c = n.dot(ar),
      l = r.dot(ar);
    if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
  }
  return !0;
}
var sr = new Kn(),
  cr = new V(),
  lr = new V(),
  ur = new V(),
  dr = class {
    constructor(e = new V(), t = -1) {
      ((this.center = e), (this.radius = t));
    }
    set(e, t) {
      return (this.center.copy(e), (this.radius = t), this);
    }
    setFromPoints(e, t) {
      let n = this.center;
      t === void 0 ? sr.setFromPoints(e).getCenter(n) : n.copy(t);
      let r = 0;
      for (let t = 0, i = e.length; t < i; t++)
        r = Math.max(r, n.distanceToSquared(e[t]));
      return ((this.radius = Math.sqrt(r)), this);
    }
    copy(e) {
      return (this.center.copy(e.center), (this.radius = e.radius), this);
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return (this.center.set(0, 0, 0), (this.radius = -1), this);
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      let t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      let n = this.center.distanceToSquared(e);
      return (
        t.copy(e),
        n > this.radius * this.radius &&
          (t.sub(this.center).normalize(),
          t.multiplyScalar(this.radius).add(this.center)),
        t
      );
    }
    getBoundingBox(e) {
      return this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return (
        this.center.applyMatrix4(e),
        (this.radius *= e.getMaxScaleOnAxis()),
        this
      );
    }
    translate(e) {
      return (this.center.add(e), this);
    }
    expandByPoint(e) {
      ur.subVectors(e, this.center);
      let t = ur.lengthSq();
      if (t > this.radius * this.radius) {
        let e = Math.sqrt(t),
          n = (e - this.radius) * 0.5;
        (this.center.add(ur.multiplyScalar(n / e)), (this.radius += n));
      }
      return this;
    }
    union(e) {
      return (
        lr
          .subVectors(e.center, this.center)
          .normalize()
          .multiplyScalar(e.radius),
        this.expandByPoint(cr.copy(e.center).add(lr)),
        this.expandByPoint(cr.copy(e.center).sub(lr)),
        this
      );
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  fr = new V(),
  pr = new V(),
  mr = new V(),
  hr = new V(),
  gr = new V(),
  _r = new V(),
  vr = new V(),
  yr = class {
    constructor(e = new V(), t = new V(0, 0, -1)) {
      ((this.origin = e), (this.direction = t));
    }
    set(e, t) {
      return (this.origin.copy(e), this.direction.copy(t), this);
    }
    copy(e) {
      return (
        this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
      );
    }
    at(e, t) {
      return t.copy(this.direction).multiplyScalar(e).add(this.origin);
    }
    lookAt(e) {
      return (this.direction.copy(e).sub(this.origin).normalize(), this);
    }
    recast(e) {
      return (this.origin.copy(this.at(e, fr)), this);
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      let n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      let t = fr.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (fr.copy(this.direction).multiplyScalar(t).add(this.origin),
          fr.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, r) {
      (pr.copy(e).add(t).multiplyScalar(0.5),
        mr.copy(t).sub(e).normalize(),
        hr.copy(this.origin).sub(pr));
      let i = e.distanceTo(t) * 0.5,
        a = -this.direction.dot(mr),
        o = hr.dot(this.direction),
        s = -hr.dot(mr),
        c = hr.lengthSq(),
        l = Math.abs(1 - a * a),
        u,
        d,
        f,
        p;
      if (l > 0)
        if (((u = a * s - o), (d = a * o - s), (p = i * l), u >= 0))
          if (d >= -p)
            if (d <= p) {
              let e = 1 / l;
              ((u *= e),
                (d *= e),
                (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c));
            } else
              ((d = i),
                (u = Math.max(0, -(a * d + o))),
                (f = -u * u + d * (d + 2 * s) + c));
          else
            ((d = -i),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * s) + c));
        else
          d <= -p
            ? ((u = Math.max(0, -(-a * i + o))),
              (d = u > 0 ? -i : Math.min(Math.max(-i, -s), i)),
              (f = -u * u + d * (d + 2 * s) + c))
            : d <= p
              ? ((u = 0),
                (d = Math.min(Math.max(-i, -s), i)),
                (f = d * (d + 2 * s) + c))
              : ((u = Math.max(0, -(a * i + o))),
                (d = u > 0 ? i : Math.min(Math.max(-i, -s), i)),
                (f = -u * u + d * (d + 2 * s) + c));
      else
        ((d = a > 0 ? -i : i),
          (u = Math.max(0, -(a * d + o))),
          (f = -u * u + d * (d + 2 * s) + c));
      return (
        n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
        r && r.copy(mr).multiplyScalar(d).add(pr),
        f
      );
    }
    intersectSphere(e, t) {
      fr.subVectors(e.center, this.origin);
      let n = fr.dot(this.direction),
        r = fr.dot(fr) - n * n,
        i = e.radius * e.radius;
      if (r > i) return null;
      let a = Math.sqrt(i - r),
        o = n - a,
        s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction);
      if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c = 1 / this.direction.x,
        l = 1 / this.direction.y,
        u = 1 / this.direction.z,
        d = this.origin;
      return (
        c >= 0
          ? ((n = (e.min.x - d.x) * c), (r = (e.max.x - d.x) * c))
          : ((n = (e.max.x - d.x) * c), (r = (e.min.x - d.x) * c)),
        l >= 0
          ? ((i = (e.min.y - d.y) * l), (a = (e.max.y - d.y) * l))
          : ((i = (e.max.y - d.y) * l), (a = (e.min.y - d.y) * l)),
        n > a ||
        i > r ||
        ((i > n || n !== n) && (n = i),
        (a < r || r !== r) && (r = a),
        u >= 0
          ? ((o = (e.min.z - d.z) * u), (s = (e.max.z - d.z) * u))
          : ((o = (e.max.z - d.z) * u), (s = (e.min.z - d.z) * u)),
        n > s || o > r) ||
        ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0)
          ? null
          : this.at(n >= 0 ? n : r, t)
      );
    }
    intersectsBox(e) {
      return this.intersectBox(e, fr) !== null;
    }
    intersectTriangle(e, t, n, r, i) {
      (gr.subVectors(t, e), _r.subVectors(n, e), vr.crossVectors(gr, _r));
      let a = this.direction.dot(vr),
        o;
      if (a > 0) {
        if (r) return null;
        o = 1;
      } else if (a < 0) ((o = -1), (a = -a));
      else return null;
      hr.subVectors(this.origin, e);
      let s = o * this.direction.dot(_r.crossVectors(hr, _r));
      if (s < 0) return null;
      let c = o * this.direction.dot(gr.cross(hr));
      if (c < 0 || s + c > a) return null;
      let l = -o * hr.dot(vr);
      return l < 0 ? null : this.at(l / a, i);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  H = class e {
    constructor() {
      ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            `THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.`,
          ));
    }
    set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
      let g = this.elements;
      return (
        (g[0] = e),
        (g[4] = t),
        (g[8] = n),
        (g[12] = r),
        (g[1] = i),
        (g[5] = a),
        (g[9] = o),
        (g[13] = s),
        (g[2] = c),
        (g[6] = l),
        (g[10] = u),
        (g[14] = d),
        (g[3] = f),
        (g[7] = p),
        (g[11] = m),
        (g[15] = h),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    clone() {
      return new e().fromArray(this.elements);
    }
    copy(e) {
      let t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        (t[9] = n[9]),
        (t[10] = n[10]),
        (t[11] = n[11]),
        (t[12] = n[12]),
        (t[13] = n[13]),
        (t[14] = n[14]),
        (t[15] = n[15]),
        this
      );
    }
    copyPosition(e) {
      let t = this.elements,
        n = e.elements;
      return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
    }
    setFromMatrix3(e) {
      let t = e.elements;
      return (
        this.set(
          t[0],
          t[3],
          t[6],
          0,
          t[1],
          t[4],
          t[7],
          0,
          t[2],
          t[5],
          t[8],
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
      );
    }
    makeBasis(e, t, n) {
      return (
        this.set(
          e.x,
          t.x,
          n.x,
          0,
          e.y,
          t.y,
          n.y,
          0,
          e.z,
          t.z,
          n.z,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    extractRotation(e) {
      let t = this.elements,
        n = e.elements,
        r = 1 / br.setFromMatrixColumn(e, 0).length(),
        i = 1 / br.setFromMatrixColumn(e, 1).length(),
        a = 1 / br.setFromMatrixColumn(e, 2).length();
      return (
        (t[0] = n[0] * r),
        (t[1] = n[1] * r),
        (t[2] = n[2] * r),
        (t[3] = 0),
        (t[4] = n[4] * i),
        (t[5] = n[5] * i),
        (t[6] = n[6] * i),
        (t[7] = 0),
        (t[8] = n[8] * a),
        (t[9] = n[9] * a),
        (t[10] = n[10] * a),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromEuler(e) {
      (e && e.isEuler) ||
        console.error(
          `THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.`,
        );
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        a = Math.cos(n),
        o = Math.sin(n),
        s = Math.cos(r),
        c = Math.sin(r),
        l = Math.cos(i),
        u = Math.sin(i);
      if (e.order === `XYZ`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = -s * u),
          (t[8] = c),
          (t[1] = n + r * c),
          (t[5] = e - i * c),
          (t[9] = -o * s),
          (t[2] = i - e * c),
          (t[6] = r + n * c),
          (t[10] = a * s));
      } else if (e.order === `YXZ`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e + i * o),
          (t[4] = r * o - n),
          (t[8] = a * c),
          (t[1] = a * u),
          (t[5] = a * l),
          (t[9] = -o),
          (t[2] = n * o - r),
          (t[6] = i + e * o),
          (t[10] = a * s));
      } else if (e.order === `ZXY`) {
        let e = s * l,
          n = s * u,
          r = c * l,
          i = c * u;
        ((t[0] = e - i * o),
          (t[4] = -a * u),
          (t[8] = r + n * o),
          (t[1] = n + r * o),
          (t[5] = a * l),
          (t[9] = i - e * o),
          (t[2] = -a * c),
          (t[6] = o),
          (t[10] = a * s));
      } else if (e.order === `ZYX`) {
        let e = a * l,
          n = a * u,
          r = o * l,
          i = o * u;
        ((t[0] = s * l),
          (t[4] = r * c - n),
          (t[8] = e * c + i),
          (t[1] = s * u),
          (t[5] = i * c + e),
          (t[9] = n * c - r),
          (t[2] = -c),
          (t[6] = o * s),
          (t[10] = a * s));
      } else if (e.order === `YZX`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = i - e * u),
          (t[8] = r * u + n),
          (t[1] = u),
          (t[5] = a * l),
          (t[9] = -o * l),
          (t[2] = -c * l),
          (t[6] = n * u + r),
          (t[10] = e - i * u));
      } else if (e.order === `XZY`) {
        let e = a * s,
          n = a * c,
          r = o * s,
          i = o * c;
        ((t[0] = s * l),
          (t[4] = -u),
          (t[8] = c * l),
          (t[1] = e * u + i),
          (t[5] = a * l),
          (t[9] = n * u - r),
          (t[2] = r * u - n),
          (t[6] = o * l),
          (t[10] = i * u + e));
      }
      return (
        (t[3] = 0),
        (t[7] = 0),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        this
      );
    }
    makeRotationFromQuaternion(e) {
      return this.compose(Sr, e, Cr);
    }
    lookAt(e, t, n) {
      let r = this.elements;
      return (
        Er.subVectors(e, t),
        Er.lengthSq() === 0 && (Er.z = 1),
        Er.normalize(),
        wr.crossVectors(n, Er),
        wr.lengthSq() === 0 &&
          (Math.abs(n.z) === 1 ? (Er.x += 1e-4) : (Er.z += 1e-4),
          Er.normalize(),
          wr.crossVectors(n, Er)),
        wr.normalize(),
        Tr.crossVectors(Er, wr),
        (r[0] = wr.x),
        (r[4] = Tr.x),
        (r[8] = Er.x),
        (r[1] = wr.y),
        (r[5] = Tr.y),
        (r[9] = Er.y),
        (r[2] = wr.z),
        (r[6] = Tr.z),
        (r[10] = Er.z),
        this
      );
    }
    multiply(e, t) {
      return t === void 0
        ? this.multiplyMatrices(this, e)
        : (console.warn(
            `THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.`,
          ),
          this.multiplyMatrices(e, t));
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      let n = e.elements,
        r = t.elements,
        i = this.elements,
        a = n[0],
        o = n[4],
        s = n[8],
        c = n[12],
        l = n[1],
        u = n[5],
        d = n[9],
        f = n[13],
        p = n[2],
        m = n[6],
        h = n[10],
        g = n[14],
        _ = n[3],
        v = n[7],
        y = n[11],
        b = n[15],
        x = r[0],
        S = r[4],
        C = r[8],
        w = r[12],
        T = r[1],
        E = r[5],
        D = r[9],
        O = r[13],
        ee = r[2],
        te = r[6],
        k = r[10],
        A = r[14],
        j = r[3],
        M = r[7],
        N = r[11],
        ne = r[15];
      return (
        (i[0] = a * x + o * T + s * ee + c * j),
        (i[4] = a * S + o * E + s * te + c * M),
        (i[8] = a * C + o * D + s * k + c * N),
        (i[12] = a * w + o * O + s * A + c * ne),
        (i[1] = l * x + u * T + d * ee + f * j),
        (i[5] = l * S + u * E + d * te + f * M),
        (i[9] = l * C + u * D + d * k + f * N),
        (i[13] = l * w + u * O + d * A + f * ne),
        (i[2] = p * x + m * T + h * ee + g * j),
        (i[6] = p * S + m * E + h * te + g * M),
        (i[10] = p * C + m * D + h * k + g * N),
        (i[14] = p * w + m * O + h * A + g * ne),
        (i[3] = _ * x + v * T + y * ee + b * j),
        (i[7] = _ * S + v * E + y * te + b * M),
        (i[11] = _ * C + v * D + y * k + b * N),
        (i[15] = _ * w + v * O + y * A + b * ne),
        this
      );
    }
    multiplyScalar(e) {
      let t = this.elements;
      return (
        (t[0] *= e),
        (t[4] *= e),
        (t[8] *= e),
        (t[12] *= e),
        (t[1] *= e),
        (t[5] *= e),
        (t[9] *= e),
        (t[13] *= e),
        (t[2] *= e),
        (t[6] *= e),
        (t[10] *= e),
        (t[14] *= e),
        (t[3] *= e),
        (t[7] *= e),
        (t[11] *= e),
        (t[15] *= e),
        this
      );
    }
    determinant() {
      let e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        a = e[1],
        o = e[5],
        s = e[9],
        c = e[13],
        l = e[2],
        u = e[6],
        d = e[10],
        f = e[14],
        p = e[3],
        m = e[7],
        h = e[11],
        g = e[15];
      return (
        p *
          (+i * s * u -
            r * c * u -
            i * o * d +
            n * c * d +
            r * o * f -
            n * s * f) +
        m *
          (+t * s * f -
            t * c * d +
            i * a * d -
            r * a * f +
            r * c * l -
            i * s * l) +
        h *
          (+t * c * u -
            t * o * f -
            i * a * u +
            n * a * f +
            i * o * l -
            n * c * l) +
        g *
          (-r * o * l -
            t * s * u +
            t * o * d +
            r * a * u -
            n * a * d +
            n * s * l)
      );
    }
    transpose() {
      let e = this.elements,
        t;
      return (
        (t = e[1]),
        (e[1] = e[4]),
        (e[4] = t),
        (t = e[2]),
        (e[2] = e[8]),
        (e[8] = t),
        (t = e[6]),
        (e[6] = e[9]),
        (e[9] = t),
        (t = e[3]),
        (e[3] = e[12]),
        (e[12] = t),
        (t = e[7]),
        (e[7] = e[13]),
        (e[13] = t),
        (t = e[11]),
        (e[11] = e[14]),
        (e[14] = t),
        this
      );
    }
    setPosition(e, t, n) {
      let r = this.elements;
      return (
        e.isVector3
          ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
          : ((r[12] = e), (r[13] = t), (r[14] = n)),
        this
      );
    }
    invert() {
      let e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        c = e[7],
        l = e[8],
        u = e[9],
        d = e[10],
        f = e[11],
        p = e[12],
        m = e[13],
        h = e[14],
        g = e[15],
        _ =
          u * h * c - m * d * c + m * s * f - o * h * f - u * s * g + o * d * g,
        v =
          p * d * c - l * h * c - p * s * f + a * h * f + l * s * g - a * d * g,
        y =
          l * m * c - p * u * c + p * o * f - a * m * f - l * o * g + a * u * g,
        b =
          p * u * s - l * m * s - p * o * d + a * m * d + l * o * h - a * u * h,
        x = t * _ + n * v + r * y + i * b;
      if (x === 0)
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      let S = 1 / x;
      return (
        (e[0] = _ * S),
        (e[1] =
          (m * d * i -
            u * h * i -
            m * r * f +
            n * h * f +
            u * r * g -
            n * d * g) *
          S),
        (e[2] =
          (o * h * i -
            m * s * i +
            m * r * c -
            n * h * c -
            o * r * g +
            n * s * g) *
          S),
        (e[3] =
          (u * s * i -
            o * d * i -
            u * r * c +
            n * d * c +
            o * r * f -
            n * s * f) *
          S),
        (e[4] = v * S),
        (e[5] =
          (l * h * i -
            p * d * i +
            p * r * f -
            t * h * f -
            l * r * g +
            t * d * g) *
          S),
        (e[6] =
          (p * s * i -
            a * h * i -
            p * r * c +
            t * h * c +
            a * r * g -
            t * s * g) *
          S),
        (e[7] =
          (a * d * i -
            l * s * i +
            l * r * c -
            t * d * c -
            a * r * f +
            t * s * f) *
          S),
        (e[8] = y * S),
        (e[9] =
          (p * u * i -
            l * m * i -
            p * n * f +
            t * m * f +
            l * n * g -
            t * u * g) *
          S),
        (e[10] =
          (a * m * i -
            p * o * i +
            p * n * c -
            t * m * c -
            a * n * g +
            t * o * g) *
          S),
        (e[11] =
          (l * o * i -
            a * u * i -
            l * n * c +
            t * u * c +
            a * n * f -
            t * o * f) *
          S),
        (e[12] = b * S),
        (e[13] =
          (l * m * r -
            p * u * r +
            p * n * d -
            t * m * d -
            l * n * h +
            t * u * h) *
          S),
        (e[14] =
          (p * o * r -
            a * m * r -
            p * n * s +
            t * m * s +
            a * n * h -
            t * o * h) *
          S),
        (e[15] =
          (a * u * r -
            l * o * r +
            l * n * s -
            t * u * s -
            a * n * d +
            t * o * d) *
          S),
        this
      );
    }
    scale(e) {
      let t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z;
      return (
        (t[0] *= n),
        (t[4] *= r),
        (t[8] *= i),
        (t[1] *= n),
        (t[5] *= r),
        (t[9] *= i),
        (t[2] *= n),
        (t[6] *= r),
        (t[10] *= i),
        (t[3] *= n),
        (t[7] *= r),
        (t[11] *= i),
        this
      );
    }
    getMaxScaleOnAxis() {
      let e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
    makeTranslation(e, t, n) {
      return (this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this);
    }
    makeRotationX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
    }
    makeRotationZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
    }
    makeRotationAxis(e, t) {
      let n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        a = e.x,
        o = e.y,
        s = e.z,
        c = i * a,
        l = i * o;
      return (
        this.set(
          c * a + n,
          c * o - r * s,
          c * s + r * o,
          0,
          c * o + r * s,
          l * o + n,
          l * s - r * a,
          0,
          c * s - r * o,
          l * s + r * a,
          i * s * s + n,
          0,
          0,
          0,
          0,
          1,
        ),
        this
      );
    }
    makeScale(e, t, n) {
      return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
    }
    makeShear(e, t, n, r, i, a) {
      return (this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this);
    }
    compose(e, t, n) {
      let r = this.elements,
        i = t._x,
        a = t._y,
        o = t._z,
        s = t._w,
        c = i + i,
        l = a + a,
        u = o + o,
        d = i * c,
        f = i * l,
        p = i * u,
        m = a * l,
        h = a * u,
        g = o * u,
        _ = s * c,
        v = s * l,
        y = s * u,
        b = n.x,
        x = n.y,
        S = n.z;
      return (
        (r[0] = (1 - (m + g)) * b),
        (r[1] = (f + y) * b),
        (r[2] = (p - v) * b),
        (r[3] = 0),
        (r[4] = (f - y) * x),
        (r[5] = (1 - (d + g)) * x),
        (r[6] = (h + _) * x),
        (r[7] = 0),
        (r[8] = (p + v) * S),
        (r[9] = (h - _) * S),
        (r[10] = (1 - (d + m)) * S),
        (r[11] = 0),
        (r[12] = e.x),
        (r[13] = e.y),
        (r[14] = e.z),
        (r[15] = 1),
        this
      );
    }
    decompose(e, t, n) {
      let r = this.elements,
        i = br.set(r[0], r[1], r[2]).length(),
        a = br.set(r[4], r[5], r[6]).length(),
        o = br.set(r[8], r[9], r[10]).length();
      (this.determinant() < 0 && (i = -i),
        (e.x = r[12]),
        (e.y = r[13]),
        (e.z = r[14]),
        xr.copy(this));
      let s = 1 / i,
        c = 1 / a,
        l = 1 / o;
      return (
        (xr.elements[0] *= s),
        (xr.elements[1] *= s),
        (xr.elements[2] *= s),
        (xr.elements[4] *= c),
        (xr.elements[5] *= c),
        (xr.elements[6] *= c),
        (xr.elements[8] *= l),
        (xr.elements[9] *= l),
        (xr.elements[10] *= l),
        t.setFromRotationMatrix(xr),
        (n.x = i),
        (n.y = a),
        (n.z = o),
        this
      );
    }
    makePerspective(e, t, n, r, i, a) {
      a === void 0 &&
        console.warn(
          `THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.`,
        );
      let o = this.elements,
        s = (2 * i) / (t - e),
        c = (2 * i) / (n - r),
        l = (t + e) / (t - e),
        u = (n + r) / (n - r),
        d = -(a + i) / (a - i),
        f = (-2 * a * i) / (a - i);
      return (
        (o[0] = s),
        (o[4] = 0),
        (o[8] = l),
        (o[12] = 0),
        (o[1] = 0),
        (o[5] = c),
        (o[9] = u),
        (o[13] = 0),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = d),
        (o[14] = f),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = -1),
        (o[15] = 0),
        this
      );
    }
    makeOrthographic(e, t, n, r, i, a) {
      let o = this.elements,
        s = 1 / (t - e),
        c = 1 / (n - r),
        l = 1 / (a - i),
        u = (t + e) * s,
        d = (n + r) * c,
        f = (a + i) * l;
      return (
        (o[0] = 2 * s),
        (o[4] = 0),
        (o[8] = 0),
        (o[12] = -u),
        (o[1] = 0),
        (o[5] = 2 * c),
        (o[9] = 0),
        (o[13] = -d),
        (o[2] = 0),
        (o[6] = 0),
        (o[10] = -2 * l),
        (o[14] = -f),
        (o[3] = 0),
        (o[7] = 0),
        (o[11] = 0),
        (o[15] = 1),
        this
      );
    }
    equals(e) {
      let t = this.elements,
        n = e.elements;
      for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      let n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        (e[t + 9] = n[9]),
        (e[t + 10] = n[10]),
        (e[t + 11] = n[11]),
        (e[t + 12] = n[12]),
        (e[t + 13] = n[13]),
        (e[t + 14] = n[14]),
        (e[t + 15] = n[15]),
        e
      );
    }
  };
H.prototype.isMatrix4 = !0;
var br = new V(),
  xr = new H(),
  Sr = new V(0, 0, 0),
  Cr = new V(1, 1, 1),
  wr = new V(),
  Tr = new V(),
  Er = new V(),
  Dr = new H(),
  Or = new Un(),
  kr = class e {
    constructor(t = 0, n = 0, r = 0, i = e.DefaultOrder) {
      ((this._x = t), (this._y = n), (this._z = r), (this._order = i));
    }
    get x() {
      return this._x;
    }
    set x(e) {
      ((this._x = e), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(e) {
      ((this._y = e), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(e) {
      ((this._z = e), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(e) {
      ((this._order = e), this._onChangeCallback());
    }
    set(e, t, n, r = this._order) {
      return (
        (this._x = e),
        (this._y = t),
        (this._z = n),
        (this._order = r),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return (
        (this._x = e._x),
        (this._y = e._y),
        (this._z = e._z),
        (this._order = e._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      let r = e.elements,
        i = r[0],
        a = r[4],
        o = r[8],
        s = r[1],
        c = r[5],
        l = r[9],
        u = r[2],
        d = r[6],
        f = r[10];
      switch (t) {
        case `XYZ`:
          ((this._y = Math.asin(ln(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-l, f)), (this._z = Math.atan2(-a, i)))
              : ((this._x = Math.atan2(d, c)), (this._z = 0)));
          break;
        case `YXZ`:
          ((this._x = Math.asin(-ln(l, -1, 1))),
            Math.abs(l) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(s, c)))
              : ((this._y = Math.atan2(-u, i)), (this._z = 0)));
          break;
        case `ZXY`:
          ((this._x = Math.asin(ln(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
              : ((this._y = 0), (this._z = Math.atan2(s, i))));
          break;
        case `ZYX`:
          ((this._y = Math.asin(-ln(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(s, i)))
              : ((this._x = 0), (this._z = Math.atan2(-a, c))));
          break;
        case `YZX`:
          ((this._z = Math.asin(ln(s, -1, 1))),
            Math.abs(s) < 0.9999999
              ? ((this._x = Math.atan2(-l, c)), (this._y = Math.atan2(-u, i)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case `XZY`:
          ((this._z = Math.asin(-ln(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, i)))
              : ((this._x = Math.atan2(-l, f)), (this._y = 0)));
          break;
        default:
          console.warn(
            `THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ` +
              t,
          );
      }
      return ((this._order = t), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(e, t, n) {
      return (
        Dr.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(Dr, t, n)
      );
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return (Or.setFromEuler(this), this.setFromQuaternion(Or, e));
    }
    equals(e) {
      return (
        e._x === this._x &&
        e._y === this._y &&
        e._z === this._z &&
        e._order === this._order
      );
    }
    fromArray(e) {
      return (
        (this._x = e[0]),
        (this._y = e[1]),
        (this._z = e[2]),
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this._x),
        (e[t + 1] = this._y),
        (e[t + 2] = this._z),
        (e[t + 3] = this._order),
        e
      );
    }
    toVector3(e) {
      return e
        ? e.set(this._x, this._y, this._z)
        : new V(this._x, this._y, this._z);
    }
    _onChange(e) {
      return ((this._onChangeCallback = e), this);
    }
    _onChangeCallback() {}
  };
((kr.prototype.isEuler = !0),
  (kr.DefaultOrder = `XYZ`),
  (kr.RotationOrders = [`XYZ`, `YZX`, `ZXY`, `XZY`, `YXZ`, `ZYX`]));
var Ar = class {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = (1 << e) | 0;
    }
    enable(e) {
      this.mask |= (1 << e) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= (1 << e) | 0;
    }
    disable(e) {
      this.mask &= ~((1 << e) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
  },
  jr = 0,
  Mr = new V(),
  Nr = new Un(),
  Pr = new H(),
  Fr = new V(),
  Ir = new V(),
  Lr = new V(),
  Rr = new Un(),
  zr = new V(1, 0, 0),
  Br = new V(0, 1, 0),
  Vr = new V(0, 0, 1),
  Hr = { type: `added` },
  Ur = { type: `removed` },
  U = class e extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, `id`, { value: jr++ }),
        (this.uuid = cn()),
        (this.name = ``),
        (this.type = `Object3D`),
        (this.parent = null),
        (this.children = []),
        (this.up = e.DefaultUp.clone()));
      let t = new V(),
        n = new kr(),
        r = new Un(),
        i = new V(1, 1, 1);
      function a() {
        r.setFromEuler(n, !1);
      }
      function o() {
        n.setFromQuaternion(r, void 0, !1);
      }
      (n._onChange(a),
        r._onChange(o),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: n },
          quaternion: { configurable: !0, enumerable: !0, value: r },
          scale: { configurable: !0, enumerable: !0, value: i },
          modelViewMatrix: { value: new H() },
          normalMatrix: { value: new kn() },
        }),
        (this.matrix = new H()),
        (this.matrixWorld = new H()),
        (this.matrixAutoUpdate = e.DefaultMatrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new Ar()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.userData = {}));
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(e) {
      return (this.quaternion.premultiply(e), this);
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return (Nr.setFromAxisAngle(e, t), this.quaternion.multiply(Nr), this);
    }
    rotateOnWorldAxis(e, t) {
      return (Nr.setFromAxisAngle(e, t), this.quaternion.premultiply(Nr), this);
    }
    rotateX(e) {
      return this.rotateOnAxis(zr, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Br, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis(Vr, e);
    }
    translateOnAxis(e, t) {
      return (
        Mr.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Mr.multiplyScalar(t)),
        this
      );
    }
    translateX(e) {
      return this.translateOnAxis(zr, e);
    }
    translateY(e) {
      return this.translateOnAxis(Br, e);
    }
    translateZ(e) {
      return this.translateOnAxis(Vr, e);
    }
    localToWorld(e) {
      return e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return e.applyMatrix4(Pr.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? Fr.copy(e) : Fr.set(e, t, n);
      let r = this.parent;
      (this.updateWorldMatrix(!0, !1),
        Ir.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? Pr.lookAt(Ir, Fr, this.up)
          : Pr.lookAt(Fr, Ir, this.up),
        this.quaternion.setFromRotationMatrix(Pr),
        r &&
          (Pr.extractRotation(r.matrixWorld),
          Nr.setFromRotationMatrix(Pr),
          this.quaternion.premultiply(Nr.invert())));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return e === this
        ? (console.error(
            `THREE.Object3D.add: object can't be added as a child of itself.`,
            e,
          ),
          this)
        : (e && e.isObject3D
            ? (e.parent !== null && e.parent.remove(e),
              (e.parent = this),
              this.children.push(e),
              e.dispatchEvent(Hr))
            : console.error(
                `THREE.Object3D.add: object not an instance of THREE.Object3D.`,
                e,
              ),
          this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this;
      }
      let t = this.children.indexOf(e);
      return (
        t !== -1 &&
          ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Ur)),
        this
      );
    }
    removeFromParent() {
      let e = this.parent;
      return (e !== null && e.remove(this), this);
    }
    clear() {
      for (let e = 0; e < this.children.length; e++) {
        let t = this.children[e];
        ((t.parent = null), t.dispatchEvent(Ur));
      }
      return ((this.children.length = 0), this);
    }
    attach(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        Pr.copy(this.matrixWorld).invert(),
        e.parent !== null &&
          (e.parent.updateWorldMatrix(!0, !1),
          Pr.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Pr),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
      );
    }
    getObjectById(e) {
      return this.getObjectByProperty(`id`, e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty(`name`, e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, r = this.children.length; n < r; n++) {
        let r = this.children[n].getObjectByProperty(e, t);
        if (r !== void 0) return r;
      }
    }
    getWorldPosition(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ir, e, Lr),
        e
      );
    }
    getWorldScale(e) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Ir, Rr, e),
        e
      );
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      let t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      let t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      (this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0));
    }
    updateMatrixWorld(e) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              ),
          (this.matrixWorldNeedsUpdate = !1),
          (e = !0)));
      let t = this.children;
      for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
      let n = this.parent;
      if (
        (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            ),
        t === !0)
      ) {
        let e = this.children;
        for (let t = 0, n = e.length; t < n; t++)
          e[t].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`,
        n = {};
      t &&
        ((e = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
        }),
        (n.metadata = {
          version: 4.5,
          type: `Object`,
          generator: `Object3D.toJSON`,
        }));
      let r = {};
      ((r.uuid = this.uuid),
        (r.type = this.type),
        this.name !== `` && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        JSON.stringify(this.userData) !== `{}` && (r.userData = this.userData),
        (r.layers = this.layers.mask),
        (r.matrix = this.matrix.toArray()),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh &&
          ((r.type = `InstancedMesh`),
          (r.count = this.count),
          (r.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (r.instanceColor = this.instanceColor.toJSON())));
      function i(t, n) {
        return (t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (r.background = this.background.toJSON())
            : this.background.isTexture &&
              (r.background = this.background.toJSON(e).uuid)),
          this.environment &&
            this.environment.isTexture &&
            (r.environment = this.environment.toJSON(e).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        let t = this.geometry.parameters;
        if (t !== void 0 && t.shapes !== void 0) {
          let n = t.shapes;
          if (Array.isArray(n))
            for (let t = 0, r = n.length; t < r; t++) {
              let r = n[t];
              i(e.shapes, r);
            }
          else i(e.shapes, n);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((r.bindMode = this.bindMode),
          (r.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (i(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      )
        if (Array.isArray(this.material)) {
          let t = [];
          for (let n = 0, r = this.material.length; n < r; n++)
            t.push(i(e.materials, this.material[n]));
          r.material = t;
        } else r.material = i(e.materials, this.material);
      if (this.children.length > 0) {
        r.children = [];
        for (let t = 0; t < this.children.length; t++)
          r.children.push(this.children[t].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        r.animations = [];
        for (let t = 0; t < this.animations.length; t++) {
          let n = this.animations[t];
          r.animations.push(i(e.animations, n));
        }
      }
      if (t) {
        let t = a(e.geometries),
          r = a(e.materials),
          i = a(e.textures),
          o = a(e.images),
          s = a(e.shapes),
          c = a(e.skeletons),
          l = a(e.animations);
        (t.length > 0 && (n.geometries = t),
          r.length > 0 && (n.materials = r),
          i.length > 0 && (n.textures = i),
          o.length > 0 && (n.images = o),
          s.length > 0 && (n.shapes = s),
          c.length > 0 && (n.skeletons = c),
          l.length > 0 && (n.animations = l));
      }
      return ((n.object = r), n);
      function a(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (
        ((this.name = e.name),
        this.up.copy(e.up),
        this.position.copy(e.position),
        (this.rotation.order = e.rotation.order),
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
        (this.layers.mask = e.layers.mask),
        (this.visible = e.visible),
        (this.castShadow = e.castShadow),
        (this.receiveShadow = e.receiveShadow),
        (this.frustumCulled = e.frustumCulled),
        (this.renderOrder = e.renderOrder),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        t === !0)
      )
        for (let t = 0; t < e.children.length; t++) {
          let n = e.children[t];
          this.add(n.clone());
        }
      return this;
    }
  };
((U.DefaultUp = new V(0, 1, 0)),
  (U.DefaultMatrixAutoUpdate = !0),
  (U.prototype.isObject3D = !0));
var Wr = new V(),
  Gr = new V(),
  Kr = new V(),
  qr = new V(),
  Jr = new V(),
  Yr = new V(),
  Xr = new V(),
  Zr = new V(),
  Qr = new V(),
  $r = new V(),
  ei = class e {
    constructor(e = new V(), t = new V(), n = new V()) {
      ((this.a = e), (this.b = t), (this.c = n));
    }
    static getNormal(e, t, n, r) {
      (r.subVectors(n, t), Wr.subVectors(e, t), r.cross(Wr));
      let i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, r, i) {
      (Wr.subVectors(r, t), Gr.subVectors(n, t), Kr.subVectors(e, t));
      let a = Wr.dot(Wr),
        o = Wr.dot(Gr),
        s = Wr.dot(Kr),
        c = Gr.dot(Gr),
        l = Gr.dot(Kr),
        u = a * c - o * o;
      if (u === 0) return i.set(-2, -1, -1);
      let d = 1 / u,
        f = (c * s - o * l) * d,
        p = (a * l - o * s) * d;
      return i.set(1 - f - p, p, f);
    }
    static containsPoint(e, t, n, r) {
      return (
        this.getBarycoord(e, t, n, r, qr),
        qr.x >= 0 && qr.y >= 0 && qr.x + qr.y <= 1
      );
    }
    static getUV(e, t, n, r, i, a, o, s) {
      return (
        this.getBarycoord(e, t, n, r, qr),
        s.set(0, 0),
        s.addScaledVector(i, qr.x),
        s.addScaledVector(a, qr.y),
        s.addScaledVector(o, qr.z),
        s
      );
    }
    static isFrontFacing(e, t, n, r) {
      return (
        Wr.subVectors(n, t),
        Gr.subVectors(e, t),
        Wr.cross(Gr).dot(r) < 0
      );
    }
    set(e, t, n) {
      return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
    }
    setFromPointsAndIndices(e, t, n, r) {
      return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this);
    }
    setFromAttributeAndIndices(e, t, n, r) {
      return (
        this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
    }
    getArea() {
      return (
        Wr.subVectors(this.c, this.b),
        Gr.subVectors(this.a, this.b),
        Wr.cross(Gr).length() * 0.5
      );
    }
    getMidpoint(e) {
      return e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, n) {
      return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
    getUV(t, n, r, i, a) {
      return e.getUV(t, this.a, this.b, this.c, n, r, i, a);
    }
    containsPoint(t) {
      return e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      let n = this.a,
        r = this.b,
        i = this.c,
        a,
        o;
      (Jr.subVectors(r, n), Yr.subVectors(i, n), Zr.subVectors(e, n));
      let s = Jr.dot(Zr),
        c = Yr.dot(Zr);
      if (s <= 0 && c <= 0) return t.copy(n);
      Qr.subVectors(e, r);
      let l = Jr.dot(Qr),
        u = Yr.dot(Qr);
      if (l >= 0 && u <= l) return t.copy(r);
      let d = s * u - l * c;
      if (d <= 0 && s >= 0 && l <= 0)
        return ((a = s / (s - l)), t.copy(n).addScaledVector(Jr, a));
      $r.subVectors(e, i);
      let f = Jr.dot($r),
        p = Yr.dot($r);
      if (p >= 0 && f <= p) return t.copy(i);
      let m = f * c - s * p;
      if (m <= 0 && c >= 0 && p <= 0)
        return ((o = c / (c - p)), t.copy(n).addScaledVector(Yr, o));
      let h = l * p - f * u;
      if (h <= 0 && u - l >= 0 && f - p >= 0)
        return (
          Xr.subVectors(i, r),
          (o = (u - l) / (u - l + (f - p))),
          t.copy(r).addScaledVector(Xr, o)
        );
      let g = 1 / (h + m + d);
      return (
        (a = m * g),
        (o = d * g),
        t.copy(n).addScaledVector(Jr, a).addScaledVector(Yr, o)
      );
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  },
  ti = 0,
  ni = class extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, `id`, { value: ti++ }),
        (this.uuid = cn()),
        (this.name = ``),
        (this.type = `Material`),
        (this.fog = !0),
        (this.blending = 1),
        (this.side = 0),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.format = ye),
        (this.transparent = !1),
        (this.blendSrc = 204),
        (this.blendDst = 205),
        (this.blendEquation = 100),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.depthFunc = 3),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = 519),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = Rt),
        (this.stencilZFail = Rt),
        (this.stencilZPass = Rt),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0));
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0)
        for (let t in e) {
          let n = e[t];
          if (n === void 0) {
            console.warn(`THREE.Material: '` + t + `' parameter is undefined.`);
            continue;
          }
          if (t === `shading`) {
            (console.warn(
              `THREE.` +
                this.type +
                `: .shading has been removed. Use the boolean .flatShading instead.`,
            ),
              (this.flatShading = n === 1));
            continue;
          }
          let r = this[t];
          if (r === void 0) {
            console.warn(
              `THREE.` +
                this.type +
                `: '` +
                t +
                `' is not a property of this material.`,
            );
            continue;
          }
          r && r.isColor
            ? r.set(n)
            : r && r.isVector3 && n && n.isVector3
              ? r.copy(n)
              : (this[t] = n);
        }
    }
    toJSON(e) {
      let t = e === void 0 || typeof e == `string`;
      t && (e = { textures: {}, images: {} });
      let n = {
        metadata: {
          version: 4.5,
          type: `Material`,
          generator: `Material.toJSON`,
        },
      };
      ((n.uuid = this.uuid),
        (n.type = this.type),
        this.name !== `` && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity &&
          this.emissiveIntensity !== 1 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(e).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(e).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(e).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(e).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== 1 && (n.blending = this.blending),
        this.side !== 0 && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.format !== 1023 && (n.format = this.format),
        this.transparent === !0 && (n.transparent = this.transparent),
        (n.depthFunc = this.depthFunc),
        (n.depthTest = this.depthTest),
        (n.depthWrite = this.depthWrite),
        (n.colorWrite = this.colorWrite),
        (n.stencilWrite = this.stencilWrite),
        (n.stencilWriteMask = this.stencilWriteMask),
        (n.stencilFunc = this.stencilFunc),
        (n.stencilRef = this.stencilRef),
        (n.stencilFuncMask = this.stencilFuncMask),
        (n.stencilFail = this.stencilFail),
        (n.stencilZFail = this.stencilZFail),
        (n.stencilZPass = this.stencilZPass),
        this.rotation && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth &&
          this.linewidth !== 1 &&
          (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaToCoverage === !0 &&
          (n.alphaToCoverage = this.alphaToCoverage),
        this.premultipliedAlpha === !0 &&
          (n.premultipliedAlpha = this.premultipliedAlpha),
        this.wireframe === !0 && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== `round` &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== `round` &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = this.flatShading),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        JSON.stringify(this.userData) !== `{}` && (n.userData = this.userData));
      function r(e) {
        let t = [];
        for (let n in e) {
          let r = e[n];
          (delete r.metadata, t.push(r));
        }
        return t;
      }
      if (t) {
        let t = r(e.textures),
          i = r(e.images);
        (t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i));
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.name = e.name),
        (this.fog = e.fog),
        (this.blending = e.blending),
        (this.side = e.side),
        (this.vertexColors = e.vertexColors),
        (this.opacity = e.opacity),
        (this.format = e.format),
        (this.transparent = e.transparent),
        (this.blendSrc = e.blendSrc),
        (this.blendDst = e.blendDst),
        (this.blendEquation = e.blendEquation),
        (this.blendSrcAlpha = e.blendSrcAlpha),
        (this.blendDstAlpha = e.blendDstAlpha),
        (this.blendEquationAlpha = e.blendEquationAlpha),
        (this.depthFunc = e.depthFunc),
        (this.depthTest = e.depthTest),
        (this.depthWrite = e.depthWrite),
        (this.stencilWriteMask = e.stencilWriteMask),
        (this.stencilFunc = e.stencilFunc),
        (this.stencilRef = e.stencilRef),
        (this.stencilFuncMask = e.stencilFuncMask),
        (this.stencilFail = e.stencilFail),
        (this.stencilZFail = e.stencilZFail),
        (this.stencilZPass = e.stencilZPass),
        (this.stencilWrite = e.stencilWrite));
      let t = e.clippingPlanes,
        n = null;
      if (t !== null) {
        let e = t.length;
        n = Array(e);
        for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = e.clipIntersection),
        (this.clipShadows = e.clipShadows),
        (this.shadowSide = e.shadowSide),
        (this.colorWrite = e.colorWrite),
        (this.precision = e.precision),
        (this.polygonOffset = e.polygonOffset),
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
        (this.dithering = e.dithering),
        (this.alphaTest = e.alphaTest),
        (this.alphaToCoverage = e.alphaToCoverage),
        (this.premultipliedAlpha = e.premultipliedAlpha),
        (this.visible = e.visible),
        (this.toneMapped = e.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
  };
ni.prototype.isMaterial = !0;
var ri = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ii = { h: 0, s: 0, l: 0 },
  ai = { h: 0, s: 0, l: 0 };
function oi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * 6 * (2 / 3 - n)
          : e
  );
}
function si(e) {
  return e < 0.04045
    ? e * 0.0773993808
    : (e * 0.9478672986 + 0.0521327014) ** 2.4;
}
function ci(e) {
  return e < 0.0031308 ? e * 12.92 : 1.055 * e ** 0.41666 - 0.055;
}
var W = class {
  constructor(e, t, n) {
    return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == `number`
          ? this.setHex(e)
          : typeof e == `string` && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      this
    );
  }
  setRGB(e, t, n) {
    return ((this.r = e), (this.g = t), (this.b = n), this);
  }
  setHSL(e, t, n) {
    if (((e = un(e, 1)), (t = ln(t, 0, 1)), (n = ln(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      let r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r;
      ((this.r = oi(i, r, e + 1 / 3)),
        (this.g = oi(i, r, e)),
        (this.b = oi(i, r, e - 1 / 3)));
    }
    return this;
  }
  setStyle(e) {
    function t(t) {
      t !== void 0 &&
        parseFloat(t) < 1 &&
        console.warn(
          `THREE.Color: Alpha component of ` + e + ` will be ignored.`,
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let e,
        r = n[1],
        i = n[2];
      switch (r) {
        case `rgb`:
        case `rgba`:
          if (
            (e =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i,
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(e[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(e[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(e[3], 10)) / 255),
              t(e[4]),
              this
            );
          if (
            (e =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i,
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(e[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(e[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(e[3], 10)) / 100),
              t(e[4]),
              this
            );
          break;
        case `hsl`:
        case `hsla`:
          if (
            (e =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i,
              ))
          ) {
            let n = parseFloat(e[1]) / 360,
              r = parseInt(e[2], 10) / 100,
              i = parseInt(e[3], 10) / 100;
            return (t(e[4]), this.setHSL(n, r, i));
          }
          break;
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      let e = n[1],
        t = e.length;
      if (t === 3)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255),
          (this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255),
          (this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255),
          this
        );
      if (t === 6)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255),
          (this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255),
          (this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  }
  setColorName(e) {
    let t = ri[e.toLowerCase()];
    return (
      t === void 0
        ? console.warn(`THREE.Color: Unknown color ` + e)
        : this.setHex(t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copyGammaToLinear(e, t = 2) {
    return (
      (this.r = e.r ** +t),
      (this.g = e.g ** +t),
      (this.b = e.b ** +t),
      this
    );
  }
  copyLinearToGamma(e, t = 2) {
    let n = t > 0 ? 1 / t : 1;
    return (
      (this.r = e.r ** +n),
      (this.g = e.g ** +n),
      (this.b = e.b ** +n),
      this
    );
  }
  convertGammaToLinear(e) {
    return (this.copyGammaToLinear(this, e), this);
  }
  convertLinearToGamma(e) {
    return (this.copyLinearToGamma(this, e), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = si(e.r)), (this.g = si(e.g)), (this.b = si(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = ci(e.r)), (this.g = ci(e.g)), (this.b = ci(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex() {
    return (
      ((this.r * 255) << 16) ^ ((this.g * 255) << 8) ^ ((this.b * 255) << 0)
    );
  }
  getHexString() {
    return (`000000` + this.getHex().toString(16)).slice(-6);
  }
  getHSL(e) {
    let t = this.r,
      n = this.g,
      r = this.b,
      i = Math.max(t, n, r),
      a = Math.min(t, n, r),
      o,
      s,
      c = (a + i) / 2;
    if (a === i) ((o = 0), (s = 0));
    else {
      let e = i - a;
      switch (((s = c <= 0.5 ? e / (i + a) : e / (2 - i - a)), i)) {
        case t:
          o = (n - r) / e + (n < r ? 6 : 0);
          break;
        case n:
          o = (r - t) / e + 2;
          break;
        case r:
          o = (t - n) / e + 4;
          break;
      }
      o /= 6;
    }
    return ((e.h = o), (e.s = s), (e.l = c), e);
  }
  getStyle() {
    return (
      `rgb(` +
      ((this.r * 255) | 0) +
      `,` +
      ((this.g * 255) | 0) +
      `,` +
      ((this.b * 255) | 0) +
      `)`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(ii),
      (ii.h += e),
      (ii.s += t),
      (ii.l += n),
      this.setHSL(ii.h, ii.s, ii.l),
      this
    );
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(ii), e.getHSL(ai));
    let n = pn(ii.h, ai.h, t),
      r = pn(ii.s, ai.s, t),
      i = pn(ii.l, ai.l, t);
    return (this.setHSL(n, r, i), this);
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
};
((W.NAMES = ri),
  (W.prototype.isColor = !0),
  (W.prototype.r = 1),
  (W.prototype.g = 1),
  (W.prototype.b = 1));
var li = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshBasicMaterial`),
      (this.color = new W(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = `round`),
      (this.wireframeLinejoin = `round`),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      this
    );
  }
};
li.prototype.isMeshBasicMaterial = !0;
var G = new V(),
  ui = new z(),
  K = class {
    constructor(e, t, n) {
      if (Array.isArray(e))
        throw TypeError(
          `THREE.BufferAttribute: array should be a Typed Array.`,
        );
      ((this.name = ``),
        (this.array = e),
        (this.itemSize = t),
        (this.count = e === void 0 ? 0 : e.length / t),
        (this.normalized = n === !0),
        (this.usage = Gt),
        (this.updateRange = { offset: 0, count: -1 }),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    setUsage(e) {
      return ((this.usage = e), this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.array = new e.array.constructor(e.array)),
        (this.itemSize = e.itemSize),
        (this.count = e.count),
        (this.normalized = e.normalized),
        (this.usage = e.usage),
        this
      );
    }
    copyAt(e, t, n) {
      ((e *= this.itemSize), (n *= t.itemSize));
      for (let r = 0, i = this.itemSize; r < i; r++)
        this.array[e + r] = t.array[n + r];
      return this;
    }
    copyArray(e) {
      return (this.array.set(e), this);
    }
    copyColorsArray(e) {
      let t = this.array,
        n = 0;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r];
        (i === void 0 &&
          (console.warn(
            `THREE.BufferAttribute.copyColorsArray(): color is undefined`,
            r,
          ),
          (i = new W())),
          (t[n++] = i.r),
          (t[n++] = i.g),
          (t[n++] = i.b));
      }
      return this;
    }
    copyVector2sArray(e) {
      let t = this.array,
        n = 0;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r];
        (i === void 0 &&
          (console.warn(
            `THREE.BufferAttribute.copyVector2sArray(): vector is undefined`,
            r,
          ),
          (i = new z())),
          (t[n++] = i.x),
          (t[n++] = i.y));
      }
      return this;
    }
    copyVector3sArray(e) {
      let t = this.array,
        n = 0;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r];
        (i === void 0 &&
          (console.warn(
            `THREE.BufferAttribute.copyVector3sArray(): vector is undefined`,
            r,
          ),
          (i = new V())),
          (t[n++] = i.x),
          (t[n++] = i.y),
          (t[n++] = i.z));
      }
      return this;
    }
    copyVector4sArray(e) {
      let t = this.array,
        n = 0;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r];
        (i === void 0 &&
          (console.warn(
            `THREE.BufferAttribute.copyVector4sArray(): vector is undefined`,
            r,
          ),
          (i = new B())),
          (t[n++] = i.x),
          (t[n++] = i.y),
          (t[n++] = i.z),
          (t[n++] = i.w));
      }
      return this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          (ui.fromBufferAttribute(this, t),
            ui.applyMatrix3(e),
            this.setXY(t, ui.x, ui.y));
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          (G.fromBufferAttribute(this, t),
            G.applyMatrix3(e),
            this.setXYZ(t, G.x, G.y, G.z));
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ((G.x = this.getX(t)),
          (G.y = this.getY(t)),
          (G.z = this.getZ(t)),
          G.applyMatrix4(e),
          this.setXYZ(t, G.x, G.y, G.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ((G.x = this.getX(t)),
          (G.y = this.getY(t)),
          (G.z = this.getZ(t)),
          G.applyNormalMatrix(e),
          this.setXYZ(t, G.x, G.y, G.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ((G.x = this.getX(t)),
          (G.y = this.getY(t)),
          (G.z = this.getZ(t)),
          G.transformDirection(e),
          this.setXYZ(t, G.x, G.y, G.z));
      return this;
    }
    set(e, t = 0) {
      return (this.array.set(e, t), this);
    }
    getX(e) {
      return this.array[e * this.itemSize];
    }
    setX(e, t) {
      return ((this.array[e * this.itemSize] = t), this);
    }
    getY(e) {
      return this.array[e * this.itemSize + 1];
    }
    setY(e, t) {
      return ((this.array[e * this.itemSize + 1] = t), this);
    }
    getZ(e) {
      return this.array[e * this.itemSize + 2];
    }
    setZ(e, t) {
      return ((this.array[e * this.itemSize + 2] = t), this);
    }
    getW(e) {
      return this.array[e * this.itemSize + 3];
    }
    setW(e, t) {
      return ((this.array[e * this.itemSize + 3] = t), this);
    }
    setXY(e, t, n) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e *= this.itemSize),
        (this.array[e + 0] = t),
        (this.array[e + 1] = n),
        (this.array[e + 2] = r),
        (this.array[e + 3] = i),
        this
      );
    }
    onUpload(e) {
      return ((this.onUploadCallback = e), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized,
      };
      return (
        this.name !== `` && (e.name = this.name),
        this.usage !== 35044 && (e.usage = this.usage),
        (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
          (e.updateRange = this.updateRange),
        e
      );
    }
  };
K.prototype.isBufferAttribute = !0;
var di = class extends K {
    constructor(e, t, n) {
      super(new Int8Array(e), t, n);
    }
  },
  fi = class extends K {
    constructor(e, t, n) {
      super(new Uint8Array(e), t, n);
    }
  },
  pi = class extends K {
    constructor(e, t, n) {
      super(new Uint8ClampedArray(e), t, n);
    }
  },
  mi = class extends K {
    constructor(e, t, n) {
      super(new Int16Array(e), t, n);
    }
  },
  hi = class extends K {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  },
  gi = class extends K {
    constructor(e, t, n) {
      super(new Int32Array(e), t, n);
    }
  },
  _i = class extends K {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  },
  vi = class extends K {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  };
vi.prototype.isFloat16BufferAttribute = !0;
var q = class extends K {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  },
  yi = class extends K {
    constructor(e, t, n) {
      super(new Float64Array(e), t, n);
    }
  },
  bi = 0,
  xi = new H(),
  Si = new U(),
  Ci = new V(),
  wi = new Kn(),
  Ti = new Kn(),
  Ei = new V(),
  J = class e extends tn {
    constructor() {
      (super(),
        Object.defineProperty(this, `id`, { value: bi++ }),
        (this.uuid = cn()),
        (this.name = ``),
        (this.type = `BufferGeometry`),
        (this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}));
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return (
        Array.isArray(e)
          ? (this.index = new (An(e) > 65535 ? _i : hi)(e, 1))
          : (this.index = e),
        this
      );
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return ((this.attributes[e] = t), this);
    }
    deleteAttribute(e) {
      return (delete this.attributes[e], this);
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({ start: e, count: t, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      ((this.drawRange.start = e), (this.drawRange.count = t));
    }
    applyMatrix4(e) {
      let t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let t = new kn().getNormalMatrix(e);
        (n.applyNormalMatrix(t), (n.needsUpdate = !0));
      }
      let r = this.attributes.tangent;
      return (
        r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
      );
    }
    applyQuaternion(e) {
      return (xi.makeRotationFromQuaternion(e), this.applyMatrix4(xi), this);
    }
    rotateX(e) {
      return (xi.makeRotationX(e), this.applyMatrix4(xi), this);
    }
    rotateY(e) {
      return (xi.makeRotationY(e), this.applyMatrix4(xi), this);
    }
    rotateZ(e) {
      return (xi.makeRotationZ(e), this.applyMatrix4(xi), this);
    }
    translate(e, t, n) {
      return (xi.makeTranslation(e, t, n), this.applyMatrix4(xi), this);
    }
    scale(e, t, n) {
      return (xi.makeScale(e, t, n), this.applyMatrix4(xi), this);
    }
    lookAt(e) {
      return (
        Si.lookAt(e),
        Si.updateMatrix(),
        this.applyMatrix4(Si.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(Ci).negate(),
        this.translate(Ci.x, Ci.y, Ci.z),
        this
      );
    }
    setFromPoints(e) {
      let t = [];
      for (let n = 0, r = e.length; n < r; n++) {
        let r = e[n];
        t.push(r.x, r.y, r.z || 0);
      }
      return (this.setAttribute(`position`, new q(t, 3)), this);
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Kn());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (console.error(
          `THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,
          this,
        ),
          this.boundingBox.set(
            new V(-1 / 0, -1 / 0, -1 / 0),
            new V(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (e !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (wi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Ei.addVectors(this.boundingBox.min, wi.min),
                  this.boundingBox.expandByPoint(Ei),
                  Ei.addVectors(this.boundingBox.max, wi.max),
                  this.boundingBox.expandByPoint(Ei))
                : (this.boundingBox.expandByPoint(wi.min),
                  this.boundingBox.expandByPoint(wi.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          `THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new dr());
      let e = this.attributes.position,
        t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        (console.error(
          `THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,
          this,
        ),
          this.boundingSphere.set(new V(), 1 / 0));
        return;
      }
      if (e) {
        let n = this.boundingSphere.center;
        if ((wi.setFromBufferAttribute(e), t))
          for (let e = 0, n = t.length; e < n; e++) {
            let n = t[e];
            (Ti.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Ei.addVectors(wi.min, Ti.min),
                  wi.expandByPoint(Ei),
                  Ei.addVectors(wi.max, Ti.max),
                  wi.expandByPoint(Ei))
                : (wi.expandByPoint(Ti.min), wi.expandByPoint(Ti.max)));
          }
        wi.getCenter(n);
        let r = 0;
        for (let t = 0, i = e.count; t < i; t++)
          (Ei.fromBufferAttribute(e, t),
            (r = Math.max(r, n.distanceToSquared(Ei))));
        if (t)
          for (let i = 0, a = t.length; i < a; i++) {
            let a = t[i],
              o = this.morphTargetsRelative;
            for (let t = 0, i = a.count; t < i; t++)
              (Ei.fromBufferAttribute(a, t),
                o && (Ci.fromBufferAttribute(e, t), Ei.add(Ci)),
                (r = Math.max(r, n.distanceToSquared(Ei))));
          }
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              `THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,
              this,
            ));
      }
    }
    computeTangents() {
      let e = this.index,
        t = this.attributes;
      if (
        e === null ||
        t.position === void 0 ||
        t.normal === void 0 ||
        t.uv === void 0
      ) {
        console.error(
          `THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`,
        );
        return;
      }
      let n = e.array,
        r = t.position.array,
        i = t.normal.array,
        a = t.uv.array,
        o = r.length / 3;
      t.tangent === void 0 &&
        this.setAttribute(`tangent`, new K(new Float32Array(4 * o), 4));
      let s = t.tangent.array,
        c = [],
        l = [];
      for (let e = 0; e < o; e++) ((c[e] = new V()), (l[e] = new V()));
      let u = new V(),
        d = new V(),
        f = new V(),
        p = new z(),
        m = new z(),
        h = new z(),
        g = new V(),
        _ = new V();
      function v(e, t, n) {
        (u.fromArray(r, e * 3),
          d.fromArray(r, t * 3),
          f.fromArray(r, n * 3),
          p.fromArray(a, e * 2),
          m.fromArray(a, t * 2),
          h.fromArray(a, n * 2),
          d.sub(u),
          f.sub(u),
          m.sub(p),
          h.sub(p));
        let i = 1 / (m.x * h.y - h.x * m.y);
        isFinite(i) &&
          (g
            .copy(d)
            .multiplyScalar(h.y)
            .addScaledVector(f, -m.y)
            .multiplyScalar(i),
          _.copy(f)
            .multiplyScalar(m.x)
            .addScaledVector(d, -h.x)
            .multiplyScalar(i),
          c[e].add(g),
          c[t].add(g),
          c[n].add(g),
          l[e].add(_),
          l[t].add(_),
          l[n].add(_));
      }
      let y = this.groups;
      y.length === 0 && (y = [{ start: 0, count: n.length }]);
      for (let e = 0, t = y.length; e < t; ++e) {
        let t = y[e],
          r = t.start,
          i = t.count;
        for (let e = r, t = r + i; e < t; e += 3)
          v(n[e + 0], n[e + 1], n[e + 2]);
      }
      let b = new V(),
        x = new V(),
        S = new V(),
        C = new V();
      function w(e) {
        (S.fromArray(i, e * 3), C.copy(S));
        let t = c[e];
        (b.copy(t),
          b.sub(S.multiplyScalar(S.dot(t))).normalize(),
          x.crossVectors(C, t));
        let n = x.dot(l[e]) < 0 ? -1 : 1;
        ((s[e * 4] = b.x),
          (s[e * 4 + 1] = b.y),
          (s[e * 4 + 2] = b.z),
          (s[e * 4 + 3] = n));
      }
      for (let e = 0, t = y.length; e < t; ++e) {
        let t = y[e],
          r = t.start,
          i = t.count;
        for (let e = r, t = r + i; e < t; e += 3)
          (w(n[e + 0]), w(n[e + 1]), w(n[e + 2]));
      }
    }
    computeVertexNormals() {
      let e = this.index,
        t = this.getAttribute(`position`);
      if (t !== void 0) {
        let n = this.getAttribute(`normal`);
        if (n === void 0)
          ((n = new K(new Float32Array(t.count * 3), 3)),
            this.setAttribute(`normal`, n));
        else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
        let r = new V(),
          i = new V(),
          a = new V(),
          o = new V(),
          s = new V(),
          c = new V(),
          l = new V(),
          u = new V();
        if (e)
          for (let d = 0, f = e.count; d < f; d += 3) {
            let f = e.getX(d + 0),
              p = e.getX(d + 1),
              m = e.getX(d + 2);
            (r.fromBufferAttribute(t, f),
              i.fromBufferAttribute(t, p),
              a.fromBufferAttribute(t, m),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              o.fromBufferAttribute(n, f),
              s.fromBufferAttribute(n, p),
              c.fromBufferAttribute(n, m),
              o.add(l),
              s.add(l),
              c.add(l),
              n.setXYZ(f, o.x, o.y, o.z),
              n.setXYZ(p, s.x, s.y, s.z),
              n.setXYZ(m, c.x, c.y, c.z));
          }
        else
          for (let e = 0, o = t.count; e < o; e += 3)
            (r.fromBufferAttribute(t, e + 0),
              i.fromBufferAttribute(t, e + 1),
              a.fromBufferAttribute(t, e + 2),
              l.subVectors(a, i),
              u.subVectors(r, i),
              l.cross(u),
              n.setXYZ(e + 0, l.x, l.y, l.z),
              n.setXYZ(e + 1, l.x, l.y, l.z),
              n.setXYZ(e + 2, l.x, l.y, l.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    merge(e, t) {
      if (!(e && e.isBufferGeometry)) {
        console.error(
          `THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.`,
          e,
        );
        return;
      }
      t === void 0 &&
        ((t = 0),
        console.warn(
          `THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.`,
        ));
      let n = this.attributes;
      for (let r in n) {
        if (e.attributes[r] === void 0) continue;
        let i = n[r].array,
          a = e.attributes[r],
          o = a.array,
          s = a.itemSize * t,
          c = Math.min(o.length, i.length - s);
        for (let e = 0, t = s; e < c; e++, t++) i[t] = o[e];
      }
      return this;
    }
    normalizeNormals() {
      let e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        (Ei.fromBufferAttribute(e, t),
          Ei.normalize(),
          e.setXYZ(t, Ei.x, Ei.y, Ei.z));
    }
    toNonIndexed() {
      function t(e, t) {
        let n = e.array,
          r = e.itemSize,
          i = e.normalized,
          a = new n.constructor(t.length * r),
          o = 0,
          s = 0;
        for (let i = 0, c = t.length; i < c; i++) {
          o = e.isInterleavedBufferAttribute
            ? t[i] * e.data.stride + e.offset
            : t[i] * r;
          for (let e = 0; e < r; e++) a[s++] = n[o++];
        }
        return new K(a, r, i);
      }
      if (this.index === null)
        return (
          console.warn(
            `THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`,
          ),
          this
        );
      let n = new e(),
        r = this.index.array,
        i = this.attributes;
      for (let e in i) {
        let a = i[e],
          o = t(a, r);
        n.setAttribute(e, o);
      }
      let a = this.morphAttributes;
      for (let e in a) {
        let i = [],
          o = a[e];
        for (let e = 0, n = o.length; e < n; e++) {
          let n = o[e],
            a = t(n, r);
          i.push(a);
        }
        n.morphAttributes[e] = i;
      }
      n.morphTargetsRelative = this.morphTargetsRelative;
      let o = this.groups;
      for (let e = 0, t = o.length; e < t; e++) {
        let t = o[e];
        n.addGroup(t.start, t.count, t.materialIndex);
      }
      return n;
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.5,
          type: `BufferGeometry`,
          generator: `BufferGeometry.toJSON`,
        },
      };
      if (
        ((e.uuid = this.uuid),
        (e.type = this.type),
        this.name !== `` && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0)
      ) {
        let t = this.parameters;
        for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
        return e;
      }
      e.data = { attributes: {} };
      let t = this.index;
      t !== null &&
        (e.data.index = {
          type: t.array.constructor.name,
          array: Array.prototype.slice.call(t.array),
        });
      let n = this.attributes;
      for (let t in n) {
        let r = n[t];
        e.data.attributes[t] = r.toJSON(e.data);
      }
      let r = {},
        i = !1;
      for (let t in this.morphAttributes) {
        let n = this.morphAttributes[t],
          a = [];
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          a.push(r.toJSON(e.data));
        }
        a.length > 0 && ((r[t] = a), (i = !0));
      }
      i &&
        ((e.data.morphAttributes = r),
        (e.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (
        o !== null &&
          (e.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius,
          }),
        e
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let t = {};
      this.name = e.name;
      let n = e.index;
      n !== null && this.setIndex(n.clone(t));
      let r = e.attributes;
      for (let e in r) {
        let n = r[e];
        this.setAttribute(e, n.clone(t));
      }
      let i = e.morphAttributes;
      for (let e in i) {
        let n = [],
          r = i[e];
        for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
        this.morphAttributes[e] = n;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      let a = e.groups;
      for (let e = 0, t = a.length; e < t; e++) {
        let t = a[e];
        this.addGroup(t.start, t.count, t.materialIndex);
      }
      let o = e.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let s = e.boundingSphere;
      return (
        s !== null && (this.boundingSphere = s.clone()),
        (this.drawRange.start = e.drawRange.start),
        (this.drawRange.count = e.drawRange.count),
        (this.userData = e.userData),
        e.parameters !== void 0 &&
          (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  };
J.prototype.isBufferGeometry = !0;
var Di = new H(),
  Oi = new yr(),
  ki = new dr(),
  Ai = new V(),
  ji = new V(),
  Mi = new V(),
  Ni = new V(),
  Pi = new V(),
  Fi = new V(),
  Ii = new V(),
  Li = new V(),
  Ri = new V(),
  zi = new z(),
  Bi = new z(),
  Vi = new z(),
  Hi = new V(),
  Ui = new V(),
  Wi = class extends U {
    constructor(e = new J(), t = new li()) {
      (super(),
        (this.type = `Mesh`),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets());
    }
    copy(e) {
      return (
        super.copy(e),
        e.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary,
          )),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    updateMorphTargets() {
      let e = this.geometry;
      if (e.isBufferGeometry) {
        let t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          let e = t[n[0]];
          if (e !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let t = 0, n = e.length; t < n; t++) {
              let n = e[t].name || String(t);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t));
            }
          }
        }
      } else {
        let t = e.morphTargets;
        t !== void 0 &&
          t.length > 0 &&
          console.error(
            `THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
      }
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.material,
        i = this.matrixWorld;
      if (
        r === void 0 ||
        (n.boundingSphere === null && n.computeBoundingSphere(),
        ki.copy(n.boundingSphere),
        ki.applyMatrix4(i),
        e.ray.intersectsSphere(ki) === !1) ||
        (Di.copy(i).invert(),
        Oi.copy(e.ray).applyMatrix4(Di),
        n.boundingBox !== null && Oi.intersectsBox(n.boundingBox) === !1)
      )
        return;
      let a;
      if (n.isBufferGeometry) {
        let i = n.index,
          o = n.attributes.position,
          s = n.morphAttributes.position,
          c = n.morphTargetsRelative,
          l = n.attributes.uv,
          u = n.attributes.uv2,
          d = n.groups,
          f = n.drawRange;
        if (i !== null)
          if (Array.isArray(r))
            for (let n = 0, p = d.length; n < p; n++) {
              let p = d[n],
                m = r[p.materialIndex],
                h = Math.max(p.start, f.start),
                g = Math.min(
                  i.count,
                  Math.min(p.start + p.count, f.start + f.count),
                );
              for (let n = h, r = g; n < r; n += 3) {
                let r = i.getX(n),
                  d = i.getX(n + 1),
                  f = i.getX(n + 2);
                ((a = Ki(this, m, e, Oi, o, s, c, l, u, r, d, f)),
                  a &&
                    ((a.faceIndex = Math.floor(n / 3)),
                    (a.face.materialIndex = p.materialIndex),
                    t.push(a)));
              }
            }
          else {
            let n = Math.max(0, f.start),
              d = Math.min(i.count, f.start + f.count);
            for (let f = n, p = d; f < p; f += 3) {
              let n = i.getX(f),
                d = i.getX(f + 1),
                p = i.getX(f + 2);
              ((a = Ki(this, r, e, Oi, o, s, c, l, u, n, d, p)),
                a && ((a.faceIndex = Math.floor(f / 3)), t.push(a)));
            }
          }
        else if (o !== void 0)
          if (Array.isArray(r))
            for (let n = 0, i = d.length; n < i; n++) {
              let i = d[n],
                p = r[i.materialIndex],
                m = Math.max(i.start, f.start),
                h = Math.min(
                  o.count,
                  Math.min(i.start + i.count, f.start + f.count),
                );
              for (let n = m, r = h; n < r; n += 3) {
                let r = n,
                  d = n + 1,
                  f = n + 2;
                ((a = Ki(this, p, e, Oi, o, s, c, l, u, r, d, f)),
                  a &&
                    ((a.faceIndex = Math.floor(n / 3)),
                    (a.face.materialIndex = i.materialIndex),
                    t.push(a)));
              }
            }
          else {
            let n = Math.max(0, f.start),
              i = Math.min(o.count, f.start + f.count);
            for (let d = n, f = i; d < f; d += 3) {
              let n = d,
                i = d + 1,
                f = d + 2;
              ((a = Ki(this, r, e, Oi, o, s, c, l, u, n, i, f)),
                a && ((a.faceIndex = Math.floor(d / 3)), t.push(a)));
            }
          }
      } else
        n.isGeometry &&
          console.error(
            `THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
    }
  };
Wi.prototype.isMesh = !0;
function Gi(e, t, n, r, i, a, o, s) {
  let c;
  if (
    ((c =
      t.side === 1
        ? r.intersectTriangle(o, a, i, !0, s)
        : r.intersectTriangle(i, a, o, t.side !== 2, s)),
    c === null)
  )
    return null;
  (Ui.copy(s), Ui.applyMatrix4(e.matrixWorld));
  let l = n.ray.origin.distanceTo(Ui);
  return l < n.near || l > n.far
    ? null
    : { distance: l, point: Ui.clone(), object: e };
}
function Ki(e, t, n, r, i, a, o, s, c, l, u, d) {
  (Ai.fromBufferAttribute(i, l),
    ji.fromBufferAttribute(i, u),
    Mi.fromBufferAttribute(i, d));
  let f = e.morphTargetInfluences;
  if (a && f) {
    (Ii.set(0, 0, 0), Li.set(0, 0, 0), Ri.set(0, 0, 0));
    for (let e = 0, t = a.length; e < t; e++) {
      let t = f[e],
        n = a[e];
      t !== 0 &&
        (Ni.fromBufferAttribute(n, l),
        Pi.fromBufferAttribute(n, u),
        Fi.fromBufferAttribute(n, d),
        o
          ? (Ii.addScaledVector(Ni, t),
            Li.addScaledVector(Pi, t),
            Ri.addScaledVector(Fi, t))
          : (Ii.addScaledVector(Ni.sub(Ai), t),
            Li.addScaledVector(Pi.sub(ji), t),
            Ri.addScaledVector(Fi.sub(Mi), t)));
    }
    (Ai.add(Ii), ji.add(Li), Mi.add(Ri));
  }
  e.isSkinnedMesh &&
    (e.boneTransform(l, Ai), e.boneTransform(u, ji), e.boneTransform(d, Mi));
  let p = Gi(e, t, n, r, Ai, ji, Mi, Hi);
  if (p) {
    (s &&
      (zi.fromBufferAttribute(s, l),
      Bi.fromBufferAttribute(s, u),
      Vi.fromBufferAttribute(s, d),
      (p.uv = ei.getUV(Hi, Ai, ji, Mi, zi, Bi, Vi, new z()))),
      c &&
        (zi.fromBufferAttribute(c, l),
        Bi.fromBufferAttribute(c, u),
        Vi.fromBufferAttribute(c, d),
        (p.uv2 = ei.getUV(Hi, Ai, ji, Mi, zi, Bi, Vi, new z()))));
    let e = { a: l, b: u, c: d, normal: new V(), materialIndex: 0 };
    (ei.getNormal(Ai, ji, Mi, e.normal), (p.face = e));
  }
  return p;
}
var qi = class e extends J {
  constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
    (super(),
      (this.type = `BoxGeometry`),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: i,
        depthSegments: a,
      }));
    let o = this;
    ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
    let s = [],
      c = [],
      l = [],
      u = [],
      d = 0,
      f = 0;
    (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
      p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
      p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
      p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
      p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
      p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
      this.setIndex(s),
      this.setAttribute(`position`, new q(c, 3)),
      this.setAttribute(`normal`, new q(l, 3)),
      this.setAttribute(`uv`, new q(u, 2)));
    function p(e, t, n, r, i, a, p, m, h, g, _) {
      let v = a / h,
        y = p / g,
        b = a / 2,
        x = p / 2,
        S = m / 2,
        C = h + 1,
        w = g + 1,
        T = 0,
        E = 0,
        D = new V();
      for (let a = 0; a < w; a++) {
        let o = a * y - x;
        for (let s = 0; s < C; s++)
          ((D[e] = (s * v - b) * r),
            (D[t] = o * i),
            (D[n] = S),
            c.push(D.x, D.y, D.z),
            (D[e] = 0),
            (D[t] = 0),
            (D[n] = m > 0 ? 1 : -1),
            l.push(D.x, D.y, D.z),
            u.push(s / h),
            u.push(1 - a / g),
            (T += 1));
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < h; t++) {
          let n = d + t + C * e,
            r = d + t + C * (e + 1),
            i = d + (t + 1) + C * (e + 1),
            a = d + (t + 1) + C * e;
          (s.push(n, r, a), s.push(r, i, a), (E += 6));
        }
      (o.addGroup(f, E, _), (f += E), (d += T));
    }
  }
  static fromJSON(t) {
    return new e(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments,
    );
  }
};
function Ji(e) {
  let t = {};
  for (let n in e) {
    t[n] = {};
    for (let r in e[n]) {
      let i = e[n][r];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (t[n][r] = i.clone())
        : Array.isArray(i)
          ? (t[n][r] = i.slice())
          : (t[n][r] = i);
    }
  }
  return t;
}
function Yi(e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = Ji(e[n]);
    for (let e in r) t[e] = r[e];
  }
  return t;
}
var Xi = { clone: Ji, merge: Yi },
  Zi = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Qi = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  $i = class extends ni {
    constructor(e) {
      (super(),
        (this.type = `ShaderMaterial`),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.vertexShader = Zi),
        (this.fragmentShader = Qi),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1,
        }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        e !== void 0 &&
          (e.attributes !== void 0 &&
            console.error(
              `THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.`,
            ),
          this.setValues(e)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.fragmentShader = e.fragmentShader),
        (this.vertexShader = e.vertexShader),
        (this.uniforms = Ji(e.uniforms)),
        (this.defines = Object.assign({}, e.defines)),
        (this.wireframe = e.wireframe),
        (this.wireframeLinewidth = e.wireframeLinewidth),
        (this.lights = e.lights),
        (this.clipping = e.clipping),
        (this.extensions = Object.assign({}, e.extensions)),
        (this.glslVersion = e.glslVersion),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
      for (let n in this.uniforms) {
        let r = this.uniforms[n].value;
        r && r.isTexture
          ? (t.uniforms[n] = { type: `t`, value: r.toJSON(e).uuid })
          : r && r.isColor
            ? (t.uniforms[n] = { type: `c`, value: r.getHex() })
            : r && r.isVector2
              ? (t.uniforms[n] = { type: `v2`, value: r.toArray() })
              : r && r.isVector3
                ? (t.uniforms[n] = { type: `v3`, value: r.toArray() })
                : r && r.isVector4
                  ? (t.uniforms[n] = { type: `v4`, value: r.toArray() })
                  : r && r.isMatrix3
                    ? (t.uniforms[n] = { type: `m3`, value: r.toArray() })
                    : r && r.isMatrix4
                      ? (t.uniforms[n] = { type: `m4`, value: r.toArray() })
                      : (t.uniforms[n] = { value: r });
      }
      (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        (t.vertexShader = this.vertexShader),
        (t.fragmentShader = this.fragmentShader));
      let n = {};
      for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
      return (Object.keys(n).length > 0 && (t.extensions = n), t);
    }
  };
$i.prototype.isShaderMaterial = !0;
var ea = class extends U {
  constructor() {
    (super(),
      (this.type = `Camera`),
      (this.matrixWorldInverse = new H()),
      (this.projectionMatrix = new H()),
      (this.projectionMatrixInverse = new H()));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
ea.prototype.isCamera = !0;
var ta = class extends ea {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    (super(),
      (this.type = `PerspectiveCamera`),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    let t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = an * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    let e = Math.tan(rn * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return an * 2 * Math.atan(Math.tan(rn * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, i, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    let e = this.near,
      t = (e * Math.tan(rn * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      i = -0.5 * r,
      a = this.view;
    if (this.view !== null && this.view.enabled) {
      let e = a.fullWidth,
        o = a.fullHeight;
      ((i += (a.offsetX * r) / e),
        (t -= (a.offsetY * n) / o),
        (r *= a.width / e),
        (n *= a.height / o));
    }
    let o = this.filmOffset;
    (o !== 0 && (i += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
};
ta.prototype.isPerspectiveCamera = !0;
var na = 90,
  ra = 1,
  ia = class extends U {
    constructor(e, t, n) {
      if (
        (super(), (this.type = `CubeCamera`), n.isWebGLCubeRenderTarget !== !0)
      ) {
        console.error(
          `THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.`,
        );
        return;
      }
      this.renderTarget = n;
      let r = new ta(na, ra, e, t);
      ((r.layers = this.layers),
        r.up.set(0, -1, 0),
        r.lookAt(new V(1, 0, 0)),
        this.add(r));
      let i = new ta(na, ra, e, t);
      ((i.layers = this.layers),
        i.up.set(0, -1, 0),
        i.lookAt(new V(-1, 0, 0)),
        this.add(i));
      let a = new ta(na, ra, e, t);
      ((a.layers = this.layers),
        a.up.set(0, 0, 1),
        a.lookAt(new V(0, 1, 0)),
        this.add(a));
      let o = new ta(na, ra, e, t);
      ((o.layers = this.layers),
        o.up.set(0, 0, -1),
        o.lookAt(new V(0, -1, 0)),
        this.add(o));
      let s = new ta(na, ra, e, t);
      ((s.layers = this.layers),
        s.up.set(0, -1, 0),
        s.lookAt(new V(0, 0, 1)),
        this.add(s));
      let c = new ta(na, ra, e, t);
      ((c.layers = this.layers),
        c.up.set(0, -1, 0),
        c.lookAt(new V(0, 0, -1)),
        this.add(c));
    }
    update(e, t) {
      this.parent === null && this.updateMatrixWorld();
      let n = this.renderTarget,
        [r, i, a, o, s, c] = this.children,
        l = e.xr.enabled,
        u = e.getRenderTarget();
      e.xr.enabled = !1;
      let d = n.texture.generateMipmaps;
      ((n.texture.generateMipmaps = !1),
        e.setRenderTarget(n, 0),
        e.render(t, r),
        e.setRenderTarget(n, 1),
        e.render(t, i),
        e.setRenderTarget(n, 2),
        e.render(t, a),
        e.setRenderTarget(n, 3),
        e.render(t, o),
        e.setRenderTarget(n, 4),
        e.render(t, s),
        (n.texture.generateMipmaps = d),
        e.setRenderTarget(n, 5),
        e.render(t, c),
        e.setRenderTarget(u),
        (e.xr.enabled = l));
    }
  },
  aa = class extends Rn {
    constructor(e, t, n, r, i, a, o, s, c, l) {
      ((e = e === void 0 ? [] : e),
        (t = t === void 0 ? 301 : t),
        super(e, t, n, r, i, a, o, s, c, l),
        (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(e) {
      this.image = e;
    }
  };
aa.prototype.isCubeTexture = !0;
var oa = class extends Bn {
  constructor(e, t, n) {
    (Number.isInteger(t) &&
      (console.warn(
        `THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )`,
      ),
      (t = n)),
      super(e, e, t),
      (t ||= {}),
      (this.texture = new aa(
        void 0,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding,
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps === void 0 ? !1 : t.generateMipmaps),
      (this.texture.minFilter = t.minFilter === void 0 ? P : t.minFilter),
      (this.texture._needsFlipEnvMap = !1));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.format = ye),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    let n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new qi(5, 5, 5),
      i = new $i({
        name: `CubemapFromEquirect`,
        uniforms: Ji(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    i.uniforms.tEquirect.value = t;
    let a = new Wi(r, i),
      o = t.minFilter;
    return (
      t.minFilter === 1008 && (t.minFilter = P),
      new ia(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    let i = e.getRenderTarget();
    for (let i = 0; i < 6; i++) (e.setRenderTarget(this, i), e.clear(t, n, r));
    e.setRenderTarget(i);
  }
};
oa.prototype.isWebGLCubeRenderTarget = !0;
var sa = new V(),
  ca = new V(),
  la = new kn(),
  ua = class {
    constructor(e = new V(1, 0, 0), t = 0) {
      ((this.normal = e), (this.constant = t));
    }
    set(e, t) {
      return (this.normal.copy(e), (this.constant = t), this);
    }
    setComponents(e, t, n, r) {
      return (this.normal.set(e, t, n), (this.constant = r), this);
    }
    setFromNormalAndCoplanarPoint(e, t) {
      return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
    }
    setFromCoplanarPoints(e, t, n) {
      let r = sa.subVectors(n, t).cross(ca.subVectors(e, t)).normalize();
      return (this.setFromNormalAndCoplanarPoint(r, e), this);
    }
    copy(e) {
      return (this.normal.copy(e.normal), (this.constant = e.constant), this);
    }
    normalize() {
      let e = 1 / this.normal.length();
      return (this.normal.multiplyScalar(e), (this.constant *= e), this);
    }
    negate() {
      return ((this.constant *= -1), this.normal.negate(), this);
    }
    distanceToPoint(e) {
      return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
      return t
        .copy(this.normal)
        .multiplyScalar(-this.distanceToPoint(e))
        .add(e);
    }
    intersectLine(e, t) {
      let n = e.delta(sa),
        r = this.normal.dot(n);
      if (r === 0)
        return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
      let i = -(e.start.dot(this.normal) + this.constant) / r;
      return i < 0 || i > 1 ? null : t.copy(n).multiplyScalar(i).add(e.start);
    }
    intersectsLine(e) {
      let t = this.distanceToPoint(e.start),
        n = this.distanceToPoint(e.end);
      return (t < 0 && n > 0) || (n < 0 && t > 0);
    }
    intersectsBox(e) {
      return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
      return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
      let n = t || la.getNormalMatrix(e),
        r = this.coplanarPoint(sa).applyMatrix4(e),
        i = this.normal.applyMatrix3(n).normalize();
      return ((this.constant = -r.dot(i)), this);
    }
    translate(e) {
      return ((this.constant -= e.dot(this.normal)), this);
    }
    equals(e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
ua.prototype.isPlane = !0;
var da = new dr(),
  fa = new V(),
  pa = class {
    constructor(
      e = new ua(),
      t = new ua(),
      n = new ua(),
      r = new ua(),
      i = new ua(),
      a = new ua(),
    ) {
      this.planes = [e, t, n, r, i, a];
    }
    set(e, t, n, r, i, a) {
      let o = this.planes;
      return (
        o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(r),
        o[4].copy(i),
        o[5].copy(a),
        this
      );
    }
    copy(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
      return this;
    }
    setFromProjectionMatrix(e) {
      let t = this.planes,
        n = e.elements,
        r = n[0],
        i = n[1],
        a = n[2],
        o = n[3],
        s = n[4],
        c = n[5],
        l = n[6],
        u = n[7],
        d = n[8],
        f = n[9],
        p = n[10],
        m = n[11],
        h = n[12],
        g = n[13],
        _ = n[14],
        v = n[15];
      return (
        t[0].setComponents(o - r, u - s, m - d, v - h).normalize(),
        t[1].setComponents(o + r, u + s, m + d, v + h).normalize(),
        t[2].setComponents(o + i, u + c, m + f, v + g).normalize(),
        t[3].setComponents(o - i, u - c, m - f, v - g).normalize(),
        t[4].setComponents(o - a, u - l, m - p, v - _).normalize(),
        t[5].setComponents(o + a, u + l, m + p, v + _).normalize(),
        this
      );
    }
    intersectsObject(e) {
      let t = e.geometry;
      return (
        t.boundingSphere === null && t.computeBoundingSphere(),
        da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(da)
      );
    }
    intersectsSprite(e) {
      return (
        da.center.set(0, 0, 0),
        (da.radius = 0.7071067811865476),
        da.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(da)
      );
    }
    intersectsSphere(e) {
      let t = this.planes,
        n = e.center,
        r = -e.radius;
      for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
      return !0;
    }
    intersectsBox(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) {
        let r = t[n];
        if (
          ((fa.x = r.normal.x > 0 ? e.max.x : e.min.x),
          (fa.y = r.normal.y > 0 ? e.max.y : e.min.y),
          (fa.z = r.normal.z > 0 ? e.max.z : e.min.z),
          r.distanceToPoint(fa) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(e) {
      let t = this.planes;
      for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
function ma() {
  let e = null,
    t = !1,
    n = null,
    r = null;
  function i(t, a) {
    (n(t, a), (r = e.requestAnimationFrame(i)));
  }
  return {
    start: function () {
      t !== !0 && n !== null && ((r = e.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      (e.cancelAnimationFrame(r), (t = !1));
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function ha(e, t) {
  let n = t.isWebGL2,
    r = new WeakMap();
  function i(t, r) {
    let i = t.array,
      a = t.usage,
      o = e.createBuffer();
    (e.bindBuffer(r, o), e.bufferData(r, i, a), t.onUploadCallback());
    let s = 5126;
    return (
      i instanceof Float32Array
        ? (s = 5126)
        : i instanceof Float64Array
          ? console.warn(
              `THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.`,
            )
          : i instanceof Uint16Array
            ? t.isFloat16BufferAttribute
              ? n
                ? (s = 5131)
                : console.warn(
                    `THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`,
                  )
              : (s = 5123)
            : i instanceof Int16Array
              ? (s = 5122)
              : i instanceof Uint32Array
                ? (s = 5125)
                : i instanceof Int32Array
                  ? (s = 5124)
                  : i instanceof Int8Array
                    ? (s = 5120)
                    : (i instanceof Uint8Array ||
                        i instanceof Uint8ClampedArray) &&
                      (s = 5121),
      {
        buffer: o,
        type: s,
        bytesPerElement: i.BYTES_PER_ELEMENT,
        version: t.version,
      }
    );
  }
  function a(t, r, i) {
    let a = r.array,
      o = r.updateRange;
    (e.bindBuffer(i, t),
      o.count === -1
        ? e.bufferSubData(i, 0, a)
        : (n
            ? e.bufferSubData(
                i,
                o.offset * a.BYTES_PER_ELEMENT,
                a,
                o.offset,
                o.count,
              )
            : e.bufferSubData(
                i,
                o.offset * a.BYTES_PER_ELEMENT,
                a.subarray(o.offset, o.offset + o.count),
              ),
          (o.count = -1)));
  }
  function o(e) {
    return (e.isInterleavedBufferAttribute && (e = e.data), r.get(e));
  }
  function s(t) {
    t.isInterleavedBufferAttribute && (t = t.data);
    let n = r.get(t);
    n && (e.deleteBuffer(n.buffer), r.delete(t));
  }
  function c(e, t) {
    if (e.isGLBufferAttribute) {
      let t = r.get(e);
      (!t || t.version < e.version) &&
        r.set(e, {
          buffer: e.buffer,
          type: e.type,
          bytesPerElement: e.elementSize,
          version: e.version,
        });
      return;
    }
    e.isInterleavedBufferAttribute && (e = e.data);
    let n = r.get(e);
    n === void 0
      ? r.set(e, i(e, t))
      : n.version < e.version && (a(n.buffer, e, t), (n.version = e.version));
  }
  return { get: o, remove: s, update: c };
}
var ga = class e extends J {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new q(p, 3)),
        this.setAttribute(`normal`, new q(m, 3)),
        this.setAttribute(`uv`, new q(h, 2)));
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  Y = {
    alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
    alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    alphatest_fragment: `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    begin_vertex: `vec3 transformed = vec3( position );`,
    beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    bsdfs: `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
    bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
    clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
    common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
    cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
    emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    encodings_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`,
    encodings_pars_fragment: `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
    envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    envmap_physical_pars_fragment: `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
    envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
    lightmap_fragment: `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    lights_lambert_vertex: `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
    lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
    lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
    lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
    lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    lights_fragment_begin: `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    logdepthbuf_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    logdepthbuf_pars_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    logdepthbuf_pars_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    logdepthbuf_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
    map_fragment: `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
    map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    map_particle_pars_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
    morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
    morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
    normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
    normal_fragment_maps: `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
    clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
    clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
    output_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
    premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    shadowmap_pars_fragment: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
    shadowmap_pars_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    shadowmap_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
    shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
    skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    transmission_fragment: `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
    transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
    uv_pars_fragment: `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
    uv_pars_vertex: `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
    uv_vertex: `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
    uv2_pars_fragment: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
    uv2_pars_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
    uv2_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
    worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
    background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    background_frag: `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    cube_frag: `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    depth_vert: `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
    distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
    equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    meshbasic_vert: `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshlambert_vert: `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshlambert_frag: `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
    meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    shadow_vert: `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  },
  X = {
    common: {
      diffuse: { value: new W(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new kn() },
      uv2Transform: { value: new kn() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      maxMipLevel: { value: 0 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new z(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new W(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new W(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new kn() },
    },
    sprite: {
      diffuse: { value: new W(16777215) },
      opacity: { value: 1 },
      center: { value: new z(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new kn() },
    },
  },
  _a = {
    basic: {
      uniforms: Yi([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.fog,
      ]),
      vertexShader: Y.meshbasic_vert,
      fragmentShader: Y.meshbasic_frag,
    },
    lambert: {
      uniforms: Yi([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.fog,
        X.lights,
        { emissive: { value: new W(0) } },
      ]),
      vertexShader: Y.meshlambert_vert,
      fragmentShader: Y.meshlambert_frag,
    },
    phong: {
      uniforms: Yi([
        X.common,
        X.specularmap,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.fog,
        X.lights,
        {
          emissive: { value: new W(0) },
          specular: { value: new W(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Y.meshphong_vert,
      fragmentShader: Y.meshphong_frag,
    },
    standard: {
      uniforms: Yi([
        X.common,
        X.envmap,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.roughnessmap,
        X.metalnessmap,
        X.fog,
        X.lights,
        {
          emissive: { value: new W(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Y.meshphysical_vert,
      fragmentShader: Y.meshphysical_frag,
    },
    toon: {
      uniforms: Yi([
        X.common,
        X.aomap,
        X.lightmap,
        X.emissivemap,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.gradientmap,
        X.fog,
        X.lights,
        { emissive: { value: new W(0) } },
      ]),
      vertexShader: Y.meshtoon_vert,
      fragmentShader: Y.meshtoon_frag,
    },
    matcap: {
      uniforms: Yi([
        X.common,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        X.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Y.meshmatcap_vert,
      fragmentShader: Y.meshmatcap_frag,
    },
    points: {
      uniforms: Yi([X.points, X.fog]),
      vertexShader: Y.points_vert,
      fragmentShader: Y.points_frag,
    },
    dashed: {
      uniforms: Yi([
        X.common,
        X.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Y.linedashed_vert,
      fragmentShader: Y.linedashed_frag,
    },
    depth: {
      uniforms: Yi([X.common, X.displacementmap]),
      vertexShader: Y.depth_vert,
      fragmentShader: Y.depth_frag,
    },
    normal: {
      uniforms: Yi([
        X.common,
        X.bumpmap,
        X.normalmap,
        X.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Y.meshnormal_vert,
      fragmentShader: Y.meshnormal_frag,
    },
    sprite: {
      uniforms: Yi([X.sprite, X.fog]),
      vertexShader: Y.sprite_vert,
      fragmentShader: Y.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new kn() }, t2D: { value: null } },
      vertexShader: Y.background_vert,
      fragmentShader: Y.background_frag,
    },
    cube: {
      uniforms: Yi([X.envmap, { opacity: { value: 1 } }]),
      vertexShader: Y.cube_vert,
      fragmentShader: Y.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Y.equirect_vert,
      fragmentShader: Y.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Yi([
        X.common,
        X.displacementmap,
        {
          referencePosition: { value: new V() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Y.distanceRGBA_vert,
      fragmentShader: Y.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Yi([
        X.lights,
        X.fog,
        { color: { value: new W(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Y.shadow_vert,
      fragmentShader: Y.shadow_frag,
    },
  };
_a.physical = {
  uniforms: Yi([
    _a.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new z(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new W(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 0 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new z() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new W(0) },
      specularIntensity: { value: 0 },
      specularIntensityMap: { value: null },
      specularColor: { value: new W(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Y.meshphysical_vert,
  fragmentShader: Y.meshphysical_frag,
};
function va(e, t, n, r, i) {
  let a = new W(0),
    o = 0,
    s,
    c,
    l = null,
    u = 0,
    d = null;
  function f(n, i) {
    let f = !1,
      m = i.isScene === !0 ? i.background : null;
    m && m.isTexture && (m = t.get(m));
    let h = e.xr,
      g = h.getSession && h.getSession();
    (g && g.environmentBlendMode === `additive` && (m = null),
      m === null ? p(a, o) : m && m.isColor && (p(m, 1), (f = !0)),
      (e.autoClear || f) &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      m && (m.isCubeTexture || m.mapping === 306)
        ? (c === void 0 &&
            ((c = new Wi(
              new qi(1, 1, 1),
              new $i({
                name: `BackgroundCubeMaterial`,
                uniforms: Ji(_a.cube.uniforms),
                vertexShader: _a.cube.vertexShader,
                fragmentShader: _a.cube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            c.geometry.deleteAttribute(`normal`),
            c.geometry.deleteAttribute(`uv`),
            (c.onBeforeRender = function (e, t, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(c.material, `envMap`, {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.envMap.value = m),
          (c.material.uniforms.flipEnvMap.value =
            m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1),
          (l !== m || u !== m.version || d !== e.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (l = m),
            (u = m.version),
            (d = e.toneMapping)),
          n.unshift(c, c.geometry, c.material, 0, 0, null))
        : m &&
          m.isTexture &&
          (s === void 0 &&
            ((s = new Wi(
              new ga(2, 2),
              new $i({
                name: `BackgroundMaterial`,
                uniforms: Ji(_a.background.uniforms),
                vertexShader: _a.background.vertexShader,
                fragmentShader: _a.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            s.geometry.deleteAttribute(`normal`),
            Object.defineProperty(s.material, `map`, {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(s)),
          (s.material.uniforms.t2D.value = m),
          m.matrixAutoUpdate === !0 && m.updateMatrix(),
          s.material.uniforms.uvTransform.value.copy(m.matrix),
          (l !== m || u !== m.version || d !== e.toneMapping) &&
            ((s.material.needsUpdate = !0),
            (l = m),
            (u = m.version),
            (d = e.toneMapping)),
          n.unshift(s, s.geometry, s.material, 0, 0, null)));
  }
  function p(e, t) {
    n.buffers.color.setClear(e.r, e.g, e.b, t, i);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (e, t = 1) {
      (a.set(e), (o = t), p(a, o));
    },
    getClearAlpha: function () {
      return o;
    },
    setClearAlpha: function (e) {
      ((o = e), p(a, o));
    },
    render: f,
  };
}
function ya(e, t, n, r) {
  let i = e.getParameter(34921),
    a = r.isWebGL2 ? null : t.get(`OES_vertex_array_object`),
    o = r.isWebGL2 || a !== null,
    s = {},
    c = h(null),
    l = c;
  function u(t, r, i, a, s) {
    let c = !1;
    if (o) {
      let e = m(a, i, r);
      (l !== e && ((l = e), f(l.object)), (c = g(a, s)), c && _(a, s));
    } else {
      let e = r.wireframe === !0;
      (l.geometry !== a.id || l.program !== i.id || l.wireframe !== e) &&
        ((l.geometry = a.id), (l.program = i.id), (l.wireframe = e), (c = !0));
    }
    (t.isInstancedMesh === !0 && (c = !0),
      s !== null && n.update(s, 34963),
      c && (C(t, r, i, a), s !== null && e.bindBuffer(34963, n.get(s).buffer)));
  }
  function d() {
    return r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES();
  }
  function f(t) {
    return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
  }
  function p(t) {
    return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
  }
  function m(e, t, n) {
    let r = n.wireframe === !0,
      i = s[e.id];
    i === void 0 && ((i = {}), (s[e.id] = i));
    let a = i[t.id];
    a === void 0 && ((a = {}), (i[t.id] = a));
    let o = a[r];
    return (o === void 0 && ((o = h(d())), (a[r] = o)), o);
  }
  function h(e) {
    let t = [],
      n = [],
      r = [];
    for (let e = 0; e < i; e++) ((t[e] = 0), (n[e] = 0), (r[e] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: n,
      attributeDivisors: r,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function g(e, t) {
    let n = l.attributes,
      r = e.attributes,
      i = 0;
    for (let e in r) {
      let t = n[e],
        a = r[e];
      if (t === void 0 || t.attribute !== a || t.data !== a.data) return !0;
      i++;
    }
    return l.attributesNum !== i || l.index !== t;
  }
  function _(e, t) {
    let n = {},
      r = e.attributes,
      i = 0;
    for (let e in r) {
      let t = r[e],
        a = {};
      ((a.attribute = t), t.data && (a.data = t.data), (n[e] = a), i++);
    }
    ((l.attributes = n), (l.attributesNum = i), (l.index = t));
  }
  function v() {
    let e = l.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
  }
  function y(e) {
    b(e, 0);
  }
  function b(n, i) {
    let a = l.newAttributes,
      o = l.enabledAttributes,
      s = l.attributeDivisors;
    ((a[n] = 1),
      o[n] === 0 && (e.enableVertexAttribArray(n), (o[n] = 1)),
      s[n] !== i &&
        ((r.isWebGL2 ? e : t.get(`ANGLE_instanced_arrays`))[
          r.isWebGL2 ? `vertexAttribDivisor` : `vertexAttribDivisorANGLE`
        ](n, i),
        (s[n] = i)));
  }
  function x() {
    let t = l.newAttributes,
      n = l.enabledAttributes;
    for (let r = 0, i = n.length; r < i; r++)
      n[r] !== t[r] && (e.disableVertexAttribArray(r), (n[r] = 0));
  }
  function S(t, n, i, a, o, s) {
    r.isWebGL2 === !0 && (i === 5124 || i === 5125)
      ? e.vertexAttribIPointer(t, n, i, o, s)
      : e.vertexAttribPointer(t, n, i, a, o, s);
  }
  function C(i, a, o, s) {
    if (
      r.isWebGL2 === !1 &&
      (i.isInstancedMesh || s.isInstancedBufferGeometry) &&
      t.get(`ANGLE_instanced_arrays`) === null
    )
      return;
    v();
    let c = s.attributes,
      l = o.getAttributes(),
      u = a.defaultAttributeValues;
    for (let t in l) {
      let r = l[t];
      if (r.location >= 0) {
        let a = c[t];
        if (
          (a === void 0 &&
            (t === `instanceMatrix` &&
              i.instanceMatrix &&
              (a = i.instanceMatrix),
            t === `instanceColor` && i.instanceColor && (a = i.instanceColor)),
          a !== void 0)
        ) {
          let t = a.normalized,
            o = a.itemSize,
            c = n.get(a);
          if (c === void 0) continue;
          let l = c.buffer,
            u = c.type,
            d = c.bytesPerElement;
          if (a.isInterleavedBufferAttribute) {
            let n = a.data,
              c = n.stride,
              f = a.offset;
            if (n && n.isInstancedInterleavedBuffer) {
              for (let e = 0; e < r.locationSize; e++)
                b(r.location + e, n.meshPerAttribute);
              i.isInstancedMesh !== !0 &&
                s._maxInstanceCount === void 0 &&
                (s._maxInstanceCount = n.meshPerAttribute * n.count);
            } else for (let e = 0; e < r.locationSize; e++) y(r.location + e);
            e.bindBuffer(34962, l);
            for (let e = 0; e < r.locationSize; e++)
              S(
                r.location + e,
                o / r.locationSize,
                u,
                t,
                c * d,
                (f + (o / r.locationSize) * e) * d,
              );
          } else {
            if (a.isInstancedBufferAttribute) {
              for (let e = 0; e < r.locationSize; e++)
                b(r.location + e, a.meshPerAttribute);
              i.isInstancedMesh !== !0 &&
                s._maxInstanceCount === void 0 &&
                (s._maxInstanceCount = a.meshPerAttribute * a.count);
            } else for (let e = 0; e < r.locationSize; e++) y(r.location + e);
            e.bindBuffer(34962, l);
            for (let e = 0; e < r.locationSize; e++)
              S(
                r.location + e,
                o / r.locationSize,
                u,
                t,
                o * d,
                (o / r.locationSize) * e * d,
              );
          }
        } else if (u !== void 0) {
          let n = u[t];
          if (n !== void 0)
            switch (n.length) {
              case 2:
                e.vertexAttrib2fv(r.location, n);
                break;
              case 3:
                e.vertexAttrib3fv(r.location, n);
                break;
              case 4:
                e.vertexAttrib4fv(r.location, n);
                break;
              default:
                e.vertexAttrib1fv(r.location, n);
            }
        }
      }
    }
    x();
  }
  function w() {
    D();
    for (let e in s) {
      let t = s[e];
      for (let e in t) {
        let n = t[e];
        for (let e in n) (p(n[e].object), delete n[e]);
        delete t[e];
      }
      delete s[e];
    }
  }
  function T(e) {
    if (s[e.id] === void 0) return;
    let t = s[e.id];
    for (let e in t) {
      let n = t[e];
      for (let e in n) (p(n[e].object), delete n[e]);
      delete t[e];
    }
    delete s[e.id];
  }
  function E(e) {
    for (let t in s) {
      let n = s[t];
      if (n[e.id] === void 0) continue;
      let r = n[e.id];
      for (let e in r) (p(r[e].object), delete r[e]);
      delete n[e.id];
    }
  }
  function D() {
    (O(), l !== c && ((l = c), f(l.object)));
  }
  function O() {
    ((c.geometry = null), (c.program = null), (c.wireframe = !1));
  }
  return {
    setup: u,
    reset: D,
    resetDefaultState: O,
    dispose: w,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: E,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: x,
  };
}
function ba(e, t, n, r) {
  let i = r.isWebGL2,
    a;
  function o(e) {
    a = e;
  }
  function s(t, r) {
    (e.drawArrays(a, t, r), n.update(r, a, 1));
  }
  function c(r, o, s) {
    if (s === 0) return;
    let c, l;
    if (i) ((c = e), (l = `drawArraysInstanced`));
    else if (
      ((c = t.get(`ANGLE_instanced_arrays`)),
      (l = `drawArraysInstancedANGLE`),
      c === null)
    ) {
      console.error(
        `THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`,
      );
      return;
    }
    (c[l](a, r, o, s), n.update(o, a, s));
  }
  ((this.setMode = o), (this.render = s), (this.renderInstances = c));
}
function xa(e, t, n) {
  let r;
  function i() {
    if (r !== void 0) return r;
    if (t.has(`EXT_texture_filter_anisotropic`) === !0) {
      let n = t.get(`EXT_texture_filter_anisotropic`);
      r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(t) {
    if (t === `highp`) {
      if (
        e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return `highp`;
      t = `mediump`;
    }
    return t === `mediump` &&
      e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      e.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? `mediump`
      : `lowp`;
  }
  let o =
      (typeof WebGL2RenderingContext < `u` &&
        e instanceof WebGL2RenderingContext) ||
      (typeof WebGL2ComputeRenderingContext < `u` &&
        e instanceof WebGL2ComputeRenderingContext),
    s = n.precision === void 0 ? `highp` : n.precision,
    c = a(s);
  c !== s &&
    (console.warn(
      `THREE.WebGLRenderer:`,
      s,
      `not supported, using`,
      c,
      `instead.`,
    ),
    (s = c));
  let l = o || t.has(`WEBGL_draw_buffers`),
    u = n.logarithmicDepthBuffer === !0,
    d = e.getParameter(34930),
    f = e.getParameter(35660),
    p = e.getParameter(3379),
    m = e.getParameter(34076),
    h = e.getParameter(34921),
    g = e.getParameter(36347),
    _ = e.getParameter(36348),
    v = e.getParameter(36349),
    y = f > 0,
    b = o || t.has(`OES_texture_float`),
    x = y && b,
    S = o ? e.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: a,
    precision: s,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: p,
    maxCubemapSize: m,
    maxAttributes: h,
    maxVertexUniforms: g,
    maxVaryings: _,
    maxFragmentUniforms: v,
    vertexTextures: y,
    floatFragmentTextures: b,
    floatVertexTextures: x,
    maxSamples: S,
  };
}
function Sa(e) {
  let t = this,
    n = null,
    r = 0,
    i = !1,
    a = !1,
    o = new ua(),
    s = new kn(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t, a) {
      let o = e.length !== 0 || t || r !== 0 || i;
      return ((i = t), (n = u(e, a, 0)), (r = e.length), o);
    }),
    (this.beginShadows = function () {
      ((a = !0), u(null));
    }),
    (this.endShadows = function () {
      ((a = !1), l());
    }),
    (this.setState = function (t, o, s) {
      let d = t.clippingPlanes,
        f = t.clipIntersection,
        p = t.clipShadows,
        m = e.get(t);
      if (!i || d === null || d.length === 0 || (a && !p)) a ? u(null) : l();
      else {
        let e = a ? 0 : r,
          t = e * 4,
          i = m.clippingState || null;
        ((c.value = i), (i = u(d, o, t, s)));
        for (let e = 0; e !== t; ++e) i[e] = n[e];
        ((m.clippingState = i),
          (this.numIntersection = f ? this.numPlanes : 0),
          (this.numPlanes += e));
      }
    }));
  function l() {
    (c.value !== n && ((c.value = n), (c.needsUpdate = r > 0)),
      (t.numPlanes = r),
      (t.numIntersection = 0));
  }
  function u(e, n, r, i) {
    let a = e === null ? 0 : e.length,
      l = null;
    if (a !== 0) {
      if (((l = c.value), i !== !0 || l === null)) {
        let t = r + a * 4,
          i = n.matrixWorldInverse;
        (s.getNormalMatrix(i),
          (l === null || l.length < t) && (l = new Float32Array(t)));
        for (let t = 0, n = r; t !== a; ++t, n += 4)
          (o.copy(e[t]).applyMatrix4(i, s),
            o.normal.toArray(l, n),
            (l[n + 3] = o.constant));
      }
      ((c.value = l), (c.needsUpdate = !0));
    }
    return ((t.numPlanes = a), (t.numIntersection = 0), l);
  }
}
function Ca(e) {
  let t = new WeakMap();
  function n(e, t) {
    return (t === 303 ? (e.mapping = 301) : t === 304 && (e.mapping = 302), e);
  }
  function r(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      let a = r.mapping;
      if (a === 303 || a === 304)
        if (t.has(r)) {
          let e = t.get(r).texture;
          return n(e, r.mapping);
        } else {
          let a = r.image;
          if (a && a.height > 0) {
            let o = e.getRenderTarget(),
              s = new oa(a.height / 2);
            return (
              s.fromEquirectangularTexture(e, r),
              t.set(r, s),
              e.setRenderTarget(o),
              r.addEventListener(`dispose`, i),
              n(s.texture, r.mapping)
            );
          } else return null;
        }
    }
    return r;
  }
  function i(e) {
    let n = e.target;
    n.removeEventListener(`dispose`, i);
    let r = t.get(n);
    r !== void 0 && (t.delete(n), r.dispose());
  }
  function a() {
    t = new WeakMap();
  }
  return { get: r, dispose: a };
}
var wa = class extends ea {
  constructor(e = -1, t = 1, n = 1, r = -1, i = 0.1, a = 2e3) {
    (super(),
      (this.type = `OrthographicCamera`),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = i),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, i, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    let e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2,
      i = n - e,
      a = n + e,
      o = r + t,
      s = r - t;
    if (this.view !== null && this.view.enabled) {
      let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((i += e * this.view.offsetX),
        (a = i + e * this.view.width),
        (o -= t * this.view.offsetY),
        (s = o - t * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
};
wa.prototype.isOrthographicCamera = !0;
var Ta = class extends $i {
  constructor(e) {
    (super(e), (this.type = `RawShaderMaterial`));
  }
};
Ta.prototype.isRawShaderMaterial = !0;
var Ea = 4,
  Da = 8,
  Oa = 2 ** Da,
  ka = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Aa = Da - Ea + 1 + ka.length,
  ja = 20,
  Ma = { [Ot]: 0, [kt]: 1, [jt]: 2, [Nt]: 3, [Pt]: 4, [Ft]: 5, [At]: 6 },
  Na = new wa(),
  { _lodPlanes: Pa, _sizeLods: Fa, _sigmas: Ia } = Wa(),
  La = new W(),
  Ra = null,
  za = (1 + Math.sqrt(5)) / 2,
  Ba = 1 / za,
  Va = [
    new V(1, 1, 1),
    new V(-1, 1, 1),
    new V(1, 1, -1),
    new V(-1, 1, -1),
    new V(0, za, Ba),
    new V(0, za, -Ba),
    new V(Ba, 0, za),
    new V(-Ba, 0, za),
    new V(za, Ba, 0),
    new V(-za, Ba, 0),
  ],
  Ha = class {
    constructor(e) {
      ((this._renderer = e),
        (this._pingPongRenderTarget = null),
        (this._blurMaterial = qa(ja)),
        (this._equirectShader = null),
        (this._cubemapShader = null),
        this._compileMaterial(this._blurMaterial));
    }
    fromScene(e, t = 0, n = 0.1, r = 100) {
      Ra = this._renderer.getRenderTarget();
      let i = this._allocateTargets();
      return (
        this._sceneToCubeUV(e, n, r, i),
        t > 0 && this._blur(i, 0, 0, t),
        this._applyPMREM(i),
        this._cleanup(i),
        i
      );
    }
    fromEquirectangular(e) {
      return this._fromTexture(e);
    }
    fromCubemap(e) {
      return this._fromTexture(e);
    }
    compileCubemapShader() {
      this._cubemapShader === null &&
        ((this._cubemapShader = Ya()),
        this._compileMaterial(this._cubemapShader));
    }
    compileEquirectangularShader() {
      this._equirectShader === null &&
        ((this._equirectShader = Ja()),
        this._compileMaterial(this._equirectShader));
    }
    dispose() {
      (this._blurMaterial.dispose(),
        this._cubemapShader !== null && this._cubemapShader.dispose(),
        this._equirectShader !== null && this._equirectShader.dispose());
      for (let e = 0; e < Pa.length; e++) Pa[e].dispose();
    }
    _cleanup(e) {
      (this._pingPongRenderTarget.dispose(),
        this._renderer.setRenderTarget(Ra),
        (e.scissorTest = !1),
        Ka(e, 0, 0, e.width, e.height));
    }
    _fromTexture(e) {
      Ra = this._renderer.getRenderTarget();
      let t = this._allocateTargets(e);
      return (
        this._textureToCubeUV(e, t),
        this._applyPMREM(t),
        this._cleanup(t),
        t
      );
    }
    _allocateTargets(e) {
      let t = {
          magFilter: M,
          minFilter: M,
          generateMipmaps: !1,
          type: le,
          format: Se,
          encoding: Ua(e) ? e.encoding : jt,
          depthBuffer: !1,
        },
        n = Ga(t);
      return ((n.depthBuffer = !e), (this._pingPongRenderTarget = Ga(t)), n);
    }
    _compileMaterial(e) {
      let t = new Wi(Pa[0], e);
      this._renderer.compile(t, Na);
    }
    _sceneToCubeUV(e, t, n, r) {
      let i = new ta(90, 1, t, n),
        a = [1, -1, 1, 1, 1, 1],
        o = [1, 1, 1, -1, -1, -1],
        s = this._renderer,
        c = s.autoClear,
        l = s.outputEncoding,
        u = s.toneMapping;
      (s.getClearColor(La),
        (s.toneMapping = 0),
        (s.outputEncoding = Ot),
        (s.autoClear = !1));
      let d = new li({
          name: `PMREM.Background`,
          side: 1,
          depthWrite: !1,
          depthTest: !1,
        }),
        f = new Wi(new qi(), d),
        p = !1,
        m = e.background;
      m
        ? m.isColor && (d.color.copy(m), (e.background = null), (p = !0))
        : (d.color.copy(La), (p = !0));
      for (let t = 0; t < 6; t++) {
        let n = t % 3;
        (n == 0
          ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0))
          : n == 1
            ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0))
            : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t])),
          Ka(r, n * Oa, t > 2 ? Oa : 0, Oa, Oa),
          s.setRenderTarget(r),
          p && s.render(f, i),
          s.render(e, i));
      }
      (f.geometry.dispose(),
        f.material.dispose(),
        (s.toneMapping = u),
        (s.outputEncoding = l),
        (s.autoClear = c),
        (e.background = m));
    }
    _setEncoding(e, t) {
      this._renderer.capabilities.isWebGL2 === !0 &&
      t.format === 1023 &&
      t.type === 1009 &&
      t.encoding === 3001
        ? (e.value = Ma[Ot])
        : (e.value = Ma[t.encoding]);
    }
    _textureToCubeUV(e, t) {
      let n = this._renderer,
        r = e.mapping === 301 || e.mapping === 302;
      r ? (this._cubemapShader ??= Ya()) : (this._equirectShader ??= Ja());
      let i = r ? this._cubemapShader : this._equirectShader,
        a = new Wi(Pa[0], i),
        o = i.uniforms;
      ((o.envMap.value = e),
        r || o.texelSize.value.set(1 / e.image.width, 1 / e.image.height),
        this._setEncoding(o.inputEncoding, e),
        this._setEncoding(o.outputEncoding, t.texture),
        Ka(t, 0, 0, 3 * Oa, 2 * Oa),
        n.setRenderTarget(t),
        n.render(a, Na));
    }
    _applyPMREM(e) {
      let t = this._renderer,
        n = t.autoClear;
      t.autoClear = !1;
      for (let t = 1; t < Aa; t++) {
        let n = Math.sqrt(Ia[t] * Ia[t] - Ia[t - 1] * Ia[t - 1]),
          r = Va[(t - 1) % Va.length];
        this._blur(e, t - 1, t, n, r);
      }
      t.autoClear = n;
    }
    _blur(e, t, n, r, i) {
      let a = this._pingPongRenderTarget;
      (this._halfBlur(e, a, t, n, r, `latitudinal`, i),
        this._halfBlur(a, e, n, n, r, `longitudinal`, i));
    }
    _halfBlur(e, t, n, r, i, a, o) {
      let s = this._renderer,
        c = this._blurMaterial;
      a !== `latitudinal` &&
        a !== `longitudinal` &&
        console.error(
          `blur direction must be either latitudinal or longitudinal!`,
        );
      let l = new Wi(Pa[r], c),
        u = c.uniforms,
        d = Fa[n] - 1,
        f = isFinite(i) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * ja - 1),
        p = i / f,
        m = isFinite(i) ? 1 + Math.floor(3 * p) : ja;
      m > ja &&
        console.warn(
          `sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ja}`,
        );
      let h = [],
        g = 0;
      for (let e = 0; e < ja; ++e) {
        let t = e / p,
          n = Math.exp((-t * t) / 2);
        (h.push(n), e == 0 ? (g += n) : e < m && (g += 2 * n));
      }
      for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
      ((u.envMap.value = e.texture),
        (u.samples.value = m),
        (u.weights.value = h),
        (u.latitudinal.value = a === `latitudinal`),
        o && (u.poleAxis.value = o),
        (u.dTheta.value = f),
        (u.mipInt.value = Da - n),
        this._setEncoding(u.inputEncoding, e.texture),
        this._setEncoding(u.outputEncoding, e.texture));
      let _ = Fa[r];
      (Ka(
        t,
        3 * Math.max(0, Oa - 2 * _),
        (r === 0 ? 0 : 2 * Oa) + 2 * _ * (r > Da - Ea ? r - Da + Ea : 0),
        3 * _,
        2 * _,
      ),
        s.setRenderTarget(t),
        s.render(l, Na));
    }
  };
function Ua(e) {
  return e === void 0 || e.type !== 1009
    ? !1
    : e.encoding === 3e3 || e.encoding === 3001 || e.encoding === 3007;
}
function Wa() {
  let e = [],
    t = [],
    n = [],
    r = Da;
  for (let i = 0; i < Aa; i++) {
    let a = 2 ** r;
    t.push(a);
    let o = 1 / a;
    (i > Da - Ea ? (o = ka[i - Da + Ea - 1]) : i == 0 && (o = 0), n.push(o));
    let s = 1 / (a - 1),
      c = -s / 2,
      l = 1 + s / 2,
      u = [c, c, l, c, l, l, c, c, l, l, c, l],
      d = new Float32Array(108),
      f = new Float32Array(72),
      p = new Float32Array(36);
    for (let e = 0; e < 6; e++) {
      let t = ((e % 3) * 2) / 3 - 1,
        n = e > 2 ? 0 : -1,
        r = [
          t,
          n,
          0,
          t + 2 / 3,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n,
          0,
          t + 2 / 3,
          n + 1,
          0,
          t,
          n + 1,
          0,
        ];
      (d.set(r, 18 * e), f.set(u, 12 * e));
      let i = [e, e, e, e, e, e];
      p.set(i, 6 * e);
    }
    let m = new J();
    (m.setAttribute(`position`, new K(d, 3)),
      m.setAttribute(`uv`, new K(f, 2)),
      m.setAttribute(`faceIndex`, new K(p, 1)),
      e.push(m),
      r > Ea && r--);
  }
  return { _lodPlanes: e, _sizeLods: t, _sigmas: n };
}
function Ga(e) {
  let t = new Bn(3 * Oa, 3 * Oa, e);
  return (
    (t.texture.mapping = 306),
    (t.texture.name = `PMREM.cubeUv`),
    (t.scissorTest = !0),
    t
  );
}
function Ka(e, t, n, r, i) {
  (e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i));
}
function qa(e) {
  let t = new Float32Array(e),
    n = new V(0, 1, 0);
  return new Ta({
    name: `SphericalGaussianBlur`,
    defines: { n: e },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n },
      inputEncoding: { value: Ma[Ot] },
      outputEncoding: { value: Ma[Ot] },
    },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Za()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ja() {
  return new Ta({
    name: `EquirectangularToCubeUV`,
    uniforms: {
      envMap: { value: null },
      texelSize: { value: new z(1, 1) },
      inputEncoding: { value: Ma[Ot] },
      outputEncoding: { value: Ma[Ot] },
    },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Za()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ya() {
  return new Ta({
    name: `CubemapToCubeUV`,
    uniforms: {
      envMap: { value: null },
      inputEncoding: { value: Ma[Ot] },
      outputEncoding: { value: Ma[Ot] },
    },
    vertexShader: Xa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Za()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Xa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Za() {
  return `

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`;
}
function Qa(e) {
  let t = new WeakMap(),
    n = null;
  function r(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      let o = r.mapping,
        s = o === 303 || o === 304,
        c = o === 301 || o === 302;
      if (s || c) {
        if (t.has(r)) return t.get(r).texture;
        {
          let o = r.image;
          if ((s && o && o.height > 0) || (c && o && i(o))) {
            let i = e.getRenderTarget();
            n === null && (n = new Ha(e));
            let o = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
            return (
              t.set(r, o),
              e.setRenderTarget(i),
              r.addEventListener(`dispose`, a),
              o.texture
            );
          } else return null;
        }
      }
    }
    return r;
  }
  function i(e) {
    let t = 0;
    for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
    return t === 6;
  }
  function a(e) {
    let n = e.target;
    n.removeEventListener(`dispose`, a);
    let r = t.get(n);
    r !== void 0 && (t.delete(n), r.dispose());
  }
  function o() {
    ((t = new WeakMap()), n !== null && (n.dispose(), (n = null)));
  }
  return { get: r, dispose: o };
}
function $a(e) {
  let t = {};
  function n(n) {
    if (t[n] !== void 0) return t[n];
    let r;
    switch (n) {
      case `WEBGL_depth_texture`:
        r =
          e.getExtension(`WEBGL_depth_texture`) ||
          e.getExtension(`MOZ_WEBGL_depth_texture`) ||
          e.getExtension(`WEBKIT_WEBGL_depth_texture`);
        break;
      case `EXT_texture_filter_anisotropic`:
        r =
          e.getExtension(`EXT_texture_filter_anisotropic`) ||
          e.getExtension(`MOZ_EXT_texture_filter_anisotropic`) ||
          e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);
        break;
      case `WEBGL_compressed_texture_s3tc`:
        r =
          e.getExtension(`WEBGL_compressed_texture_s3tc`) ||
          e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`) ||
          e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);
        break;
      case `WEBGL_compressed_texture_pvrtc`:
        r =
          e.getExtension(`WEBGL_compressed_texture_pvrtc`) ||
          e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);
        break;
      default:
        r = e.getExtension(n);
    }
    return ((t[n] = r), r);
  }
  return {
    has: function (e) {
      return n(e) !== null;
    },
    init: function (e) {
      (e.isWebGL2
        ? n(`EXT_color_buffer_float`)
        : (n(`WEBGL_depth_texture`),
          n(`OES_texture_float`),
          n(`OES_texture_half_float`),
          n(`OES_texture_half_float_linear`),
          n(`OES_standard_derivatives`),
          n(`OES_element_index_uint`),
          n(`OES_vertex_array_object`),
          n(`ANGLE_instanced_arrays`)),
        n(`OES_texture_float_linear`),
        n(`EXT_color_buffer_half_float`));
    },
    get: function (e) {
      let t = n(e);
      return (
        t === null &&
          console.warn(
            `THREE.WebGLRenderer: ` + e + ` extension not supported.`,
          ),
        t
      );
    },
  };
}
function eo(e, t, n, r) {
  let i = {},
    a = new WeakMap();
  function o(e) {
    let s = e.target;
    s.index !== null && t.remove(s.index);
    for (let e in s.attributes) t.remove(s.attributes[e]);
    (s.removeEventListener(`dispose`, o), delete i[s.id]);
    let c = a.get(s);
    (c && (t.remove(c), a.delete(s)),
      r.releaseStatesOfGeometry(s),
      s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount,
      n.memory.geometries--);
  }
  function s(e, t) {
    return i[t.id] === !0
      ? t
      : (t.addEventListener(`dispose`, o),
        (i[t.id] = !0),
        n.memory.geometries++,
        t);
  }
  function c(e) {
    let n = e.attributes;
    for (let e in n) t.update(n[e], 34962);
    let r = e.morphAttributes;
    for (let e in r) {
      let n = r[e];
      for (let e = 0, r = n.length; e < r; e++) t.update(n[e], 34962);
    }
  }
  function l(e) {
    let n = [],
      r = e.index,
      i = e.attributes.position,
      o = 0;
    if (r !== null) {
      let e = r.array;
      o = r.version;
      for (let t = 0, r = e.length; t < r; t += 3) {
        let r = e[t + 0],
          i = e[t + 1],
          a = e[t + 2];
        n.push(r, i, i, a, a, r);
      }
    } else {
      let e = i.array;
      o = i.version;
      for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
        let e = t + 0,
          r = t + 1,
          i = t + 2;
        n.push(e, r, r, i, i, e);
      }
    }
    let s = new (An(n) > 65535 ? _i : hi)(n, 1);
    s.version = o;
    let c = a.get(e);
    (c && t.remove(c), a.set(e, s));
  }
  function u(e) {
    let t = a.get(e);
    if (t) {
      let n = e.index;
      n !== null && t.version < n.version && l(e);
    } else l(e);
    return a.get(e);
  }
  return { get: s, update: c, getWireframeAttribute: u };
}
function to(e, t, n, r) {
  let i = r.isWebGL2,
    a;
  function o(e) {
    a = e;
  }
  let s, c;
  function l(e) {
    ((s = e.type), (c = e.bytesPerElement));
  }
  function u(t, r) {
    (e.drawElements(a, r, s, t * c), n.update(r, a, 1));
  }
  function d(r, o, l) {
    if (l === 0) return;
    let u, d;
    if (i) ((u = e), (d = `drawElementsInstanced`));
    else if (
      ((u = t.get(`ANGLE_instanced_arrays`)),
      (d = `drawElementsInstancedANGLE`),
      u === null)
    ) {
      console.error(
        `THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`,
      );
      return;
    }
    (u[d](a, o, s, r * c, l), n.update(o, a, l));
  }
  ((this.setMode = o),
    (this.setIndex = l),
    (this.render = u),
    (this.renderInstances = d));
}
function no(e) {
  let t = { geometries: 0, textures: 0 },
    n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function r(e, t, r) {
    switch ((n.calls++, t)) {
      case 4:
        n.triangles += (e / 3) * r;
        break;
      case 1:
        n.lines += (e / 2) * r;
        break;
      case 3:
        n.lines += r * (e - 1);
        break;
      case 2:
        n.lines += r * e;
        break;
      case 0:
        n.points += r * e;
        break;
      default:
        console.error(`THREE.WebGLInfo: Unknown draw mode:`, t);
        break;
    }
  }
  function i() {
    (n.frame++,
      (n.calls = 0),
      (n.triangles = 0),
      (n.points = 0),
      (n.lines = 0));
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: i,
    update: r,
  };
}
var ro = class extends Rn {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = M),
      (this.minFilter = M),
      (this.wrapR = A),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0));
  }
};
ro.prototype.isDataTexture2DArray = !0;
function io(e, t) {
  return e[0] - t[0];
}
function ao(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function oo(e, t) {
  let n = 1,
    r = t.isInterleavedBufferAttribute ? t.data.array : t.array;
  (r instanceof Int8Array
    ? (n = 127)
    : r instanceof Int16Array
      ? (n = 32767)
      : r instanceof Int32Array
        ? (n = 2147483647)
        : console.error(
            `THREE.WebGLMorphtargets: Unsupported morph attribute data type: `,
            r,
          ),
    e.divideScalar(n));
}
function so(e, t, n) {
  let r = {},
    i = new Float32Array(8),
    a = new WeakMap(),
    o = new V(),
    s = [];
  for (let e = 0; e < 8; e++) s[e] = [e, 0];
  function c(c, l, u, d) {
    let f = c.morphTargetInfluences;
    if (t.isWebGL2 === !0) {
      let r = l.morphAttributes.position.length,
        i = a.get(l);
      if (i === void 0 || i.count !== r) {
        i !== void 0 && i.texture.dispose();
        let e = l.morphAttributes.normal !== void 0,
          n = l.morphAttributes.position,
          s = l.morphAttributes.normal || [],
          c = l.attributes.position.count,
          u = e === !0 ? 2 : 1,
          d = c * u,
          f = 1;
        d > t.maxTextureSize &&
          ((f = Math.ceil(d / t.maxTextureSize)), (d = t.maxTextureSize));
        let p = new Float32Array(d * f * 4 * r),
          m = new ro(p, d, f, r);
        ((m.format = ye), (m.type = R));
        let h = u * 4;
        for (let t = 0; t < r; t++) {
          let r = n[t],
            i = s[t],
            a = d * f * 4 * t;
          for (let t = 0; t < r.count; t++) {
            (o.fromBufferAttribute(r, t), r.normalized === !0 && oo(o, r));
            let n = t * h;
            ((p[a + n + 0] = o.x),
              (p[a + n + 1] = o.y),
              (p[a + n + 2] = o.z),
              (p[a + n + 3] = 0),
              e === !0 &&
                (o.fromBufferAttribute(i, t),
                i.normalized === !0 && oo(o, i),
                (p[a + n + 4] = o.x),
                (p[a + n + 5] = o.y),
                (p[a + n + 6] = o.z),
                (p[a + n + 7] = 0)));
          }
        }
        ((i = { count: r, texture: m, size: new z(d, f) }), a.set(l, i));
      }
      let s = 0;
      for (let e = 0; e < f.length; e++) s += f[e];
      let c = l.morphTargetsRelative ? 1 : 1 - s;
      (d.getUniforms().setValue(e, `morphTargetBaseInfluence`, c),
        d.getUniforms().setValue(e, `morphTargetInfluences`, f),
        d.getUniforms().setValue(e, `morphTargetsTexture`, i.texture, n),
        d.getUniforms().setValue(e, `morphTargetsTextureSize`, i.size));
    } else {
      let t = f === void 0 ? 0 : f.length,
        n = r[l.id];
      if (n === void 0 || n.length !== t) {
        n = [];
        for (let e = 0; e < t; e++) n[e] = [e, 0];
        r[l.id] = n;
      }
      for (let e = 0; e < t; e++) {
        let t = n[e];
        ((t[0] = e), (t[1] = f[e]));
      }
      n.sort(ao);
      for (let e = 0; e < 8; e++)
        e < t && n[e][1]
          ? ((s[e][0] = n[e][0]), (s[e][1] = n[e][1]))
          : ((s[e][0] = 2 ** 53 - 1), (s[e][1] = 0));
      s.sort(io);
      let a = l.morphAttributes.position,
        o = l.morphAttributes.normal,
        c = 0;
      for (let e = 0; e < 8; e++) {
        let t = s[e],
          n = t[0],
          r = t[1];
        n !== 2 ** 53 - 1 && r
          ? (a &&
              l.getAttribute(`morphTarget` + e) !== a[n] &&
              l.setAttribute(`morphTarget` + e, a[n]),
            o &&
              l.getAttribute(`morphNormal` + e) !== o[n] &&
              l.setAttribute(`morphNormal` + e, o[n]),
            (i[e] = r),
            (c += r))
          : (a &&
              l.hasAttribute(`morphTarget` + e) === !0 &&
              l.deleteAttribute(`morphTarget` + e),
            o &&
              l.hasAttribute(`morphNormal` + e) === !0 &&
              l.deleteAttribute(`morphNormal` + e),
            (i[e] = 0));
      }
      let u = l.morphTargetsRelative ? 1 : 1 - c;
      (d.getUniforms().setValue(e, `morphTargetBaseInfluence`, u),
        d.getUniforms().setValue(e, `morphTargetInfluences`, i));
    }
  }
  return { update: c };
}
function co(e, t, n, r) {
  let i = new WeakMap();
  function a(e) {
    let a = r.render.frame,
      o = e.geometry,
      c = t.get(e, o);
    return (
      i.get(c) !== a && (t.update(c), i.set(c, a)),
      e.isInstancedMesh &&
        (e.hasEventListener(`dispose`, s) === !1 &&
          e.addEventListener(`dispose`, s),
        n.update(e.instanceMatrix, 34962),
        e.instanceColor !== null && n.update(e.instanceColor, 34962)),
      c
    );
  }
  function o() {
    i = new WeakMap();
  }
  function s(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, s),
      n.remove(t.instanceMatrix),
      t.instanceColor !== null && n.remove(t.instanceColor));
  }
  return { update: a, dispose: o };
}
var lo = class extends Rn {
  constructor(e = null, t = 1, n = 1, r = 1) {
    (super(null),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = M),
      (this.minFilter = M),
      (this.wrapR = A),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0));
  }
};
lo.prototype.isDataTexture3D = !0;
var uo = new Rn(),
  fo = new ro(),
  po = new lo(),
  mo = new aa(),
  ho = [],
  go = [],
  _o = new Float32Array(16),
  vo = new Float32Array(9),
  yo = new Float32Array(4);
function bo(e, t, n) {
  let r = e[0];
  if (r <= 0 || r > 0) return e;
  let i = t * n,
    a = ho[i];
  if ((a === void 0 && ((a = new Float32Array(i)), (ho[i] = a)), t !== 0)) {
    r.toArray(a, 0);
    for (let r = 1, i = 0; r !== t; ++r) ((i += n), e[r].toArray(a, i));
  }
  return a;
}
function xo(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function So(e, t) {
  for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Co(e, t) {
  let n = go[t];
  n === void 0 && ((n = new Int32Array(t)), (go[t] = n));
  for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
  return n;
}
function wo(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function To(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (xo(n, t)) return;
    (e.uniform2fv(this.addr, t), So(n, t));
  }
}
function Eo(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (n[0] = t.r),
      (n[1] = t.g),
      (n[2] = t.b));
  else {
    if (xo(n, t)) return;
    (e.uniform3fv(this.addr, t), So(n, t));
  }
}
function Do(e, t) {
  let n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (xo(n, t)) return;
    (e.uniform4fv(this.addr, t), So(n, t));
  }
}
function Oo(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (xo(n, t)) return;
    (e.uniformMatrix2fv(this.addr, !1, t), So(n, t));
  } else {
    if (xo(n, r)) return;
    (yo.set(r), e.uniformMatrix2fv(this.addr, !1, yo), So(n, r));
  }
}
function ko(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (xo(n, t)) return;
    (e.uniformMatrix3fv(this.addr, !1, t), So(n, t));
  } else {
    if (xo(n, r)) return;
    (vo.set(r), e.uniformMatrix3fv(this.addr, !1, vo), So(n, r));
  }
}
function Ao(e, t) {
  let n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (xo(n, t)) return;
    (e.uniformMatrix4fv(this.addr, !1, t), So(n, t));
  } else {
    if (xo(n, r)) return;
    (_o.set(r), e.uniformMatrix4fv(this.addr, !1, _o), So(n, r));
  }
}
function jo(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function Mo(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform2iv(this.addr, t), So(n, t));
}
function No(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform3iv(this.addr, t), So(n, t));
}
function Po(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform4iv(this.addr, t), So(n, t));
}
function Fo(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
}
function Io(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform2uiv(this.addr, t), So(n, t));
}
function Lo(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform3uiv(this.addr, t), So(n, t));
}
function Ro(e, t) {
  let n = this.cache;
  xo(n, t) || (e.uniform4uiv(this.addr, t), So(n, t));
}
function zo(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.safeSetTexture2D(t || uo, i));
}
function Bo(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture3D(t || po, i));
}
function Vo(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.safeSetTextureCube(t || mo, i));
}
function Ho(e, t, n) {
  let r = this.cache,
    i = n.allocateTextureUnit();
  (r[0] !== i && (e.uniform1i(this.addr, i), (r[0] = i)),
    n.setTexture2DArray(t || fo, i));
}
function Uo(e) {
  switch (e) {
    case 5126:
      return wo;
    case 35664:
      return To;
    case 35665:
      return Eo;
    case 35666:
      return Do;
    case 35674:
      return Oo;
    case 35675:
      return ko;
    case 35676:
      return Ao;
    case 5124:
    case 35670:
      return jo;
    case 35667:
    case 35671:
      return Mo;
    case 35668:
    case 35672:
      return No;
    case 35669:
    case 35673:
      return Po;
    case 5125:
      return Fo;
    case 36294:
      return Io;
    case 36295:
      return Lo;
    case 36296:
      return Ro;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zo;
    case 35679:
    case 36299:
    case 36307:
      return Bo;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Vo;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ho;
  }
}
function Wo(e, t) {
  e.uniform1fv(this.addr, t);
}
function Go(e, t) {
  let n = bo(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function Ko(e, t) {
  let n = bo(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function qo(e, t) {
  let n = bo(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Jo(e, t) {
  let n = bo(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function Yo(e, t) {
  let n = bo(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Xo(e, t) {
  let n = bo(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Zo(e, t) {
  e.uniform1iv(this.addr, t);
}
function Qo(e, t) {
  e.uniform2iv(this.addr, t);
}
function $o(e, t) {
  e.uniform3iv(this.addr, t);
}
function es(e, t) {
  e.uniform4iv(this.addr, t);
}
function ts(e, t) {
  e.uniform1uiv(this.addr, t);
}
function ns(e, t) {
  e.uniform2uiv(this.addr, t);
}
function rs(e, t) {
  e.uniform3uiv(this.addr, t);
}
function is(e, t) {
  e.uniform4uiv(this.addr, t);
}
function as(e, t, n) {
  let r = t.length,
    i = Co(n, r);
  e.uniform1iv(this.addr, i);
  for (let e = 0; e !== r; ++e) n.safeSetTexture2D(t[e] || uo, i[e]);
}
function os(e, t, n) {
  let r = t.length,
    i = Co(n, r);
  e.uniform1iv(this.addr, i);
  for (let e = 0; e !== r; ++e) n.safeSetTextureCube(t[e] || mo, i[e]);
}
function ss(e) {
  switch (e) {
    case 5126:
      return Wo;
    case 35664:
      return Go;
    case 35665:
      return Ko;
    case 35666:
      return qo;
    case 35674:
      return Jo;
    case 35675:
      return Yo;
    case 35676:
      return Xo;
    case 5124:
    case 35670:
      return Zo;
    case 35667:
    case 35671:
      return Qo;
    case 35668:
    case 35672:
      return $o;
    case 35669:
    case 35673:
      return es;
    case 5125:
      return ts;
    case 36294:
      return ns;
    case 36295:
      return rs;
    case 36296:
      return is;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return as;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return os;
  }
}
function cs(e, t, n) {
  ((this.id = e),
    (this.addr = n),
    (this.cache = []),
    (this.setValue = Uo(t.type)));
}
function ls(e, t, n) {
  ((this.id = e),
    (this.addr = n),
    (this.cache = []),
    (this.size = t.size),
    (this.setValue = ss(t.type)));
}
ls.prototype.updateCache = function (e) {
  let t = this.cache;
  (e instanceof Float32Array &&
    t.length !== e.length &&
    (this.cache = new Float32Array(e.length)),
    So(t, e));
};
function us(e) {
  ((this.id = e), (this.seq = []), (this.map = {}));
}
us.prototype.setValue = function (e, t, n) {
  let r = this.seq;
  for (let i = 0, a = r.length; i !== a; ++i) {
    let a = r[i];
    a.setValue(e, t[a.id], n);
  }
};
var ds = /(\w+)(\])?(\[|\.)?/g;
function fs(e, t) {
  (e.seq.push(t), (e.map[t.id] = t));
}
function ps(e, t, n) {
  let r = e.name,
    i = r.length;
  for (ds.lastIndex = 0; ; ) {
    let a = ds.exec(r),
      o = ds.lastIndex,
      s = a[1],
      c = a[2] === `]`,
      l = a[3];
    if ((c && (s |= 0), l === void 0 || (l === `[` && o + 2 === i))) {
      fs(n, l === void 0 ? new cs(s, e, t) : new ls(s, e, t));
      break;
    } else {
      let e = n.map[s];
      (e === void 0 && ((e = new us(s)), fs(n, e)), (n = e));
    }
  }
}
function ms(e, t) {
  ((this.seq = []), (this.map = {}));
  let n = e.getProgramParameter(t, 35718);
  for (let r = 0; r < n; ++r) {
    let n = e.getActiveUniform(t, r);
    ps(n, e.getUniformLocation(t, n.name), this);
  }
}
((ms.prototype.setValue = function (e, t, n, r) {
  let i = this.map[t];
  i !== void 0 && i.setValue(e, n, r);
}),
  (ms.prototype.setOptional = function (e, t, n) {
    let r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }),
  (ms.upload = function (e, t, n, r) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      let a = t[i],
        o = n[a.id];
      o.needsUpdate !== !1 && a.setValue(e, o.value, r);
    }
  }),
  (ms.seqWithValue = function (e, t) {
    let n = [];
    for (let r = 0, i = e.length; r !== i; ++r) {
      let i = e[r];
      i.id in t && n.push(i);
    }
    return n;
  }));
function hs(e, t, n) {
  let r = e.createShader(t);
  return (e.shaderSource(r, n), e.compileShader(r), r);
}
var gs = 0;
function _s(e) {
  let t = e.split(`
`);
  for (let e = 0; e < t.length; e++) t[e] = e + 1 + `: ` + t[e];
  return t.join(`
`);
}
function vs(e) {
  switch (e) {
    case Ot:
      return [`Linear`, `( value )`];
    case kt:
      return [`sRGB`, `( value )`];
    case jt:
      return [`RGBE`, `( value )`];
    case Nt:
      return [`RGBM`, `( value, 7.0 )`];
    case Pt:
      return [`RGBM`, `( value, 16.0 )`];
    case Ft:
      return [`RGBD`, `( value, 256.0 )`];
    case At:
      return [`Gamma`, `( value, float( GAMMA_FACTOR ) )`];
    case Mt:
      return [`LogLuv`, `( value )`];
    default:
      return (
        console.warn(`THREE.WebGLProgram: Unsupported encoding:`, e),
        [`Linear`, `( value )`]
      );
  }
}
function ys(e, t, n) {
  let r = e.getShaderParameter(t, 35713),
    i = e.getShaderInfoLog(t).trim();
  return r && i === ``
    ? ``
    : n.toUpperCase() +
        `

` +
        i +
        `

` +
        _s(e.getShaderSource(t));
}
function bs(e, t) {
  let n = vs(t);
  return (
    `vec4 ` + e + `( vec4 value ) { return ` + n[0] + `ToLinear` + n[1] + `; }`
  );
}
function xs(e, t) {
  let n = vs(t);
  return `vec4 ` + e + `( vec4 value ) { return LinearTo` + n[0] + n[1] + `; }`;
}
function Ss(e, t) {
  let n;
  switch (t) {
    case 1:
      n = `Linear`;
      break;
    case 2:
      n = `Reinhard`;
      break;
    case 3:
      n = `OptimizedCineon`;
      break;
    case 4:
      n = `ACESFilmic`;
      break;
    case 5:
      n = `Custom`;
      break;
    default:
      (console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`, t),
        (n = `Linear`));
  }
  return (
    `vec3 ` + e + `( vec3 color ) { return ` + n + `ToneMapping( color ); }`
  );
}
function Cs(e) {
  return [
    e.extensionDerivatives ||
    e.envMapCubeUV ||
    e.bumpMap ||
    e.tangentSpaceNormalMap ||
    e.clearcoatNormalMap ||
    e.flatShading ||
    e.shaderID === `physical`
      ? `#extension GL_OES_standard_derivatives : enable`
      : ``,
    (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
    e.rendererExtensionFragDepth
      ? `#extension GL_EXT_frag_depth : enable`
      : ``,
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
      ? `#extension GL_EXT_draw_buffers : require`
      : ``,
    (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
    e.rendererExtensionShaderTextureLod
      ? `#extension GL_EXT_shader_texture_lod : enable`
      : ``,
  ].filter(Es).join(`
`);
}
function ws(e) {
  let t = [];
  for (let n in e) {
    let r = e[n];
    r !== !1 && t.push(`#define ` + n + ` ` + r);
  }
  return t.join(`
`);
}
function Ts(e, t) {
  let n = {},
    r = e.getProgramParameter(t, 35721);
  for (let i = 0; i < r; i++) {
    let r = e.getActiveAttrib(t, i),
      a = r.name,
      o = 1;
    (r.type === 35674 && (o = 2),
      r.type === 35675 && (o = 3),
      r.type === 35676 && (o = 4),
      (n[a] = {
        type: r.type,
        location: e.getAttribLocation(t, a),
        locationSize: o,
      }));
  }
  return n;
}
function Es(e) {
  return e !== ``;
}
function Ds(e, t) {
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Os(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    );
}
var ks = /^[ \t]*#include +<([\w\d./]+)>/gm;
function As(e) {
  return e.replace(ks, js);
}
function js(e, t) {
  let n = Y[t];
  if (n === void 0) throw Error(`Can not resolve #include <` + t + `>`);
  return As(n);
}
var Ms =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  Ns =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ps(e) {
  return e.replace(Ns, Is).replace(Ms, Fs);
}
function Fs(e, t, n, r) {
  return (
    console.warn(
      `WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.`,
    ),
    Is(e, t, n, r)
  );
}
function Is(e, t, n, r) {
  let i = ``;
  for (let e = parseInt(t); e < parseInt(n); e++)
    i += r
      .replace(/\[\s*i\s*\]/g, `[ ` + e + ` ]`)
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return i;
}
function Ls(e) {
  let t =
    `precision ` +
    e.precision +
    ` float;
precision ` +
    e.precision +
    ` int;`;
  return (
    e.precision === `highp`
      ? (t += `
#define HIGH_PRECISION`)
      : e.precision === `mediump`
        ? (t += `
#define MEDIUM_PRECISION`)
        : e.precision === `lowp` &&
          (t += `
#define LOW_PRECISION`),
    t
  );
}
function Rs(e) {
  let t = `SHADOWMAP_TYPE_BASIC`;
  return (
    e.shadowMapType === 1
      ? (t = `SHADOWMAP_TYPE_PCF`)
      : e.shadowMapType === 2
        ? (t = `SHADOWMAP_TYPE_PCF_SOFT`)
        : e.shadowMapType === 3 && (t = `SHADOWMAP_TYPE_VSM`),
    t
  );
}
function zs(e) {
  let t = `ENVMAP_TYPE_CUBE`;
  if (e.envMap)
    switch (e.envMapMode) {
      case 301:
      case 302:
        t = `ENVMAP_TYPE_CUBE`;
        break;
      case 306:
      case 307:
        t = `ENVMAP_TYPE_CUBE_UV`;
        break;
    }
  return t;
}
function Bs(e) {
  let t = `ENVMAP_MODE_REFLECTION`;
  if (e.envMap)
    switch (e.envMapMode) {
      case 302:
      case 307:
        t = `ENVMAP_MODE_REFRACTION`;
        break;
    }
  return t;
}
function Vs(e) {
  let t = `ENVMAP_BLENDING_NONE`;
  if (e.envMap)
    switch (e.combine) {
      case 0:
        t = `ENVMAP_BLENDING_MULTIPLY`;
        break;
      case 1:
        t = `ENVMAP_BLENDING_MIX`;
        break;
      case 2:
        t = `ENVMAP_BLENDING_ADD`;
        break;
    }
  return t;
}
function Hs(e, t, n, r) {
  let i = e.getContext(),
    a = n.defines,
    o = n.vertexShader,
    s = n.fragmentShader,
    c = Rs(n),
    l = zs(n),
    u = Bs(n),
    d = Vs(n),
    f = e.gammaFactor > 0 ? e.gammaFactor : 1,
    p = n.isWebGL2 ? `` : Cs(n),
    m = ws(a),
    h = i.createProgram(),
    g,
    _,
    v = n.glslVersion
      ? `#version ` +
        n.glslVersion +
        `
`
      : ``;
  (n.isRawShaderMaterial
    ? ((g = [m].filter(Es).join(`
`)),
      g.length > 0 &&
        (g += `
`),
      (_ = [p, m].filter(Es).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((g = [
        Ls(n),
        `#define SHADER_NAME ` + n.shaderName,
        m,
        n.instancing ? `#define USE_INSTANCING` : ``,
        n.instancingColor ? `#define USE_INSTANCING_COLOR` : ``,
        n.supportsVertexTextures ? `#define VERTEX_TEXTURES` : ``,
        `#define GAMMA_FACTOR ` + f,
        `#define MAX_BONES ` + n.maxBones,
        n.useFog && n.fog ? `#define USE_FOG` : ``,
        n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
        n.map ? `#define USE_MAP` : ``,
        n.envMap ? `#define USE_ENVMAP` : ``,
        n.envMap ? `#define ` + u : ``,
        n.lightMap ? `#define USE_LIGHTMAP` : ``,
        n.aoMap ? `#define USE_AOMAP` : ``,
        n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
        n.bumpMap ? `#define USE_BUMPMAP` : ``,
        n.normalMap ? `#define USE_NORMALMAP` : ``,
        n.normalMap && n.objectSpaceNormalMap
          ? `#define OBJECTSPACE_NORMALMAP`
          : ``,
        n.normalMap && n.tangentSpaceNormalMap
          ? `#define TANGENTSPACE_NORMALMAP`
          : ``,
        n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
        n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
        n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
        n.displacementMap && n.supportsVertexTextures
          ? `#define USE_DISPLACEMENTMAP`
          : ``,
        n.specularMap ? `#define USE_SPECULARMAP` : ``,
        n.specularIntensityMap ? `#define USE_SPECULARINTENSITYMAP` : ``,
        n.specularColorMap ? `#define USE_SPECULARCOLORMAP` : ``,
        n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
        n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
        n.alphaMap ? `#define USE_ALPHAMAP` : ``,
        n.transmission ? `#define USE_TRANSMISSION` : ``,
        n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
        n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
        n.sheenColorMap ? `#define USE_SHEENCOLORMAP` : ``,
        n.sheenRoughnessMap ? `#define USE_SHEENROUGHNESSMAP` : ``,
        n.vertexTangents ? `#define USE_TANGENT` : ``,
        n.vertexColors ? `#define USE_COLOR` : ``,
        n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``,
        n.vertexUvs ? `#define USE_UV` : ``,
        n.uvsVertexOnly ? `#define UVS_VERTEX_ONLY` : ``,
        n.flatShading ? `#define FLAT_SHADED` : ``,
        n.skinning ? `#define USE_SKINNING` : ``,
        n.useVertexTexture ? `#define BONE_TEXTURE` : ``,
        n.morphTargets ? `#define USE_MORPHTARGETS` : ``,
        n.morphNormals && n.flatShading === !1
          ? `#define USE_MORPHNORMALS`
          : ``,
        n.morphTargets && n.isWebGL2 ? `#define MORPHTARGETS_TEXTURE` : ``,
        n.morphTargets && n.isWebGL2
          ? `#define MORPHTARGETS_COUNT ` + n.morphTargetsCount
          : ``,
        n.doubleSided ? `#define DOUBLE_SIDED` : ``,
        n.flipSided ? `#define FLIP_SIDED` : ``,
        n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
        n.shadowMapEnabled ? `#define ` + c : ``,
        n.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``,
        n.logarithmicDepthBuffer ? `#define USE_LOGDEPTHBUF` : ``,
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? `#define USE_LOGDEPTHBUF_EXT`
          : ``,
        `uniform mat4 modelMatrix;`,
        `uniform mat4 modelViewMatrix;`,
        `uniform mat4 projectionMatrix;`,
        `uniform mat4 viewMatrix;`,
        `uniform mat3 normalMatrix;`,
        `uniform vec3 cameraPosition;`,
        `uniform bool isOrthographic;`,
        `#ifdef USE_INSTANCING`,
        `	attribute mat4 instanceMatrix;`,
        `#endif`,
        `#ifdef USE_INSTANCING_COLOR`,
        `	attribute vec3 instanceColor;`,
        `#endif`,
        `attribute vec3 position;`,
        `attribute vec3 normal;`,
        `attribute vec2 uv;`,
        `#ifdef USE_TANGENT`,
        `	attribute vec4 tangent;`,
        `#endif`,
        `#if defined( USE_COLOR_ALPHA )`,
        `	attribute vec4 color;`,
        `#elif defined( USE_COLOR )`,
        `	attribute vec3 color;`,
        `#endif`,
        `#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,
        `	attribute vec3 morphTarget0;`,
        `	attribute vec3 morphTarget1;`,
        `	attribute vec3 morphTarget2;`,
        `	attribute vec3 morphTarget3;`,
        `	#ifdef USE_MORPHNORMALS`,
        `		attribute vec3 morphNormal0;`,
        `		attribute vec3 morphNormal1;`,
        `		attribute vec3 morphNormal2;`,
        `		attribute vec3 morphNormal3;`,
        `	#else`,
        `		attribute vec3 morphTarget4;`,
        `		attribute vec3 morphTarget5;`,
        `		attribute vec3 morphTarget6;`,
        `		attribute vec3 morphTarget7;`,
        `	#endif`,
        `#endif`,
        `#ifdef USE_SKINNING`,
        `	attribute vec4 skinIndex;`,
        `	attribute vec4 skinWeight;`,
        `#endif`,
        `
`,
      ].filter(Es).join(`
`)),
      (_ = [
        p,
        Ls(n),
        `#define SHADER_NAME ` + n.shaderName,
        m,
        `#define GAMMA_FACTOR ` + f,
        n.useFog && n.fog ? `#define USE_FOG` : ``,
        n.useFog && n.fogExp2 ? `#define FOG_EXP2` : ``,
        n.map ? `#define USE_MAP` : ``,
        n.matcap ? `#define USE_MATCAP` : ``,
        n.envMap ? `#define USE_ENVMAP` : ``,
        n.envMap ? `#define ` + l : ``,
        n.envMap ? `#define ` + u : ``,
        n.envMap ? `#define ` + d : ``,
        n.lightMap ? `#define USE_LIGHTMAP` : ``,
        n.aoMap ? `#define USE_AOMAP` : ``,
        n.emissiveMap ? `#define USE_EMISSIVEMAP` : ``,
        n.bumpMap ? `#define USE_BUMPMAP` : ``,
        n.normalMap ? `#define USE_NORMALMAP` : ``,
        n.normalMap && n.objectSpaceNormalMap
          ? `#define OBJECTSPACE_NORMALMAP`
          : ``,
        n.normalMap && n.tangentSpaceNormalMap
          ? `#define TANGENTSPACE_NORMALMAP`
          : ``,
        n.clearcoat ? `#define USE_CLEARCOAT` : ``,
        n.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``,
        n.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``,
        n.clearcoatNormalMap ? `#define USE_CLEARCOAT_NORMALMAP` : ``,
        n.specularMap ? `#define USE_SPECULARMAP` : ``,
        n.specularIntensityMap ? `#define USE_SPECULARINTENSITYMAP` : ``,
        n.specularColorMap ? `#define USE_SPECULARCOLORMAP` : ``,
        n.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``,
        n.metalnessMap ? `#define USE_METALNESSMAP` : ``,
        n.alphaMap ? `#define USE_ALPHAMAP` : ``,
        n.alphaTest ? `#define USE_ALPHATEST` : ``,
        n.sheen ? `#define USE_SHEEN` : ``,
        n.sheenColorMap ? `#define USE_SHEENCOLORMAP` : ``,
        n.sheenRoughnessMap ? `#define USE_SHEENROUGHNESSMAP` : ``,
        n.transmission ? `#define USE_TRANSMISSION` : ``,
        n.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``,
        n.thicknessMap ? `#define USE_THICKNESSMAP` : ``,
        n.vertexTangents ? `#define USE_TANGENT` : ``,
        n.vertexColors || n.instancingColor ? `#define USE_COLOR` : ``,
        n.vertexAlphas ? `#define USE_COLOR_ALPHA` : ``,
        n.vertexUvs ? `#define USE_UV` : ``,
        n.uvsVertexOnly ? `#define UVS_VERTEX_ONLY` : ``,
        n.gradientMap ? `#define USE_GRADIENTMAP` : ``,
        n.flatShading ? `#define FLAT_SHADED` : ``,
        n.doubleSided ? `#define DOUBLE_SIDED` : ``,
        n.flipSided ? `#define FLIP_SIDED` : ``,
        n.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``,
        n.shadowMapEnabled ? `#define ` + c : ``,
        n.premultipliedAlpha ? `#define PREMULTIPLIED_ALPHA` : ``,
        n.physicallyCorrectLights ? `#define PHYSICALLY_CORRECT_LIGHTS` : ``,
        n.logarithmicDepthBuffer ? `#define USE_LOGDEPTHBUF` : ``,
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? `#define USE_LOGDEPTHBUF_EXT`
          : ``,
        (n.extensionShaderTextureLOD || n.envMap) &&
        n.rendererExtensionShaderTextureLod
          ? `#define TEXTURE_LOD_EXT`
          : ``,
        `uniform mat4 viewMatrix;`,
        `uniform vec3 cameraPosition;`,
        `uniform bool isOrthographic;`,
        n.toneMapping === 0 ? `` : `#define TONE_MAPPING`,
        n.toneMapping === 0 ? `` : Y.tonemapping_pars_fragment,
        n.toneMapping === 0 ? `` : Ss(`toneMapping`, n.toneMapping),
        n.dithering ? `#define DITHERING` : ``,
        n.format === 1022 ? `#define OPAQUE` : ``,
        Y.encodings_pars_fragment,
        n.map ? bs(`mapTexelToLinear`, n.mapEncoding) : ``,
        n.matcap ? bs(`matcapTexelToLinear`, n.matcapEncoding) : ``,
        n.envMap ? bs(`envMapTexelToLinear`, n.envMapEncoding) : ``,
        n.emissiveMap
          ? bs(`emissiveMapTexelToLinear`, n.emissiveMapEncoding)
          : ``,
        n.specularColorMap
          ? bs(`specularColorMapTexelToLinear`, n.specularColorMapEncoding)
          : ``,
        n.sheenColorMap
          ? bs(`sheenColorMapTexelToLinear`, n.sheenColorMapEncoding)
          : ``,
        n.lightMap ? bs(`lightMapTexelToLinear`, n.lightMapEncoding) : ``,
        xs(`linearToOutputTexel`, n.outputEncoding),
        n.depthPacking ? `#define DEPTH_PACKING ` + n.depthPacking : ``,
        `
`,
      ].filter(Es).join(`
`))),
    (o = As(o)),
    (o = Ds(o, n)),
    (o = Os(o, n)),
    (s = As(s)),
    (s = Ds(s, n)),
    (s = Os(s, n)),
    (o = Ps(o)),
    (s = Ps(s)),
    n.isWebGL2 &&
      n.isRawShaderMaterial !== !0 &&
      ((v = `#version 300 es
`),
      (g =
        [
          `precision mediump sampler2DArray;`,
          `#define attribute in`,
          `#define varying out`,
          `#define texture2D texture`,
        ].join(`
`) +
        `
` +
        g),
      (_ =
        [
          `#define varying in`,
          n.glslVersion === `300 es` ? `` : `out highp vec4 pc_fragColor;`,
          n.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`,
          `#define gl_FragDepthEXT gl_FragDepth`,
          `#define texture2D texture`,
          `#define textureCube texture`,
          `#define texture2DProj textureProj`,
          `#define texture2DLodEXT textureLod`,
          `#define texture2DProjLodEXT textureProjLod`,
          `#define textureCubeLodEXT textureLod`,
          `#define texture2DGradEXT textureGrad`,
          `#define texture2DProjGradEXT textureProjGrad`,
          `#define textureCubeGradEXT textureGrad`,
        ].join(`
`) +
        `
` +
        _)));
  let y = v + g + o,
    b = v + _ + s,
    x = hs(i, 35633, y),
    S = hs(i, 35632, b);
  if (
    (i.attachShader(h, x),
    i.attachShader(h, S),
    n.index0AttributeName === void 0
      ? n.morphTargets === !0 && i.bindAttribLocation(h, 0, `position`)
      : i.bindAttribLocation(h, 0, n.index0AttributeName),
    i.linkProgram(h),
    e.debug.checkShaderErrors)
  ) {
    let e = i.getProgramInfoLog(h).trim(),
      t = i.getShaderInfoLog(x).trim(),
      n = i.getShaderInfoLog(S).trim(),
      r = !0,
      a = !0;
    if (i.getProgramParameter(h, 35714) === !1) {
      r = !1;
      let t = ys(i, x, `vertex`),
        n = ys(i, S, `fragment`);
      console.error(
        `THREE.WebGLProgram: Shader Error ` +
          i.getError() +
          ` - VALIDATE_STATUS ` +
          i.getProgramParameter(h, 35715) +
          `

Program Info Log: ` +
          e +
          `
` +
          t +
          `
` +
          n,
      );
    } else
      e === ``
        ? (t === `` || n === ``) && (a = !1)
        : console.warn(`THREE.WebGLProgram: Program Info Log:`, e);
    a &&
      (this.diagnostics = {
        runnable: r,
        programLog: e,
        vertexShader: { log: t, prefix: g },
        fragmentShader: { log: n, prefix: _ },
      });
  }
  (i.deleteShader(x), i.deleteShader(S));
  let C;
  this.getUniforms = function () {
    return (C === void 0 && (C = new ms(i, h)), C);
  };
  let w;
  return (
    (this.getAttributes = function () {
      return (w === void 0 && (w = Ts(i, h)), w);
    }),
    (this.destroy = function () {
      (r.releaseStatesOfProgram(this),
        i.deleteProgram(h),
        (this.program = void 0));
    }),
    (this.name = n.shaderName),
    (this.id = gs++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = h),
    (this.vertexShader = x),
    (this.fragmentShader = S),
    this
  );
}
function Us(e, t, n, r, i, a, o) {
  let s = [],
    c = i.isWebGL2,
    l = i.logarithmicDepthBuffer,
    u = i.floatVertexTextures,
    d = i.maxVertexUniforms,
    f = i.vertexTextures,
    p = i.precision,
    m = {
      MeshDepthMaterial: `depth`,
      MeshDistanceMaterial: `distanceRGBA`,
      MeshNormalMaterial: `normal`,
      MeshBasicMaterial: `basic`,
      MeshLambertMaterial: `lambert`,
      MeshPhongMaterial: `phong`,
      MeshToonMaterial: `toon`,
      MeshStandardMaterial: `physical`,
      MeshPhysicalMaterial: `physical`,
      MeshMatcapMaterial: `matcap`,
      LineBasicMaterial: `basic`,
      LineDashedMaterial: `dashed`,
      PointsMaterial: `points`,
      ShadowMaterial: `shadow`,
      SpriteMaterial: `sprite`,
    },
    h = [
      `precision`,
      `isWebGL2`,
      `supportsVertexTextures`,
      `outputEncoding`,
      `instancing`,
      `instancingColor`,
      `map`,
      `mapEncoding`,
      `matcap`,
      `matcapEncoding`,
      `envMap`,
      `envMapMode`,
      `envMapEncoding`,
      `envMapCubeUV`,
      `lightMap`,
      `lightMapEncoding`,
      `aoMap`,
      `emissiveMap`,
      `emissiveMapEncoding`,
      `bumpMap`,
      `normalMap`,
      `objectSpaceNormalMap`,
      `tangentSpaceNormalMap`,
      `clearcoat`,
      `clearcoatMap`,
      `clearcoatRoughnessMap`,
      `clearcoatNormalMap`,
      `displacementMap`,
      `specularMap`,
      ,
      `roughnessMap`,
      `metalnessMap`,
      `gradientMap`,
      `alphaMap`,
      `alphaTest`,
      `combine`,
      `vertexColors`,
      `vertexAlphas`,
      `vertexTangents`,
      `vertexUvs`,
      `uvsVertexOnly`,
      `fog`,
      `useFog`,
      `fogExp2`,
      `flatShading`,
      `sizeAttenuation`,
      `logarithmicDepthBuffer`,
      `skinning`,
      `maxBones`,
      `useVertexTexture`,
      `morphTargets`,
      `morphNormals`,
      `morphTargetsCount`,
      `premultipliedAlpha`,
      `numDirLights`,
      `numPointLights`,
      `numSpotLights`,
      `numHemiLights`,
      `numRectAreaLights`,
      `numDirLightShadows`,
      `numPointLightShadows`,
      `numSpotLightShadows`,
      `shadowMapEnabled`,
      `shadowMapType`,
      `toneMapping`,
      `physicallyCorrectLights`,
      `doubleSided`,
      `flipSided`,
      `numClippingPlanes`,
      `numClipIntersection`,
      `depthPacking`,
      `dithering`,
      `format`,
      `specularIntensityMap`,
      `specularColorMap`,
      `specularColorMapEncoding`,
      `transmission`,
      `transmissionMap`,
      `thicknessMap`,
      `sheen`,
      `sheenColorMap`,
      `sheenColorMapEncoding`,
      `sheenRoughnessMap`,
    ];
  function g(e) {
    let t = e.skeleton.bones;
    if (u) return 1024;
    {
      let e = Math.floor((d - 20) / 4),
        n = Math.min(e, t.length);
      return n < t.length
        ? (console.warn(
            `THREE.WebGLRenderer: Skeleton has ` +
              t.length +
              ` bones. This GPU supports ` +
              n +
              `.`,
          ),
          0)
        : n;
    }
  }
  function _(e) {
    let t;
    return (
      e && e.isTexture
        ? (t = e.encoding)
        : e && e.isWebGLRenderTarget
          ? (console.warn(
              `THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.`,
            ),
            (t = e.texture.encoding))
          : (t = Ot),
      c &&
        e &&
        e.isTexture &&
        e.format === 1023 &&
        e.type === 1009 &&
        e.encoding === 3001 &&
        (t = Ot),
      t
    );
  }
  function v(a, s, d, h, v) {
    let y = h.fog,
      b = a.isMeshStandardMaterial ? h.environment : null,
      x = (a.isMeshStandardMaterial ? n : t).get(a.envMap || b),
      S = m[a.type],
      C = v.isSkinnedMesh ? g(v) : 0;
    a.precision !== null &&
      ((p = i.getMaxPrecision(a.precision)),
      p !== a.precision &&
        console.warn(
          `THREE.WebGLProgram.getParameters:`,
          a.precision,
          `not supported, using`,
          p,
          `instead.`,
        ));
    let w, T;
    if (S) {
      let e = _a[S];
      ((w = e.vertexShader), (T = e.fragmentShader));
    } else ((w = a.vertexShader), (T = a.fragmentShader));
    let E = e.getRenderTarget(),
      D = a.alphaTest > 0,
      O = a.clearcoat > 0;
    return {
      isWebGL2: c,
      shaderID: S,
      shaderName: a.type,
      vertexShader: w,
      fragmentShader: T,
      defines: a.defines,
      isRawShaderMaterial: a.isRawShaderMaterial === !0,
      glslVersion: a.glslVersion,
      precision: p,
      instancing: v.isInstancedMesh === !0,
      instancingColor: v.isInstancedMesh === !0 && v.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: E === null ? e.outputEncoding : _(E.texture),
      map: !!a.map,
      mapEncoding: _(a.map),
      matcap: !!a.matcap,
      matcapEncoding: _(a.matcap),
      envMap: !!x,
      envMapMode: x && x.mapping,
      envMapEncoding: _(x),
      envMapCubeUV: !!x && (x.mapping === 306 || x.mapping === 307),
      lightMap: !!a.lightMap,
      lightMapEncoding: _(a.lightMap),
      aoMap: !!a.aoMap,
      emissiveMap: !!a.emissiveMap,
      emissiveMapEncoding: _(a.emissiveMap),
      bumpMap: !!a.bumpMap,
      normalMap: !!a.normalMap,
      objectSpaceNormalMap: a.normalMapType === 1,
      tangentSpaceNormalMap: a.normalMapType === 0,
      clearcoat: O,
      clearcoatMap: O && !!a.clearcoatMap,
      clearcoatRoughnessMap: O && !!a.clearcoatRoughnessMap,
      clearcoatNormalMap: O && !!a.clearcoatNormalMap,
      displacementMap: !!a.displacementMap,
      roughnessMap: !!a.roughnessMap,
      metalnessMap: !!a.metalnessMap,
      specularMap: !!a.specularMap,
      specularIntensityMap: !!a.specularIntensityMap,
      specularColorMap: !!a.specularColorMap,
      specularColorMapEncoding: _(a.specularColorMap),
      alphaMap: !!a.alphaMap,
      alphaTest: D,
      gradientMap: !!a.gradientMap,
      sheen: a.sheen > 0,
      sheenColorMap: !!a.sheenColorMap,
      sheenColorMapEncoding: _(a.sheenColorMap),
      sheenRoughnessMap: !!a.sheenRoughnessMap,
      transmission: a.transmission > 0,
      transmissionMap: !!a.transmissionMap,
      thicknessMap: !!a.thicknessMap,
      combine: a.combine,
      vertexTangents:
        !!a.normalMap && !!v.geometry && !!v.geometry.attributes.tangent,
      vertexColors: a.vertexColors,
      vertexAlphas:
        a.vertexColors === !0 &&
        !!v.geometry &&
        !!v.geometry.attributes.color &&
        v.geometry.attributes.color.itemSize === 4,
      vertexUvs:
        !!a.map ||
        !!a.bumpMap ||
        !!a.normalMap ||
        !!a.specularMap ||
        !!a.alphaMap ||
        !!a.emissiveMap ||
        !!a.roughnessMap ||
        !!a.metalnessMap ||
        !!a.clearcoatMap ||
        !!a.clearcoatRoughnessMap ||
        !!a.clearcoatNormalMap ||
        !!a.displacementMap ||
        !!a.transmissionMap ||
        !!a.thicknessMap ||
        !!a.specularIntensityMap ||
        !!a.specularColorMap ||
        !!a.sheenColorMap ||
        a.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          a.map ||
          a.bumpMap ||
          a.normalMap ||
          a.specularMap ||
          a.alphaMap ||
          a.emissiveMap ||
          a.roughnessMap ||
          a.metalnessMap ||
          a.clearcoatNormalMap ||
          a.transmission > 0 ||
          a.transmissionMap ||
          a.thicknessMap ||
          a.specularIntensityMap ||
          a.specularColorMap ||
          !!a.sheen > 0 ||
          a.sheenColorMap ||
          a.sheenRoughnessMap
        ) && !!a.displacementMap,
      fog: !!y,
      useFog: a.fog,
      fogExp2: y && y.isFogExp2,
      flatShading: !!a.flatShading,
      sizeAttenuation: a.sizeAttenuation,
      logarithmicDepthBuffer: l,
      skinning: v.isSkinnedMesh === !0 && C > 0,
      maxBones: C,
      useVertexTexture: u,
      morphTargets: !!v.geometry && !!v.geometry.morphAttributes.position,
      morphNormals: !!v.geometry && !!v.geometry.morphAttributes.normal,
      morphTargetsCount:
        v.geometry && v.geometry.morphAttributes.position
          ? v.geometry.morphAttributes.position.length
          : 0,
      numDirLights: s.directional.length,
      numPointLights: s.point.length,
      numSpotLights: s.spot.length,
      numRectAreaLights: s.rectArea.length,
      numHemiLights: s.hemi.length,
      numDirLightShadows: s.directionalShadowMap.length,
      numPointLightShadows: s.pointShadowMap.length,
      numSpotLightShadows: s.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      format: a.format,
      dithering: a.dithering,
      shadowMapEnabled: e.shadowMap.enabled && d.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: a.toneMapped ? e.toneMapping : 0,
      physicallyCorrectLights: e.physicallyCorrectLights,
      premultipliedAlpha: a.premultipliedAlpha,
      doubleSided: a.side === 2,
      flipSided: a.side === 1,
      depthPacking: a.depthPacking === void 0 ? !1 : a.depthPacking,
      index0AttributeName: a.index0AttributeName,
      extensionDerivatives: a.extensions && a.extensions.derivatives,
      extensionFragDepth: a.extensions && a.extensions.fragDepth,
      extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
      extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: c || r.has(`EXT_frag_depth`),
      rendererExtensionDrawBuffers: c || r.has(`WEBGL_draw_buffers`),
      rendererExtensionShaderTextureLod: c || r.has(`EXT_shader_texture_lod`),
      customProgramCacheKey: a.customProgramCacheKey(),
    };
  }
  function y(t) {
    let n = [];
    if (
      (t.shaderID
        ? n.push(t.shaderID)
        : (n.push(Pn(t.fragmentShader)), n.push(Pn(t.vertexShader))),
      t.defines !== void 0)
    )
      for (let e in t.defines) (n.push(e), n.push(t.defines[e]));
    if (t.isRawShaderMaterial === !1) {
      for (let e = 0; e < h.length; e++) n.push(t[h[e]]);
      (n.push(e.outputEncoding), n.push(e.gammaFactor));
    }
    return (n.push(t.customProgramCacheKey), n.join());
  }
  function b(e) {
    let t = m[e.type],
      n;
    if (t) {
      let e = _a[t];
      n = Xi.clone(e.uniforms);
    } else n = e.uniforms;
    return n;
  }
  function x(t, n) {
    let r;
    for (let e = 0, t = s.length; e < t; e++) {
      let t = s[e];
      if (t.cacheKey === n) {
        ((r = t), ++r.usedTimes);
        break;
      }
    }
    return (r === void 0 && ((r = new Hs(e, n, t, a)), s.push(r)), r);
  }
  function S(e) {
    if (--e.usedTimes === 0) {
      let t = s.indexOf(e);
      ((s[t] = s[s.length - 1]), s.pop(), e.destroy());
    }
  }
  return {
    getParameters: v,
    getProgramCacheKey: y,
    getUniforms: b,
    acquireProgram: x,
    releaseProgram: S,
    programs: s,
  };
}
function Ws() {
  let e = new WeakMap();
  function t(t) {
    let n = e.get(t);
    return (n === void 0 && ((n = {}), e.set(t, n)), n);
  }
  function n(t) {
    e.delete(t);
  }
  function r(t, n, r) {
    e.get(t)[n] = r;
  }
  function i() {
    e = new WeakMap();
  }
  return { get: t, remove: n, update: r, dispose: i };
}
function Gs(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.program === t.program
        ? e.material.id === t.material.id
          ? e.z === t.z
            ? e.id - t.id
            : e.z - t.z
          : e.material.id - t.material.id
        : e.program.id - t.program.id
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder;
}
function Ks(e, t) {
  return e.groupOrder === t.groupOrder
    ? e.renderOrder === t.renderOrder
      ? e.z === t.z
        ? e.id - t.id
        : t.z - e.z
      : e.renderOrder - t.renderOrder
    : e.groupOrder - t.groupOrder;
}
function qs(e) {
  let t = [],
    n = 0,
    r = [],
    i = [],
    a = [],
    o = { id: -1 };
  function s() {
    ((n = 0), (r.length = 0), (i.length = 0), (a.length = 0));
  }
  function c(r, i, a, s, c, l) {
    let u = t[n],
      d = e.get(a);
    return (
      u === void 0
        ? ((u = {
            id: r.id,
            object: r,
            geometry: i,
            material: a,
            program: d.program || o,
            groupOrder: s,
            renderOrder: r.renderOrder,
            z: c,
            group: l,
          }),
          (t[n] = u))
        : ((u.id = r.id),
          (u.object = r),
          (u.geometry = i),
          (u.material = a),
          (u.program = d.program || o),
          (u.groupOrder = s),
          (u.renderOrder = r.renderOrder),
          (u.z = c),
          (u.group = l)),
      n++,
      u
    );
  }
  function l(e, t, n, o, s, l) {
    let u = c(e, t, n, o, s, l);
    n.transmission > 0
      ? i.push(u)
      : n.transparent === !0
        ? a.push(u)
        : r.push(u);
  }
  function u(e, t, n, o, s, l) {
    let u = c(e, t, n, o, s, l);
    n.transmission > 0
      ? i.unshift(u)
      : n.transparent === !0
        ? a.unshift(u)
        : r.unshift(u);
  }
  function d(e, t) {
    (r.length > 1 && r.sort(e || Gs),
      i.length > 1 && i.sort(t || Ks),
      a.length > 1 && a.sort(t || Ks));
  }
  function f() {
    for (let e = n, r = t.length; e < r; e++) {
      let n = t[e];
      if (n.id === null) break;
      ((n.id = null),
        (n.object = null),
        (n.geometry = null),
        (n.material = null),
        (n.program = null),
        (n.group = null));
    }
  }
  return {
    opaque: r,
    transmissive: i,
    transparent: a,
    init: s,
    push: l,
    unshift: u,
    finish: f,
    sort: d,
  };
}
function Js(e) {
  let t = new WeakMap();
  function n(n, r) {
    let i;
    return (
      t.has(n) === !1
        ? ((i = new qs(e)), t.set(n, [i]))
        : r >= t.get(n).length
          ? ((i = new qs(e)), t.get(n).push(i))
          : (i = t.get(n)[r]),
      i
    );
  }
  function r() {
    t = new WeakMap();
  }
  return { get: n, dispose: r };
}
function Ys() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id];
      let n;
      switch (t.type) {
        case `DirectionalLight`:
          n = { direction: new V(), color: new W() };
          break;
        case `SpotLight`:
          n = {
            position: new V(),
            direction: new V(),
            color: new W(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case `PointLight`:
          n = { position: new V(), color: new W(), distance: 0, decay: 0 };
          break;
        case `HemisphereLight`:
          n = { direction: new V(), skyColor: new W(), groundColor: new W() };
          break;
        case `RectAreaLight`:
          n = {
            color: new W(),
            position: new V(),
            halfWidth: new V(),
            halfHeight: new V(),
          };
          break;
      }
      return ((e[t.id] = n), n);
    },
  };
}
function Xs() {
  let e = {};
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id];
      let n;
      switch (t.type) {
        case `DirectionalLight`:
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new z(),
          };
          break;
        case `SpotLight`:
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new z(),
          };
          break;
        case `PointLight`:
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new z(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((e[t.id] = n), n);
    },
  };
}
var Zs = 0;
function Qs(e, t) {
  return !!t.castShadow - +!!e.castShadow;
}
function $s(e, t) {
  let n = new Ys(),
    r = Xs(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let e = 0; e < 9; e++) i.probe.push(new V());
  let a = new V(),
    o = new H(),
    s = new H();
  function c(a, o) {
    let s = 0,
      c = 0,
      l = 0;
    for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
    let u = 0,
      d = 0,
      f = 0,
      p = 0,
      m = 0,
      h = 0,
      g = 0,
      _ = 0;
    a.sort(Qs);
    let v = o === !0 ? 1 : Math.PI;
    for (let e = 0, t = a.length; e < t; e++) {
      let t = a[e],
        o = t.color,
        y = t.intensity,
        b = t.distance,
        x = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
      if (t.isAmbientLight)
        ((s += o.r * y * v), (c += o.g * y * v), (l += o.b * y * v));
      else if (t.isLightProbe)
        for (let e = 0; e < 9; e++)
          i.probe[e].addScaledVector(t.sh.coefficients[e], y);
      else if (t.isDirectionalLight) {
        let e = n.get(t);
        if (
          (e.color.copy(t.color).multiplyScalar(t.intensity * v), t.castShadow)
        ) {
          let e = t.shadow,
            n = r.get(t);
          ((n.shadowBias = e.bias),
            (n.shadowNormalBias = e.normalBias),
            (n.shadowRadius = e.radius),
            (n.shadowMapSize = e.mapSize),
            (i.directionalShadow[u] = n),
            (i.directionalShadowMap[u] = x),
            (i.directionalShadowMatrix[u] = t.shadow.matrix),
            h++);
        }
        ((i.directional[u] = e), u++);
      } else if (t.isSpotLight) {
        let e = n.get(t);
        if (
          (e.position.setFromMatrixPosition(t.matrixWorld),
          e.color.copy(o).multiplyScalar(y * v),
          (e.distance = b),
          (e.coneCos = Math.cos(t.angle)),
          (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
          (e.decay = t.decay),
          t.castShadow)
        ) {
          let e = t.shadow,
            n = r.get(t);
          ((n.shadowBias = e.bias),
            (n.shadowNormalBias = e.normalBias),
            (n.shadowRadius = e.radius),
            (n.shadowMapSize = e.mapSize),
            (i.spotShadow[f] = n),
            (i.spotShadowMap[f] = x),
            (i.spotShadowMatrix[f] = t.shadow.matrix),
            _++);
        }
        ((i.spot[f] = e), f++);
      } else if (t.isRectAreaLight) {
        let e = n.get(t);
        (e.color.copy(o).multiplyScalar(y),
          e.halfWidth.set(t.width * 0.5, 0, 0),
          e.halfHeight.set(0, t.height * 0.5, 0),
          (i.rectArea[p] = e),
          p++);
      } else if (t.isPointLight) {
        let e = n.get(t);
        if (
          (e.color.copy(t.color).multiplyScalar(t.intensity * v),
          (e.distance = t.distance),
          (e.decay = t.decay),
          t.castShadow)
        ) {
          let e = t.shadow,
            n = r.get(t);
          ((n.shadowBias = e.bias),
            (n.shadowNormalBias = e.normalBias),
            (n.shadowRadius = e.radius),
            (n.shadowMapSize = e.mapSize),
            (n.shadowCameraNear = e.camera.near),
            (n.shadowCameraFar = e.camera.far),
            (i.pointShadow[d] = n),
            (i.pointShadowMap[d] = x),
            (i.pointShadowMatrix[d] = t.shadow.matrix),
            g++);
        }
        ((i.point[d] = e), d++);
      } else if (t.isHemisphereLight) {
        let e = n.get(t);
        (e.skyColor.copy(t.color).multiplyScalar(y * v),
          e.groundColor.copy(t.groundColor).multiplyScalar(y * v),
          (i.hemi[m] = e),
          m++);
      }
    }
    (p > 0 &&
      (t.isWebGL2 || e.has(`OES_texture_float_linear`) === !0
        ? ((i.rectAreaLTC1 = X.LTC_FLOAT_1), (i.rectAreaLTC2 = X.LTC_FLOAT_2))
        : e.has(`OES_texture_half_float_linear`) === !0
          ? ((i.rectAreaLTC1 = X.LTC_HALF_1), (i.rectAreaLTC2 = X.LTC_HALF_2))
          : console.error(
              `THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`,
            )),
      (i.ambient[0] = s),
      (i.ambient[1] = c),
      (i.ambient[2] = l));
    let y = i.hash;
    (y.directionalLength !== u ||
      y.pointLength !== d ||
      y.spotLength !== f ||
      y.rectAreaLength !== p ||
      y.hemiLength !== m ||
      y.numDirectionalShadows !== h ||
      y.numPointShadows !== g ||
      y.numSpotShadows !== _) &&
      ((i.directional.length = u),
      (i.spot.length = f),
      (i.rectArea.length = p),
      (i.point.length = d),
      (i.hemi.length = m),
      (i.directionalShadow.length = h),
      (i.directionalShadowMap.length = h),
      (i.pointShadow.length = g),
      (i.pointShadowMap.length = g),
      (i.spotShadow.length = _),
      (i.spotShadowMap.length = _),
      (i.directionalShadowMatrix.length = h),
      (i.pointShadowMatrix.length = g),
      (i.spotShadowMatrix.length = _),
      (y.directionalLength = u),
      (y.pointLength = d),
      (y.spotLength = f),
      (y.rectAreaLength = p),
      (y.hemiLength = m),
      (y.numDirectionalShadows = h),
      (y.numPointShadows = g),
      (y.numSpotShadows = _),
      (i.version = Zs++));
  }
  function l(e, t) {
    let n = 0,
      r = 0,
      c = 0,
      l = 0,
      u = 0,
      d = t.matrixWorldInverse;
    for (let t = 0, f = e.length; t < f; t++) {
      let f = e[t];
      if (f.isDirectionalLight) {
        let e = i.directional[n];
        (e.direction.setFromMatrixPosition(f.matrixWorld),
          a.setFromMatrixPosition(f.target.matrixWorld),
          e.direction.sub(a),
          e.direction.transformDirection(d),
          n++);
      } else if (f.isSpotLight) {
        let e = i.spot[c];
        (e.position.setFromMatrixPosition(f.matrixWorld),
          e.position.applyMatrix4(d),
          e.direction.setFromMatrixPosition(f.matrixWorld),
          a.setFromMatrixPosition(f.target.matrixWorld),
          e.direction.sub(a),
          e.direction.transformDirection(d),
          c++);
      } else if (f.isRectAreaLight) {
        let e = i.rectArea[l];
        (e.position.setFromMatrixPosition(f.matrixWorld),
          e.position.applyMatrix4(d),
          s.identity(),
          o.copy(f.matrixWorld),
          o.premultiply(d),
          s.extractRotation(o),
          e.halfWidth.set(f.width * 0.5, 0, 0),
          e.halfHeight.set(0, f.height * 0.5, 0),
          e.halfWidth.applyMatrix4(s),
          e.halfHeight.applyMatrix4(s),
          l++);
      } else if (f.isPointLight) {
        let e = i.point[r];
        (e.position.setFromMatrixPosition(f.matrixWorld),
          e.position.applyMatrix4(d),
          r++);
      } else if (f.isHemisphereLight) {
        let e = i.hemi[u];
        (e.direction.setFromMatrixPosition(f.matrixWorld),
          e.direction.transformDirection(d),
          e.direction.normalize(),
          u++);
      }
    }
  }
  return { setup: c, setupView: l, state: i };
}
function ec(e, t) {
  let n = new $s(e, t),
    r = [],
    i = [];
  function a() {
    ((r.length = 0), (i.length = 0));
  }
  function o(e) {
    r.push(e);
  }
  function s(e) {
    i.push(e);
  }
  function c(e) {
    n.setup(r, e);
  }
  function l(e) {
    n.setupView(r, e);
  }
  return {
    init: a,
    state: { lightsArray: r, shadowsArray: i, lights: n },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: s,
  };
}
function tc(e, t) {
  let n = new WeakMap();
  function r(r, i = 0) {
    let a;
    return (
      n.has(r) === !1
        ? ((a = new ec(e, t)), n.set(r, [a]))
        : i >= n.get(r).length
          ? ((a = new ec(e, t)), n.get(r).push(a))
          : (a = n.get(r)[i]),
      a
    );
  }
  function i() {
    n = new WeakMap();
  }
  return { get: r, dispose: i };
}
var nc = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshDepthMaterial`),
      (this.depthPacking = It),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
};
nc.prototype.isMeshDepthMaterial = !0;
var rc = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshDistanceMaterial`),
      (this.referencePosition = new V()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
};
rc.prototype.isMeshDistanceMaterial = !0;
var ic = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  ac = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function oc(e, t, n) {
  let r = new pa(),
    i = new z(),
    a = new z(),
    o = new B(),
    s = new nc({ depthPacking: Lt }),
    c = new rc(),
    l = {},
    u = n.maxTextureSize,
    d = { 0: 1, 1: 0, 2: 2 },
    f = new $i({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new z() },
        radius: { value: 4 },
      },
      vertexShader: ic,
      fragmentShader: ac,
    }),
    p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  let m = new J();
  m.setAttribute(
    `position`,
    new K(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  let h = new Wi(m, f),
    g = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1),
    (this.render = function (t, n, s) {
      if (
        g.enabled === !1 ||
        (g.autoUpdate === !1 && g.needsUpdate === !1) ||
        t.length === 0
      )
        return;
      let c = e.getRenderTarget(),
        l = e.getActiveCubeFace(),
        d = e.getActiveMipmapLevel(),
        f = e.state;
      (f.setBlending(0),
        f.buffers.color.setClear(1, 1, 1, 1),
        f.buffers.depth.setTest(!0),
        f.setScissorTest(!1));
      for (let c = 0, l = t.length; c < l; c++) {
        let l = t[c],
          d = l.shadow;
        if (d === void 0) {
          console.warn(`THREE.WebGLShadowMap:`, l, `has no shadow.`);
          continue;
        }
        if (d.autoUpdate === !1 && d.needsUpdate === !1) continue;
        i.copy(d.mapSize);
        let p = d.getFrameExtents();
        if (
          (i.multiply(p),
          a.copy(d.mapSize),
          (i.x > u || i.y > u) &&
            (i.x > u &&
              ((a.x = Math.floor(u / p.x)),
              (i.x = a.x * p.x),
              (d.mapSize.x = a.x)),
            i.y > u &&
              ((a.y = Math.floor(u / p.y)),
              (i.y = a.y * p.y),
              (d.mapSize.y = a.y))),
          d.map === null && !d.isPointLightShadow && this.type === 3)
        ) {
          let e = { minFilter: P, magFilter: P, format: ye };
          ((d.map = new Bn(i.x, i.y, e)),
            (d.map.texture.name = l.name + `.shadowMap`),
            (d.mapPass = new Bn(i.x, i.y, e)),
            d.camera.updateProjectionMatrix());
        }
        if (d.map === null) {
          let e = { minFilter: M, magFilter: M, format: ye };
          ((d.map = new Bn(i.x, i.y, e)),
            (d.map.texture.name = l.name + `.shadowMap`),
            d.camera.updateProjectionMatrix());
        }
        (e.setRenderTarget(d.map), e.clear());
        let m = d.getViewportCount();
        for (let e = 0; e < m; e++) {
          let t = d.getViewport(e);
          (o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
            f.viewport(o),
            d.updateMatrices(l, e),
            (r = d.getFrustum()),
            y(n, s, d.camera, l, this.type));
        }
        (!d.isPointLightShadow && this.type === 3 && _(d, s),
          (d.needsUpdate = !1));
      }
      ((g.needsUpdate = !1), e.setRenderTarget(c, l, d));
    }));
  function _(n, r) {
    let i = t.update(h);
    (f.defines.VSM_SAMPLES !== n.blurSamples &&
      ((f.defines.VSM_SAMPLES = n.blurSamples),
      (p.defines.VSM_SAMPLES = n.blurSamples),
      (f.needsUpdate = !0),
      (p.needsUpdate = !0)),
      (f.uniforms.shadow_pass.value = n.map.texture),
      (f.uniforms.resolution.value = n.mapSize),
      (f.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.mapPass),
      e.clear(),
      e.renderBufferDirect(r, null, i, f, h, null),
      (p.uniforms.shadow_pass.value = n.mapPass.texture),
      (p.uniforms.resolution.value = n.mapSize),
      (p.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.map),
      e.clear(),
      e.renderBufferDirect(r, null, i, p, h, null));
  }
  function v(t, n, r, i, a, o, u) {
    let f = null,
      p =
        i.isPointLight === !0
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
    if (
      ((f = p === void 0 ? (i.isPointLight === !0 ? c : s) : p),
      (e.localClippingEnabled &&
        r.clipShadows === !0 &&
        r.clippingPlanes.length !== 0) ||
        (r.displacementMap && r.displacementScale !== 0) ||
        (r.alphaMap && r.alphaTest > 0))
    ) {
      let e = f.uuid,
        t = r.uuid,
        n = l[e];
      n === void 0 && ((n = {}), (l[e] = n));
      let i = n[t];
      (i === void 0 && ((i = f.clone()), (n[t] = i)), (f = i));
    }
    return (
      (f.visible = r.visible),
      (f.wireframe = r.wireframe),
      u === 3
        ? (f.side = r.shadowSide === null ? r.side : r.shadowSide)
        : (f.side = r.shadowSide === null ? d[r.side] : r.shadowSide),
      (f.alphaMap = r.alphaMap),
      (f.alphaTest = r.alphaTest),
      (f.clipShadows = r.clipShadows),
      (f.clippingPlanes = r.clippingPlanes),
      (f.clipIntersection = r.clipIntersection),
      (f.displacementMap = r.displacementMap),
      (f.displacementScale = r.displacementScale),
      (f.displacementBias = r.displacementBias),
      (f.wireframeLinewidth = r.wireframeLinewidth),
      (f.linewidth = r.linewidth),
      i.isPointLight === !0 &&
        f.isMeshDistanceMaterial === !0 &&
        (f.referencePosition.setFromMatrixPosition(i.matrixWorld),
        (f.nearDistance = a),
        (f.farDistance = o)),
      f
    );
  }
  function y(n, i, a, o, s) {
    if (n.visible === !1) return;
    if (
      n.layers.test(i.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && s === 3)) &&
      (!n.frustumCulled || r.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      let r = t.update(n),
        i = n.material;
      if (Array.isArray(i)) {
        let t = r.groups;
        for (let c = 0, l = t.length; c < l; c++) {
          let l = t[c],
            u = i[l.materialIndex];
          if (u && u.visible) {
            let t = v(n, r, u, o, a.near, a.far, s);
            e.renderBufferDirect(a, null, r, t, n, l);
          }
        }
      } else if (i.visible) {
        let t = v(n, r, i, o, a.near, a.far, s);
        e.renderBufferDirect(a, null, r, t, n, null);
      }
    }
    let c = n.children;
    for (let e = 0, t = c.length; e < t; e++) y(c[e], i, a, o, s);
  }
}
function sc(e, t, n) {
  let r = n.isWebGL2;
  function i() {
    let t = !1,
      n = new B(),
      r = null,
      i = new B(0, 0, 0, 0);
    return {
      setMask: function (n) {
        r !== n && !t && (e.colorMask(n, n, n, n), (r = n));
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t, r, a, o, s) {
        (s === !0 && ((t *= o), (r *= o), (a *= o)),
          n.set(t, r, a, o),
          i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n)));
      },
      reset: function () {
        ((t = !1), (r = null), i.set(-1, 0, 0, 0));
      },
    };
  }
  function a() {
    let t = !1,
      n = null,
      r = null,
      i = null;
    return {
      setTest: function (e) {
        e ? ae(2929) : oe(2929);
      },
      setMask: function (r) {
        n !== r && !t && (e.depthMask(r), (n = r));
      },
      setFunc: function (t) {
        if (r !== t) {
          if (t)
            switch (t) {
              case 0:
                e.depthFunc(512);
                break;
              case 1:
                e.depthFunc(519);
                break;
              case 2:
                e.depthFunc(513);
                break;
              case 3:
                e.depthFunc(515);
                break;
              case 4:
                e.depthFunc(514);
                break;
              case 5:
                e.depthFunc(518);
                break;
              case 6:
                e.depthFunc(516);
                break;
              case 7:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
          else e.depthFunc(515);
          r = t;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        i !== t && (e.clearDepth(t), (i = t));
      },
      reset: function () {
        ((t = !1), (n = null), (r = null), (i = null));
      },
    };
  }
  function o() {
    let t = !1,
      n = null,
      r = null,
      i = null,
      a = null,
      o = null,
      s = null,
      c = null,
      l = null;
    return {
      setTest: function (e) {
        t || (e ? ae(2960) : oe(2960));
      },
      setMask: function (r) {
        n !== r && !t && (e.stencilMask(r), (n = r));
      },
      setFunc: function (t, n, o) {
        (r !== t || i !== n || a !== o) &&
          (e.stencilFunc(t, n, o), (r = t), (i = n), (a = o));
      },
      setOp: function (t, n, r) {
        (o !== t || s !== n || c !== r) &&
          (e.stencilOp(t, n, r), (o = t), (s = n), (c = r));
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        l !== t && (e.clearStencil(t), (l = t));
      },
      reset: function () {
        ((t = !1),
          (n = null),
          (r = null),
          (i = null),
          (a = null),
          (o = null),
          (s = null),
          (c = null),
          (l = null));
      },
    };
  }
  let s = new i(),
    c = new a(),
    l = new o(),
    u = {},
    d = null,
    f = {},
    p = null,
    m = !1,
    h = null,
    g = null,
    _ = null,
    v = null,
    y = null,
    b = null,
    x = null,
    S = !1,
    C = null,
    w = null,
    T = null,
    E = null,
    D = null,
    O = e.getParameter(35661),
    ee = !1,
    te = 0,
    k = e.getParameter(7938);
  k.indexOf(`WebGL`) === -1
    ? k.indexOf(`OpenGL ES`) !== -1 &&
      ((te = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), (ee = te >= 2))
    : ((te = parseFloat(/^WebGL (\d)/.exec(k)[1])), (ee = te >= 1));
  let A = null,
    j = {},
    M = e.getParameter(3088),
    N = e.getParameter(2978),
    ne = new B().fromArray(M),
    re = new B().fromArray(N);
  function ie(t, n, r) {
    let i = new Uint8Array(4),
      a = e.createTexture();
    (e.bindTexture(t, a),
      e.texParameteri(t, 10241, 9728),
      e.texParameteri(t, 10240, 9728));
    for (let t = 0; t < r; t++)
      e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, i);
    return a;
  }
  let P = {};
  ((P[3553] = ie(3553, 3553, 1)),
    (P[34067] = ie(34067, 34069, 6)),
    s.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    ae(2929),
    c.setFunc(3),
    L(!1),
    R(1),
    ae(2884),
    de(0));
  function ae(t) {
    u[t] !== !0 && (e.enable(t), (u[t] = !0));
  }
  function oe(t) {
    u[t] !== !1 && (e.disable(t), (u[t] = !1));
  }
  function se(t) {
    t !== d && (e.bindFramebuffer(36160, t), (d = t));
  }
  function ce(t, n) {
    return (
      n === null && d !== null && (n = d),
      f[t] === n
        ? !1
        : (e.bindFramebuffer(t, n),
          (f[t] = n),
          r && (t === 36009 && (f[36160] = n), t === 36160 && (f[36009] = n)),
          !0)
    );
  }
  function le(t) {
    return p === t ? !1 : (e.useProgram(t), (p = t), !0);
  }
  let ue = { 100: 32774, 101: 32778, 102: 32779 };
  if (r) ((ue[103] = 32775), (ue[104] = 32776));
  else {
    let e = t.get(`EXT_blend_minmax`);
    e !== null && ((ue[103] = e.MIN_EXT), (ue[104] = e.MAX_EXT));
  }
  let F = {
    200: 0,
    201: 1,
    202: 768,
    204: 770,
    210: 776,
    208: 774,
    206: 772,
    203: 769,
    205: 771,
    209: 775,
    207: 773,
  };
  function de(t, n, r, i, a, o, s, c) {
    if (t === 0) {
      m === !0 && (oe(3042), (m = !1));
      return;
    }
    if ((m === !1 && (ae(3042), (m = !0)), t !== 5)) {
      if (t !== h || c !== S) {
        if (
          ((g !== 100 || y !== 100) &&
            (e.blendEquation(32774), (g = 100), (y = 100)),
          c)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(1, 1);
              break;
            case 3:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case 4:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error(`THREE.WebGLState: Invalid blending: `, t);
              break;
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(770, 1);
              break;
            case 3:
              e.blendFunc(0, 769);
              break;
            case 4:
              e.blendFunc(0, 768);
              break;
            default:
              console.error(`THREE.WebGLState: Invalid blending: `, t);
              break;
          }
        ((_ = null), (v = null), (b = null), (x = null), (h = t), (S = c));
      }
      return;
    }
    ((a ||= n),
      (o ||= r),
      (s ||= i),
      (n !== g || a !== y) &&
        (e.blendEquationSeparate(ue[n], ue[a]), (g = n), (y = a)),
      (r !== _ || i !== v || o !== b || s !== x) &&
        (e.blendFuncSeparate(F[r], F[i], F[o], F[s]),
        (_ = r),
        (v = i),
        (b = o),
        (x = s)),
      (h = t),
      (S = null));
  }
  function I(e, t) {
    e.side === 2 ? oe(2884) : ae(2884);
    let n = e.side === 1;
    (t && (n = !n),
      L(n),
      e.blending === 1 && e.transparent === !1
        ? de(0)
        : de(
            e.blending,
            e.blendEquation,
            e.blendSrc,
            e.blendDst,
            e.blendEquationAlpha,
            e.blendSrcAlpha,
            e.blendDstAlpha,
            e.premultipliedAlpha,
          ),
      c.setFunc(e.depthFunc),
      c.setTest(e.depthTest),
      c.setMask(e.depthWrite),
      s.setMask(e.colorWrite));
    let r = e.stencilWrite;
    (l.setTest(r),
      r &&
        (l.setMask(e.stencilWriteMask),
        l.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
        l.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
      pe(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
      e.alphaToCoverage === !0 ? ae(32926) : oe(32926));
  }
  function L(t) {
    C !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (C = t));
  }
  function R(t) {
    (t === 0
      ? oe(2884)
      : (ae(2884),
        t !== w &&
          (t === 1
            ? e.cullFace(1029)
            : t === 2
              ? e.cullFace(1028)
              : e.cullFace(1032))),
      (w = t));
  }
  function fe(t) {
    t !== T && (ee && e.lineWidth(t), (T = t));
  }
  function pe(t, n, r) {
    t
      ? (ae(32823),
        (E !== n || D !== r) && (e.polygonOffset(n, r), (E = n), (D = r)))
      : oe(32823);
  }
  function me(e) {
    e ? ae(3089) : oe(3089);
  }
  function he(t) {
    (t === void 0 && (t = 33984 + O - 1),
      A !== t && (e.activeTexture(t), (A = t)));
  }
  function ge(t, n) {
    A === null && he();
    let r = j[A];
    (r === void 0 && ((r = { type: void 0, texture: void 0 }), (j[A] = r)),
      (r.type !== t || r.texture !== n) &&
        (e.bindTexture(t, n || P[t]), (r.type = t), (r.texture = n)));
  }
  function _e() {
    let t = j[A];
    t !== void 0 &&
      t.type !== void 0 &&
      (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
  }
  function ve() {
    try {
      e.compressedTexImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function ye() {
    try {
      e.texImage2D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function be() {
    try {
      e.texImage3D.apply(e, arguments);
    } catch (e) {
      console.error(`THREE.WebGLState:`, e);
    }
  }
  function xe(t) {
    ne.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ne.copy(t));
  }
  function Se(t) {
    re.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), re.copy(t));
  }
  function Ce() {
    (e.disable(3042),
      e.disable(2884),
      e.disable(2929),
      e.disable(32823),
      e.disable(3089),
      e.disable(2960),
      e.disable(32926),
      e.blendEquation(32774),
      e.blendFunc(1, 0),
      e.blendFuncSeparate(1, 0, 1, 0),
      e.colorMask(!0, !0, !0, !0),
      e.clearColor(0, 0, 0, 0),
      e.depthMask(!0),
      e.depthFunc(513),
      e.clearDepth(1),
      e.stencilMask(4294967295),
      e.stencilFunc(519, 0, 4294967295),
      e.stencilOp(7680, 7680, 7680),
      e.clearStencil(0),
      e.cullFace(1029),
      e.frontFace(2305),
      e.polygonOffset(0, 0),
      e.activeTexture(33984),
      e.bindFramebuffer(36160, null),
      r === !0 &&
        (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
      e.useProgram(null),
      e.lineWidth(1),
      e.scissor(0, 0, e.canvas.width, e.canvas.height),
      e.viewport(0, 0, e.canvas.width, e.canvas.height),
      (u = {}),
      (A = null),
      (j = {}),
      (d = null),
      (f = {}),
      (p = null),
      (m = !1),
      (h = null),
      (g = null),
      (_ = null),
      (v = null),
      (y = null),
      (b = null),
      (x = null),
      (S = !1),
      (C = null),
      (w = null),
      (T = null),
      (E = null),
      (D = null),
      ne.set(0, 0, e.canvas.width, e.canvas.height),
      re.set(0, 0, e.canvas.width, e.canvas.height),
      s.reset(),
      c.reset(),
      l.reset());
  }
  return {
    buffers: { color: s, depth: c, stencil: l },
    enable: ae,
    disable: oe,
    bindFramebuffer: ce,
    bindXRFramebuffer: se,
    useProgram: le,
    setBlending: de,
    setMaterial: I,
    setFlipSided: L,
    setCullFace: R,
    setLineWidth: fe,
    setPolygonOffset: pe,
    setScissorTest: me,
    activeTexture: he,
    bindTexture: ge,
    unbindTexture: _e,
    compressedTexImage2D: ve,
    texImage2D: ye,
    texImage3D: be,
    scissor: xe,
    viewport: Se,
    reset: Ce,
  };
}
function cc(e, t, n, r, i, a, o) {
  let s = i.isWebGL2,
    c = i.maxTextures,
    l = i.maxCubemapSize,
    u = i.maxTextureSize,
    d = i.maxSamples,
    f = new WeakMap(),
    p,
    m = !1;
  try {
    m =
      typeof OffscreenCanvas < `u` &&
      new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
  } catch {}
  function h(e, t) {
    return m ? new OffscreenCanvas(e, t) : Nn(`canvas`);
  }
  function g(e, t, n, r) {
    let i = 1;
    if (
      ((e.width > r || e.height > r) && (i = r / Math.max(e.width, e.height)),
      i < 1 || t === !0)
    )
      if (
        (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < `u` && e instanceof ImageBitmap)
      ) {
        let r = t ? En : Math.floor,
          a = r(i * e.width),
          o = r(i * e.height);
        p === void 0 && (p = h(a, o));
        let s = n ? h(a, o) : p;
        return (
          (s.width = a),
          (s.height = o),
          s.getContext(`2d`).drawImage(e, 0, 0, a, o),
          console.warn(
            `THREE.WebGLRenderer: Texture has been resized from (` +
              e.width +
              `x` +
              e.height +
              `) to (` +
              a +
              `x` +
              o +
              `).`,
          ),
          s
        );
      } else
        return (
          `data` in e &&
            console.warn(
              `THREE.WebGLRenderer: Image in DataTexture is too big (` +
                e.width +
                `x` +
                e.height +
                `).`,
            ),
          e
        );
    return e;
  }
  function _(e) {
    return wn(e.width) && wn(e.height);
  }
  function v(e) {
    return s
      ? !1
      : e.wrapS !== 1001 ||
          e.wrapT !== 1001 ||
          (e.minFilter !== 1003 && e.minFilter !== 1006);
  }
  function y(e, t) {
    return (
      e.generateMipmaps && t && e.minFilter !== 1003 && e.minFilter !== 1006
    );
  }
  function b(t, n, i, a, o = 1) {
    e.generateMipmap(t);
    let s = r.get(n);
    s.__maxMipLevel = Math.log2(Math.max(i, a, o));
  }
  function x(n, r, i, a) {
    if (s === !1) return r;
    if (n !== null) {
      if (e[n] !== void 0) return e[n];
      console.warn(
        `THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '` +
          n +
          `'`,
      );
    }
    let o = r;
    return (
      r === 6403 &&
        (i === 5126 && (o = 33326),
        i === 5131 && (o = 33325),
        i === 5121 && (o = 33321)),
      r === 6407 &&
        (i === 5126 && (o = 34837),
        i === 5131 && (o = 34843),
        i === 5121 && (o = 32849)),
      r === 6408 &&
        (i === 5126 && (o = 34836),
        i === 5131 && (o = 34842),
        i === 5121 && (o = a === 3001 ? 35907 : 32856)),
      (o === 33325 || o === 33326 || o === 34842 || o === 34836) &&
        t.get(`EXT_color_buffer_float`),
      o
    );
  }
  function S(e) {
    return e === 1003 || e === 1004 || e === 1005 ? 9728 : 9729;
  }
  function C(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, C),
      T(t),
      t.isVideoTexture && f.delete(t),
      o.memory.textures--);
  }
  function w(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, w), E(t));
  }
  function T(t) {
    let n = r.get(t);
    n.__webglInit !== void 0 &&
      (e.deleteTexture(n.__webglTexture), r.remove(t));
  }
  function E(t) {
    let n = t.texture,
      i = r.get(t),
      a = r.get(n);
    if (t) {
      if (
        (a.__webglTexture !== void 0 &&
          (e.deleteTexture(a.__webglTexture), o.memory.textures--),
        t.depthTexture && t.depthTexture.dispose(),
        t.isWebGLCubeRenderTarget)
      )
        for (let t = 0; t < 6; t++)
          (e.deleteFramebuffer(i.__webglFramebuffer[t]),
            i.__webglDepthbuffer &&
              e.deleteRenderbuffer(i.__webglDepthbuffer[t]));
      else
        (e.deleteFramebuffer(i.__webglFramebuffer),
          i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer),
          i.__webglMultisampledFramebuffer &&
            e.deleteFramebuffer(i.__webglMultisampledFramebuffer),
          i.__webglColorRenderbuffer &&
            e.deleteRenderbuffer(i.__webglColorRenderbuffer),
          i.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(i.__webglDepthRenderbuffer));
      if (t.isWebGLMultipleRenderTargets)
        for (let t = 0, i = n.length; t < i; t++) {
          let i = r.get(n[t]);
          (i.__webglTexture &&
            (e.deleteTexture(i.__webglTexture), o.memory.textures--),
            r.remove(n[t]));
        }
      (r.remove(n), r.remove(t));
    }
  }
  let D = 0;
  function O() {
    D = 0;
  }
  function ee() {
    let e = D;
    return (
      e >= c &&
        console.warn(
          `THREE.WebGLTextures: Trying to use ` +
            e +
            ` texture units while this GPU supports only ` +
            c,
        ),
      (D += 1),
      e
    );
  }
  function te(e, t) {
    let i = r.get(e);
    if (
      (e.isVideoTexture && xe(e), e.version > 0 && i.__version !== e.version)
    ) {
      let n = e.image;
      if (n === void 0)
        console.warn(
          `THREE.WebGLRenderer: Texture marked for update but image is undefined`,
        );
      else if (n.complete === !1)
        console.warn(
          `THREE.WebGLRenderer: Texture marked for update but image is incomplete`,
        );
      else {
        I(i, e, t);
        return;
      }
    }
    (n.activeTexture(33984 + t), n.bindTexture(3553, i.__webglTexture));
  }
  function ne(e, t) {
    let i = r.get(e);
    if (e.version > 0 && i.__version !== e.version) {
      I(i, e, t);
      return;
    }
    (n.activeTexture(33984 + t), n.bindTexture(35866, i.__webglTexture));
  }
  function ie(e, t) {
    let i = r.get(e);
    if (e.version > 0 && i.__version !== e.version) {
      I(i, e, t);
      return;
    }
    (n.activeTexture(33984 + t), n.bindTexture(32879, i.__webglTexture));
  }
  function oe(e, t) {
    let i = r.get(e);
    if (e.version > 0 && i.__version !== e.version) {
      L(i, e, t);
      return;
    }
    (n.activeTexture(33984 + t), n.bindTexture(34067, i.__webglTexture));
  }
  let ce = { [k]: 10497, [A]: 33071, [j]: 33648 },
    le = {
      [M]: 9728,
      [N]: 9984,
      [re]: 9986,
      [P]: 9729,
      [ae]: 9985,
      [se]: 9987,
    };
  function ue(n, a, o) {
    if (
      (o
        ? (e.texParameteri(n, 10242, ce[a.wrapS]),
          e.texParameteri(n, 10243, ce[a.wrapT]),
          (n === 32879 || n === 35866) &&
            e.texParameteri(n, 32882, ce[a.wrapR]),
          e.texParameteri(n, 10240, le[a.magFilter]),
          e.texParameteri(n, 10241, le[a.minFilter]))
        : (e.texParameteri(n, 10242, 33071),
          e.texParameteri(n, 10243, 33071),
          (n === 32879 || n === 35866) && e.texParameteri(n, 32882, 33071),
          (a.wrapS !== 1001 || a.wrapT !== 1001) &&
            console.warn(
              `THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`,
            ),
          e.texParameteri(n, 10240, S(a.magFilter)),
          e.texParameteri(n, 10241, S(a.minFilter)),
          a.minFilter !== 1003 &&
            a.minFilter !== 1006 &&
            console.warn(
              `THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`,
            )),
      t.has(`EXT_texture_filter_anisotropic`) === !0)
    ) {
      let o = t.get(`EXT_texture_filter_anisotropic`);
      if (
        (a.type === 1015 && t.has(`OES_texture_float_linear`) === !1) ||
        (s === !1 &&
          a.type === 1016 &&
          t.has(`OES_texture_half_float_linear`) === !1)
      )
        return;
      (a.anisotropy > 1 || r.get(a).__currentAnisotropy) &&
        (e.texParameterf(
          n,
          o.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, i.getMaxAnisotropy()),
        ),
        (r.get(a).__currentAnisotropy = a.anisotropy));
    }
  }
  function F(t, n) {
    t.__webglInit === void 0 &&
      ((t.__webglInit = !0),
      n.addEventListener(`dispose`, C),
      (t.__webglTexture = e.createTexture()),
      o.memory.textures++);
  }
  function I(t, r, i) {
    let o = 3553;
    (r.isDataTexture2DArray && (o = 35866),
      r.isDataTexture3D && (o = 32879),
      F(t, r),
      n.activeTexture(33984 + i),
      n.bindTexture(o, t.__webglTexture),
      e.pixelStorei(37440, r.flipY),
      e.pixelStorei(37441, r.premultiplyAlpha),
      e.pixelStorei(3317, r.unpackAlignment),
      e.pixelStorei(37443, 0));
    let c = v(r) && _(r.image) === !1,
      l = g(r.image, c, !1, u),
      d = _(l) || s,
      f = a.convert(r.format),
      p = a.convert(r.type),
      m = x(r.internalFormat, f, p, r.encoding);
    ue(o, r, d);
    let h,
      S = r.mipmaps;
    if (r.isDepthTexture)
      ((m = 6402),
        s
          ? (m =
              r.type === 1015
                ? 36012
                : r.type === 1014
                  ? 33190
                  : r.type === 1020
                    ? 35056
                    : 33189)
          : r.type === 1015 &&
            console.error(
              `WebGLRenderer: Floating point depth texture requires WebGL2.`,
            ),
        r.format === 1026 &&
          m === 6402 &&
          r.type !== 1012 &&
          r.type !== 1014 &&
          (console.warn(
            `THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`,
          ),
          (r.type = de),
          (p = a.convert(r.type))),
        r.format === 1027 &&
          m === 6402 &&
          ((m = 34041),
          r.type !== 1020 &&
            (console.warn(
              `THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`,
            ),
            (r.type = ge),
            (p = a.convert(r.type)))),
        n.texImage2D(3553, 0, m, l.width, l.height, 0, f, p, null));
    else if (r.isDataTexture)
      if (S.length > 0 && d) {
        for (let e = 0, t = S.length; e < t; e++)
          ((h = S[e]),
            n.texImage2D(3553, e, m, h.width, h.height, 0, f, p, h.data));
        ((r.generateMipmaps = !1), (t.__maxMipLevel = S.length - 1));
      } else
        (n.texImage2D(3553, 0, m, l.width, l.height, 0, f, p, l.data),
          (t.__maxMipLevel = 0));
    else if (r.isCompressedTexture) {
      for (let e = 0, t = S.length; e < t; e++)
        ((h = S[e]),
          r.format !== 1023 && r.format !== 1022
            ? f === null
              ? console.warn(
                  `THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`,
                )
              : n.compressedTexImage2D(3553, e, m, h.width, h.height, 0, h.data)
            : n.texImage2D(3553, e, m, h.width, h.height, 0, f, p, h.data));
      t.__maxMipLevel = S.length - 1;
    } else if (r.isDataTexture2DArray)
      (n.texImage3D(35866, 0, m, l.width, l.height, l.depth, 0, f, p, l.data),
        (t.__maxMipLevel = 0));
    else if (r.isDataTexture3D)
      (n.texImage3D(32879, 0, m, l.width, l.height, l.depth, 0, f, p, l.data),
        (t.__maxMipLevel = 0));
    else if (S.length > 0 && d) {
      for (let e = 0, t = S.length; e < t; e++)
        ((h = S[e]), n.texImage2D(3553, e, m, f, p, h));
      ((r.generateMipmaps = !1), (t.__maxMipLevel = S.length - 1));
    } else (n.texImage2D(3553, 0, m, f, p, l), (t.__maxMipLevel = 0));
    (y(r, d) && b(o, r, l.width, l.height),
      (t.__version = r.version),
      r.onUpdate && r.onUpdate(r));
  }
  function L(t, r, i) {
    if (r.image.length !== 6) return;
    (F(t, r),
      n.activeTexture(33984 + i),
      n.bindTexture(34067, t.__webglTexture),
      e.pixelStorei(37440, r.flipY),
      e.pixelStorei(37441, r.premultiplyAlpha),
      e.pixelStorei(3317, r.unpackAlignment),
      e.pixelStorei(37443, 0));
    let o = r && (r.isCompressedTexture || r.image[0].isCompressedTexture),
      c = r.image[0] && r.image[0].isDataTexture,
      u = [];
    for (let e = 0; e < 6; e++)
      !o && !c
        ? (u[e] = g(r.image[e], !1, !0, l))
        : (u[e] = c ? r.image[e].image : r.image[e]);
    let d = u[0],
      f = _(d) || s,
      p = a.convert(r.format),
      m = a.convert(r.type),
      h = x(r.internalFormat, p, m, r.encoding);
    ue(34067, r, f);
    let v;
    if (o) {
      for (let e = 0; e < 6; e++) {
        v = u[e].mipmaps;
        for (let t = 0; t < v.length; t++) {
          let i = v[t];
          r.format !== 1023 && r.format !== 1022
            ? p === null
              ? console.warn(
                  `THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`,
                )
              : n.compressedTexImage2D(
                  34069 + e,
                  t,
                  h,
                  i.width,
                  i.height,
                  0,
                  i.data,
                )
            : n.texImage2D(34069 + e, t, h, i.width, i.height, 0, p, m, i.data);
        }
      }
      t.__maxMipLevel = v.length - 1;
    } else {
      v = r.mipmaps;
      for (let e = 0; e < 6; e++)
        if (c) {
          n.texImage2D(
            34069 + e,
            0,
            h,
            u[e].width,
            u[e].height,
            0,
            p,
            m,
            u[e].data,
          );
          for (let t = 0; t < v.length; t++) {
            let r = v[t].image[e].image;
            n.texImage2D(
              34069 + e,
              t + 1,
              h,
              r.width,
              r.height,
              0,
              p,
              m,
              r.data,
            );
          }
        } else {
          n.texImage2D(34069 + e, 0, h, p, m, u[e]);
          for (let t = 0; t < v.length; t++) {
            let r = v[t];
            n.texImage2D(34069 + e, t + 1, h, p, m, r.image[e]);
          }
        }
      t.__maxMipLevel = v.length;
    }
    (y(r, f) && b(34067, r, d.width, d.height),
      (t.__version = r.version),
      r.onUpdate && r.onUpdate(r));
  }
  function R(t, i, o, s, c) {
    let l = a.convert(o.format),
      u = a.convert(o.type),
      d = x(o.internalFormat, l, u, o.encoding);
    (c === 32879 || c === 35866
      ? n.texImage3D(c, 0, d, i.width, i.height, i.depth, 0, l, u, null)
      : n.texImage2D(c, 0, d, i.width, i.height, 0, l, u, null),
      n.bindFramebuffer(36160, t),
      e.framebufferTexture2D(36160, s, c, r.get(o).__webglTexture, 0),
      n.bindFramebuffer(36160, null));
  }
  function fe(t, n, r) {
    if ((e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer)) {
      let i = 33189;
      if (r) {
        let t = n.depthTexture;
        t &&
          t.isDepthTexture &&
          (t.type === 1015 ? (i = 36012) : t.type === 1014 && (i = 33190));
        let r = be(n);
        e.renderbufferStorageMultisample(36161, r, i, n.width, n.height);
      } else e.renderbufferStorage(36161, i, n.width, n.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (n.depthBuffer && n.stencilBuffer) {
      if (r) {
        let t = be(n);
        e.renderbufferStorageMultisample(36161, t, 35056, n.width, n.height);
      } else e.renderbufferStorage(36161, 34041, n.width, n.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      let t = n.isWebGLMultipleRenderTargets === !0 ? n.texture[0] : n.texture,
        i = a.convert(t.format),
        o = a.convert(t.type),
        s = x(t.internalFormat, i, o, t.encoding);
      if (r) {
        let t = be(n);
        e.renderbufferStorageMultisample(36161, t, s, n.width, n.height);
      } else e.renderbufferStorage(36161, s, n.width, n.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function pe(t, i) {
    if (i && i.isWebGLCubeRenderTarget)
      throw Error(`Depth Texture with cube render targets is not supported`);
    if (
      (n.bindFramebuffer(36160, t),
      !(i.depthTexture && i.depthTexture.isDepthTexture))
    )
      throw Error(
        `renderTarget.depthTexture must be an instance of THREE.DepthTexture`,
      );
    ((!r.get(i.depthTexture).__webglTexture ||
      i.depthTexture.image.width !== i.width ||
      i.depthTexture.image.height !== i.height) &&
      ((i.depthTexture.image.width = i.width),
      (i.depthTexture.image.height = i.height),
      (i.depthTexture.needsUpdate = !0)),
      te(i.depthTexture, 0));
    let a = r.get(i.depthTexture).__webglTexture;
    if (i.depthTexture.format === 1026)
      e.framebufferTexture2D(36160, 36096, 3553, a, 0);
    else if (i.depthTexture.format === 1027)
      e.framebufferTexture2D(36160, 33306, 3553, a, 0);
    else throw Error(`Unknown depthTexture format`);
  }
  function me(t) {
    let i = r.get(t),
      a = t.isWebGLCubeRenderTarget === !0;
    if (t.depthTexture) {
      if (a)
        throw Error(`target.depthTexture not supported in Cube render targets`);
      pe(i.__webglFramebuffer, t);
    } else if (a) {
      i.__webglDepthbuffer = [];
      for (let r = 0; r < 6; r++)
        (n.bindFramebuffer(36160, i.__webglFramebuffer[r]),
          (i.__webglDepthbuffer[r] = e.createRenderbuffer()),
          fe(i.__webglDepthbuffer[r], t, !1));
    } else
      (n.bindFramebuffer(36160, i.__webglFramebuffer),
        (i.__webglDepthbuffer = e.createRenderbuffer()),
        fe(i.__webglDepthbuffer, t, !1));
    n.bindFramebuffer(36160, null);
  }
  function he(t) {
    let c = t.texture,
      l = r.get(t),
      u = r.get(c);
    (t.addEventListener(`dispose`, w),
      t.isWebGLMultipleRenderTargets !== !0 &&
        ((u.__webglTexture = e.createTexture()),
        (u.__version = c.version),
        o.memory.textures++));
    let d = t.isWebGLCubeRenderTarget === !0,
      f = t.isWebGLMultipleRenderTargets === !0,
      p = t.isWebGLMultisampleRenderTarget === !0,
      m = c.isDataTexture3D || c.isDataTexture2DArray,
      h = _(t) || s;
    if (
      (s &&
        c.format === 1022 &&
        (c.type === 1015 || c.type === 1016) &&
        ((c.format = ye),
        console.warn(
          `THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.`,
        )),
      d)
    ) {
      l.__webglFramebuffer = [];
      for (let t = 0; t < 6; t++)
        l.__webglFramebuffer[t] = e.createFramebuffer();
    } else if (((l.__webglFramebuffer = e.createFramebuffer()), f))
      if (i.drawBuffers) {
        let n = t.texture;
        for (let t = 0, i = n.length; t < i; t++) {
          let i = r.get(n[t]);
          i.__webglTexture === void 0 &&
            ((i.__webglTexture = e.createTexture()), o.memory.textures++);
        }
      } else
        console.warn(
          `THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`,
        );
    else if (p)
      if (s) {
        ((l.__webglMultisampledFramebuffer = e.createFramebuffer()),
          (l.__webglColorRenderbuffer = e.createRenderbuffer()),
          e.bindRenderbuffer(36161, l.__webglColorRenderbuffer));
        let r = a.convert(c.format),
          i = a.convert(c.type),
          o = x(c.internalFormat, r, i, c.encoding),
          s = be(t);
        (e.renderbufferStorageMultisample(36161, s, o, t.width, t.height),
          n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
          e.framebufferRenderbuffer(
            36160,
            36064,
            36161,
            l.__webglColorRenderbuffer,
          ),
          e.bindRenderbuffer(36161, null),
          t.depthBuffer &&
            ((l.__webglDepthRenderbuffer = e.createRenderbuffer()),
            fe(l.__webglDepthRenderbuffer, t, !0)),
          n.bindFramebuffer(36160, null));
      } else
        console.warn(
          `THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`,
        );
    if (d) {
      (n.bindTexture(34067, u.__webglTexture), ue(34067, c, h));
      for (let e = 0; e < 6; e++)
        R(l.__webglFramebuffer[e], t, c, 36064, 34069 + e);
      (y(c, h) && b(34067, c, t.width, t.height), n.unbindTexture());
    } else if (f) {
      let e = t.texture;
      for (let i = 0, a = e.length; i < a; i++) {
        let a = e[i],
          o = r.get(a);
        (n.bindTexture(3553, o.__webglTexture),
          ue(3553, a, h),
          R(l.__webglFramebuffer, t, a, 36064 + i, 3553),
          y(a, h) && b(3553, a, t.width, t.height));
      }
      n.unbindTexture();
    } else {
      let e = 3553;
      (m &&
        (s
          ? (e = c.isDataTexture3D ? 32879 : 35866)
          : console.warn(
              `THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.`,
            )),
        n.bindTexture(e, u.__webglTexture),
        ue(e, c, h),
        R(l.__webglFramebuffer, t, c, 36064, e),
        y(c, h) && b(e, c, t.width, t.height, t.depth),
        n.unbindTexture());
    }
    t.depthBuffer && me(t);
  }
  function _e(e) {
    let t = _(e) || s,
      i = e.isWebGLMultipleRenderTargets === !0 ? e.texture : [e.texture];
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (y(o, t)) {
        let t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
          i = r.get(o).__webglTexture;
        (n.bindTexture(t, i), b(t, o, e.width, e.height), n.unbindTexture());
      }
    }
  }
  function ve(t) {
    if (t.isWebGLMultisampleRenderTarget)
      if (s) {
        let i = t.width,
          a = t.height,
          o = 16384;
        (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024));
        let s = r.get(t);
        (n.bindFramebuffer(36008, s.__webglMultisampledFramebuffer),
          n.bindFramebuffer(36009, s.__webglFramebuffer),
          e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728),
          n.bindFramebuffer(36008, null),
          n.bindFramebuffer(36009, s.__webglMultisampledFramebuffer));
      } else
        console.warn(
          `THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`,
        );
  }
  function be(e) {
    return s && e.isWebGLMultisampleRenderTarget ? Math.min(d, e.samples) : 0;
  }
  function xe(e) {
    let t = o.render.frame;
    f.get(e) !== t && (f.set(e, t), e.update());
  }
  let Se = !1,
    Ce = !1;
  function we(e, t) {
    (e &&
      e.isWebGLRenderTarget &&
      (Se === !1 &&
        (console.warn(
          `THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.`,
        ),
        (Se = !0)),
      (e = e.texture)),
      te(e, t));
  }
  function Te(e, t) {
    (e &&
      e.isWebGLCubeRenderTarget &&
      (Ce === !1 &&
        (console.warn(
          `THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.`,
        ),
        (Ce = !0)),
      (e = e.texture)),
      oe(e, t));
  }
  ((this.allocateTextureUnit = ee),
    (this.resetTextureUnits = O),
    (this.setTexture2D = te),
    (this.setTexture2DArray = ne),
    (this.setTexture3D = ie),
    (this.setTextureCube = oe),
    (this.setupRenderTarget = he),
    (this.updateRenderTargetMipmap = _e),
    (this.updateMultisampleRenderTarget = ve),
    (this.safeSetTexture2D = we),
    (this.safeSetTextureCube = Te));
}
function lc(e, t, n) {
  let r = n.isWebGL2;
  function i(e) {
    let n;
    if (e === 1009) return 5121;
    if (e === 1017) return 32819;
    if (e === 1018) return 32820;
    if (e === 1019) return 33635;
    if (e === 1010) return 5120;
    if (e === 1011) return 5122;
    if (e === 1012) return 5123;
    if (e === 1013) return 5124;
    if (e === 1014) return 5125;
    if (e === 1015) return 5126;
    if (e === 1016)
      return r
        ? 5131
        : ((n = t.get(`OES_texture_half_float`)),
          n === null ? null : n.HALF_FLOAT_OES);
    if (e === 1021) return 6406;
    if (e === 1022) return 6407;
    if (e === 1023) return 6408;
    if (e === 1024) return 6409;
    if (e === 1025) return 6410;
    if (e === 1026) return 6402;
    if (e === 1027) return 34041;
    if (e === 1028) return 6403;
    if (e === 1029) return 36244;
    if (e === 1030) return 33319;
    if (e === 1031) return 33320;
    if (e === 1032) return 36248;
    if (e === 1033) return 36249;
    if (e === 33776 || e === 33777 || e === 33778 || e === 33779)
      if (((n = t.get(`WEBGL_compressed_texture_s3tc`)), n !== null)) {
        if (e === 33776) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (e === 33777) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (e === 33778) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (e === 33779) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (e === 35840 || e === 35841 || e === 35842 || e === 35843)
      if (((n = t.get(`WEBGL_compressed_texture_pvrtc`)), n !== null)) {
        if (e === 35840) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (e === 35841) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (e === 35842) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (e === 35843) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (e === 36196)
      return (
        (n = t.get(`WEBGL_compressed_texture_etc1`)),
        n === null ? null : n.COMPRESSED_RGB_ETC1_WEBGL
      );
    if (
      (e === 37492 || e === 37496) &&
      ((n = t.get(`WEBGL_compressed_texture_etc`)), n !== null)
    ) {
      if (e === 37492) return n.COMPRESSED_RGB8_ETC2;
      if (e === 37496) return n.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (
      e === 37808 ||
      e === 37809 ||
      e === 37810 ||
      e === 37811 ||
      e === 37812 ||
      e === 37813 ||
      e === 37814 ||
      e === 37815 ||
      e === 37816 ||
      e === 37817 ||
      e === 37818 ||
      e === 37819 ||
      e === 37820 ||
      e === 37821 ||
      e === 37840 ||
      e === 37841 ||
      e === 37842 ||
      e === 37843 ||
      e === 37844 ||
      e === 37845 ||
      e === 37846 ||
      e === 37847 ||
      e === 37848 ||
      e === 37849 ||
      e === 37850 ||
      e === 37851 ||
      e === 37852 ||
      e === 37853
    )
      return (
        (n = t.get(`WEBGL_compressed_texture_astc`)),
        n === null ? null : e
      );
    if (e === 36492)
      return (
        (n = t.get(`EXT_texture_compression_bptc`)),
        n === null ? null : e
      );
    if (e === 1020)
      return r
        ? 34042
        : ((n = t.get(`WEBGL_depth_texture`)),
          n === null ? null : n.UNSIGNED_INT_24_8_WEBGL);
  }
  return { convert: i };
}
var uc = class extends ta {
  constructor(e = []) {
    (super(), (this.cameras = e));
  }
};
uc.prototype.isArrayCamera = !0;
var dc = class extends U {
  constructor() {
    (super(), (this.type = `Group`));
  }
};
dc.prototype.isGroup = !0;
var fc = { type: `move` },
  pc = class {
    constructor() {
      ((this._targetRay = null), (this._grip = null), (this._hand = null));
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new dc()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new dc()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new V()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new V())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new dc()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new V()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new V())),
        this._grip
      );
    }
    dispatchEvent(e) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
      );
    }
    disconnect(e) {
      return (
        this.dispatchEvent({ type: `disconnected`, data: e }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(e, t, n) {
      let r = null,
        i = null,
        a = null,
        o = this._targetRay,
        s = this._grip,
        c = this._hand;
      if (e && t.session.visibilityState !== `visible-blurred`)
        if (
          (o !== null &&
            ((r = t.getPose(e.targetRaySpace, n)),
            r !== null &&
              (o.matrix.fromArray(r.transform.matrix),
              o.matrix.decompose(o.position, o.rotation, o.scale),
              r.linearVelocity
                ? ((o.hasLinearVelocity = !0),
                  o.linearVelocity.copy(r.linearVelocity))
                : (o.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((o.hasAngularVelocity = !0),
                  o.angularVelocity.copy(r.angularVelocity))
                : (o.hasAngularVelocity = !1),
              this.dispatchEvent(fc))),
          c && e.hand)
        ) {
          a = !0;
          for (let r of e.hand.values()) {
            let e = t.getJointPose(r, n);
            if (c.joints[r.jointName] === void 0) {
              let e = new dc();
              ((e.matrixAutoUpdate = !1),
                (e.visible = !1),
                (c.joints[r.jointName] = e),
                c.add(e));
            }
            let i = c.joints[r.jointName];
            (e !== null &&
              (i.matrix.fromArray(e.transform.matrix),
              i.matrix.decompose(i.position, i.rotation, i.scale),
              (i.jointRadius = e.radius)),
              (i.visible = e !== null));
          }
          let r = c.joints[`index-finger-tip`],
            i = c.joints[`thumb-tip`],
            o = r.position.distanceTo(i.position),
            s = 0.02,
            l = 0.005;
          c.inputState.pinching && o > s + l
            ? ((c.inputState.pinching = !1),
              this.dispatchEvent({
                type: `pinchend`,
                handedness: e.handedness,
                target: this,
              }))
            : !c.inputState.pinching &&
              o <= s - l &&
              ((c.inputState.pinching = !0),
              this.dispatchEvent({
                type: `pinchstart`,
                handedness: e.handedness,
                target: this,
              }));
        } else
          s !== null &&
            e.gripSpace &&
            ((i = t.getPose(e.gripSpace, n)),
            i !== null &&
              (s.matrix.fromArray(i.transform.matrix),
              s.matrix.decompose(s.position, s.rotation, s.scale),
              i.linearVelocity
                ? ((s.hasLinearVelocity = !0),
                  s.linearVelocity.copy(i.linearVelocity))
                : (s.hasLinearVelocity = !1),
              i.angularVelocity
                ? ((s.hasAngularVelocity = !0),
                  s.angularVelocity.copy(i.angularVelocity))
                : (s.hasAngularVelocity = !1)));
      return (
        o !== null && (o.visible = r !== null),
        s !== null && (s.visible = i !== null),
        c !== null && (c.visible = a !== null),
        this
      );
    }
  },
  mc = class extends tn {
    constructor(e, t) {
      super();
      let n = this,
        r = e.state,
        i = null,
        a = 1,
        o = null,
        s = `local-floor`,
        c = null,
        l = null,
        u = null,
        d = null,
        f = null,
        p = !1,
        m = null,
        h = null,
        g = null,
        _ = null,
        v = null,
        y = null,
        b = [],
        x = new Map(),
        S = new ta();
      (S.layers.enable(1), (S.viewport = new B()));
      let C = new ta();
      (C.layers.enable(2), (C.viewport = new B()));
      let w = [S, C],
        T = new uc();
      (T.layers.enable(1), T.layers.enable(2));
      let E = null,
        D = null;
      ((this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (e) {
          let t = b[e];
          return (
            t === void 0 && ((t = new pc()), (b[e] = t)),
            t.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (e) {
          let t = b[e];
          return (
            t === void 0 && ((t = new pc()), (b[e] = t)),
            t.getGripSpace()
          );
        }),
        (this.getHand = function (e) {
          let t = b[e];
          return (
            t === void 0 && ((t = new pc()), (b[e] = t)),
            t.getHandSpace()
          );
        }));
      function O(e) {
        let t = x.get(e.inputSource);
        t && t.dispatchEvent({ type: e.type, data: e.inputSource });
      }
      function ee() {
        (x.forEach(function (e, t) {
          e.disconnect(t);
        }),
          x.clear(),
          (E = null),
          (D = null),
          r.bindXRFramebuffer(null),
          e.setRenderTarget(e.getRenderTarget()),
          u && t.deleteFramebuffer(u),
          m && t.deleteFramebuffer(m),
          h && t.deleteRenderbuffer(h),
          g && t.deleteRenderbuffer(g),
          (u = null),
          (m = null),
          (h = null),
          (g = null),
          (f = null),
          (d = null),
          (l = null),
          (i = null),
          re.stop(),
          (n.isPresenting = !1),
          n.dispatchEvent({ type: `sessionend` }));
      }
      ((this.setFramebufferScaleFactor = function (e) {
        ((a = e),
          n.isPresenting === !0 &&
            console.warn(
              `THREE.WebXRManager: Cannot change framebuffer scale while presenting.`,
            ));
      }),
        (this.setReferenceSpaceType = function (e) {
          ((s = e),
            n.isPresenting === !0 &&
              console.warn(
                `THREE.WebXRManager: Cannot change reference space type while presenting.`,
              ));
        }),
        (this.getReferenceSpace = function () {
          return o;
        }),
        (this.getBaseLayer = function () {
          return d === null ? f : d;
        }),
        (this.getBinding = function () {
          return l;
        }),
        (this.getFrame = function () {
          return _;
        }),
        (this.getSession = function () {
          return i;
        }),
        (this.setSession = async function (e) {
          if (((i = e), i !== null)) {
            (i.addEventListener(`select`, O),
              i.addEventListener(`selectstart`, O),
              i.addEventListener(`selectend`, O),
              i.addEventListener(`squeeze`, O),
              i.addEventListener(`squeezestart`, O),
              i.addEventListener(`squeezeend`, O),
              i.addEventListener(`end`, ee),
              i.addEventListener(`inputsourceschange`, te));
            let e = t.getContextAttributes();
            if (
              (e.xrCompatible !== !0 && (await t.makeXRCompatible()),
              i.renderState.layers === void 0)
            ) {
              let n = {
                antialias: e.antialias,
                alpha: e.alpha,
                depth: e.depth,
                stencil: e.stencil,
                framebufferScaleFactor: a,
              };
              ((f = new XRWebGLLayer(i, t, n)),
                i.updateRenderState({ baseLayer: f }));
            } else if (t instanceof WebGLRenderingContext) {
              let n = {
                antialias: !0,
                alpha: e.alpha,
                depth: e.depth,
                stencil: e.stencil,
                framebufferScaleFactor: a,
              };
              ((f = new XRWebGLLayer(i, t, n)),
                i.updateRenderState({ layers: [f] }));
            } else {
              p = e.antialias;
              let n = null;
              e.depth &&
                ((y = 256),
                e.stencil && (y |= 1024),
                (v = e.stencil ? 33306 : 36096),
                (n = e.stencil ? 35056 : 33190));
              let o = {
                colorFormat: e.alpha ? 32856 : 32849,
                depthFormat: n,
                scaleFactor: a,
              };
              ((l = new XRWebGLBinding(i, t)),
                (d = l.createProjectionLayer(o)),
                (u = t.createFramebuffer()),
                i.updateRenderState({ layers: [d] }),
                p &&
                  ((m = t.createFramebuffer()),
                  (h = t.createRenderbuffer()),
                  t.bindRenderbuffer(36161, h),
                  t.renderbufferStorageMultisample(
                    36161,
                    4,
                    32856,
                    d.textureWidth,
                    d.textureHeight,
                  ),
                  r.bindFramebuffer(36160, m),
                  t.framebufferRenderbuffer(36160, 36064, 36161, h),
                  t.bindRenderbuffer(36161, null),
                  n !== null &&
                    ((g = t.createRenderbuffer()),
                    t.bindRenderbuffer(36161, g),
                    t.renderbufferStorageMultisample(
                      36161,
                      4,
                      n,
                      d.textureWidth,
                      d.textureHeight,
                    ),
                    t.framebufferRenderbuffer(36160, v, 36161, g),
                    t.bindRenderbuffer(36161, null)),
                  r.bindFramebuffer(36160, null)));
            }
            ((o = await i.requestReferenceSpace(s)),
              re.setContext(i),
              re.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: `sessionstart` }));
          }
        }));
      function te(e) {
        let t = i.inputSources;
        for (let e = 0; e < b.length; e++) x.set(t[e], b[e]);
        for (let t = 0; t < e.removed.length; t++) {
          let n = e.removed[t],
            r = x.get(n);
          r &&
            (r.dispatchEvent({ type: `disconnected`, data: n }), x.delete(n));
        }
        for (let t = 0; t < e.added.length; t++) {
          let n = e.added[t],
            r = x.get(n);
          r && r.dispatchEvent({ type: `connected`, data: n });
        }
      }
      let k = new V(),
        A = new V();
      function j(e, t, n) {
        (k.setFromMatrixPosition(t.matrixWorld),
          A.setFromMatrixPosition(n.matrixWorld));
        let r = k.distanceTo(A),
          i = t.projectionMatrix.elements,
          a = n.projectionMatrix.elements,
          o = i[14] / (i[10] - 1),
          s = i[14] / (i[10] + 1),
          c = (i[9] + 1) / i[5],
          l = (i[9] - 1) / i[5],
          u = (i[8] - 1) / i[0],
          d = (a[8] + 1) / a[0],
          f = o * u,
          p = o * d,
          m = r / (-u + d),
          h = m * -u;
        (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
          e.translateX(h),
          e.translateZ(m),
          e.matrixWorld.compose(e.position, e.quaternion, e.scale),
          e.matrixWorldInverse.copy(e.matrixWorld).invert());
        let g = o + m,
          _ = s + m,
          v = f - h,
          y = p + (r - h),
          b = ((c * s) / _) * g,
          x = ((l * s) / _) * g;
        e.projectionMatrix.makePerspective(v, y, b, x, g, _);
      }
      function M(e, t) {
        (t === null
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.copy(e.matrixWorld).invert());
      }
      ((this.updateCamera = function (e) {
        if (i === null) return;
        ((T.near = C.near = S.near = e.near),
          (T.far = C.far = S.far = e.far),
          (E !== T.near || D !== T.far) &&
            (i.updateRenderState({ depthNear: T.near, depthFar: T.far }),
            (E = T.near),
            (D = T.far)));
        let t = e.parent,
          n = T.cameras;
        M(T, t);
        for (let e = 0; e < n.length; e++) M(n[e], t);
        (T.matrixWorld.decompose(T.position, T.quaternion, T.scale),
          e.position.copy(T.position),
          e.quaternion.copy(T.quaternion),
          e.scale.copy(T.scale),
          e.matrix.copy(T.matrix),
          e.matrixWorld.copy(T.matrixWorld));
        let r = e.children;
        for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
        n.length === 2
          ? j(T, S, C)
          : T.projectionMatrix.copy(S.projectionMatrix);
      }),
        (this.getCamera = function () {
          return T;
        }),
        (this.getFoveation = function () {
          if (d !== null) return d.fixedFoveation;
          if (f !== null) return f.fixedFoveation;
        }),
        (this.setFoveation = function (e) {
          (d !== null && (d.fixedFoveation = e),
            f !== null &&
              f.fixedFoveation !== void 0 &&
              (f.fixedFoveation = e));
        }));
      let N = null;
      function ne(e, n) {
        if (((c = n.getViewerPose(o)), (_ = n), c !== null)) {
          let e = c.views;
          f !== null && r.bindXRFramebuffer(f.framebuffer);
          let n = !1;
          e.length !== T.cameras.length && ((T.cameras.length = 0), (n = !0));
          for (let i = 0; i < e.length; i++) {
            let a = e[i],
              o = null;
            if (f !== null) o = f.getViewport(a);
            else {
              let e = l.getViewSubImage(d, a);
              (r.bindXRFramebuffer(u),
                e.depthStencilTexture !== void 0 &&
                  t.framebufferTexture2D(
                    36160,
                    v,
                    3553,
                    e.depthStencilTexture,
                    0,
                  ),
                t.framebufferTexture2D(36160, 36064, 3553, e.colorTexture, 0),
                (o = e.viewport));
            }
            let s = w[i];
            (s.matrix.fromArray(a.transform.matrix),
              s.projectionMatrix.fromArray(a.projectionMatrix),
              s.viewport.set(o.x, o.y, o.width, o.height),
              i === 0 && T.matrix.copy(s.matrix),
              n === !0 && T.cameras.push(s));
          }
          p && (r.bindXRFramebuffer(m), y !== null && t.clear(y));
        }
        let a = i.inputSources;
        for (let e = 0; e < b.length; e++) {
          let t = b[e],
            r = a[e];
          t.update(r, n, o);
        }
        if ((N && N(e, n), p)) {
          let e = d.textureWidth,
            n = d.textureHeight;
          (r.bindFramebuffer(36008, m),
            r.bindFramebuffer(36009, u),
            t.invalidateFramebuffer(36008, [v]),
            t.invalidateFramebuffer(36009, [v]),
            t.blitFramebuffer(0, 0, e, n, 0, 0, e, n, 16384, 9728),
            t.invalidateFramebuffer(36008, [36064]),
            r.bindFramebuffer(36008, null),
            r.bindFramebuffer(36009, null),
            r.bindFramebuffer(36160, m));
        }
        _ = null;
      }
      let re = new ma();
      (re.setAnimationLoop(ne),
        (this.setAnimationLoop = function (e) {
          N = e;
        }),
        (this.dispose = function () {}));
    }
  };
function hc(e) {
  function t(e, t) {
    (e.fogColor.value.copy(t.color),
      t.isFog
        ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
        : t.isFogExp2 && (e.fogDensity.value = t.density));
  }
  function n(e, t, n, _, v) {
    t.isMeshBasicMaterial
      ? r(e, t)
      : t.isMeshLambertMaterial
        ? (r(e, t), c(e, t))
        : t.isMeshToonMaterial
          ? (r(e, t), u(e, t))
          : t.isMeshPhongMaterial
            ? (r(e, t), l(e, t))
            : t.isMeshStandardMaterial
              ? (r(e, t), t.isMeshPhysicalMaterial ? f(e, t, v) : d(e, t))
              : t.isMeshMatcapMaterial
                ? (r(e, t), p(e, t))
                : t.isMeshDepthMaterial
                  ? (r(e, t), m(e, t))
                  : t.isMeshDistanceMaterial
                    ? (r(e, t), h(e, t))
                    : t.isMeshNormalMaterial
                      ? (r(e, t), g(e, t))
                      : t.isLineBasicMaterial
                        ? (i(e, t), t.isLineDashedMaterial && a(e, t))
                        : t.isPointsMaterial
                          ? o(e, t, n, _)
                          : t.isSpriteMaterial
                            ? s(e, t)
                            : t.isShadowMaterial
                              ? (e.color.value.copy(t.color),
                                (e.opacity.value = t.opacity))
                              : t.isShaderMaterial &&
                                (t.uniformsNeedUpdate = !1);
  }
  function r(t, n) {
    ((t.opacity.value = n.opacity),
      n.color && t.diffuse.value.copy(n.color),
      n.emissive &&
        t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
      n.map && (t.map.value = n.map),
      n.alphaMap && (t.alphaMap.value = n.alphaMap),
      n.specularMap && (t.specularMap.value = n.specularMap),
      n.alphaTest > 0 && (t.alphaTest.value = n.alphaTest));
    let r = e.get(n).envMap;
    if (r) {
      ((t.envMap.value = r),
        (t.flipEnvMap.value =
          r.isCubeTexture && r.isRenderTargetTexture === !1 ? -1 : 1),
        (t.reflectivity.value = n.reflectivity),
        (t.ior.value = n.ior),
        (t.refractionRatio.value = n.refractionRatio));
      let i = e.get(r).__maxMipLevel;
      i !== void 0 && (t.maxMipLevel.value = i);
    }
    (n.lightMap &&
      ((t.lightMap.value = n.lightMap),
      (t.lightMapIntensity.value = n.lightMapIntensity)),
      n.aoMap &&
        ((t.aoMap.value = n.aoMap),
        (t.aoMapIntensity.value = n.aoMapIntensity)));
    let i;
    (n.map
      ? (i = n.map)
      : n.specularMap
        ? (i = n.specularMap)
        : n.displacementMap
          ? (i = n.displacementMap)
          : n.normalMap
            ? (i = n.normalMap)
            : n.bumpMap
              ? (i = n.bumpMap)
              : n.roughnessMap
                ? (i = n.roughnessMap)
                : n.metalnessMap
                  ? (i = n.metalnessMap)
                  : n.alphaMap
                    ? (i = n.alphaMap)
                    : n.emissiveMap
                      ? (i = n.emissiveMap)
                      : n.clearcoatMap
                        ? (i = n.clearcoatMap)
                        : n.clearcoatNormalMap
                          ? (i = n.clearcoatNormalMap)
                          : n.clearcoatRoughnessMap
                            ? (i = n.clearcoatRoughnessMap)
                            : n.specularIntensityMap
                              ? (i = n.specularIntensityMap)
                              : n.specularColorMap
                                ? (i = n.specularColorMap)
                                : n.transmissionMap
                                  ? (i = n.transmissionMap)
                                  : n.thicknessMap
                                    ? (i = n.thicknessMap)
                                    : n.sheenColorMap
                                      ? (i = n.sheenColorMap)
                                      : n.sheenRoughnessMap &&
                                        (i = n.sheenRoughnessMap),
      i !== void 0 &&
        (i.isWebGLRenderTarget && (i = i.texture),
        i.matrixAutoUpdate === !0 && i.updateMatrix(),
        t.uvTransform.value.copy(i.matrix)));
    let a;
    (n.aoMap ? (a = n.aoMap) : n.lightMap && (a = n.lightMap),
      a !== void 0 &&
        (a.isWebGLRenderTarget && (a = a.texture),
        a.matrixAutoUpdate === !0 && a.updateMatrix(),
        t.uv2Transform.value.copy(a.matrix)));
  }
  function i(e, t) {
    (e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity));
  }
  function a(e, t) {
    ((e.dashSize.value = t.dashSize),
      (e.totalSize.value = t.dashSize + t.gapSize),
      (e.scale.value = t.scale));
  }
  function o(e, t, n, r) {
    (e.diffuse.value.copy(t.color),
      (e.opacity.value = t.opacity),
      (e.size.value = t.size * n),
      (e.scale.value = r * 0.5),
      t.map && (e.map.value = t.map),
      t.alphaMap && (e.alphaMap.value = t.alphaMap),
      t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest));
    let i;
    (t.map ? (i = t.map) : t.alphaMap && (i = t.alphaMap),
      i !== void 0 &&
        (i.matrixAutoUpdate === !0 && i.updateMatrix(),
        e.uvTransform.value.copy(i.matrix)));
  }
  function s(e, t) {
    (e.diffuse.value.copy(t.color),
      (e.opacity.value = t.opacity),
      (e.rotation.value = t.rotation),
      t.map && (e.map.value = t.map),
      t.alphaMap && (e.alphaMap.value = t.alphaMap),
      t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest));
    let n;
    (t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap),
      n !== void 0 &&
        (n.matrixAutoUpdate === !0 && n.updateMatrix(),
        e.uvTransform.value.copy(n.matrix)));
  }
  function c(e, t) {
    t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
  }
  function l(e, t) {
    (e.specular.value.copy(t.specular),
      (e.shininess.value = Math.max(t.shininess, 1e-4)),
      t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
      t.bumpMap &&
        ((e.bumpMap.value = t.bumpMap),
        (e.bumpScale.value = t.bumpScale),
        t.side === 1 && (e.bumpScale.value *= -1)),
      t.normalMap &&
        ((e.normalMap.value = t.normalMap),
        e.normalScale.value.copy(t.normalScale),
        t.side === 1 && e.normalScale.value.negate()),
      t.displacementMap &&
        ((e.displacementMap.value = t.displacementMap),
        (e.displacementScale.value = t.displacementScale),
        (e.displacementBias.value = t.displacementBias)));
  }
  function u(e, t) {
    (t.gradientMap && (e.gradientMap.value = t.gradientMap),
      t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
      t.bumpMap &&
        ((e.bumpMap.value = t.bumpMap),
        (e.bumpScale.value = t.bumpScale),
        t.side === 1 && (e.bumpScale.value *= -1)),
      t.normalMap &&
        ((e.normalMap.value = t.normalMap),
        e.normalScale.value.copy(t.normalScale),
        t.side === 1 && e.normalScale.value.negate()),
      t.displacementMap &&
        ((e.displacementMap.value = t.displacementMap),
        (e.displacementScale.value = t.displacementScale),
        (e.displacementBias.value = t.displacementBias)));
  }
  function d(t, n) {
    ((t.roughness.value = n.roughness),
      (t.metalness.value = n.metalness),
      n.roughnessMap && (t.roughnessMap.value = n.roughnessMap),
      n.metalnessMap && (t.metalnessMap.value = n.metalnessMap),
      n.emissiveMap && (t.emissiveMap.value = n.emissiveMap),
      n.bumpMap &&
        ((t.bumpMap.value = n.bumpMap),
        (t.bumpScale.value = n.bumpScale),
        n.side === 1 && (t.bumpScale.value *= -1)),
      n.normalMap &&
        ((t.normalMap.value = n.normalMap),
        t.normalScale.value.copy(n.normalScale),
        n.side === 1 && t.normalScale.value.negate()),
      n.displacementMap &&
        ((t.displacementMap.value = n.displacementMap),
        (t.displacementScale.value = n.displacementScale),
        (t.displacementBias.value = n.displacementBias)),
      e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity));
  }
  function f(e, t, n) {
    (d(e, t),
      (e.ior.value = t.ior),
      t.sheen > 0 &&
        (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),
        (e.sheenRoughness.value = t.sheenRoughness),
        t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap),
        t.sheenRoughnessMap &&
          (e.sheenRoughnessMap.value = t.sheenRoughnessMap)),
      t.clearcoat > 0 &&
        ((e.clearcoat.value = t.clearcoat),
        (e.clearcoatRoughness.value = t.clearcoatRoughness),
        t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
        t.clearcoatRoughnessMap &&
          (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
        t.clearcoatNormalMap &&
          (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
          (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
          t.side === 1 && e.clearcoatNormalScale.value.negate())),
      t.transmission > 0 &&
        ((e.transmission.value = t.transmission),
        (e.transmissionSamplerMap.value = n.texture),
        e.transmissionSamplerSize.value.set(n.width, n.height),
        t.transmissionMap && (e.transmissionMap.value = t.transmissionMap),
        (e.thickness.value = t.thickness),
        t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
        (e.attenuationDistance.value = t.attenuationDistance),
        e.attenuationColor.value.copy(t.attenuationColor)),
      (e.specularIntensity.value = t.specularIntensity),
      e.specularColor.value.copy(t.specularColor),
      t.specularIntensityMap &&
        (e.specularIntensityMap.value = t.specularIntensityMap),
      t.specularColorMap && (e.specularColorMap.value = t.specularColorMap));
  }
  function p(e, t) {
    (t.matcap && (e.matcap.value = t.matcap),
      t.bumpMap &&
        ((e.bumpMap.value = t.bumpMap),
        (e.bumpScale.value = t.bumpScale),
        t.side === 1 && (e.bumpScale.value *= -1)),
      t.normalMap &&
        ((e.normalMap.value = t.normalMap),
        e.normalScale.value.copy(t.normalScale),
        t.side === 1 && e.normalScale.value.negate()),
      t.displacementMap &&
        ((e.displacementMap.value = t.displacementMap),
        (e.displacementScale.value = t.displacementScale),
        (e.displacementBias.value = t.displacementBias)));
  }
  function m(e, t) {
    t.displacementMap &&
      ((e.displacementMap.value = t.displacementMap),
      (e.displacementScale.value = t.displacementScale),
      (e.displacementBias.value = t.displacementBias));
  }
  function h(e, t) {
    (t.displacementMap &&
      ((e.displacementMap.value = t.displacementMap),
      (e.displacementScale.value = t.displacementScale),
      (e.displacementBias.value = t.displacementBias)),
      e.referencePosition.value.copy(t.referencePosition),
      (e.nearDistance.value = t.nearDistance),
      (e.farDistance.value = t.farDistance));
  }
  function g(e, t) {
    (t.bumpMap &&
      ((e.bumpMap.value = t.bumpMap),
      (e.bumpScale.value = t.bumpScale),
      t.side === 1 && (e.bumpScale.value *= -1)),
      t.normalMap &&
        ((e.normalMap.value = t.normalMap),
        e.normalScale.value.copy(t.normalScale),
        t.side === 1 && e.normalScale.value.negate()),
      t.displacementMap &&
        ((e.displacementMap.value = t.displacementMap),
        (e.displacementScale.value = t.displacementScale),
        (e.displacementBias.value = t.displacementBias)));
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function gc() {
  let e = Nn(`canvas`);
  return ((e.style.display = `block`), e);
}
function Z(e = {}) {
  let t = e.canvas === void 0 ? gc() : e.canvas,
    n = e.context === void 0 ? null : e.context,
    r = e.alpha === void 0 ? !1 : e.alpha,
    i = e.depth === void 0 ? !0 : e.depth,
    a = e.stencil === void 0 ? !0 : e.stencil,
    o = e.antialias === void 0 ? !1 : e.antialias,
    s = e.premultipliedAlpha === void 0 ? !0 : e.premultipliedAlpha,
    c = e.preserveDrawingBuffer === void 0 ? !1 : e.preserveDrawingBuffer,
    l = e.powerPreference === void 0 ? `default` : e.powerPreference,
    u =
      e.failIfMajorPerformanceCaveat === void 0
        ? !1
        : e.failIfMajorPerformanceCaveat,
    d = null,
    f = null,
    p = [],
    m = [];
  ((this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.gammaFactor = 2),
    (this.outputEncoding = Ot),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = 0),
    (this.toneMappingExposure = 1));
  let h = this,
    g = !1,
    _ = 0,
    v = 0,
    y = null,
    b = -1,
    x = null,
    S = new B(),
    C = new B(),
    w = null,
    T = t.width,
    E = t.height,
    D = 1,
    O = null,
    ee = null,
    te = new B(0, 0, T, E),
    k = new B(0, 0, T, E),
    j = !1,
    N = [],
    ne = new pa(),
    re = !1,
    ie = !1,
    P = null,
    ae = new H(),
    oe = new V(),
    ce = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ue() {
    return y === null ? D : 1;
  }
  let F = n;
  function de(e, n) {
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t.getContext(i, n);
      if (a !== null) return a;
    }
    return null;
  }
  try {
    let e = {
      alpha: r,
      depth: i,
      stencil: a,
      antialias: o,
      premultipliedAlpha: s,
      preserveDrawingBuffer: c,
      powerPreference: l,
      failIfMajorPerformanceCaveat: u,
    };
    if (
      (t.addEventListener(`webglcontextlost`, Fe, !1),
      t.addEventListener(`webglcontextrestored`, Ie, !1),
      F === null)
    ) {
      let t = [`webgl2`, `webgl`, `experimental-webgl`];
      if ((h.isWebGL1Renderer === !0 && t.shift(), (F = de(t, e)), F === null))
        throw de(t)
          ? Error(`Error creating WebGL context with your selected attributes.`)
          : Error(`Error creating WebGL context.`);
    }
    F.getShaderPrecisionFormat === void 0 &&
      (F.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (e) {
    throw (console.error(`THREE.WebGLRenderer: ` + e.message), e);
  }
  let I,
    L,
    R,
    pe,
    me,
    he,
    ge,
    _e,
    ve,
    ye,
    be,
    xe,
    Se,
    Ce,
    we,
    Te,
    Ee,
    De,
    Oe,
    ke,
    Ae,
    je,
    Me;
  function Ne() {
    ((I = new $a(F)),
      (L = new xa(F, I, e)),
      I.init(L),
      (je = new lc(F, I, L)),
      (R = new sc(F, I, L)),
      (N[0] = 1029),
      (pe = new no(F)),
      (me = new Ws()),
      (he = new cc(F, I, R, me, L, je, pe)),
      (ge = new Ca(h)),
      (_e = new Qa(h)),
      (ve = new ha(F, L)),
      (Me = new ya(F, I, ve, L)),
      (ye = new eo(F, ve, pe, Me)),
      (be = new co(F, ye, ve, pe)),
      (Oe = new so(F, L, he)),
      (Te = new Sa(me)),
      (xe = new Us(h, ge, _e, I, L, Me, Te)),
      (Se = new hc(me)),
      (Ce = new Js(me)),
      (we = new tc(I, L)),
      (De = new va(h, ge, R, be, s)),
      (Ee = new oc(h, be, L)),
      (ke = new ba(F, I, pe, L)),
      (Ae = new to(F, I, pe, L)),
      (pe.programs = xe.programs),
      (h.capabilities = L),
      (h.extensions = I),
      (h.properties = me),
      (h.renderLists = Ce),
      (h.shadowMap = Ee),
      (h.state = R),
      (h.info = pe));
  }
  Ne();
  let Pe = new mc(h, F);
  ((this.xr = Pe),
    (this.getContext = function () {
      return F;
    }),
    (this.getContextAttributes = function () {
      return F.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      let e = I.get(`WEBGL_lose_context`);
      e && e.loseContext();
    }),
    (this.forceContextRestore = function () {
      let e = I.get(`WEBGL_lose_context`);
      e && e.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return D;
    }),
    (this.setPixelRatio = function (e) {
      e !== void 0 && ((D = e), this.setSize(T, E, !1));
    }),
    (this.getSize = function (e) {
      return e.set(T, E);
    }),
    (this.setSize = function (e, n, r) {
      if (Pe.isPresenting) {
        console.warn(
          `THREE.WebGLRenderer: Can't change size while VR device is presenting.`,
        );
        return;
      }
      ((T = e),
        (E = n),
        (t.width = Math.floor(e * D)),
        (t.height = Math.floor(n * D)),
        r !== !1 && ((t.style.width = e + `px`), (t.style.height = n + `px`)),
        this.setViewport(0, 0, e, n));
    }),
    (this.getDrawingBufferSize = function (e) {
      return e.set(T * D, E * D).floor();
    }),
    (this.setDrawingBufferSize = function (e, n, r) {
      ((T = e),
        (E = n),
        (D = r),
        (t.width = Math.floor(e * r)),
        (t.height = Math.floor(n * r)),
        this.setViewport(0, 0, e, n));
    }),
    (this.getCurrentViewport = function (e) {
      return e.copy(S);
    }),
    (this.getViewport = function (e) {
      return e.copy(te);
    }),
    (this.setViewport = function (e, t, n, r) {
      (e.isVector4 ? te.set(e.x, e.y, e.z, e.w) : te.set(e, t, n, r),
        R.viewport(S.copy(te).multiplyScalar(D).floor()));
    }),
    (this.getScissor = function (e) {
      return e.copy(k);
    }),
    (this.setScissor = function (e, t, n, r) {
      (e.isVector4 ? k.set(e.x, e.y, e.z, e.w) : k.set(e, t, n, r),
        R.scissor(C.copy(k).multiplyScalar(D).floor()));
    }),
    (this.getScissorTest = function () {
      return j;
    }),
    (this.setScissorTest = function (e) {
      R.setScissorTest((j = e));
    }),
    (this.setOpaqueSort = function (e) {
      O = e;
    }),
    (this.setTransparentSort = function (e) {
      ee = e;
    }),
    (this.getClearColor = function (e) {
      return e.copy(De.getClearColor());
    }),
    (this.setClearColor = function () {
      De.setClearColor.apply(De, arguments);
    }),
    (this.getClearAlpha = function () {
      return De.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      De.setClearAlpha.apply(De, arguments);
    }),
    (this.clear = function (e, t, n) {
      let r = 0;
      ((e === void 0 || e) && (r |= 16384),
        (t === void 0 || t) && (r |= 256),
        (n === void 0 || n) && (r |= 1024),
        F.clear(r));
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      (t.removeEventListener(`webglcontextlost`, Fe, !1),
        t.removeEventListener(`webglcontextrestored`, Ie, !1),
        Ce.dispose(),
        we.dispose(),
        me.dispose(),
        ge.dispose(),
        _e.dispose(),
        be.dispose(),
        Me.dispose(),
        Pe.dispose(),
        Pe.removeEventListener(`sessionstart`, He),
        Pe.removeEventListener(`sessionend`, Ue),
        (P &&= (P.dispose(), null)),
        We.stop());
    }));
  function Fe(e) {
    (e.preventDefault(),
      console.log(`THREE.WebGLRenderer: Context Lost.`),
      (g = !0));
  }
  function Ie() {
    (console.log(`THREE.WebGLRenderer: Context Restored.`), (g = !1));
    let e = pe.autoReset,
      t = Ee.enabled,
      n = Ee.autoUpdate,
      r = Ee.needsUpdate,
      i = Ee.type;
    (Ne(),
      (pe.autoReset = e),
      (Ee.enabled = t),
      (Ee.autoUpdate = n),
      (Ee.needsUpdate = r),
      (Ee.type = i));
  }
  function Le(e) {
    let t = e.target;
    (t.removeEventListener(`dispose`, Le), Re(t));
  }
  function Re(e) {
    (ze(e), me.remove(e));
  }
  function ze(e) {
    let t = me.get(e).programs;
    t !== void 0 &&
      t.forEach(function (e) {
        xe.releaseProgram(e);
      });
  }
  ((this.renderBufferDirect = function (e, t, n, r, i, a) {
    t === null && (t = ce);
    let o = i.isMesh && i.matrixWorld.determinant() < 0,
      s = Qe(e, t, n, r, i);
    R.setMaterial(r, o);
    let c = n.index,
      l = n.attributes.position;
    if (c === null) {
      if (l === void 0 || l.count === 0) return;
    } else if (c.count === 0) return;
    let u = 1;
    (r.wireframe === !0 && ((c = ye.getWireframeAttribute(n)), (u = 2)),
      Me.setup(i, r, s, n, c));
    let d,
      f = ke;
    c !== null && ((d = ve.get(c)), (f = Ae), f.setIndex(d));
    let p = c === null ? l.count : c.count,
      m = n.drawRange.start * u,
      h = n.drawRange.count * u,
      g = a === null ? 0 : a.start * u,
      _ = a === null ? 1 / 0 : a.count * u,
      v = Math.max(m, g),
      y = Math.min(p, m + h, g + _) - 1,
      b = Math.max(0, y - v + 1);
    if (b !== 0) {
      if (i.isMesh)
        r.wireframe === !0
          ? (R.setLineWidth(r.wireframeLinewidth * ue()), f.setMode(1))
          : f.setMode(4);
      else if (i.isLine) {
        let e = r.linewidth;
        (e === void 0 && (e = 1),
          R.setLineWidth(e * ue()),
          i.isLineSegments
            ? f.setMode(1)
            : i.isLineLoop
              ? f.setMode(2)
              : f.setMode(3));
      } else i.isPoints ? f.setMode(0) : i.isSprite && f.setMode(4);
      if (i.isInstancedMesh) f.renderInstances(v, b, i.count);
      else if (n.isInstancedBufferGeometry) {
        let e = Math.min(n.instanceCount, n._maxInstanceCount);
        f.renderInstances(v, b, e);
      } else f.render(v, b);
    }
  }),
    (this.compile = function (e, t) {
      ((f = we.get(e)),
        f.init(),
        m.push(f),
        e.traverseVisible(function (e) {
          e.isLight &&
            e.layers.test(t.layers) &&
            (f.pushLight(e), e.castShadow && f.pushShadow(e));
        }),
        f.setupLights(h.physicallyCorrectLights),
        e.traverse(function (t) {
          let n = t.material;
          if (n)
            if (Array.isArray(n))
              for (let r = 0; r < n.length; r++) {
                let i = n[r];
                Xe(i, e, t);
              }
            else Xe(n, e, t);
        }),
        m.pop(),
        (f = null));
    }));
  let Be = null;
  function Ve(e) {
    Be && Be(e);
  }
  function He() {
    We.stop();
  }
  function Ue() {
    We.start();
  }
  let We = new ma();
  (We.setAnimationLoop(Ve),
    typeof window < `u` && We.setContext(window),
    (this.setAnimationLoop = function (e) {
      ((Be = e), Pe.setAnimationLoop(e), e === null ? We.stop() : We.start());
    }),
    Pe.addEventListener(`sessionstart`, He),
    Pe.addEventListener(`sessionend`, Ue),
    (this.render = function (e, t) {
      if (t !== void 0 && t.isCamera !== !0) {
        console.error(
          `THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`,
        );
        return;
      }
      if (g === !0) return;
      (e.autoUpdate === !0 && e.updateMatrixWorld(),
        t.parent === null && t.updateMatrixWorld(),
        Pe.enabled === !0 &&
          Pe.isPresenting === !0 &&
          (Pe.cameraAutoUpdate === !0 && Pe.updateCamera(t),
          (t = Pe.getCamera())),
        e.isScene === !0 && e.onBeforeRender(h, e, t, y),
        (f = we.get(e, m.length)),
        f.init(),
        m.push(f),
        ae.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        ne.setFromProjectionMatrix(ae),
        (ie = this.localClippingEnabled),
        (re = Te.init(this.clippingPlanes, ie, t)),
        (d = Ce.get(e, p.length)),
        d.init(),
        p.push(d),
        Ge(e, t, 0, h.sortObjects),
        d.finish(),
        h.sortObjects === !0 && d.sort(O, ee),
        re === !0 && Te.beginShadows());
      let n = f.state.shadowsArray;
      if (
        (Ee.render(n, e, t),
        re === !0 && Te.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        De.render(d, e),
        f.setupLights(h.physicallyCorrectLights),
        t.isArrayCamera)
      ) {
        let n = t.cameras;
        for (let t = 0, r = n.length; t < r; t++) {
          let r = n[t];
          Ke(d, e, r, r.viewport);
        }
      } else Ke(d, e, t);
      (y !== null &&
        (he.updateMultisampleRenderTarget(y), he.updateRenderTargetMipmap(y)),
        e.isScene === !0 && e.onAfterRender(h, e, t),
        R.buffers.depth.setTest(!0),
        R.buffers.depth.setMask(!0),
        R.buffers.color.setMask(!0),
        R.setPolygonOffset(!1),
        Me.resetDefaultState(),
        (b = -1),
        (x = null),
        m.pop(),
        (f = m.length > 0 ? m[m.length - 1] : null),
        p.pop(),
        (d = p.length > 0 ? p[p.length - 1] : null));
    }));
  function Ge(e, t, n, r) {
    if (e.visible === !1) return;
    if (e.layers.test(t.layers)) {
      if (e.isGroup) n = e.renderOrder;
      else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
      else if (e.isLight) (f.pushLight(e), e.castShadow && f.pushShadow(e));
      else if (e.isSprite) {
        if (!e.frustumCulled || ne.intersectsSprite(e)) {
          r && oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ae);
          let t = be.update(e),
            i = e.material;
          i.visible && d.push(e, t, i, n, oe.z, null);
        }
      } else if (
        (e.isMesh || e.isLine || e.isPoints) &&
        (e.isSkinnedMesh &&
          e.skeleton.frame !== pe.render.frame &&
          (e.skeleton.update(), (e.skeleton.frame = pe.render.frame)),
        !e.frustumCulled || ne.intersectsObject(e))
      ) {
        r && oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ae);
        let t = be.update(e),
          i = e.material;
        if (Array.isArray(i)) {
          let r = t.groups;
          for (let a = 0, o = r.length; a < o; a++) {
            let o = r[a],
              s = i[o.materialIndex];
            s && s.visible && d.push(e, t, s, n, oe.z, o);
          }
        } else i.visible && d.push(e, t, i, n, oe.z, null);
      }
    }
    let i = e.children;
    for (let e = 0, a = i.length; e < a; e++) Ge(i[e], t, n, r);
  }
  function Ke(e, t, n, r) {
    let i = e.opaque,
      a = e.transmissive,
      o = e.transparent;
    (f.setupLightsView(n),
      a.length > 0 && qe(i, t, n),
      r && R.viewport(S.copy(r)),
      i.length > 0 && Je(i, t, n),
      a.length > 0 && Je(a, t, n),
      o.length > 0 && Je(o, t, n));
  }
  function qe(e, t, n) {
    P === null &&
      (P = new (o === !0 && L.isWebGL2 === !0 ? Hn : Bn)(1024, 1024, {
        generateMipmaps: !0,
        type: je.convert(1016) === null ? le : fe,
        minFilter: se,
        magFilter: M,
        wrapS: A,
        wrapT: A,
      }));
    let r = h.getRenderTarget();
    (h.setRenderTarget(P), h.clear());
    let i = h.toneMapping;
    ((h.toneMapping = 0),
      Je(e, t, n),
      (h.toneMapping = i),
      he.updateMultisampleRenderTarget(P),
      he.updateRenderTargetMipmap(P),
      h.setRenderTarget(r));
  }
  function Je(e, t, n) {
    let r = t.isScene === !0 ? t.overrideMaterial : null;
    for (let i = 0, a = e.length; i < a; i++) {
      let a = e[i],
        o = a.object,
        s = a.geometry,
        c = r === null ? a.material : r,
        l = a.group;
      o.layers.test(n.layers) && Ye(o, t, n, s, c, l);
    }
  }
  function Ye(e, t, n, r, i, a) {
    (e.onBeforeRender(h, t, n, r, i, a),
      e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
      i.onBeforeRender(h, t, n, r, e, a),
      i.transparent === !0 && i.side === 2
        ? ((i.side = 1),
          (i.needsUpdate = !0),
          h.renderBufferDirect(n, t, r, i, e, a),
          (i.side = 0),
          (i.needsUpdate = !0),
          h.renderBufferDirect(n, t, r, i, e, a),
          (i.side = 2))
        : h.renderBufferDirect(n, t, r, i, e, a),
      e.onAfterRender(h, t, n, r, i, a));
  }
  function Xe(e, t, n) {
    t.isScene !== !0 && (t = ce);
    let r = me.get(e),
      i = f.state.lights,
      a = f.state.shadowsArray,
      o = i.state.version,
      s = xe.getParameters(e, i.state, a, t, n),
      c = xe.getProgramCacheKey(s),
      l = r.programs;
    ((r.environment = e.isMeshStandardMaterial ? t.environment : null),
      (r.fog = t.fog),
      (r.envMap = (e.isMeshStandardMaterial ? _e : ge).get(
        e.envMap || r.environment,
      )),
      l === void 0 &&
        (e.addEventListener(`dispose`, Le), (l = new Map()), (r.programs = l)));
    let u = l.get(c);
    if (u !== void 0) {
      if (r.currentProgram === u && r.lightsStateVersion === o)
        return (Ze(e, s), u);
    } else
      ((s.uniforms = xe.getUniforms(e)),
        e.onBuild(n, s, h),
        e.onBeforeCompile(s, h),
        (u = xe.acquireProgram(s, c)),
        l.set(c, u),
        (r.uniforms = s.uniforms));
    let d = r.uniforms;
    (((!e.isShaderMaterial && !e.isRawShaderMaterial) || e.clipping === !0) &&
      (d.clippingPlanes = Te.uniform),
      Ze(e, s),
      (r.needsLights = et(e)),
      (r.lightsStateVersion = o),
      r.needsLights &&
        ((d.ambientLightColor.value = i.state.ambient),
        (d.lightProbe.value = i.state.probe),
        (d.directionalLights.value = i.state.directional),
        (d.directionalLightShadows.value = i.state.directionalShadow),
        (d.spotLights.value = i.state.spot),
        (d.spotLightShadows.value = i.state.spotShadow),
        (d.rectAreaLights.value = i.state.rectArea),
        (d.ltc_1.value = i.state.rectAreaLTC1),
        (d.ltc_2.value = i.state.rectAreaLTC2),
        (d.pointLights.value = i.state.point),
        (d.pointLightShadows.value = i.state.pointShadow),
        (d.hemisphereLights.value = i.state.hemi),
        (d.directionalShadowMap.value = i.state.directionalShadowMap),
        (d.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
        (d.spotShadowMap.value = i.state.spotShadowMap),
        (d.spotShadowMatrix.value = i.state.spotShadowMatrix),
        (d.pointShadowMap.value = i.state.pointShadowMap),
        (d.pointShadowMatrix.value = i.state.pointShadowMatrix)));
    let p = u.getUniforms(),
      m = ms.seqWithValue(p.seq, d);
    return ((r.currentProgram = u), (r.uniformsList = m), u);
  }
  function Ze(e, t) {
    let n = me.get(e);
    ((n.outputEncoding = t.outputEncoding),
      (n.instancing = t.instancing),
      (n.skinning = t.skinning),
      (n.morphTargets = t.morphTargets),
      (n.morphNormals = t.morphNormals),
      (n.morphTargetsCount = t.morphTargetsCount),
      (n.numClippingPlanes = t.numClippingPlanes),
      (n.numIntersection = t.numClipIntersection),
      (n.vertexAlphas = t.vertexAlphas),
      (n.vertexTangents = t.vertexTangents));
  }
  function Qe(e, t, n, r, i) {
    (t.isScene !== !0 && (t = ce), he.resetTextureUnits());
    let a = t.fog,
      o = r.isMeshStandardMaterial ? t.environment : null,
      s = y === null ? h.outputEncoding : y.texture.encoding,
      c = (r.isMeshStandardMaterial ? _e : ge).get(r.envMap || o),
      l =
        r.vertexColors === !0 &&
        !!n.attributes.color &&
        n.attributes.color.itemSize === 4,
      u = !!r.normalMap && !!n.attributes.tangent,
      d = !!n.morphAttributes.position,
      p = !!n.morphAttributes.normal,
      m = n.morphAttributes.position ? n.morphAttributes.position.length : 0,
      g = me.get(r),
      _ = f.state.lights;
    if (re === !0 && (ie === !0 || e !== x)) {
      let t = e === x && r.id === b;
      Te.setState(r, e, t);
    }
    let v = !1;
    r.version === g.__version
      ? g.needsLights && g.lightsStateVersion !== _.state.version
        ? (v = !0)
        : g.outputEncoding === s
          ? (i.isInstancedMesh && g.instancing === !1) ||
            (!i.isInstancedMesh && g.instancing === !0) ||
            (i.isSkinnedMesh && g.skinning === !1) ||
            (!i.isSkinnedMesh && g.skinning === !0)
            ? (v = !0)
            : g.envMap === c
              ? (r.fog && g.fog !== a) ||
                (g.numClippingPlanes !== void 0 &&
                  (g.numClippingPlanes !== Te.numPlanes ||
                    g.numIntersection !== Te.numIntersection))
                ? (v = !0)
                : g.vertexAlphas === l &&
                    g.vertexTangents === u &&
                    g.morphTargets === d &&
                    g.morphNormals === p
                  ? L.isWebGL2 === !0 && g.morphTargetsCount !== m && (v = !0)
                  : (v = !0)
              : (v = !0)
          : (v = !0)
      : ((v = !0), (g.__version = r.version));
    let S = g.currentProgram;
    v === !0 && (S = Xe(r, t, i));
    let C = !1,
      w = !1,
      T = !1,
      O = S.getUniforms(),
      ee = g.uniforms;
    if (
      (R.useProgram(S.program) && ((C = !0), (w = !0), (T = !0)),
      r.id !== b && ((b = r.id), (w = !0)),
      C || x !== e)
    ) {
      if (
        (O.setValue(F, `projectionMatrix`, e.projectionMatrix),
        L.logarithmicDepthBuffer &&
          O.setValue(F, `logDepthBufFC`, 2 / (Math.log(e.far + 1) / Math.LN2)),
        x !== e && ((x = e), (w = !0), (T = !0)),
        r.isShaderMaterial ||
          r.isMeshPhongMaterial ||
          r.isMeshToonMaterial ||
          r.isMeshStandardMaterial ||
          r.envMap)
      ) {
        let t = O.map.cameraPosition;
        t !== void 0 && t.setValue(F, oe.setFromMatrixPosition(e.matrixWorld));
      }
      ((r.isMeshPhongMaterial ||
        r.isMeshToonMaterial ||
        r.isMeshLambertMaterial ||
        r.isMeshBasicMaterial ||
        r.isMeshStandardMaterial ||
        r.isShaderMaterial) &&
        O.setValue(F, `isOrthographic`, e.isOrthographicCamera === !0),
        (r.isMeshPhongMaterial ||
          r.isMeshToonMaterial ||
          r.isMeshLambertMaterial ||
          r.isMeshBasicMaterial ||
          r.isMeshStandardMaterial ||
          r.isShaderMaterial ||
          r.isShadowMaterial ||
          i.isSkinnedMesh) &&
          O.setValue(F, `viewMatrix`, e.matrixWorldInverse));
    }
    if (i.isSkinnedMesh) {
      (O.setOptional(F, i, `bindMatrix`),
        O.setOptional(F, i, `bindMatrixInverse`));
      let e = i.skeleton;
      e &&
        (L.floatVertexTextures
          ? (e.boneTexture === null && e.computeBoneTexture(),
            O.setValue(F, `boneTexture`, e.boneTexture, he),
            O.setValue(F, `boneTextureSize`, e.boneTextureSize))
          : O.setOptional(F, e, `boneMatrices`));
    }
    return (
      n &&
        (n.morphAttributes.position !== void 0 ||
          n.morphAttributes.normal !== void 0) &&
        Oe.update(i, n, r, S),
      (w || g.receiveShadow !== i.receiveShadow) &&
        ((g.receiveShadow = i.receiveShadow),
        O.setValue(F, `receiveShadow`, i.receiveShadow)),
      w &&
        (O.setValue(F, `toneMappingExposure`, h.toneMappingExposure),
        g.needsLights && $e(ee, T),
        a && r.fog && Se.refreshFogUniforms(ee, a),
        Se.refreshMaterialUniforms(ee, r, D, E, P),
        ms.upload(F, g.uniformsList, ee, he)),
      r.isShaderMaterial &&
        r.uniformsNeedUpdate === !0 &&
        (ms.upload(F, g.uniformsList, ee, he), (r.uniformsNeedUpdate = !1)),
      r.isSpriteMaterial && O.setValue(F, `center`, i.center),
      O.setValue(F, `modelViewMatrix`, i.modelViewMatrix),
      O.setValue(F, `normalMatrix`, i.normalMatrix),
      O.setValue(F, `modelMatrix`, i.matrixWorld),
      S
    );
  }
  function $e(e, t) {
    ((e.ambientLightColor.needsUpdate = t),
      (e.lightProbe.needsUpdate = t),
      (e.directionalLights.needsUpdate = t),
      (e.directionalLightShadows.needsUpdate = t),
      (e.pointLights.needsUpdate = t),
      (e.pointLightShadows.needsUpdate = t),
      (e.spotLights.needsUpdate = t),
      (e.spotLightShadows.needsUpdate = t),
      (e.rectAreaLights.needsUpdate = t),
      (e.hemisphereLights.needsUpdate = t));
  }
  function et(e) {
    return (
      e.isMeshLambertMaterial ||
      e.isMeshToonMaterial ||
      e.isMeshPhongMaterial ||
      e.isMeshStandardMaterial ||
      e.isShadowMaterial ||
      (e.isShaderMaterial && e.lights === !0)
    );
  }
  ((this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return v;
    }),
    (this.getRenderTarget = function () {
      return y;
    }),
    (this.setRenderTarget = function (e, t = 0, n = 0) {
      ((y = e),
        (_ = t),
        (v = n),
        e &&
          me.get(e).__webglFramebuffer === void 0 &&
          he.setupRenderTarget(e));
      let r = null,
        i = !1,
        a = !1;
      if (e) {
        let n = e.texture;
        (n.isDataTexture3D || n.isDataTexture2DArray) && (a = !0);
        let o = me.get(e).__webglFramebuffer;
        (e.isWebGLCubeRenderTarget
          ? ((r = o[t]), (i = !0))
          : (r = e.isWebGLMultisampleRenderTarget
              ? me.get(e).__webglMultisampledFramebuffer
              : o),
          S.copy(e.viewport),
          C.copy(e.scissor),
          (w = e.scissorTest));
      } else
        (S.copy(te).multiplyScalar(D).floor(),
          C.copy(k).multiplyScalar(D).floor(),
          (w = j));
      if (R.bindFramebuffer(36160, r) && L.drawBuffers) {
        let t = !1;
        if (e)
          if (e.isWebGLMultipleRenderTargets) {
            let n = e.texture;
            if (N.length !== n.length || N[0] !== 36064) {
              for (let e = 0, t = n.length; e < t; e++) N[e] = 36064 + e;
              ((N.length = n.length), (t = !0));
            }
          } else
            (N.length !== 1 || N[0] !== 36064) &&
              ((N[0] = 36064), (N.length = 1), (t = !0));
        else
          (N.length !== 1 || N[0] !== 1029) &&
            ((N[0] = 1029), (N.length = 1), (t = !0));
        t &&
          (L.isWebGL2
            ? F.drawBuffers(N)
            : I.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(N));
      }
      if ((R.viewport(S), R.scissor(C), R.setScissorTest(w), i)) {
        let r = me.get(e.texture);
        F.framebufferTexture2D(36160, 36064, 34069 + t, r.__webglTexture, n);
      } else if (a) {
        let r = me.get(e.texture),
          i = t || 0;
        F.framebufferTextureLayer(36160, 36064, r.__webglTexture, n || 0, i);
      }
      b = -1;
    }),
    (this.readRenderTargetPixels = function (e, t, n, r, i, a, o) {
      if (!(e && e.isWebGLRenderTarget)) {
        console.error(
          `THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`,
        );
        return;
      }
      let s = me.get(e).__webglFramebuffer;
      if ((e.isWebGLCubeRenderTarget && o !== void 0 && (s = s[o]), s)) {
        R.bindFramebuffer(36160, s);
        try {
          let o = e.texture,
            s = o.format,
            c = o.type;
          if (s !== 1023 && je.convert(s) !== F.getParameter(35739)) {
            console.error(
              `THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`,
            );
            return;
          }
          let l =
            c === 1016 &&
            (I.has(`EXT_color_buffer_half_float`) ||
              (L.isWebGL2 && I.has(`EXT_color_buffer_float`)));
          if (
            c !== 1009 &&
            je.convert(c) !== F.getParameter(35738) &&
            !(
              c === 1015 &&
              (L.isWebGL2 ||
                I.has(`OES_texture_float`) ||
                I.has(`WEBGL_color_buffer_float`))
            ) &&
            !l
          ) {
            console.error(
              `THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`,
            );
            return;
          }
          F.checkFramebufferStatus(36160) === 36053
            ? t >= 0 &&
              t <= e.width - r &&
              n >= 0 &&
              n <= e.height - i &&
              F.readPixels(t, n, r, i, je.convert(s), je.convert(c), a)
            : console.error(
                `THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.`,
              );
        } finally {
          let e = y === null ? null : me.get(y).__webglFramebuffer;
          R.bindFramebuffer(36160, e);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (e, t, n = 0) {
      let r = 2 ** -n,
        i = Math.floor(t.image.width * r),
        a = Math.floor(t.image.height * r),
        o = je.convert(t.format);
      (L.isWebGL2 && (o === 6407 && (o = 32849), o === 6408 && (o = 32856)),
        he.setTexture2D(t, 0),
        F.copyTexImage2D(3553, n, o, e.x, e.y, i, a, 0),
        R.unbindTexture());
    }),
    (this.copyTextureToTexture = function (e, t, n, r = 0) {
      let i = t.image.width,
        a = t.image.height,
        o = je.convert(n.format),
        s = je.convert(n.type);
      (he.setTexture2D(n, 0),
        F.pixelStorei(37440, n.flipY),
        F.pixelStorei(37441, n.premultiplyAlpha),
        F.pixelStorei(3317, n.unpackAlignment),
        t.isDataTexture
          ? F.texSubImage2D(3553, r, e.x, e.y, i, a, o, s, t.image.data)
          : t.isCompressedTexture
            ? F.compressedTexSubImage2D(
                3553,
                r,
                e.x,
                e.y,
                t.mipmaps[0].width,
                t.mipmaps[0].height,
                o,
                t.mipmaps[0].data,
              )
            : F.texSubImage2D(3553, r, e.x, e.y, o, s, t.image),
        r === 0 && n.generateMipmaps && F.generateMipmap(3553),
        R.unbindTexture());
    }),
    (this.copyTextureToTexture3D = function (e, t, n, r, i = 0) {
      if (h.isWebGL1Renderer) {
        console.warn(
          `THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`,
        );
        return;
      }
      let a = e.max.x - e.min.x + 1,
        o = e.max.y - e.min.y + 1,
        s = e.max.z - e.min.z + 1,
        c = je.convert(r.format),
        l = je.convert(r.type),
        u;
      if (r.isDataTexture3D) (he.setTexture3D(r, 0), (u = 32879));
      else if (r.isDataTexture2DArray)
        (he.setTexture2DArray(r, 0), (u = 35866));
      else {
        console.warn(
          `THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`,
        );
        return;
      }
      (F.pixelStorei(37440, r.flipY),
        F.pixelStorei(37441, r.premultiplyAlpha),
        F.pixelStorei(3317, r.unpackAlignment));
      let d = F.getParameter(3314),
        f = F.getParameter(32878),
        p = F.getParameter(3316),
        m = F.getParameter(3315),
        g = F.getParameter(32877),
        _ = n.isCompressedTexture ? n.mipmaps[0] : n.image;
      (F.pixelStorei(3314, _.width),
        F.pixelStorei(32878, _.height),
        F.pixelStorei(3316, e.min.x),
        F.pixelStorei(3315, e.min.y),
        F.pixelStorei(32877, e.min.z),
        n.isDataTexture || n.isDataTexture3D
          ? F.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, c, l, _.data)
          : n.isCompressedTexture
            ? (console.warn(
                `THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`,
              ),
              F.compressedTexSubImage3D(
                u,
                i,
                t.x,
                t.y,
                t.z,
                a,
                o,
                s,
                c,
                _.data,
              ))
            : F.texSubImage3D(u, i, t.x, t.y, t.z, a, o, s, c, l, _),
        F.pixelStorei(3314, d),
        F.pixelStorei(32878, f),
        F.pixelStorei(3316, p),
        F.pixelStorei(3315, m),
        F.pixelStorei(32877, g),
        i === 0 && r.generateMipmaps && F.generateMipmap(u),
        R.unbindTexture());
    }),
    (this.initTexture = function (e) {
      (he.setTexture2D(e, 0), R.unbindTexture());
    }),
    (this.resetState = function () {
      ((_ = 0), (v = 0), (y = null), R.reset(), Me.reset());
    }),
    typeof __THREE_DEVTOOLS__ < `u` &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent(`observe`, { detail: this }),
      ));
}
Z.prototype.isWebGLRenderer = !0;
var _c = class extends Z {};
_c.prototype.isWebGL1Renderer = !0;
var vc = class e {
  constructor(e, t = 25e-5) {
    ((this.name = ``), (this.color = new W(e)), (this.density = t));
  }
  clone() {
    return new e(this.color, this.density);
  }
  toJSON() {
    return {
      type: `FogExp2`,
      color: this.color.getHex(),
      density: this.density,
    };
  }
};
vc.prototype.isFogExp2 = !0;
var yc = class e {
  constructor(e, t = 1, n = 1e3) {
    ((this.name = ``),
      (this.color = new W(e)),
      (this.near = t),
      (this.far = n));
  }
  clone() {
    return new e(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: `Fog`,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
};
yc.prototype.isFog = !0;
var bc = class extends U {
  constructor() {
    (super(),
      (this.type = `Scene`),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ < `u` &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent(`observe`, { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (this.fog !== null && (t.object.fog = this.fog.toJSON()), t);
  }
};
bc.prototype.isScene = !0;
var xc = class {
  constructor(e, t) {
    ((this.array = e),
      (this.stride = t),
      (this.count = e === void 0 ? 0 : e.length / t),
      (this.usage = Gt),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = cn()));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.stride), (n *= t.stride));
    for (let r = 0, i = this.stride; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  clone(e) {
    (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer));
    let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
      n = new this.constructor(t, this.stride);
    return (n.setUsage(this.usage), n);
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
};
xc.prototype.isInterleavedBuffer = !0;
var Sc = new V(),
  Cc = class e {
    constructor(e, t, n, r = !1) {
      ((this.name = ``),
        (this.data = e),
        (this.itemSize = t),
        (this.offset = n),
        (this.normalized = r === !0));
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(e) {
      this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.data.count; t < n; t++)
        ((Sc.x = this.getX(t)),
          (Sc.y = this.getY(t)),
          (Sc.z = this.getZ(t)),
          Sc.applyMatrix4(e),
          this.setXYZ(t, Sc.x, Sc.y, Sc.z));
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ((Sc.x = this.getX(t)),
          (Sc.y = this.getY(t)),
          (Sc.z = this.getZ(t)),
          Sc.applyNormalMatrix(e),
          this.setXYZ(t, Sc.x, Sc.y, Sc.z));
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        ((Sc.x = this.getX(t)),
          (Sc.y = this.getY(t)),
          (Sc.z = this.getZ(t)),
          Sc.transformDirection(e),
          this.setXYZ(t, Sc.x, Sc.y, Sc.z));
      return this;
    }
    setX(e, t) {
      return ((this.data.array[e * this.data.stride + this.offset] = t), this);
    }
    setY(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 1] = t),
        this
      );
    }
    setZ(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 2] = t),
        this
      );
    }
    setW(e, t) {
      return (
        (this.data.array[e * this.data.stride + this.offset + 3] = t),
        this
      );
    }
    getX(e) {
      return this.data.array[e * this.data.stride + this.offset];
    }
    getY(e) {
      return this.data.array[e * this.data.stride + this.offset + 1];
    }
    getZ(e) {
      return this.data.array[e * this.data.stride + this.offset + 2];
    }
    getW(e) {
      return this.data.array[e * this.data.stride + this.offset + 3];
    }
    setXY(e, t, n) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        this
      );
    }
    setXYZ(e, t, n, r) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        this
      );
    }
    setXYZW(e, t, n, r, i) {
      return (
        (e = e * this.data.stride + this.offset),
        (this.data.array[e + 0] = t),
        (this.data.array[e + 1] = n),
        (this.data.array[e + 2] = r),
        (this.data.array[e + 3] = i),
        this
      );
    }
    clone(t) {
      if (t === void 0) {
        console.log(
          `THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return new K(
          new this.array.constructor(e),
          this.itemSize,
          this.normalized,
        );
      } else
        return (
          t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
          t.interleavedBuffers[this.data.uuid] === void 0 &&
            (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
          new e(
            t.interleavedBuffers[this.data.uuid],
            this.itemSize,
            this.offset,
            this.normalized,
          )
        );
    }
    toJSON(e) {
      if (e === void 0) {
        console.log(
          `THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.`,
        );
        let e = [];
        for (let t = 0; t < this.count; t++) {
          let n = t * this.data.stride + this.offset;
          for (let t = 0; t < this.itemSize; t++)
            e.push(this.data.array[n + t]);
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: e,
          normalized: this.normalized,
        };
      } else
        return (
          e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
          e.interleavedBuffers[this.data.uuid] === void 0 &&
            (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
          {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized,
          }
        );
    }
  };
Cc.prototype.isInterleavedBufferAttribute = !0;
var wc = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `SpriteMaterial`),
      (this.color = new W(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
};
wc.prototype.isSpriteMaterial = !0;
var Tc,
  Ec = new V(),
  Dc = new V(),
  Oc = new V(),
  kc = new z(),
  Ac = new z(),
  jc = new H(),
  Mc = new V(),
  Nc = new V(),
  Pc = new V(),
  Fc = new z(),
  Ic = new z(),
  Lc = new z(),
  Rc = class extends U {
    constructor(e) {
      if ((super(), (this.type = `Sprite`), Tc === void 0)) {
        Tc = new J();
        let e = new xc(
          new Float32Array([
            -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5,
            0.5, 0, 0, 1,
          ]),
          5,
        );
        (Tc.setIndex([0, 1, 2, 0, 2, 3]),
          Tc.setAttribute(`position`, new Cc(e, 3, 0, !1)),
          Tc.setAttribute(`uv`, new Cc(e, 2, 3, !1)));
      }
      ((this.geometry = Tc),
        (this.material = e === void 0 ? new wc() : e),
        (this.center = new z(0.5, 0.5)));
    }
    raycast(e, t) {
      (e.camera === null &&
        console.error(
          `THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`,
        ),
        Dc.setFromMatrixScale(this.matrixWorld),
        jc.copy(e.camera.matrixWorld),
        this.modelViewMatrix.multiplyMatrices(
          e.camera.matrixWorldInverse,
          this.matrixWorld,
        ),
        Oc.setFromMatrixPosition(this.modelViewMatrix),
        e.camera.isPerspectiveCamera &&
          this.material.sizeAttenuation === !1 &&
          Dc.multiplyScalar(-Oc.z));
      let n = this.material.rotation,
        r,
        i;
      n !== 0 && ((i = Math.cos(n)), (r = Math.sin(n)));
      let a = this.center;
      (zc(Mc.set(-0.5, -0.5, 0), Oc, a, Dc, r, i),
        zc(Nc.set(0.5, -0.5, 0), Oc, a, Dc, r, i),
        zc(Pc.set(0.5, 0.5, 0), Oc, a, Dc, r, i),
        Fc.set(0, 0),
        Ic.set(1, 0),
        Lc.set(1, 1));
      let o = e.ray.intersectTriangle(Mc, Nc, Pc, !1, Ec);
      if (
        o === null &&
        (zc(Nc.set(-0.5, 0.5, 0), Oc, a, Dc, r, i),
        Ic.set(0, 1),
        (o = e.ray.intersectTriangle(Mc, Pc, Nc, !1, Ec)),
        o === null)
      )
        return;
      let s = e.ray.origin.distanceTo(Ec);
      s < e.near ||
        s > e.far ||
        t.push({
          distance: s,
          point: Ec.clone(),
          uv: ei.getUV(Ec, Mc, Nc, Pc, Fc, Ic, Lc, new z()),
          face: null,
          object: this,
        });
    }
    copy(e) {
      return (
        super.copy(e),
        e.center !== void 0 && this.center.copy(e.center),
        (this.material = e.material),
        this
      );
    }
  };
Rc.prototype.isSprite = !0;
function zc(e, t, n, r, i, a) {
  (kc.subVectors(e, n).addScalar(0.5).multiply(r),
    i === void 0
      ? Ac.copy(kc)
      : ((Ac.x = a * kc.x - i * kc.y), (Ac.y = i * kc.x + a * kc.y)),
    e.copy(t),
    (e.x += Ac.x),
    (e.y += Ac.y),
    e.applyMatrix4(jc));
}
var Bc = new V(),
  Vc = new V(),
  Hc = class extends U {
    constructor() {
      (super(),
        (this._currentLevel = 0),
        (this.type = `LOD`),
        Object.defineProperties(this, {
          levels: { enumerable: !0, value: [] },
          isLOD: { value: !0 },
        }),
        (this.autoUpdate = !0));
    }
    copy(e) {
      super.copy(e, !1);
      let t = e.levels;
      for (let e = 0, n = t.length; e < n; e++) {
        let n = t[e];
        this.addLevel(n.object.clone(), n.distance);
      }
      return ((this.autoUpdate = e.autoUpdate), this);
    }
    addLevel(e, t = 0) {
      t = Math.abs(t);
      let n = this.levels,
        r;
      for (r = 0; r < n.length && !(t < n[r].distance); r++);
      return (n.splice(r, 0, { distance: t, object: e }), this.add(e), this);
    }
    getCurrentLevel() {
      return this._currentLevel;
    }
    getObjectForDistance(e) {
      let t = this.levels;
      if (t.length > 0) {
        let n, r;
        for (n = 1, r = t.length; n < r && !(e < t[n].distance); n++);
        return t[n - 1].object;
      }
      return null;
    }
    raycast(e, t) {
      if (this.levels.length > 0) {
        Bc.setFromMatrixPosition(this.matrixWorld);
        let n = e.ray.origin.distanceTo(Bc);
        this.getObjectForDistance(n).raycast(e, t);
      }
    }
    update(e) {
      let t = this.levels;
      if (t.length > 1) {
        (Bc.setFromMatrixPosition(e.matrixWorld),
          Vc.setFromMatrixPosition(this.matrixWorld));
        let n = Bc.distanceTo(Vc) / e.zoom;
        t[0].object.visible = !0;
        let r, i;
        for (r = 1, i = t.length; r < i && n >= t[r].distance; r++)
          ((t[r - 1].object.visible = !1), (t[r].object.visible = !0));
        for (this._currentLevel = r - 1; r < i; r++) t[r].object.visible = !1;
      }
    }
    toJSON(e) {
      let t = super.toJSON(e);
      (this.autoUpdate === !1 && (t.object.autoUpdate = !1),
        (t.object.levels = []));
      let n = this.levels;
      for (let e = 0, r = n.length; e < r; e++) {
        let r = n[e];
        t.object.levels.push({ object: r.object.uuid, distance: r.distance });
      }
      return t;
    }
  },
  Uc = new V(),
  Wc = new B(),
  Gc = new B(),
  Kc = new V(),
  qc = new H(),
  Jc = class extends Wi {
    constructor(e, t) {
      (super(e, t),
        (this.type = `SkinnedMesh`),
        (this.bindMode = `attached`),
        (this.bindMatrix = new H()),
        (this.bindMatrixInverse = new H()));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.bindMode = e.bindMode),
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        (this.skeleton = e.skeleton),
        this
      );
    }
    bind(e, t) {
      ((this.skeleton = e),
        t === void 0 &&
          (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          (t = this.matrixWorld)),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert());
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      let e = new B(),
        t = this.geometry.attributes.skinWeight;
      for (let n = 0, r = t.count; n < r; n++) {
        ((e.x = t.getX(n)),
          (e.y = t.getY(n)),
          (e.z = t.getZ(n)),
          (e.w = t.getW(n)));
        let r = 1 / e.manhattanLength();
        (r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r),
          t.setXYZW(n, e.x, e.y, e.z, e.w));
      }
    }
    updateMatrixWorld(e) {
      (super.updateMatrixWorld(e),
        this.bindMode === `attached`
          ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
          : this.bindMode === `detached`
            ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
            : console.warn(
                `THREE.SkinnedMesh: Unrecognized bindMode: ` + this.bindMode,
              ));
    }
    boneTransform(e, t) {
      let n = this.skeleton,
        r = this.geometry;
      (Wc.fromBufferAttribute(r.attributes.skinIndex, e),
        Gc.fromBufferAttribute(r.attributes.skinWeight, e),
        Uc.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0));
      for (let e = 0; e < 4; e++) {
        let r = Gc.getComponent(e);
        if (r !== 0) {
          let i = Wc.getComponent(e);
          (qc.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
            t.addScaledVector(Kc.copy(Uc).applyMatrix4(qc), r));
        }
      }
      return t.applyMatrix4(this.bindMatrixInverse);
    }
  };
Jc.prototype.isSkinnedMesh = !0;
var Yc = class extends U {
  constructor() {
    (super(), (this.type = `Bone`));
  }
};
Yc.prototype.isBone = !0;
var Xc = class extends Rn {
  constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = M, l = M, u, d) {
    (super(null, a, o, s, c, l, r, i, u, d),
      (this.image = { data: e, width: t, height: n }),
      (this.magFilter = c),
      (this.minFilter = l),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0));
  }
};
Xc.prototype.isDataTexture = !0;
var Zc = new H(),
  Qc = new H(),
  $c = class e {
    constructor(e = [], t = []) {
      ((this.uuid = cn()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        (this.boneTextureSize = 0),
        (this.frame = -1),
        this.init());
    }
    init() {
      let e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        (console.warn(
          `THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`,
        ),
          (this.boneInverses = []));
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new H());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = new H();
        (this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t));
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      let e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        r = this.boneTexture;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r] ? e[r].matrixWorld : Qc;
        (Zc.multiplyMatrices(i, t[r]), Zc.toArray(n, r * 16));
      }
      r !== null && (r.needsUpdate = !0);
    }
    clone() {
      return new e(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      ((e = Tn(e)), (e = Math.max(e, 4)));
      let t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      let n = new Xc(t, e, e, ye, R);
      return (
        (this.boneMatrices = t),
        (this.boneTexture = n),
        (this.boneTextureSize = e),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        let n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      this.boneTexture !== null &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, r = e.bones.length; n < r; n++) {
        let r = e.bones[n],
          i = t[r];
        (i === void 0 &&
          (console.warn(`THREE.Skeleton: No bone found with UUID:`, r),
          (i = new Yc())),
          this.bones.push(i),
          this.boneInverses.push(new H().fromArray(e.boneInverses[n])));
      }
      return (this.init(), this);
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.5,
          type: `Skeleton`,
          generator: `Skeleton.toJSON`,
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      let t = this.bones,
        n = this.boneInverses;
      for (let r = 0, i = t.length; r < i; r++) {
        let i = t[r];
        e.bones.push(i.uuid);
        let a = n[r];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  },
  el = class extends K {
    constructor(e, t, n, r = 1) {
      (typeof n == `number` &&
        ((r = n),
        (n = !1),
        console.error(
          `THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.`,
        )),
        super(e, t, n),
        (this.meshPerAttribute = r));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.meshPerAttribute = e.meshPerAttribute),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.meshPerAttribute = this.meshPerAttribute),
        (e.isInstancedBufferAttribute = !0),
        e
      );
    }
  };
el.prototype.isInstancedBufferAttribute = !0;
var tl = new H(),
  nl = new H(),
  rl = [],
  il = new Wi(),
  al = class extends Wi {
    constructor(e, t, n) {
      (super(e, t),
        (this.instanceMatrix = new el(new Float32Array(n * 16), 16)),
        (this.instanceColor = null),
        (this.count = n),
        (this.frustumCulled = !1));
    }
    copy(e) {
      return (
        super.copy(e),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.instanceColor !== null &&
          (this.instanceColor = e.instanceColor.clone()),
        (this.count = e.count),
        this
      );
    }
    getColorAt(e, t) {
      t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
      t.fromArray(this.instanceMatrix.array, e * 16);
    }
    raycast(e, t) {
      let n = this.matrixWorld,
        r = this.count;
      if (
        ((il.geometry = this.geometry),
        (il.material = this.material),
        il.material !== void 0)
      )
        for (let i = 0; i < r; i++) {
          (this.getMatrixAt(i, tl),
            nl.multiplyMatrices(n, tl),
            (il.matrixWorld = nl),
            il.raycast(e, rl));
          for (let e = 0, n = rl.length; e < n; e++) {
            let n = rl[e];
            ((n.instanceId = i), (n.object = this), t.push(n));
          }
          rl.length = 0;
        }
    }
    setColorAt(e, t) {
      (this.instanceColor === null &&
        (this.instanceColor = new el(
          new Float32Array(this.instanceMatrix.count * 3),
          3,
        )),
        t.toArray(this.instanceColor.array, e * 3));
    }
    setMatrixAt(e, t) {
      t.toArray(this.instanceMatrix.array, e * 16);
    }
    updateMorphTargets() {}
    dispose() {
      this.dispatchEvent({ type: `dispose` });
    }
  };
al.prototype.isInstancedMesh = !0;
var ol = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `LineBasicMaterial`),
      (this.color = new W(16777215)),
      (this.linewidth = 1),
      (this.linecap = `round`),
      (this.linejoin = `round`),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      this
    );
  }
};
ol.prototype.isLineBasicMaterial = !0;
var sl = new V(),
  cl = new V(),
  ll = new H(),
  ul = new yr(),
  dl = new dr(),
  fl = class extends U {
    constructor(e = new J(), t = new ol()) {
      (super(),
        (this.type = `Line`),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets());
    }
    copy(e) {
      return (
        super.copy(e),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.isBufferGeometry)
        if (e.index === null) {
          let t = e.attributes.position,
            n = [0];
          for (let e = 1, r = t.count; e < r; e++)
            (sl.fromBufferAttribute(t, e - 1),
              cl.fromBufferAttribute(t, e),
              (n[e] = n[e - 1]),
              (n[e] += sl.distanceTo(cl)));
          e.setAttribute(`lineDistance`, new q(n, 1));
        } else
          console.warn(
            `THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
          );
      else
        e.isGeometry &&
          console.error(
            `THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
      return this;
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Line.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        dl.copy(n.boundingSphere),
        dl.applyMatrix4(r),
        (dl.radius += i),
        e.ray.intersectsSphere(dl) === !1)
      )
        return;
      (ll.copy(r).invert(), ul.copy(e.ray).applyMatrix4(ll));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o,
        c = new V(),
        l = new V(),
        u = new V(),
        d = new V(),
        f = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        let r = n.index,
          i = n.attributes.position;
        if (r !== null) {
          let n = Math.max(0, a.start),
            o = Math.min(r.count, a.start + a.count);
          for (let a = n, p = o - 1; a < p; a += f) {
            let n = r.getX(a),
              o = r.getX(a + 1);
            if (
              (c.fromBufferAttribute(i, n),
              l.fromBufferAttribute(i, o),
              ul.distanceSqToSegment(c, l, d, u) > s)
            )
              continue;
            d.applyMatrix4(this.matrixWorld);
            let f = e.ray.origin.distanceTo(d);
            f < e.near ||
              f > e.far ||
              t.push({
                distance: f,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: a,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        } else {
          let n = Math.max(0, a.start),
            r = Math.min(i.count, a.start + a.count);
          for (let a = n, o = r - 1; a < o; a += f) {
            if (
              (c.fromBufferAttribute(i, a),
              l.fromBufferAttribute(i, a + 1),
              ul.distanceSqToSegment(c, l, d, u) > s)
            )
              continue;
            d.applyMatrix4(this.matrixWorld);
            let n = e.ray.origin.distanceTo(d);
            n < e.near ||
              n > e.far ||
              t.push({
                distance: n,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: a,
                face: null,
                faceIndex: null,
                object: this,
              });
          }
        }
      } else
        n.isGeometry &&
          console.error(
            `THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
    }
    updateMorphTargets() {
      let e = this.geometry;
      if (e.isBufferGeometry) {
        let t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          let e = t[n[0]];
          if (e !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let t = 0, n = e.length; t < n; t++) {
              let n = e[t].name || String(t);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t));
            }
          }
        }
      } else {
        let t = e.morphTargets;
        t !== void 0 &&
          t.length > 0 &&
          console.error(
            `THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
      }
    }
  };
fl.prototype.isLine = !0;
var pl = new V(),
  ml = new V(),
  hl = class extends fl {
    constructor(e, t) {
      (super(e, t), (this.type = `LineSegments`));
    }
    computeLineDistances() {
      let e = this.geometry;
      if (e.isBufferGeometry)
        if (e.index === null) {
          let t = e.attributes.position,
            n = [];
          for (let e = 0, r = t.count; e < r; e += 2)
            (pl.fromBufferAttribute(t, e),
              ml.fromBufferAttribute(t, e + 1),
              (n[e] = e === 0 ? 0 : n[e - 1]),
              (n[e + 1] = n[e] + pl.distanceTo(ml)));
          e.setAttribute(`lineDistance`, new q(n, 1));
        } else
          console.warn(
            `THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`,
          );
      else
        e.isGeometry &&
          console.error(
            `THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
      return this;
    }
  };
hl.prototype.isLineSegments = !0;
var gl = class extends fl {
  constructor(e, t) {
    (super(e, t), (this.type = `LineLoop`));
  }
};
gl.prototype.isLineLoop = !0;
var _l = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `PointsMaterial`),
      (this.color = new W(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
};
_l.prototype.isPointsMaterial = !0;
var vl = new H(),
  yl = new yr(),
  bl = new dr(),
  xl = new V(),
  Sl = class extends U {
    constructor(e = new J(), t = new _l()) {
      (super(),
        (this.type = `Points`),
        (this.geometry = e),
        (this.material = t),
        this.updateMorphTargets());
    }
    copy(e) {
      return (
        super.copy(e),
        (this.material = e.material),
        (this.geometry = e.geometry),
        this
      );
    }
    raycast(e, t) {
      let n = this.geometry,
        r = this.matrixWorld,
        i = e.params.Points.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        bl.copy(n.boundingSphere),
        bl.applyMatrix4(r),
        (bl.radius += i),
        e.ray.intersectsSphere(bl) === !1)
      )
        return;
      (vl.copy(r).invert(), yl.copy(e.ray).applyMatrix4(vl));
      let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        s = o * o;
      if (n.isBufferGeometry) {
        let i = n.index,
          o = n.attributes.position;
        if (i !== null) {
          let n = Math.max(0, a.start),
            c = Math.min(i.count, a.start + a.count);
          for (let a = n, l = c; a < l; a++) {
            let n = i.getX(a);
            (xl.fromBufferAttribute(o, n), Cl(xl, n, s, r, e, t, this));
          }
        } else {
          let n = Math.max(0, a.start),
            i = Math.min(o.count, a.start + a.count);
          for (let a = n, c = i; a < c; a++)
            (xl.fromBufferAttribute(o, a), Cl(xl, a, s, r, e, t, this));
        }
      } else
        console.error(
          `THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`,
        );
    }
    updateMorphTargets() {
      let e = this.geometry;
      if (e.isBufferGeometry) {
        let t = e.morphAttributes,
          n = Object.keys(t);
        if (n.length > 0) {
          let e = t[n[0]];
          if (e !== void 0) {
            ((this.morphTargetInfluences = []),
              (this.morphTargetDictionary = {}));
            for (let t = 0, n = e.length; t < n; t++) {
              let n = e[t].name || String(t);
              (this.morphTargetInfluences.push(0),
                (this.morphTargetDictionary[n] = t));
            }
          }
        }
      } else {
        let t = e.morphTargets;
        t !== void 0 &&
          t.length > 0 &&
          console.error(
            `THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`,
          );
      }
    }
  };
Sl.prototype.isPoints = !0;
function Cl(e, t, n, r, i, a, o) {
  let s = yl.distanceSqToPoint(e);
  if (s < n) {
    let n = new V();
    (yl.closestPointToPoint(e, n), n.applyMatrix4(r));
    let c = i.ray.origin.distanceTo(n);
    if (c < i.near || c > i.far) return;
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(s),
      point: n,
      index: t,
      face: null,
      object: o,
    });
  }
}
var wl = class extends Rn {
  constructor(e, t, n, r, i, a, o, s, c) {
    (super(e, t, n, r, i, a, o, s, c),
      (this.format = o === void 0 ? ve : o),
      (this.minFilter = a === void 0 ? P : a),
      (this.magFilter = i === void 0 ? P : i),
      (this.generateMipmaps = !1));
    let l = this;
    function u() {
      ((l.needsUpdate = !0), e.requestVideoFrameCallback(u));
    }
    `requestVideoFrameCallback` in e && e.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    let e = this.image;
    !(`requestVideoFrameCallback` in e) &&
      e.readyState >= e.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
};
wl.prototype.isVideoTexture = !0;
var Tl = class extends Rn {
  constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
    (super(null, a, o, s, c, l, r, i, u, d),
      (this.image = { width: t, height: n }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1));
  }
};
Tl.prototype.isCompressedTexture = !0;
var El = class extends Rn {
  constructor(e, t, n, r, i, a, o, s, c) {
    (super(e, t, n, r, i, a, o, s, c), (this.needsUpdate = !0));
  }
};
El.prototype.isCanvasTexture = !0;
var Dl = class extends Rn {
  constructor(e, t, n, r, i, a, o, s, c, l) {
    if (((l = l === void 0 ? Ce : l), l !== 1026 && l !== 1027))
      throw Error(
        `DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`,
      );
    (n === void 0 && l === 1026 && (n = de),
      n === void 0 && l === 1027 && (n = ge),
      super(null, r, i, a, o, s, l, n, c),
      (this.image = { width: e, height: t }),
      (this.magFilter = o === void 0 ? M : o),
      (this.minFilter = s === void 0 ? M : s),
      (this.flipY = !1),
      (this.generateMipmaps = !1));
  }
};
Dl.prototype.isDepthTexture = !0;
var Ol = class e extends J {
    constructor(e = 1, t = 8, n = 0, r = Math.PI * 2) {
      (super(),
        (this.type = `CircleGeometry`),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r,
        }),
        (t = Math.max(3, t)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = new V(),
        l = new z();
      (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5));
      for (let i = 0, u = 3; i <= t; i++, u += 3) {
        let d = n + (i / t) * r;
        ((c.x = e * Math.cos(d)),
          (c.y = e * Math.sin(d)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (l.x = (a[u] / e + 1) / 2),
          (l.y = (a[u + 1] / e + 1) / 2),
          s.push(l.x, l.y));
      }
      for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
      (this.setIndex(i),
        this.setAttribute(`position`, new q(a, 3)),
        this.setAttribute(`normal`, new q(o, 3)),
        this.setAttribute(`uv`, new q(s, 2)));
    }
    static fromJSON(t) {
      return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  kl = class e extends J {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 8,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new q(u, 3)),
        this.setAttribute(`normal`, new q(d, 3)),
        this.setAttribute(`uv`, new q(f, 2)));
      function _() {
        let a = new V(),
          _ = new V(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let e = 0; e < r; e++)
          for (let t = 0; t < i; t++) {
            let n = m[t][e],
              r = m[t + 1][e],
              i = m[t + 1][e + 1],
              a = m[t][e + 1];
            (l.push(n, r, a), l.push(r, i, a), (v += 6));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new z(),
          m = new V(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Al = class e extends kl {
    constructor(e = 1, t = 1, n = 8, r = 1, i = !1, a = 0, o = Math.PI * 2) {
      (super(0, e, t, n, r, i, a, o),
        (this.type = `ConeGeometry`),
        (this.parameters = {
          radius: e,
          height: t,
          radialSegments: n,
          heightSegments: r,
          openEnded: i,
          thetaStart: a,
          thetaLength: o,
        }));
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  jl = class e extends J {
    constructor(e = [], t = [], n = 1, r = 0) {
      (super(),
        (this.type = `PolyhedronGeometry`),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: r }));
      let i = [],
        a = [];
      (o(r),
        c(n),
        l(),
        this.setAttribute(`position`, new q(i, 3)),
        this.setAttribute(`normal`, new q(i.slice(), 3)),
        this.setAttribute(`uv`, new q(a, 2)),
        r === 0 ? this.computeVertexNormals() : this.normalizeNormals());
      function o(e) {
        let n = new V(),
          r = new V(),
          i = new V();
        for (let a = 0; a < t.length; a += 3)
          (f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e));
      }
      function s(e, t, n, r) {
        let i = r + 1,
          a = [];
        for (let r = 0; r <= i; r++) {
          a[r] = [];
          let o = e.clone().lerp(n, r / i),
            s = t.clone().lerp(n, r / i),
            c = i - r;
          for (let e = 0; e <= c; e++)
            e === 0 && r === i
              ? (a[r][e] = o)
              : (a[r][e] = o.clone().lerp(s, e / c));
        }
        for (let e = 0; e < i; e++)
          for (let t = 0; t < 2 * (i - e) - 1; t++) {
            let n = Math.floor(t / 2);
            t % 2 == 0
              ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n]))
              : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
          }
      }
      function c(e) {
        let t = new V();
        for (let n = 0; n < i.length; n += 3)
          ((t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z));
      }
      function l() {
        let e = new V();
        for (let t = 0; t < i.length; t += 3) {
          ((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]));
          let n = h(e) / 2 / Math.PI + 0.5,
            r = g(e) / Math.PI + 0.5;
          a.push(n, 1 - r);
        }
        (p(), u());
      }
      function u() {
        for (let e = 0; e < a.length; e += 6) {
          let t = a[e + 0],
            n = a[e + 2],
            r = a[e + 4];
          Math.max(t, n, r) > 0.9 &&
            Math.min(t, n, r) < 0.1 &&
            (t < 0.2 && (a[e + 0] += 1),
            n < 0.2 && (a[e + 2] += 1),
            r < 0.2 && (a[e + 4] += 1));
        }
      }
      function d(e) {
        i.push(e.x, e.y, e.z);
      }
      function f(t, n) {
        let r = t * 3;
        ((n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]));
      }
      function p() {
        let e = new V(),
          t = new V(),
          n = new V(),
          r = new V(),
          o = new z(),
          s = new z(),
          c = new z();
        for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
          (e.set(i[l + 0], i[l + 1], i[l + 2]),
            t.set(i[l + 3], i[l + 4], i[l + 5]),
            n.set(i[l + 6], i[l + 7], i[l + 8]),
            o.set(a[u + 0], a[u + 1]),
            s.set(a[u + 2], a[u + 3]),
            c.set(a[u + 4], a[u + 5]),
            r.copy(e).add(t).add(n).divideScalar(3));
          let d = h(r);
          (m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d));
        }
      }
      function m(e, t, n, r) {
        (r < 0 && e.x === 1 && (a[t] = e.x - 1),
          n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + 0.5));
      }
      function h(e) {
        return Math.atan2(e.z, -e.x);
      }
      function g(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
      }
    }
    static fromJSON(t) {
      return new e(t.vertices, t.indices, t.radius, t.details);
    }
  },
  Ml = class e extends jl {
    constructor(e = 1, t = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        r = 1 / n,
        i = [
          -1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          1,
          1,
          1,
          0,
          -r,
          -n,
          0,
          -r,
          n,
          0,
          r,
          -n,
          0,
          r,
          n,
          -r,
          -n,
          0,
          -r,
          n,
          0,
          r,
          -n,
          0,
          r,
          n,
          0,
          -n,
          0,
          -r,
          n,
          0,
          -r,
          -n,
          0,
          r,
          n,
          0,
          r,
        ];
      (super(
        i,
        [
          3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4,
          8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1,
          18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2,
          3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8,
          11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1,
          12, 14, 1, 14, 5, 1, 5, 9,
        ],
        e,
        t,
      ),
        (this.type = `DodecahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  Nl = new V(),
  Pl = new V(),
  Fl = new V(),
  Il = new ei(),
  Ll = class extends J {
    constructor(e = null, t = 1) {
      if (
        (super(),
        (this.type = `EdgesGeometry`),
        (this.parameters = { geometry: e, thresholdAngle: t }),
        e !== null)
      ) {
        let n = 10 ** 4,
          r = Math.cos(rn * t),
          i = e.getIndex(),
          a = e.getAttribute(`position`),
          o = i ? i.count : a.count,
          s = [0, 0, 0],
          c = [`a`, `b`, `c`],
          l = [, , ,],
          u = {},
          d = [];
        for (let e = 0; e < o; e += 3) {
          i
            ? ((s[0] = i.getX(e)),
              (s[1] = i.getX(e + 1)),
              (s[2] = i.getX(e + 2)))
            : ((s[0] = e), (s[1] = e + 1), (s[2] = e + 2));
          let { a: t, b: o, c: f } = Il;
          if (
            (t.fromBufferAttribute(a, s[0]),
            o.fromBufferAttribute(a, s[1]),
            f.fromBufferAttribute(a, s[2]),
            Il.getNormal(Fl),
            (l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`),
            (l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`),
            (l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`),
            !(l[0] === l[1] || l[1] === l[2] || l[2] === l[0]))
          )
            for (let e = 0; e < 3; e++) {
              let t = (e + 1) % 3,
                n = l[e],
                i = l[t],
                a = Il[c[e]],
                o = Il[c[t]],
                f = `${n}_${i}`,
                p = `${i}_${n}`;
              p in u && u[p]
                ? (Fl.dot(u[p].normal) <= r &&
                    (d.push(a.x, a.y, a.z), d.push(o.x, o.y, o.z)),
                  (u[p] = null))
                : f in u ||
                  (u[f] = { index0: s[e], index1: s[t], normal: Fl.clone() });
            }
        }
        for (let e in u)
          if (u[e]) {
            let { index0: t, index1: n } = u[e];
            (Nl.fromBufferAttribute(a, t),
              Pl.fromBufferAttribute(a, n),
              d.push(Nl.x, Nl.y, Nl.z),
              d.push(Pl.x, Pl.y, Pl.z));
          }
        this.setAttribute(`position`, new q(d, 3));
      }
    }
  },
  Rl = class {
    constructor() {
      ((this.type = `Curve`), (this.arcLengthDivisions = 200));
    }
    getPoint() {
      return (console.warn(`THREE.Curve: .getPoint() not implemented.`), null);
    }
    getPointAt(e, t) {
      let n = this.getUtoTmapping(e);
      return this.getPoint(n, t);
    }
    getPoints(e = 5) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return t;
    }
    getSpacedPoints(e = 5) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
      return t;
    }
    getLength() {
      let e = this.getLengths();
      return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === e + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      let t = [],
        n,
        r = this.getPoint(0),
        i = 0;
      t.push(0);
      for (let a = 1; a <= e; a++)
        ((n = this.getPoint(a / e)),
          (i += n.distanceTo(r)),
          t.push(i),
          (r = n));
      return ((this.cacheArcLengths = t), t);
    }
    updateArcLengths() {
      ((this.needsUpdate = !0), this.getLengths());
    }
    getUtoTmapping(e, t) {
      let n = this.getLengths(),
        r = 0,
        i = n.length,
        a;
      a = t || e * n[i - 1];
      let o = 0,
        s = i - 1,
        c;
      for (; o <= s; )
        if (((r = Math.floor(o + (s - o) / 2)), (c = n[r] - a), c < 0))
          o = r + 1;
        else if (c > 0) s = r - 1;
        else {
          s = r;
          break;
        }
      if (((r = s), n[r] === a)) return r / (i - 1);
      let l = n[r],
        u = n[r + 1] - l,
        d = (a - l) / u;
      return (r + d) / (i - 1);
    }
    getTangent(e, t) {
      let n = 1e-4,
        r = e - n,
        i = e + n;
      (r < 0 && (r = 0), i > 1 && (i = 1));
      let a = this.getPoint(r),
        o = this.getPoint(i),
        s = t || (a.isVector2 ? new z() : new V());
      return (s.copy(o).sub(a).normalize(), s);
    }
    getTangentAt(e, t) {
      let n = this.getUtoTmapping(e);
      return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t) {
      let n = new V(),
        r = [],
        i = [],
        a = [],
        o = new V(),
        s = new H();
      for (let t = 0; t <= e; t++) {
        let n = t / e;
        r[t] = this.getTangentAt(n, new V());
      }
      ((i[0] = new V()), (a[0] = new V()));
      let c = Number.MAX_VALUE,
        l = Math.abs(r[0].x),
        u = Math.abs(r[0].y),
        d = Math.abs(r[0].z);
      (l <= c && ((c = l), n.set(1, 0, 0)),
        u <= c && ((c = u), n.set(0, 1, 0)),
        d <= c && n.set(0, 0, 1),
        o.crossVectors(r[0], n).normalize(),
        i[0].crossVectors(r[0], o),
        a[0].crossVectors(r[0], i[0]));
      for (let t = 1; t <= e; t++) {
        if (
          ((i[t] = i[t - 1].clone()),
          (a[t] = a[t - 1].clone()),
          o.crossVectors(r[t - 1], r[t]),
          o.length() > 2 ** -52)
        ) {
          o.normalize();
          let e = Math.acos(ln(r[t - 1].dot(r[t]), -1, 1));
          i[t].applyMatrix4(s.makeRotationAxis(o, e));
        }
        a[t].crossVectors(r[t], i[t]);
      }
      if (t === !0) {
        let t = Math.acos(ln(i[0].dot(i[e]), -1, 1));
        ((t /= e), r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t));
        for (let n = 1; n <= e; n++)
          (i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)),
            a[n].crossVectors(r[n], i[n]));
      }
      return { tangents: r, normals: i, binormals: a };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return ((this.arcLengthDivisions = e.arcLengthDivisions), this);
    }
    toJSON() {
      let e = {
        metadata: { version: 4.5, type: `Curve`, generator: `Curve.toJSON` },
      };
      return (
        (e.arcLengthDivisions = this.arcLengthDivisions),
        (e.type = this.type),
        e
      );
    }
    fromJSON(e) {
      return ((this.arcLengthDivisions = e.arcLengthDivisions), this);
    }
  },
  zl = class extends Rl {
    constructor(
      e = 0,
      t = 0,
      n = 1,
      r = 1,
      i = 0,
      a = Math.PI * 2,
      o = !1,
      s = 0,
    ) {
      (super(),
        (this.type = `EllipseCurve`),
        (this.aX = e),
        (this.aY = t),
        (this.xRadius = n),
        (this.yRadius = r),
        (this.aStartAngle = i),
        (this.aEndAngle = a),
        (this.aClockwise = o),
        (this.aRotation = s));
    }
    getPoint(e, t) {
      let n = t || new z(),
        r = Math.PI * 2,
        i = this.aEndAngle - this.aStartAngle,
        a = Math.abs(i) < 2 ** -52;
      for (; i < 0; ) i += r;
      for (; i > r; ) i -= r;
      (i < 2 ** -52 && (i = a ? 0 : r),
        this.aClockwise === !0 && !a && (i === r ? (i = -r) : (i -= r)));
      let o = this.aStartAngle + e * i,
        s = this.aX + this.xRadius * Math.cos(o),
        c = this.aY + this.yRadius * Math.sin(o);
      if (this.aRotation !== 0) {
        let e = Math.cos(this.aRotation),
          t = Math.sin(this.aRotation),
          n = s - this.aX,
          r = c - this.aY;
        ((s = n * e - r * t + this.aX), (c = n * t + r * e + this.aY));
      }
      return n.set(s, c);
    }
    copy(e) {
      return (
        super.copy(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.aX = this.aX),
        (e.aY = this.aY),
        (e.xRadius = this.xRadius),
        (e.yRadius = this.yRadius),
        (e.aStartAngle = this.aStartAngle),
        (e.aEndAngle = this.aEndAngle),
        (e.aClockwise = this.aClockwise),
        (e.aRotation = this.aRotation),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        (this.aX = e.aX),
        (this.aY = e.aY),
        (this.xRadius = e.xRadius),
        (this.yRadius = e.yRadius),
        (this.aStartAngle = e.aStartAngle),
        (this.aEndAngle = e.aEndAngle),
        (this.aClockwise = e.aClockwise),
        (this.aRotation = e.aRotation),
        this
      );
    }
  };
zl.prototype.isEllipseCurve = !0;
var Bl = class extends zl {
  constructor(e, t, n, r, i, a) {
    (super(e, t, n, n, r, i, a), (this.type = `ArcCurve`));
  }
};
Bl.prototype.isArcCurve = !0;
function Vl() {
  let e = 0,
    t = 0,
    n = 0,
    r = 0;
  function i(i, a, o, s) {
    ((e = i),
      (t = o),
      (n = -3 * i + 3 * a - 2 * o - s),
      (r = 2 * i - 2 * a + o + s));
  }
  return {
    initCatmullRom: function (e, t, n, r, a) {
      i(t, n, a * (n - e), a * (r - t));
    },
    initNonuniformCatmullRom: function (e, t, n, r, a, o, s) {
      let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
        l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
      ((c *= o), (l *= o), i(t, n, c, l));
    },
    calc: function (i) {
      let a = i * i,
        o = a * i;
      return e + t * i + n * a + r * o;
    },
  };
}
var Hl = new V(),
  Ul = new Vl(),
  Wl = new Vl(),
  Gl = new Vl(),
  Kl = class extends Rl {
    constructor(e = [], t = !1, n = `centripetal`, r = 0.5) {
      (super(),
        (this.type = `CatmullRomCurve3`),
        (this.points = e),
        (this.closed = t),
        (this.curveType = n),
        (this.tension = r));
    }
    getPoint(e, t = new V()) {
      let n = t,
        r = this.points,
        i = r.length,
        a = (i - +!this.closed) * e,
        o = Math.floor(a),
        s = a - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i)
        : s === 0 && o === i - 1 && ((o = i - 2), (s = 1));
      let c, l;
      this.closed || o > 0
        ? (c = r[(o - 1) % i])
        : (Hl.subVectors(r[0], r[1]).add(r[0]), (c = Hl));
      let u = r[o % i],
        d = r[(o + 1) % i];
      if (
        (this.closed || o + 2 < i
          ? (l = r[(o + 2) % i])
          : (Hl.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), (l = Hl)),
        this.curveType === `centripetal` || this.curveType === `chordal`)
      ) {
        let e = this.curveType === `chordal` ? 0.5 : 0.25,
          t = c.distanceToSquared(u) ** +e,
          n = u.distanceToSquared(d) ** +e,
          r = d.distanceToSquared(l) ** +e;
        (n < 1e-4 && (n = 1),
          t < 1e-4 && (t = n),
          r < 1e-4 && (r = n),
          Ul.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r),
          Wl.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r),
          Gl.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r));
      } else
        this.curveType === `catmullrom` &&
          (Ul.initCatmullRom(c.x, u.x, d.x, l.x, this.tension),
          Wl.initCatmullRom(c.y, u.y, d.y, l.y, this.tension),
          Gl.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
      return (n.set(Ul.calc(s), Wl.calc(s), Gl.calc(s)), n);
    }
    copy(e) {
      (super.copy(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(n.clone());
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        let n = this.points[t];
        e.points.push(n.toArray());
      }
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.points = []));
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(new V().fromArray(n));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
  };
Kl.prototype.isCatmullRomCurve3 = !0;
function ql(e, t, n, r, i) {
  let a = (r - t) * 0.5,
    o = (i - n) * 0.5,
    s = e * e,
    c = e * s;
  return (
    (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
  );
}
function Jl(e, t) {
  let n = 1 - e;
  return n * n * t;
}
function Yl(e, t) {
  return 2 * (1 - e) * e * t;
}
function Xl(e, t) {
  return e * e * t;
}
function Zl(e, t, n, r) {
  return Jl(e, t) + Yl(e, n) + Xl(e, r);
}
function Ql(e, t) {
  let n = 1 - e;
  return n * n * n * t;
}
function $l(e, t) {
  let n = 1 - e;
  return 3 * n * n * e * t;
}
function eu(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function tu(e, t) {
  return e * e * e * t;
}
function nu(e, t, n, r, i) {
  return Ql(e, t) + $l(e, n) + eu(e, r) + tu(e, i);
}
var ru = class extends Rl {
  constructor(e = new z(), t = new z(), n = new z(), r = new z()) {
    (super(),
      (this.type = `CubicBezierCurve`),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = r));
  }
  getPoint(e, t = new z()) {
    let n = t,
      r = this.v0,
      i = this.v1,
      a = this.v2,
      o = this.v3;
    return (n.set(nu(e, r.x, i.x, a.x, o.x), nu(e, r.y, i.y, a.y, o.y)), n);
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
};
ru.prototype.isCubicBezierCurve = !0;
var iu = class extends Rl {
  constructor(e = new V(), t = new V(), n = new V(), r = new V()) {
    (super(),
      (this.type = `CubicBezierCurve3`),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = r));
  }
  getPoint(e, t = new V()) {
    let n = t,
      r = this.v0,
      i = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        nu(e, r.x, i.x, a.x, o.x),
        nu(e, r.y, i.y, a.y, o.y),
        nu(e, r.z, i.z, a.z, o.z),
      ),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
};
iu.prototype.isCubicBezierCurve3 = !0;
var au = class extends Rl {
  constructor(e = new z(), t = new z()) {
    (super(), (this.type = `LineCurve`), (this.v1 = e), (this.v2 = t));
  }
  getPoint(e, t = new z()) {
    let n = t;
    return (
      e === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
      n
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    let n = t || new z();
    return (n.copy(this.v2).sub(this.v1).normalize(), n);
  }
  copy(e) {
    return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this);
  }
  toJSON() {
    let e = super.toJSON();
    return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e);
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
};
au.prototype.isLineCurve = !0;
var ou = class extends Rl {
    constructor(e = new V(), t = new V()) {
      (super(),
        (this.type = `LineCurve3`),
        (this.isLineCurve3 = !0),
        (this.v1 = e),
        (this.v2 = t));
    }
    getPoint(e, t = new V()) {
      let n = t;
      return (
        e === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)),
        n
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    copy(e) {
      return (super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this);
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e);
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  su = class extends Rl {
    constructor(e = new z(), t = new z(), n = new z()) {
      (super(),
        (this.type = `QuadraticBezierCurve`),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n));
    }
    getPoint(e, t = new z()) {
      let n = t,
        r = this.v0,
        i = this.v1,
        a = this.v2;
      return (n.set(Zl(e, r.x, i.x, a.x), Zl(e, r.y, i.y, a.y)), n);
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  };
su.prototype.isQuadraticBezierCurve = !0;
var cu = class extends Rl {
  constructor(e = new V(), t = new V(), n = new V()) {
    (super(),
      (this.type = `QuadraticBezierCurve3`),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n));
  }
  getPoint(e, t = new V()) {
    let n = t,
      r = this.v0,
      i = this.v1,
      a = this.v2;
    return (
      n.set(Zl(e, r.x, i.x, a.x), Zl(e, r.y, i.y, a.y), Zl(e, r.z, i.z, a.z)),
      n
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
};
cu.prototype.isQuadraticBezierCurve3 = !0;
var lu = class extends Rl {
  constructor(e = []) {
    (super(), (this.type = `SplineCurve`), (this.points = e));
  }
  getPoint(e, t = new z()) {
    let n = t,
      r = this.points,
      i = (r.length - 1) * e,
      a = Math.floor(i),
      o = i - a,
      s = r[a === 0 ? a : a - 1],
      c = r[a],
      l = r[a > r.length - 2 ? r.length - 1 : a + 1],
      u = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return (n.set(ql(o, s.x, c.x, l.x, u.x), ql(o, s.y, c.y, l.y, u.y)), n);
  }
  copy(e) {
    (super.copy(e), (this.points = []));
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    (super.fromJSON(e), (this.points = []));
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(new z().fromArray(n));
    }
    return this;
  }
};
lu.prototype.isSplineCurve = !0;
var uu = Object.freeze({
    __proto__: null,
    ArcCurve: Bl,
    CatmullRomCurve3: Kl,
    CubicBezierCurve: ru,
    CubicBezierCurve3: iu,
    EllipseCurve: zl,
    LineCurve: au,
    LineCurve3: ou,
    QuadraticBezierCurve: su,
    QuadraticBezierCurve3: cu,
    SplineCurve: lu,
  }),
  du = class extends Rl {
    constructor() {
      (super(),
        (this.type = `CurvePath`),
        (this.curves = []),
        (this.autoClose = !1));
    }
    add(e) {
      this.curves.push(e);
    }
    closePath() {
      let e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
      e.equals(t) || this.curves.push(new au(t, e));
    }
    getPoint(e, t) {
      let n = e * this.getLength(),
        r = this.getCurveLengths(),
        i = 0;
      for (; i < r.length; ) {
        if (r[i] >= n) {
          let e = r[i] - n,
            a = this.curves[i],
            o = a.getLength(),
            s = o === 0 ? 0 : 1 - e / o;
          return a.getPointAt(s, t);
        }
        i++;
      }
      return null;
    }
    getLength() {
      let e = this.getCurveLengths();
      return e[e.length - 1];
    }
    updateArcLengths() {
      ((this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths());
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      let e = [],
        t = 0;
      for (let n = 0, r = this.curves.length; n < r; n++)
        ((t += this.curves[n].getLength()), e.push(t));
      return ((this.cacheLengths = e), e);
    }
    getSpacedPoints(e = 40) {
      let t = [];
      for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
      return (this.autoClose && t.push(t[0]), t);
    }
    getPoints(e = 12) {
      let t = [],
        n;
      for (let r = 0, i = this.curves; r < i.length; r++) {
        let a = i[r],
          o =
            a && a.isEllipseCurve
              ? e * 2
              : a && (a.isLineCurve || a.isLineCurve3)
                ? 1
                : a && a.isSplineCurve
                  ? e * a.points.length
                  : e,
          s = a.getPoints(o);
        for (let e = 0; e < s.length; e++) {
          let r = s[e];
          (n && n.equals(r)) || (t.push(r), (n = r));
        }
      }
      return (
        this.autoClose &&
          t.length > 1 &&
          !t[t.length - 1].equals(t[0]) &&
          t.push(t[0]),
        t
      );
    }
    copy(e) {
      (super.copy(e), (this.curves = []));
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t];
        this.curves.push(n.clone());
      }
      return ((this.autoClose = e.autoClose), this);
    }
    toJSON() {
      let e = super.toJSON();
      ((e.autoClose = this.autoClose), (e.curves = []));
      for (let t = 0, n = this.curves.length; t < n; t++) {
        let n = this.curves[t];
        e.curves.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []));
      for (let t = 0, n = e.curves.length; t < n; t++) {
        let n = e.curves[t];
        this.curves.push(new uu[n.type]().fromJSON(n));
      }
      return this;
    }
  },
  fu = class extends du {
    constructor(e) {
      (super(),
        (this.type = `Path`),
        (this.currentPoint = new z()),
        e && this.setFromPoints(e));
    }
    setFromPoints(e) {
      this.moveTo(e[0].x, e[0].y);
      for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
      return this;
    }
    moveTo(e, t) {
      return (this.currentPoint.set(e, t), this);
    }
    lineTo(e, t) {
      let n = new au(this.currentPoint.clone(), new z(e, t));
      return (this.curves.push(n), this.currentPoint.set(e, t), this);
    }
    quadraticCurveTo(e, t, n, r) {
      let i = new su(this.currentPoint.clone(), new z(e, t), new z(n, r));
      return (this.curves.push(i), this.currentPoint.set(n, r), this);
    }
    bezierCurveTo(e, t, n, r, i, a) {
      let o = new ru(
        this.currentPoint.clone(),
        new z(e, t),
        new z(n, r),
        new z(i, a),
      );
      return (this.curves.push(o), this.currentPoint.set(i, a), this);
    }
    splineThru(e) {
      let t = new lu([this.currentPoint.clone()].concat(e));
      return (
        this.curves.push(t),
        this.currentPoint.copy(e[e.length - 1]),
        this
      );
    }
    arc(e, t, n, r, i, a) {
      let o = this.currentPoint.x,
        s = this.currentPoint.y;
      return (this.absarc(e + o, t + s, n, r, i, a), this);
    }
    absarc(e, t, n, r, i, a) {
      return (this.absellipse(e, t, n, n, r, i, a), this);
    }
    ellipse(e, t, n, r, i, a, o, s) {
      let c = this.currentPoint.x,
        l = this.currentPoint.y;
      return (this.absellipse(e + c, t + l, n, r, i, a, o, s), this);
    }
    absellipse(e, t, n, r, i, a, o, s) {
      let c = new zl(e, t, n, r, i, a, o, s);
      if (this.curves.length > 0) {
        let e = c.getPoint(0);
        e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
      }
      this.curves.push(c);
      let l = c.getPoint(1);
      return (this.currentPoint.copy(l), this);
    }
    copy(e) {
      return (super.copy(e), this.currentPoint.copy(e.currentPoint), this);
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.currentPoint = this.currentPoint.toArray()), e);
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.currentPoint.fromArray(e.currentPoint),
        this
      );
    }
  },
  pu = class extends fu {
    constructor(e) {
      (super(e), (this.uuid = cn()), (this.type = `Shape`), (this.holes = []));
    }
    getPointsHoles(e) {
      let t = [];
      for (let n = 0, r = this.holes.length; n < r; n++)
        t[n] = this.holes[n].getPoints(e);
      return t;
    }
    extractPoints(e) {
      return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
    }
    copy(e) {
      (super.copy(e), (this.holes = []));
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t];
        this.holes.push(n.clone());
      }
      return this;
    }
    toJSON() {
      let e = super.toJSON();
      ((e.uuid = this.uuid), (e.holes = []));
      for (let t = 0, n = this.holes.length; t < n; t++) {
        let n = this.holes[t];
        e.holes.push(n.toJSON());
      }
      return e;
    }
    fromJSON(e) {
      (super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []));
      for (let t = 0, n = e.holes.length; t < n; t++) {
        let n = e.holes[t];
        this.holes.push(new fu().fromJSON(n));
      }
      return this;
    }
  },
  mu = {
    triangulate: function (e, t, n = 2) {
      let r = t && t.length,
        i = r ? t[0] * n : e.length,
        a = hu(e, 0, i, n, !0),
        o = [];
      if (!a || a.next === a.prev) return o;
      let s, c, l, u, d, f, p;
      if ((r && (a = Su(e, t, a, n)), e.length > 80 * n)) {
        ((s = l = e[0]), (c = u = e[1]));
        for (let t = n; t < i; t += n)
          ((d = e[t]),
            (f = e[t + 1]),
            d < s && (s = d),
            f < c && (c = f),
            d > l && (l = d),
            f > u && (u = f));
        ((p = Math.max(l - s, u - c)), (p = p === 0 ? 0 : 1 / p));
      }
      return (_u(a, o, n, s, c, p), o);
    },
  };
function hu(e, t, n, r, i) {
  let a, o;
  if (i === Gu(e, t, n, r) > 0)
    for (a = t; a < n; a += r) o = Hu(a, e[a], e[a + 1], o);
  else for (a = n - r; a >= t; a -= r) o = Hu(a, e[a], e[a + 1], o);
  return (o && Pu(o, o.next) && (Uu(o), (o = o.next)), o);
}
function gu(e, t) {
  if (!e) return e;
  t ||= e;
  let n = e,
    r;
  do
    if (
      ((r = !1), !n.steiner && (Pu(n, n.next) || Nu(n.prev, n, n.next) === 0))
    ) {
      if ((Uu(n), (n = t = n.prev), n === n.next)) break;
      r = !0;
    } else n = n.next;
  while (r || n !== t);
  return t;
}
function _u(e, t, n, r, i, a, o) {
  if (!e) return;
  !o && a && Du(e, r, i, a);
  let s = e,
    c,
    l;
  for (; e.prev !== e.next; ) {
    if (((c = e.prev), (l = e.next), a ? yu(e, r, i, a) : vu(e))) {
      (t.push(c.i / n),
        t.push(e.i / n),
        t.push(l.i / n),
        Uu(e),
        (e = l.next),
        (s = l.next));
      continue;
    }
    if (((e = l), e === s)) {
      o
        ? o === 1
          ? ((e = bu(gu(e), t, n)), _u(e, t, n, r, i, a, 2))
          : o === 2 && xu(e, t, n, r, i, a)
        : _u(gu(e), t, n, r, i, a, 1);
      break;
    }
  }
}
function vu(e) {
  let t = e.prev,
    n = e,
    r = e.next;
  if (Nu(t, n, r) >= 0) return !1;
  let i = e.next.next;
  for (; i !== e.prev; ) {
    if (
      ju(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
      Nu(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}
function yu(e, t, n, r) {
  let i = e.prev,
    a = e,
    o = e.next;
  if (Nu(i, a, o) >= 0) return !1;
  let s = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x,
    c = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y,
    l = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x,
    u = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y,
    d = ku(s, c, t, n, r),
    f = ku(l, u, t, n, r),
    p = e.prevZ,
    m = e.nextZ;
  for (; p && p.z >= d && m && m.z <= f; ) {
    if (
      (p !== e.prev &&
        p !== e.next &&
        ju(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
        Nu(p.prev, p, p.next) >= 0) ||
      ((p = p.prevZ),
      m !== e.prev &&
        m !== e.next &&
        ju(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) &&
        Nu(m.prev, m, m.next) >= 0)
    )
      return !1;
    m = m.nextZ;
  }
  for (; p && p.z >= d; ) {
    if (
      p !== e.prev &&
      p !== e.next &&
      ju(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
      Nu(p.prev, p, p.next) >= 0
    )
      return !1;
    p = p.prevZ;
  }
  for (; m && m.z <= f; ) {
    if (
      m !== e.prev &&
      m !== e.next &&
      ju(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) &&
      Nu(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.nextZ;
  }
  return !0;
}
function bu(e, t, n) {
  let r = e;
  do {
    let i = r.prev,
      a = r.next.next;
    (!Pu(i, a) &&
      Fu(i, r, r.next, a) &&
      zu(i, a) &&
      zu(a, i) &&
      (t.push(i.i / n),
      t.push(r.i / n),
      t.push(a.i / n),
      Uu(r),
      Uu(r.next),
      (r = e = a)),
      (r = r.next));
  } while (r !== e);
  return gu(r);
}
function xu(e, t, n, r, i, a) {
  let o = e;
  do {
    let e = o.next.next;
    for (; e !== o.prev; ) {
      if (o.i !== e.i && Mu(o, e)) {
        let s = Vu(o, e);
        ((o = gu(o, o.next)),
          (s = gu(s, s.next)),
          _u(o, t, n, r, i, a),
          _u(s, t, n, r, i, a));
        return;
      }
      e = e.next;
    }
    o = o.next;
  } while (o !== e);
}
function Su(e, t, n, r) {
  let i = [],
    a,
    o,
    s,
    c,
    l;
  for (a = 0, o = t.length; a < o; a++)
    ((s = t[a] * r),
      (c = a < o - 1 ? t[a + 1] * r : e.length),
      (l = hu(e, s, c, r, !1)),
      l === l.next && (l.steiner = !0),
      i.push(Au(l)));
  for (i.sort(Cu), a = 0; a < i.length; a++) (wu(i[a], n), (n = gu(n, n.next)));
  return n;
}
function Cu(e, t) {
  return e.x - t.x;
}
function wu(e, t) {
  if (((t = Tu(e, t)), t)) {
    let n = Vu(t, e);
    (gu(t, t.next), gu(n, n.next));
  }
}
function Tu(e, t) {
  let n = t,
    r = e.x,
    i = e.y,
    a = -1 / 0,
    o;
  do {
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      let e = n.x + ((i - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
      if (e <= r && e > a) {
        if (((a = e), e === r)) {
          if (i === n.y) return n;
          if (i === n.next.y) return n.next;
        }
        o = n.x < n.next.x ? n : n.next;
      }
    }
    n = n.next;
  } while (n !== t);
  if (!o) return null;
  if (r === a) return o;
  let s = o,
    c = o.x,
    l = o.y,
    u = 1 / 0,
    d;
  n = o;
  do
    (r >= n.x &&
      n.x >= c &&
      r !== n.x &&
      ju(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y) &&
      ((d = Math.abs(i - n.y) / (r - n.x)),
      zu(n, e) &&
        (d < u || (d === u && (n.x > o.x || (n.x === o.x && Eu(o, n))))) &&
        ((o = n), (u = d))),
      (n = n.next));
  while (n !== s);
  return o;
}
function Eu(e, t) {
  return Nu(e.prev, e, t.prev) < 0 && Nu(t.next, e, e.next) < 0;
}
function Du(e, t, n, r) {
  let i = e;
  do
    (i.z === null && (i.z = ku(i.x, i.y, t, n, r)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next));
  while (i !== e);
  ((i.prevZ.nextZ = null), (i.prevZ = null), Ou(i));
}
function Ou(e) {
  let t,
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l = 1;
  do {
    for (n = e, e = null, a = null, o = 0; n; ) {
      for (o++, r = n, s = 0, t = 0; t < l && (s++, (r = r.nextZ), r); t++);
      for (c = l; s > 0 || (c > 0 && r); )
        (s !== 0 && (c === 0 || !r || n.z <= r.z)
          ? ((i = n), (n = n.nextZ), s--)
          : ((i = r), (r = r.nextZ), c--),
          a ? (a.nextZ = i) : (e = i),
          (i.prevZ = a),
          (a = i));
      n = r;
    }
    ((a.nextZ = null), (l *= 2));
  } while (o > 1);
  return e;
}
function ku(e, t, n, r, i) {
  return (
    (e = 32767 * (e - n) * i),
    (t = 32767 * (t - r) * i),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    e | (t << 1)
  );
}
function Au(e) {
  let t = e,
    n = e;
  do ((t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next));
  while (t !== e);
  return n;
}
function ju(e, t, n, r, i, a, o, s) {
  return (
    (i - o) * (t - s) - (e - o) * (a - s) >= 0 &&
    (e - o) * (r - s) - (n - o) * (t - s) >= 0 &&
    (n - o) * (a - s) - (i - o) * (r - s) >= 0
  );
}
function Mu(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !Ru(e, t) &&
    ((zu(e, t) &&
      zu(t, e) &&
      Bu(e, t) &&
      (Nu(e.prev, e, t.prev) || Nu(e, t.prev, t))) ||
      (Pu(e, t) && Nu(e.prev, e, e.next) > 0 && Nu(t.prev, t, t.next) > 0))
  );
}
function Nu(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Pu(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Fu(e, t, n, r) {
  let i = Lu(Nu(e, t, n)),
    a = Lu(Nu(e, t, r)),
    o = Lu(Nu(n, r, e)),
    s = Lu(Nu(n, r, t));
  return !!(
    (i !== a && o !== s) ||
    (i === 0 && Iu(e, n, t)) ||
    (a === 0 && Iu(e, r, t)) ||
    (o === 0 && Iu(n, e, r)) ||
    (s === 0 && Iu(n, t, r))
  );
}
function Iu(e, t, n) {
  return (
    t.x <= Math.max(e.x, n.x) &&
    t.x >= Math.min(e.x, n.x) &&
    t.y <= Math.max(e.y, n.y) &&
    t.y >= Math.min(e.y, n.y)
  );
}
function Lu(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Ru(e, t) {
  let n = e;
  do {
    if (
      n.i !== e.i &&
      n.next.i !== e.i &&
      n.i !== t.i &&
      n.next.i !== t.i &&
      Fu(n, n.next, e, t)
    )
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function zu(e, t) {
  return Nu(e.prev, e, e.next) < 0
    ? Nu(e, t, e.next) >= 0 && Nu(e, e.prev, t) >= 0
    : Nu(e, t, e.prev) < 0 || Nu(e, e.next, t) < 0;
}
function Bu(e, t) {
  let n = e,
    r = !1,
    i = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2;
  do
    (n.y > a != n.next.y > a &&
      n.next.y !== n.y &&
      i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
      (r = !r),
      (n = n.next));
  while (n !== e);
  return r;
}
function Vu(e, t) {
  let n = new Wu(e.i, e.x, e.y),
    r = new Wu(t.i, t.x, t.y),
    i = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (n.next = i),
    (i.prev = n),
    (r.next = n),
    (n.prev = r),
    (a.next = r),
    (r.prev = a),
    r
  );
}
function Hu(e, t, n, r) {
  let i = new Wu(e, t, n);
  return (
    r
      ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function Uu(e) {
  ((e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ));
}
function Wu(e, t, n) {
  ((this.i = e),
    (this.x = t),
    (this.y = n),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1));
}
function Gu(e, t, n, r) {
  let i = 0;
  for (let a = t, o = n - r; a < n; a += r)
    ((i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a));
  return i;
}
var Ku = class e {
  static area(e) {
    let t = e.length,
      n = 0;
    for (let r = t - 1, i = 0; i < t; r = i++)
      n += e[r].x * e[i].y - e[i].x * e[r].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return e.area(t) < 0;
  }
  static triangulateShape(e, t) {
    let n = [],
      r = [],
      i = [];
    (qu(e), Ju(n, e));
    let a = e.length;
    t.forEach(qu);
    for (let e = 0; e < t.length; e++)
      (r.push(a), (a += t[e].length), Ju(n, t[e]));
    let o = mu.triangulate(n, r);
    for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
    return i;
  }
};
function qu(e) {
  let t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Ju(e, t) {
  for (let n = 0; n < t.length; n++) (e.push(t[n].x), e.push(t[n].y));
}
var Yu = class e extends J {
    constructor(
      e = new pu([
        new z(0.5, 0.5),
        new z(-0.5, 0.5),
        new z(-0.5, -0.5),
        new z(0.5, -0.5),
      ]),
      t = {},
    ) {
      (super(),
        (this.type = `ExtrudeGeometry`),
        (this.parameters = { shapes: e, options: t }),
        (e = Array.isArray(e) ? e : [e]));
      let n = this,
        r = [],
        i = [];
      for (let t = 0, n = e.length; t < n; t++) {
        let n = e[t];
        a(n);
      }
      (this.setAttribute(`position`, new q(r, 3)),
        this.setAttribute(`uv`, new q(i, 2)),
        this.computeVertexNormals());
      function a(e) {
        let a = [],
          o = t.curveSegments === void 0 ? 12 : t.curveSegments,
          s = t.steps === void 0 ? 1 : t.steps,
          c = t.depth === void 0 ? 1 : t.depth,
          l = t.bevelEnabled === void 0 ? !0 : t.bevelEnabled,
          u = t.bevelThickness === void 0 ? 0.2 : t.bevelThickness,
          d = t.bevelSize === void 0 ? u - 0.1 : t.bevelSize,
          f = t.bevelOffset === void 0 ? 0 : t.bevelOffset,
          p = t.bevelSegments === void 0 ? 3 : t.bevelSegments,
          m = t.extrudePath,
          h = t.UVGenerator === void 0 ? Xu : t.UVGenerator;
        t.amount !== void 0 &&
          (console.warn(
            `THREE.ExtrudeBufferGeometry: amount has been renamed to depth.`,
          ),
          (c = t.amount));
        let g,
          _ = !1,
          v,
          y,
          b,
          x;
        (m &&
          ((g = m.getSpacedPoints(s)),
          (_ = !0),
          (l = !1),
          (v = m.computeFrenetFrames(s, !1)),
          (y = new V()),
          (b = new V()),
          (x = new V())),
          l || ((p = 0), (u = 0), (d = 0), (f = 0)));
        let S = e.extractPoints(o),
          C = S.shape,
          w = S.holes;
        if (!Ku.isClockWise(C)) {
          C = C.reverse();
          for (let e = 0, t = w.length; e < t; e++) {
            let t = w[e];
            Ku.isClockWise(t) && (w[e] = t.reverse());
          }
        }
        let T = Ku.triangulateShape(C, w),
          E = C;
        for (let e = 0, t = w.length; e < t; e++) {
          let t = w[e];
          C = C.concat(t);
        }
        function D(e, t, n) {
          return (
            t || console.error(`THREE.ExtrudeGeometry: vec does not exist`),
            t.clone().multiplyScalar(n).add(e)
          );
        }
        let O = C.length,
          ee = T.length;
        function te(e, t, n) {
          let r,
            i,
            a,
            o = e.x - t.x,
            s = e.y - t.y,
            c = n.x - e.x,
            l = n.y - e.y,
            u = o * o + s * s,
            d = o * l - s * c;
          if (Math.abs(d) > 2 ** -52) {
            let d = Math.sqrt(u),
              f = Math.sqrt(c * c + l * l),
              p = t.x - s / d,
              m = t.y + o / d,
              h = n.x - l / f,
              g = n.y + c / f,
              _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
            ((r = p + o * _ - e.x), (i = m + s * _ - e.y));
            let v = r * r + i * i;
            if (v <= 2) return new z(r, i);
            a = Math.sqrt(v / 2);
          } else {
            let e = !1;
            (o > 2 ** -52
              ? c > 2 ** -52 && (e = !0)
              : o < -(2 ** -52)
                ? c < -(2 ** -52) && (e = !0)
                : Math.sign(s) === Math.sign(l) && (e = !0),
              e
                ? ((r = -s), (i = o), (a = Math.sqrt(u)))
                : ((r = o), (i = s), (a = Math.sqrt(u / 2))));
          }
          return new z(r / a, i / a);
        }
        let k = [];
        for (
          let e = 0, t = E.length, n = t - 1, r = e + 1;
          e < t;
          e++, n++, r++
        )
          (n === t && (n = 0),
            r === t && (r = 0),
            (k[e] = te(E[e], E[n], E[r])));
        let A = [],
          j,
          M = k.concat();
        for (let e = 0, t = w.length; e < t; e++) {
          let t = w[e];
          j = [];
          for (
            let e = 0, n = t.length, r = n - 1, i = e + 1;
            e < n;
            e++, r++, i++
          )
            (r === n && (r = 0),
              i === n && (i = 0),
              (j[e] = te(t[e], t[r], t[i])));
          (A.push(j), (M = M.concat(j)));
        }
        for (let e = 0; e < p; e++) {
          let t = e / p,
            n = u * Math.cos((t * Math.PI) / 2),
            r = d * Math.sin((t * Math.PI) / 2) + f;
          for (let e = 0, t = E.length; e < t; e++) {
            let t = D(E[e], k[e], r);
            P(t.x, t.y, -n);
          }
          for (let e = 0, t = w.length; e < t; e++) {
            let t = w[e];
            j = A[e];
            for (let e = 0, i = t.length; e < i; e++) {
              let i = D(t[e], j[e], r);
              P(i.x, i.y, -n);
            }
          }
        }
        let N = d + f;
        for (let e = 0; e < O; e++) {
          let t = l ? D(C[e], M[e], N) : C[e];
          _
            ? (b.copy(v.normals[0]).multiplyScalar(t.x),
              y.copy(v.binormals[0]).multiplyScalar(t.y),
              x.copy(g[0]).add(b).add(y),
              P(x.x, x.y, x.z))
            : P(t.x, t.y, 0);
        }
        for (let e = 1; e <= s; e++)
          for (let t = 0; t < O; t++) {
            let n = l ? D(C[t], M[t], N) : C[t];
            _
              ? (b.copy(v.normals[e]).multiplyScalar(n.x),
                y.copy(v.binormals[e]).multiplyScalar(n.y),
                x.copy(g[e]).add(b).add(y),
                P(x.x, x.y, x.z))
              : P(n.x, n.y, (c / s) * e);
          }
        for (let e = p - 1; e >= 0; e--) {
          let t = e / p,
            n = u * Math.cos((t * Math.PI) / 2),
            r = d * Math.sin((t * Math.PI) / 2) + f;
          for (let e = 0, t = E.length; e < t; e++) {
            let t = D(E[e], k[e], r);
            P(t.x, t.y, c + n);
          }
          for (let e = 0, t = w.length; e < t; e++) {
            let t = w[e];
            j = A[e];
            for (let e = 0, i = t.length; e < i; e++) {
              let i = D(t[e], j[e], r);
              _ ? P(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : P(i.x, i.y, c + n);
            }
          }
        }
        (ne(), re());
        function ne() {
          let e = r.length / 3;
          if (l) {
            let e = 0,
              t = O * e;
            for (let e = 0; e < ee; e++) {
              let n = T[e];
              ae(n[2] + t, n[1] + t, n[0] + t);
            }
            ((e = s + p * 2), (t = O * e));
            for (let e = 0; e < ee; e++) {
              let n = T[e];
              ae(n[0] + t, n[1] + t, n[2] + t);
            }
          } else {
            for (let e = 0; e < ee; e++) {
              let t = T[e];
              ae(t[2], t[1], t[0]);
            }
            for (let e = 0; e < ee; e++) {
              let t = T[e];
              ae(t[0] + O * s, t[1] + O * s, t[2] + O * s);
            }
          }
          n.addGroup(e, r.length / 3 - e, 0);
        }
        function re() {
          let e = r.length / 3,
            t = 0;
          (ie(E, t), (t += E.length));
          for (let e = 0, n = w.length; e < n; e++) {
            let n = w[e];
            (ie(n, t), (t += n.length));
          }
          n.addGroup(e, r.length / 3 - e, 1);
        }
        function ie(e, t) {
          let n = e.length;
          for (; --n >= 0; ) {
            let r = n,
              i = n - 1;
            i < 0 && (i = e.length - 1);
            for (let e = 0, n = s + p * 2; e < n; e++) {
              let n = O * e,
                a = O * (e + 1);
              oe(t + r + n, t + i + n, t + i + a, t + r + a);
            }
          }
        }
        function P(e, t, n) {
          (a.push(e), a.push(t), a.push(n));
        }
        function ae(e, t, i) {
          (se(e), se(t), se(i));
          let a = r.length / 3,
            o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
          (ce(o[0]), ce(o[1]), ce(o[2]));
        }
        function oe(e, t, i, a) {
          (se(e), se(t), se(a), se(t), se(i), se(a));
          let o = r.length / 3,
            s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
          (ce(s[0]), ce(s[1]), ce(s[3]), ce(s[1]), ce(s[2]), ce(s[3]));
        }
        function se(e) {
          (r.push(a[e * 3 + 0]), r.push(a[e * 3 + 1]), r.push(a[e * 3 + 2]));
        }
        function ce(e) {
          (i.push(e.x), i.push(e.y));
        }
      }
    }
    toJSON() {
      let e = super.toJSON(),
        t = this.parameters.shapes,
        n = this.parameters.options;
      return Zu(t, n, e);
    }
    static fromJSON(t, n) {
      let r = [];
      for (let e = 0, i = t.shapes.length; e < i; e++) {
        let i = n[t.shapes[e]];
        r.push(i);
      }
      let i = t.options.extrudePath;
      return (
        i !== void 0 && (t.options.extrudePath = new uu[i.type]().fromJSON(i)),
        new e(r, t.options)
      );
    }
  },
  Xu = {
    generateTopUV: function (e, t, n, r, i) {
      let a = t[n * 3],
        o = t[n * 3 + 1],
        s = t[r * 3],
        c = t[r * 3 + 1],
        l = t[i * 3],
        u = t[i * 3 + 1];
      return [new z(a, o), new z(s, c), new z(l, u)];
    },
    generateSideWallUV: function (e, t, n, r, i, a) {
      let o = t[n * 3],
        s = t[n * 3 + 1],
        c = t[n * 3 + 2],
        l = t[r * 3],
        u = t[r * 3 + 1],
        d = t[r * 3 + 2],
        f = t[i * 3],
        p = t[i * 3 + 1],
        m = t[i * 3 + 2],
        h = t[a * 3],
        g = t[a * 3 + 1],
        _ = t[a * 3 + 2];
      return Math.abs(s - u) < Math.abs(o - l)
        ? [new z(o, 1 - c), new z(l, 1 - d), new z(f, 1 - m), new z(h, 1 - _)]
        : [new z(s, 1 - c), new z(u, 1 - d), new z(p, 1 - m), new z(g, 1 - _)];
    },
  };
function Zu(e, t, n) {
  if (((n.shapes = []), Array.isArray(e)))
    for (let t = 0, r = e.length; t < r; t++) {
      let r = e[t];
      n.shapes.push(r.uuid);
    }
  else n.shapes.push(e.uuid);
  return (
    t.extrudePath !== void 0 &&
      (n.options.extrudePath = t.extrudePath.toJSON()),
    n
  );
}
var Qu = class e extends jl {
    constructor(e = 1, t = 0) {
      let n = (1 + Math.sqrt(5)) / 2,
        r = [
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          0,
          0,
          -1,
          n,
          0,
          1,
          n,
          0,
          -1,
          -n,
          0,
          1,
          -n,
          n,
          0,
          -1,
          n,
          0,
          1,
          -n,
          0,
          -1,
          -n,
          0,
          1,
        ];
      (super(
        r,
        [
          0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
          11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
          8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ],
        e,
        t,
      ),
        (this.type = `IcosahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  $u = class e extends J {
    constructor(
      e = [new z(0, 0.5), new z(0.5, 0), new z(0, -0.5)],
      t = 12,
      n = 0,
      r = Math.PI * 2,
    ) {
      (super(),
        (this.type = `LatheGeometry`),
        (this.parameters = {
          points: e,
          segments: t,
          phiStart: n,
          phiLength: r,
        }),
        (t = Math.floor(t)),
        (r = ln(r, 0, Math.PI * 2)));
      let i = [],
        a = [],
        o = [],
        s = 1 / t,
        c = new V(),
        l = new z();
      for (let i = 0; i <= t; i++) {
        let u = n + i * s * r,
          d = Math.sin(u),
          f = Math.cos(u);
        for (let n = 0; n <= e.length - 1; n++)
          ((c.x = e[n].x * d),
            (c.y = e[n].y),
            (c.z = e[n].x * f),
            a.push(c.x, c.y, c.z),
            (l.x = i / t),
            (l.y = n / (e.length - 1)),
            o.push(l.x, l.y));
      }
      for (let n = 0; n < t; n++)
        for (let t = 0; t < e.length - 1; t++) {
          let r = t + n * e.length,
            a = r,
            o = r + e.length,
            s = r + e.length + 1,
            c = r + 1;
          (i.push(a, o, c), i.push(o, s, c));
        }
      if (
        (this.setIndex(i),
        this.setAttribute(`position`, new q(a, 3)),
        this.setAttribute(`uv`, new q(o, 2)),
        this.computeVertexNormals(),
        r === Math.PI * 2)
      ) {
        let n = this.attributes.normal.array,
          r = new V(),
          i = new V(),
          a = new V(),
          o = t * e.length * 3;
        for (let t = 0, s = 0; t < e.length; t++, s += 3)
          ((r.x = n[s + 0]),
            (r.y = n[s + 1]),
            (r.z = n[s + 2]),
            (i.x = n[o + s + 0]),
            (i.y = n[o + s + 1]),
            (i.z = n[o + s + 2]),
            a.addVectors(r, i).normalize(),
            (n[s + 0] = n[o + s + 0] = a.x),
            (n[s + 1] = n[o + s + 1] = a.y),
            (n[s + 2] = n[o + s + 2] = a.z));
      }
    }
    static fromJSON(t) {
      return new e(t.points, t.segments, t.phiStart, t.phiLength);
    }
  },
  ed = class e extends jl {
    constructor(e = 1, t = 0) {
      (super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        e,
        t,
      ),
        (this.type = `OctahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  td = class e extends J {
    constructor(e = 0.5, t = 1, n = 8, r = 1, i = 0, a = Math.PI * 2) {
      (super(),
        (this.type = `RingGeometry`),
        (this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: n,
          phiSegments: r,
          thetaStart: i,
          thetaLength: a,
        }),
        (n = Math.max(3, n)),
        (r = Math.max(1, r)));
      let o = [],
        s = [],
        c = [],
        l = [],
        u = e,
        d = (t - e) / r,
        f = new V(),
        p = new z();
      for (let e = 0; e <= r; e++) {
        for (let e = 0; e <= n; e++) {
          let r = i + (e / n) * a;
          ((f.x = u * Math.cos(r)),
            (f.y = u * Math.sin(r)),
            s.push(f.x, f.y, f.z),
            c.push(0, 0, 1),
            (p.x = (f.x / t + 1) / 2),
            (p.y = (f.y / t + 1) / 2),
            l.push(p.x, p.y));
        }
        u += d;
      }
      for (let e = 0; e < r; e++) {
        let t = e * (n + 1);
        for (let e = 0; e < n; e++) {
          let r = e + t,
            i = r,
            a = r + n + 1,
            s = r + n + 2,
            c = r + 1;
          (o.push(i, a, c), o.push(a, s, c));
        }
      }
      (this.setIndex(o),
        this.setAttribute(`position`, new q(s, 3)),
        this.setAttribute(`normal`, new q(c, 3)),
        this.setAttribute(`uv`, new q(l, 2)));
    }
    static fromJSON(t) {
      return new e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  nd = class e extends J {
    constructor(
      e = new pu([new z(0, 0.5), new z(-0.5, -0.5), new z(0.5, -0.5)]),
      t = 12,
    ) {
      (super(),
        (this.type = `ShapeGeometry`),
        (this.parameters = { shapes: e, curveSegments: t }));
      let n = [],
        r = [],
        i = [],
        a = [],
        o = 0,
        s = 0;
      if (Array.isArray(e) === !1) c(e);
      else
        for (let t = 0; t < e.length; t++)
          (c(e[t]), this.addGroup(o, s, t), (o += s), (s = 0));
      (this.setIndex(n),
        this.setAttribute(`position`, new q(r, 3)),
        this.setAttribute(`normal`, new q(i, 3)),
        this.setAttribute(`uv`, new q(a, 2)));
      function c(e) {
        let o = r.length / 3,
          c = e.extractPoints(t),
          l = c.shape,
          u = c.holes;
        Ku.isClockWise(l) === !1 && (l = l.reverse());
        for (let e = 0, t = u.length; e < t; e++) {
          let t = u[e];
          Ku.isClockWise(t) === !0 && (u[e] = t.reverse());
        }
        let d = Ku.triangulateShape(l, u);
        for (let e = 0, t = u.length; e < t; e++) {
          let t = u[e];
          l = l.concat(t);
        }
        for (let e = 0, t = l.length; e < t; e++) {
          let t = l[e];
          (r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y));
        }
        for (let e = 0, t = d.length; e < t; e++) {
          let t = d[e],
            r = t[0] + o,
            i = t[1] + o,
            a = t[2] + o;
          (n.push(r, i, a), (s += 3));
        }
      }
    }
    toJSON() {
      let e = super.toJSON(),
        t = this.parameters.shapes;
      return rd(t, e);
    }
    static fromJSON(t, n) {
      let r = [];
      for (let e = 0, i = t.shapes.length; e < i; e++) {
        let i = n[t.shapes[e]];
        r.push(i);
      }
      return new e(r, t.curveSegments);
    }
  };
function rd(e, t) {
  if (((t.shapes = []), Array.isArray(e)))
    for (let n = 0, r = e.length; n < r; n++) {
      let r = e[n];
      t.shapes.push(r.uuid);
    }
  else t.shapes.push(e.uuid);
  return t;
}
var id = class e extends J {
    constructor(
      e = 1,
      t = 32,
      n = 16,
      r = 0,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))));
      let s = Math.min(a + o, Math.PI),
        c = 0,
        l = [],
        u = new V(),
        d = new V(),
        f = [],
        p = [],
        m = [],
        h = [];
      for (let f = 0; f <= n; f++) {
        let g = [],
          _ = f / n,
          v = 0;
        f == 0 && a == 0
          ? (v = 0.5 / t)
          : f == n && s == Math.PI && (v = -0.5 / t);
        for (let n = 0; n <= t; n++) {
          let s = n / t;
          ((u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o)),
            (u.y = e * Math.cos(a + _ * o)),
            (u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o)),
            p.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            m.push(d.x, d.y, d.z),
            h.push(s + v, 1 - _),
            g.push(c++));
        }
        l.push(g);
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = l[e][r + 1],
            i = l[e][r],
            o = l[e + 1][r],
            c = l[e + 1][r + 1];
          ((e !== 0 || a > 0) && f.push(t, i, c),
            (e !== n - 1 || s < Math.PI) && f.push(i, o, c));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new q(p, 3)),
        this.setAttribute(`normal`, new q(m, 3)),
        this.setAttribute(`uv`, new q(h, 2)));
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  ad = class e extends jl {
    constructor(e = 1, t = 0) {
      (super(
        [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
        [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
        e,
        t,
      ),
        (this.type = `TetrahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  od = class e extends J {
    constructor(e = 1, t = 0.4, n = 8, r = 6, i = Math.PI * 2) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let a = [],
        o = [],
        s = [],
        c = [],
        l = new V(),
        u = new V(),
        d = new V();
      for (let a = 0; a <= n; a++)
        for (let f = 0; f <= r; f++) {
          let p = (f / r) * i,
            m = (a / n) * Math.PI * 2;
          ((u.x = (e + t * Math.cos(m)) * Math.cos(p)),
            (u.y = (e + t * Math.cos(m)) * Math.sin(p)),
            (u.z = t * Math.sin(m)),
            o.push(u.x, u.y, u.z),
            (l.x = e * Math.cos(p)),
            (l.y = e * Math.sin(p)),
            d.subVectors(u, l).normalize(),
            s.push(d.x, d.y, d.z),
            c.push(f / r),
            c.push(a / n));
        }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            o = (r + 1) * (e - 1) + t,
            s = (r + 1) * e + t;
          (a.push(n, i, s), a.push(i, o, s));
        }
      (this.setIndex(a),
        this.setAttribute(`position`, new q(o, 3)),
        this.setAttribute(`normal`, new q(s, 3)),
        this.setAttribute(`uv`, new q(c, 2)));
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
      );
    }
  },
  sd = class e extends J {
    constructor(e = 1, t = 0.4, n = 64, r = 8, i = 2, a = 3) {
      (super(),
        (this.type = `TorusKnotGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          tubularSegments: n,
          radialSegments: r,
          p: i,
          q: a,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let o = [],
        s = [],
        c = [],
        l = [],
        u = new V(),
        d = new V(),
        f = new V(),
        p = new V(),
        m = new V(),
        h = new V(),
        g = new V();
      for (let o = 0; o <= n; ++o) {
        let v = (o / n) * i * Math.PI * 2;
        (_(v, i, a, e, f),
          _(v + 0.01, i, a, e, p),
          h.subVectors(p, f),
          g.addVectors(p, f),
          m.crossVectors(h, g),
          g.crossVectors(m, h),
          m.normalize(),
          g.normalize());
        for (let e = 0; e <= r; ++e) {
          let i = (e / r) * Math.PI * 2,
            a = -t * Math.cos(i),
            p = t * Math.sin(i);
          ((u.x = f.x + (a * g.x + p * m.x)),
            (u.y = f.y + (a * g.y + p * m.y)),
            (u.z = f.z + (a * g.z + p * m.z)),
            s.push(u.x, u.y, u.z),
            d.subVectors(u, f).normalize(),
            c.push(d.x, d.y, d.z),
            l.push(o / n),
            l.push(e / r));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * (e - 1) + (t - 1),
            i = (r + 1) * e + (t - 1),
            a = (r + 1) * e + t,
            s = (r + 1) * (e - 1) + t;
          (o.push(n, i, s), o.push(i, a, s));
        }
      (this.setIndex(o),
        this.setAttribute(`position`, new q(s, 3)),
        this.setAttribute(`normal`, new q(c, 3)),
        this.setAttribute(`uv`, new q(l, 2)));
      function _(e, t, n, r, i) {
        let a = Math.cos(e),
          o = Math.sin(e),
          s = (n / t) * e,
          c = Math.cos(s);
        ((i.x = r * (2 + c) * 0.5 * a),
          (i.y = r * (2 + c) * o * 0.5),
          (i.z = r * Math.sin(s) * 0.5));
      }
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.tubularSegments,
        t.radialSegments,
        t.p,
        t.q,
      );
    }
  },
  cd = class e extends J {
    constructor(
      e = new cu(new V(-1, -1, 0), new V(-1, 1, 0), new V(1, 1, 0)),
      t = 64,
      n = 1,
      r = 8,
      i = !1,
    ) {
      (super(),
        (this.type = `TubeGeometry`),
        (this.parameters = {
          path: e,
          tubularSegments: t,
          radius: n,
          radialSegments: r,
          closed: i,
        }));
      let a = e.computeFrenetFrames(t, i);
      ((this.tangents = a.tangents),
        (this.normals = a.normals),
        (this.binormals = a.binormals));
      let o = new V(),
        s = new V(),
        c = new z(),
        l = new V(),
        u = [],
        d = [],
        f = [],
        p = [];
      (m(),
        this.setIndex(p),
        this.setAttribute(`position`, new q(u, 3)),
        this.setAttribute(`normal`, new q(d, 3)),
        this.setAttribute(`uv`, new q(f, 2)));
      function m() {
        for (let e = 0; e < t; e++) h(e);
        (h(i === !1 ? t : 0), _(), g());
      }
      function h(i) {
        l = e.getPointAt(i / t, l);
        let c = a.normals[i],
          f = a.binormals[i];
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * Math.PI * 2,
            i = Math.sin(t),
            a = -Math.cos(t);
          ((s.x = a * c.x + i * f.x),
            (s.y = a * c.y + i * f.y),
            (s.z = a * c.z + i * f.z),
            s.normalize(),
            d.push(s.x, s.y, s.z),
            (o.x = l.x + n * s.x),
            (o.y = l.y + n * s.y),
            (o.z = l.z + n * s.z),
            u.push(o.x, o.y, o.z));
        }
      }
      function g() {
        for (let e = 1; e <= t; e++)
          for (let t = 1; t <= r; t++) {
            let n = (r + 1) * (e - 1) + (t - 1),
              i = (r + 1) * e + (t - 1),
              a = (r + 1) * e + t,
              o = (r + 1) * (e - 1) + t;
            (p.push(n, i, o), p.push(i, a, o));
          }
      }
      function _() {
        for (let e = 0; e <= t; e++)
          for (let n = 0; n <= r; n++)
            ((c.x = e / t), (c.y = n / r), f.push(c.x, c.y));
      }
    }
    toJSON() {
      let e = super.toJSON();
      return ((e.path = this.parameters.path.toJSON()), e);
    }
    static fromJSON(t) {
      return new e(
        new uu[t.path.type]().fromJSON(t.path),
        t.tubularSegments,
        t.radius,
        t.radialSegments,
        t.closed,
      );
    }
  },
  ld = class extends J {
    constructor(e = null) {
      if (
        (super(),
        (this.type = `WireframeGeometry`),
        (this.parameters = { geometry: e }),
        e !== null)
      ) {
        let t = [],
          n = new Set(),
          r = new V(),
          i = new V();
        if (e.index !== null) {
          let a = e.attributes.position,
            o = e.index,
            s = e.groups;
          s.length === 0 &&
            (s = [{ start: 0, count: o.count, materialIndex: 0 }]);
          for (let e = 0, c = s.length; e < c; ++e) {
            let c = s[e],
              l = c.start,
              u = c.count;
            for (let e = l, s = l + u; e < s; e += 3)
              for (let s = 0; s < 3; s++) {
                let c = o.getX(e + s),
                  l = o.getX(e + ((s + 1) % 3));
                (r.fromBufferAttribute(a, c),
                  i.fromBufferAttribute(a, l),
                  ud(r, i, n) === !0 &&
                    (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z)));
              }
          }
        } else {
          let a = e.attributes.position;
          for (let e = 0, o = a.count / 3; e < o; e++)
            for (let o = 0; o < 3; o++) {
              let s = 3 * e + o,
                c = 3 * e + ((o + 1) % 3);
              (r.fromBufferAttribute(a, s),
                i.fromBufferAttribute(a, c),
                ud(r, i, n) === !0 &&
                  (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z)));
            }
        }
        this.setAttribute(`position`, new q(t, 3));
      }
    }
  };
function ud(e, t, n) {
  let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,
    i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
  return n.has(r) === !0 || n.has(i) === !0 ? !1 : (n.add(r, i), !0);
}
var dd = Object.freeze({
    __proto__: null,
    BoxGeometry: qi,
    BoxBufferGeometry: qi,
    CircleGeometry: Ol,
    CircleBufferGeometry: Ol,
    ConeGeometry: Al,
    ConeBufferGeometry: Al,
    CylinderGeometry: kl,
    CylinderBufferGeometry: kl,
    DodecahedronGeometry: Ml,
    DodecahedronBufferGeometry: Ml,
    EdgesGeometry: Ll,
    ExtrudeGeometry: Yu,
    ExtrudeBufferGeometry: Yu,
    IcosahedronGeometry: Qu,
    IcosahedronBufferGeometry: Qu,
    LatheGeometry: $u,
    LatheBufferGeometry: $u,
    OctahedronGeometry: ed,
    OctahedronBufferGeometry: ed,
    PlaneGeometry: ga,
    PlaneBufferGeometry: ga,
    PolyhedronGeometry: jl,
    PolyhedronBufferGeometry: jl,
    RingGeometry: td,
    RingBufferGeometry: td,
    ShapeGeometry: nd,
    ShapeBufferGeometry: nd,
    SphereGeometry: id,
    SphereBufferGeometry: id,
    TetrahedronGeometry: ad,
    TetrahedronBufferGeometry: ad,
    TorusGeometry: od,
    TorusBufferGeometry: od,
    TorusKnotGeometry: sd,
    TorusKnotBufferGeometry: sd,
    TubeGeometry: cd,
    TubeBufferGeometry: cd,
    WireframeGeometry: ld,
  }),
  fd = class extends ni {
    constructor(e) {
      (super(),
        (this.type = `ShadowMaterial`),
        (this.color = new W(0)),
        (this.transparent = !0),
        this.setValues(e));
    }
    copy(e) {
      return (super.copy(e), this.color.copy(e.color), this);
    }
  };
fd.prototype.isShadowMaterial = !0;
var pd = class extends ni {
  constructor(e) {
    (super(),
      (this.defines = { STANDARD: `` }),
      (this.type = `MeshStandardMaterial`),
      (this.color = new W(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new W(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = `round`),
      (this.wireframeLinejoin = `round`),
      (this.flatShading = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: `` }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      this
    );
  }
};
pd.prototype.isMeshStandardMaterial = !0;
var md = class extends pd {
  constructor(e) {
    (super(),
      (this.defines = { STANDARD: ``, PHYSICAL: `` }),
      (this.type = `MeshPhysicalMaterial`),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new z(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, `reflectivity`, {
        get: function () {
          return ln((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.sheenColor = new W(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0.01),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new W(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new W(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._transmission = 0),
      this.setValues(e));
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    (this._sheen > 0 != e > 0 && this.version++, (this._sheen = e));
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    (this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e));
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    (this._transmission > 0 != e > 0 && this.version++,
      (this._transmission = e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: ``, PHYSICAL: `` }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
};
md.prototype.isMeshPhysicalMaterial = !0;
var hd = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshPhongMaterial`),
      (this.color = new W(16777215)),
      (this.specular = new W(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new W(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = `round`),
      (this.wireframeLinejoin = `round`),
      (this.flatShading = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      this
    );
  }
};
hd.prototype.isMeshPhongMaterial = !0;
var gd = class extends ni {
  constructor(e) {
    (super(),
      (this.defines = { TOON: `` }),
      (this.type = `MeshToonMaterial`),
      (this.color = new W(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new W(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = `round`),
      (this.wireframeLinejoin = `round`),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      this
    );
  }
};
gd.prototype.isMeshToonMaterial = !0;
var _d = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshNormalMaterial`),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.flatShading = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.flatShading = e.flatShading),
      this
    );
  }
};
_d.prototype.isMeshNormalMaterial = !0;
var vd = class extends ni {
  constructor(e) {
    (super(),
      (this.type = `MeshLambertMaterial`),
      (this.color = new W(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new W(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = `round`),
      (this.wireframeLinejoin = `round`),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      this
    );
  }
};
vd.prototype.isMeshLambertMaterial = !0;
var yd = class extends ni {
  constructor(e) {
    (super(),
      (this.defines = { MATCAP: `` }),
      (this.type = `MeshMatcapMaterial`),
      (this.color = new W(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new z(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { MATCAP: `` }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.flatShading = e.flatShading),
      this
    );
  }
};
yd.prototype.isMeshMatcapMaterial = !0;
var bd = class extends ol {
  constructor(e) {
    (super(),
      (this.type = `LineDashedMaterial`),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
};
bd.prototype.isLineDashedMaterial = !0;
var xd = Object.freeze({
    __proto__: null,
    ShadowMaterial: fd,
    SpriteMaterial: wc,
    RawShaderMaterial: Ta,
    ShaderMaterial: $i,
    PointsMaterial: _l,
    MeshPhysicalMaterial: md,
    MeshStandardMaterial: pd,
    MeshPhongMaterial: hd,
    MeshToonMaterial: gd,
    MeshNormalMaterial: _d,
    MeshLambertMaterial: vd,
    MeshDepthMaterial: nc,
    MeshDistanceMaterial: rc,
    MeshBasicMaterial: li,
    MeshMatcapMaterial: yd,
    LineDashedMaterial: bd,
    LineBasicMaterial: ol,
    Material: ni,
  }),
  Q = {
    arraySlice: function (e, t, n) {
      return Q.isTypedArray(e)
        ? new e.constructor(e.subarray(t, n === void 0 ? e.length : n))
        : e.slice(t, n);
    },
    convertArray: function (e, t, n) {
      return !e || (!n && e.constructor === t)
        ? e
        : typeof t.BYTES_PER_ELEMENT == `number`
          ? new t(e)
          : Array.prototype.slice.call(e);
    },
    isTypedArray: function (e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    },
    getKeyframeOrder: function (e) {
      function t(t, n) {
        return e[t] - e[n];
      }
      let n = e.length,
        r = Array(n);
      for (let e = 0; e !== n; ++e) r[e] = e;
      return (r.sort(t), r);
    },
    sortedArray: function (e, t, n) {
      let r = e.length,
        i = new e.constructor(r);
      for (let a = 0, o = 0; o !== r; ++a) {
        let r = n[a] * t;
        for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
      }
      return i;
    },
    flattenJSON: function (e, t, n, r) {
      let i = 1,
        a = e[0];
      for (; a !== void 0 && a[r] === void 0; ) a = e[i++];
      if (a === void 0) return;
      let o = a[r];
      if (o !== void 0)
        if (Array.isArray(o))
          do
            ((o = a[r]),
              o !== void 0 && (t.push(a.time), n.push.apply(n, o)),
              (a = e[i++]));
          while (a !== void 0);
        else if (o.toArray !== void 0)
          do
            ((o = a[r]),
              o !== void 0 && (t.push(a.time), o.toArray(n, n.length)),
              (a = e[i++]));
          while (a !== void 0);
        else
          do
            ((o = a[r]),
              o !== void 0 && (t.push(a.time), n.push(o)),
              (a = e[i++]));
          while (a !== void 0);
    },
    subclip: function (e, t, n, r, i = 30) {
      let a = e.clone();
      a.name = t;
      let o = [];
      for (let e = 0; e < a.tracks.length; ++e) {
        let t = a.tracks[e],
          s = t.getValueSize(),
          c = [],
          l = [];
        for (let e = 0; e < t.times.length; ++e) {
          let a = t.times[e] * i;
          if (!(a < n || a >= r)) {
            c.push(t.times[e]);
            for (let n = 0; n < s; ++n) l.push(t.values[e * s + n]);
          }
        }
        c.length !== 0 &&
          ((t.times = Q.convertArray(c, t.times.constructor)),
          (t.values = Q.convertArray(l, t.values.constructor)),
          o.push(t));
      }
      a.tracks = o;
      let s = 1 / 0;
      for (let e = 0; e < a.tracks.length; ++e)
        s > a.tracks[e].times[0] && (s = a.tracks[e].times[0]);
      for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s);
      return (a.resetDuration(), a);
    },
    makeClipAdditive: function (e, t = 0, n = e, r = 30) {
      r <= 0 && (r = 30);
      let i = n.tracks.length,
        a = t / r;
      for (let t = 0; t < i; ++t) {
        let r = n.tracks[t],
          i = r.ValueTypeName;
        if (i === `bool` || i === `string`) continue;
        let o = e.tracks.find(function (e) {
          return e.name === r.name && e.ValueTypeName === i;
        });
        if (o === void 0) continue;
        let s = 0,
          c = r.getValueSize();
        r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (s = c / 3);
        let l = 0,
          u = o.getValueSize();
        o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
          (l = u / 3);
        let d = r.times.length - 1,
          f;
        if (a <= r.times[0]) {
          let e = s,
            t = c - s;
          f = Q.arraySlice(r.values, e, t);
        } else if (a >= r.times[d]) {
          let e = d * c + s,
            t = e + c - s;
          f = Q.arraySlice(r.values, e, t);
        } else {
          let e = r.createInterpolant(),
            t = s,
            n = c - s;
          (e.evaluate(a), (f = Q.arraySlice(e.resultBuffer, t, n)));
        }
        i === `quaternion` &&
          new Un().fromArray(f).normalize().conjugate().toArray(f);
        let p = o.times.length;
        for (let e = 0; e < p; ++e) {
          let t = e * u + l;
          if (i === `quaternion`)
            Un.multiplyQuaternionsFlat(o.values, t, f, 0, o.values, t);
          else {
            let e = u - l * 2;
            for (let n = 0; n < e; ++n) o.values[t + n] -= f[n];
          }
        }
      }
      return ((e.blendMode = Dt), e);
    },
  },
  Sd = class {
    constructor(e, t, n, r) {
      ((this.parameterPositions = e),
        (this._cachedIndex = 0),
        (this.resultBuffer = r === void 0 ? new t.constructor(n) : r),
        (this.sampleValues = t),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(e) {
      let t = this.parameterPositions,
        n = this._cachedIndex,
        r = t[n],
        i = t[n - 1];
      validate_interval: {
        seek: {
          let a;
          linear_scan: {
            forward_scan: if (!(e < r)) {
              for (let a = n + 2; ; ) {
                if (r === void 0) {
                  if (e < i) break forward_scan;
                  return (
                    (n = t.length),
                    (this._cachedIndex = n),
                    this.afterEnd_(n - 1, e, i)
                  );
                }
                if (n === a) break;
                if (((i = r), (r = t[++n]), e < r)) break seek;
              }
              a = t.length;
              break linear_scan;
            }
            if (!(e >= i)) {
              let o = t[1];
              e < o && ((n = 2), (i = o));
              for (let a = n - 2; ; ) {
                if (i === void 0)
                  return ((this._cachedIndex = 0), this.beforeStart_(0, e, r));
                if (n === a) break;
                if (((r = i), (i = t[--n - 1]), e >= i)) break seek;
              }
              ((a = n), (n = 0));
              break linear_scan;
            }
            break validate_interval;
          }
          for (; n < a; ) {
            let r = (n + a) >>> 1;
            e < t[r] ? (a = r) : (n = r + 1);
          }
          if (((r = t[n]), (i = t[n - 1]), i === void 0))
            return ((this._cachedIndex = 0), this.beforeStart_(0, e, r));
          if (r === void 0)
            return (
              (n = t.length),
              (this._cachedIndex = n),
              this.afterEnd_(n - 1, i, e)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, i, r));
      }
      return this.interpolate_(n, i, e, r);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
      let t = this.resultBuffer,
        n = this.sampleValues,
        r = this.valueSize,
        i = e * r;
      for (let e = 0; e !== r; ++e) t[e] = n[i + e];
      return t;
    }
    interpolate_() {
      throw Error(`call to abstract method`);
    }
    intervalChanged_() {}
  };
((Sd.prototype.beforeStart_ = Sd.prototype.copySampleValue_),
  (Sd.prototype.afterEnd_ = Sd.prototype.copySampleValue_));
var Cd = class extends Sd {
    constructor(e, t, n, r) {
      (super(e, t, n, r),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: Ct, endingEnd: Ct }));
    }
    intervalChanged_(e, t, n) {
      let r = this.parameterPositions,
        i = e - 2,
        a = e + 1,
        o = r[i],
        s = r[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case wt:
            ((i = e), (o = 2 * t - n));
            break;
          case Tt:
            ((i = r.length - 2), (o = t + r[i] - r[i + 1]));
            break;
          default:
            ((i = e), (o = n));
        }
      if (s === void 0)
        switch (this.getSettings_().endingEnd) {
          case wt:
            ((a = e), (s = 2 * n - t));
            break;
          case Tt:
            ((a = 1), (s = n + r[1] - r[0]));
            break;
          default:
            ((a = e - 1), (s = t));
        }
      let c = (n - t) * 0.5,
        l = this.valueSize;
      ((this._weightPrev = c / (t - o)),
        (this._weightNext = c / (s - n)),
        (this._offsetPrev = i * l),
        (this._offsetNext = a * l));
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = this._offsetPrev,
        u = this._offsetNext,
        d = this._weightPrev,
        f = this._weightNext,
        p = (n - t) / (r - t),
        m = p * p,
        h = m * p,
        g = -d * h + 2 * d * m - d * p,
        _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-0.5 + d) * p + 1,
        v = (-1 - f) * h + (1.5 + f) * m + 0.5 * p,
        y = f * h - f * m;
      for (let e = 0; e !== o; ++e)
        i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
      return i;
    }
  },
  wd = class extends Sd {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = e * o,
        c = s - o,
        l = (n - t) / (r - t),
        u = 1 - l;
      for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
      return i;
    }
  },
  Td = class extends Sd {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e) {
      return this.copySampleValue_(e - 1);
    }
  },
  Ed = class {
    constructor(e, t, n, r) {
      if (e === void 0)
        throw Error(`THREE.KeyframeTrack: track name is undefined`);
      if (t === void 0 || t.length === 0)
        throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e);
      ((this.name = e),
        (this.times = Q.convertArray(t, this.TimeBufferType)),
        (this.values = Q.convertArray(n, this.ValueBufferType)),
        this.setInterpolation(r || this.DefaultInterpolation));
    }
    static toJSON(e) {
      let t = e.constructor,
        n;
      if (t.toJSON !== this.toJSON) n = t.toJSON(e);
      else {
        n = {
          name: e.name,
          times: Q.convertArray(e.times, Array),
          values: Q.convertArray(e.values, Array),
        };
        let t = e.getInterpolation();
        t !== e.DefaultInterpolation && (n.interpolation = t);
      }
      return ((n.type = e.ValueTypeName), n);
    }
    InterpolantFactoryMethodDiscrete(e) {
      return new Td(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
      return new wd(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
      return new Cd(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
      let t;
      switch (e) {
        case bt:
          t = this.InterpolantFactoryMethodDiscrete;
          break;
        case xt:
          t = this.InterpolantFactoryMethodLinear;
          break;
        case St:
          t = this.InterpolantFactoryMethodSmooth;
          break;
      }
      if (t === void 0) {
        let t =
          `unsupported interpolation for ` +
          this.ValueTypeName +
          ` keyframe track named ` +
          this.name;
        if (this.createInterpolant === void 0)
          if (e !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else throw Error(t);
        return (console.warn(`THREE.KeyframeTrack:`, t), this);
      }
      return ((this.createInterpolant = t), this);
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return bt;
        case this.InterpolantFactoryMethodLinear:
          return xt;
        case this.InterpolantFactoryMethodSmooth:
          return St;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(e) {
      if (e !== 0) {
        let t = this.times;
        for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
      }
      return this;
    }
    scale(e) {
      if (e !== 1) {
        let t = this.times;
        for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
      }
      return this;
    }
    trim(e, t) {
      let n = this.times,
        r = n.length,
        i = 0,
        a = r - 1;
      for (; i !== r && n[i] < e; ) ++i;
      for (; a !== -1 && n[a] > t; ) --a;
      if ((++a, i !== 0 || a !== r)) {
        i >= a && ((a = Math.max(a, 1)), (i = a - 1));
        let e = this.getValueSize();
        ((this.times = Q.arraySlice(n, i, a)),
          (this.values = Q.arraySlice(this.values, i * e, a * e)));
      }
      return this;
    }
    validate() {
      let e = !0,
        t = this.getValueSize();
      t - Math.floor(t) !== 0 &&
        (console.error(
          `THREE.KeyframeTrack: Invalid value size in track.`,
          this,
        ),
        (e = !1));
      let n = this.times,
        r = this.values,
        i = n.length;
      i === 0 &&
        (console.error(`THREE.KeyframeTrack: Track is empty.`, this), (e = !1));
      let a = null;
      for (let t = 0; t !== i; t++) {
        let r = n[t];
        if (typeof r == `number` && isNaN(r)) {
          (console.error(
            `THREE.KeyframeTrack: Time is not a valid number.`,
            this,
            t,
            r,
          ),
            (e = !1));
          break;
        }
        if (a !== null && a > r) {
          (console.error(
            `THREE.KeyframeTrack: Out of order keys.`,
            this,
            t,
            r,
            a,
          ),
            (e = !1));
          break;
        }
        a = r;
      }
      if (r !== void 0 && Q.isTypedArray(r))
        for (let t = 0, n = r.length; t !== n; ++t) {
          let n = r[t];
          if (isNaN(n)) {
            (console.error(
              `THREE.KeyframeTrack: Value is not a valid number.`,
              this,
              t,
              n,
            ),
              (e = !1));
            break;
          }
        }
      return e;
    }
    optimize() {
      let e = Q.arraySlice(this.times),
        t = Q.arraySlice(this.values),
        n = this.getValueSize(),
        r = this.getInterpolation() === St,
        i = e.length - 1,
        a = 1;
      for (let o = 1; o < i; ++o) {
        let i = !1,
          s = e[o];
        if (s !== e[o + 1] && (o !== 1 || s !== e[0]))
          if (r) i = !0;
          else {
            let e = o * n,
              r = e - n,
              a = e + n;
            for (let o = 0; o !== n; ++o) {
              let n = t[e + o];
              if (n !== t[r + o] || n !== t[a + o]) {
                i = !0;
                break;
              }
            }
          }
        if (i) {
          if (o !== a) {
            e[a] = e[o];
            let r = o * n,
              i = a * n;
            for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
          }
          ++a;
        }
      }
      if (i > 0) {
        e[a] = e[i];
        for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
        ++a;
      }
      return (
        a === e.length
          ? ((this.times = e), (this.values = t))
          : ((this.times = Q.arraySlice(e, 0, a)),
            (this.values = Q.arraySlice(t, 0, a * n))),
        this
      );
    }
    clone() {
      let e = Q.arraySlice(this.times, 0),
        t = Q.arraySlice(this.values, 0),
        n = this.constructor,
        r = new n(this.name, e, t);
      return ((r.createInterpolant = this.createInterpolant), r);
    }
  };
((Ed.prototype.TimeBufferType = Float32Array),
  (Ed.prototype.ValueBufferType = Float32Array),
  (Ed.prototype.DefaultInterpolation = xt));
var Dd = class extends Ed {};
((Dd.prototype.ValueTypeName = `bool`),
  (Dd.prototype.ValueBufferType = Array),
  (Dd.prototype.DefaultInterpolation = bt),
  (Dd.prototype.InterpolantFactoryMethodLinear = void 0),
  (Dd.prototype.InterpolantFactoryMethodSmooth = void 0));
var Od = class extends Ed {};
Od.prototype.ValueTypeName = `color`;
var kd = class extends Ed {};
kd.prototype.ValueTypeName = `number`;
var Ad = class extends Sd {
    constructor(e, t, n, r) {
      super(e, t, n, r);
    }
    interpolate_(e, t, n, r) {
      let i = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        s = (n - t) / (r - t),
        c = e * o;
      for (let e = c + o; c !== e; c += 4)
        Un.slerpFlat(i, 0, a, c - o, a, c, s);
      return i;
    }
  },
  jd = class extends Ed {
    InterpolantFactoryMethodLinear(e) {
      return new Ad(this.times, this.values, this.getValueSize(), e);
    }
  };
((jd.prototype.ValueTypeName = `quaternion`),
  (jd.prototype.DefaultInterpolation = xt),
  (jd.prototype.InterpolantFactoryMethodSmooth = void 0));
var Md = class extends Ed {};
((Md.prototype.ValueTypeName = `string`),
  (Md.prototype.ValueBufferType = Array),
  (Md.prototype.DefaultInterpolation = bt),
  (Md.prototype.InterpolantFactoryMethodLinear = void 0),
  (Md.prototype.InterpolantFactoryMethodSmooth = void 0));
var Nd = class extends Ed {};
Nd.prototype.ValueTypeName = `vector`;
var Pd = class {
  constructor(e, t = -1, n, r = Et) {
    ((this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = r),
      (this.uuid = cn()),
      this.duration < 0 && this.resetDuration());
  }
  static parse(e) {
    let t = [],
      n = e.tracks,
      r = 1 / (e.fps || 1);
    for (let e = 0, i = n.length; e !== i; ++e) t.push(Id(n[e]).scale(r));
    let i = new this(e.name, e.duration, t, e.blendMode);
    return ((i.uuid = e.uuid), i);
  }
  static toJSON(e) {
    let t = [],
      n = e.tracks,
      r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let e = 0, r = n.length; e !== r; ++e) t.push(Ed.toJSON(n[e]));
    return r;
  }
  static CreateFromMorphTargetSequence(e, t, n, r) {
    let i = t.length,
      a = [];
    for (let e = 0; e < i; e++) {
      let o = [],
        s = [];
      (o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0));
      let c = Q.getKeyframeOrder(o);
      ((o = Q.sortedArray(o, 1, c)),
        (s = Q.sortedArray(s, 1, c)),
        !r && o[0] === 0 && (o.push(i), s.push(s[0])),
        a.push(
          new kd(`.morphTargetInfluences[` + t[e].name + `]`, o, s).scale(
            1 / n,
          ),
        ));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      let t = e;
      n = (t.geometry && t.geometry.animations) || t.animations;
    }
    for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    let r = {},
      i = /^([\w-]*?)([\d]+)$/;
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t],
        a = n.name.match(i);
      if (a && a.length > 1) {
        let e = a[1],
          t = r[e];
        (t || (r[e] = t = []), t.push(n));
      }
    }
    let a = [];
    for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),
        null
      );
    let n = function (e, t, n, r, i) {
        if (n.length !== 0) {
          let a = [],
            o = [];
          (Q.flattenJSON(n, a, o, r), a.length !== 0 && i.push(new e(t, a, o)));
        }
      },
      r = [],
      i = e.name || `default`,
      a = e.fps || 30,
      o = e.blendMode,
      s = e.length || -1,
      c = e.hierarchy || [];
    for (let e = 0; e < c.length; e++) {
      let i = c[e].keys;
      if (!(!i || i.length === 0))
        if (i[0].morphTargets) {
          let e = {},
            t;
          for (t = 0; t < i.length; t++)
            if (i[t].morphTargets)
              for (let n = 0; n < i[t].morphTargets.length; n++)
                e[i[t].morphTargets[n]] = -1;
          for (let n in e) {
            let e = [],
              a = [];
            for (let r = 0; r !== i[t].morphTargets.length; ++r) {
              let r = i[t];
              (e.push(r.time), a.push(+(r.morphTarget === n)));
            }
            r.push(new kd(`.morphTargetInfluence[` + n + `]`, e, a));
          }
          s = e.length * (a || 1);
        } else {
          let a = `.bones[` + t[e].name + `]`;
          (n(Nd, a + `.position`, i, `pos`, r),
            n(jd, a + `.quaternion`, i, `rot`, r),
            n(Nd, a + `.scale`, i, `scl`, r));
        }
    }
    return r.length === 0 ? null : new this(i, s, r, o);
  }
  resetDuration() {
    let e = this.tracks,
      t = 0;
    for (let n = 0, r = e.length; n !== r; ++n) {
      let e = this.tracks[n];
      t = Math.max(t, e.times[e.times.length - 1]);
    }
    return ((this.duration = t), this);
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e &&= this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    let e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
};
function Fd(e) {
  switch (e.toLowerCase()) {
    case `scalar`:
    case `double`:
    case `float`:
    case `number`:
    case `integer`:
      return kd;
    case `vector`:
    case `vector2`:
    case `vector3`:
    case `vector4`:
      return Nd;
    case `color`:
      return Od;
    case `quaternion`:
      return jd;
    case `bool`:
    case `boolean`:
      return Dd;
    case `string`:
      return Md;
  }
  throw Error(`THREE.KeyframeTrack: Unsupported typeName: ` + e);
}
function Id(e) {
  if (e.type === void 0)
    throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);
  let t = Fd(e.type);
  if (e.times === void 0) {
    let t = [],
      n = [];
    (Q.flattenJSON(e.keys, t, n, `value`), (e.times = t), (e.values = n));
  }
  return t.parse === void 0
    ? new t(e.name, e.times, e.values, e.interpolation)
    : t.parse(e);
}
var Ld = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      this.enabled !== !1 && (this.files[e] = t);
    },
    get: function (e) {
      if (this.enabled !== !1) return this.files[e];
    },
    remove: function (e) {
      delete this.files[e];
    },
    clear: function () {
      this.files = {};
    },
  },
  Rd = class {
    constructor(e, t, n) {
      let r = this,
        i = !1,
        a = 0,
        o = 0,
        s,
        c = [];
      ((this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this.itemStart = function (e) {
          (o++,
            i === !1 && r.onStart !== void 0 && r.onStart(e, a, o),
            (i = !0));
        }),
        (this.itemEnd = function (e) {
          (a++,
            r.onProgress !== void 0 && r.onProgress(e, a, o),
            a === o && ((i = !1), r.onLoad !== void 0 && r.onLoad()));
        }),
        (this.itemError = function (e) {
          r.onError !== void 0 && r.onError(e);
        }),
        (this.resolveURL = function (e) {
          return s ? s(e) : e;
        }),
        (this.setURLModifier = function (e) {
          return ((s = e), this);
        }),
        (this.addHandler = function (e, t) {
          return (c.push(e, t), this);
        }),
        (this.removeHandler = function (e) {
          let t = c.indexOf(e);
          return (t !== -1 && c.splice(t, 2), this);
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = c.length; t < n; t += 2) {
            let n = c[t],
              r = c[t + 1];
            if ((n.global && (n.lastIndex = 0), n.test(e))) return r;
          }
          return null;
        }));
    }
  },
  zd = new Rd(),
  Bd = class {
    constructor(e) {
      ((this.manager = e === void 0 ? zd : e),
        (this.crossOrigin = `anonymous`),
        (this.withCredentials = !1),
        (this.path = ``),
        (this.resourcePath = ``),
        (this.requestHeader = {}));
    }
    load() {}
    loadAsync(e, t) {
      let n = this;
      return new Promise(function (r, i) {
        n.load(e, r, t, i);
      });
    }
    parse() {}
    setCrossOrigin(e) {
      return ((this.crossOrigin = e), this);
    }
    setWithCredentials(e) {
      return ((this.withCredentials = e), this);
    }
    setPath(e) {
      return ((this.path = e), this);
    }
    setResourcePath(e) {
      return ((this.resourcePath = e), this);
    }
    setRequestHeader(e) {
      return ((this.requestHeader = e), this);
    }
  },
  Vd = {},
  Hd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      (e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = Ld.get(e);
      if (i !== void 0)
        return (
          this.manager.itemStart(e),
          setTimeout(() => {
            (t && t(i), this.manager.itemEnd(e));
          }, 0),
          i
        );
      if (Vd[e] !== void 0) {
        Vd[e].push({ onLoad: t, onProgress: n, onError: r });
        return;
      }
      ((Vd[e] = []), Vd[e].push({ onLoad: t, onProgress: n, onError: r }));
      let a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? `include` : `same-origin`,
      });
      (fetch(a)
        .then((t) => {
          if (t.status === 200 || t.status === 0) {
            t.status === 0 &&
              console.warn(`THREE.FileLoader: HTTP Status 0 received.`);
            let n = Vd[e],
              r = t.body.getReader(),
              i = t.headers.get(`Content-Length`),
              a = i ? parseInt(i) : 0,
              o = a !== 0,
              s = 0;
            return new ReadableStream({
              start(e) {
                t();
                function t() {
                  r.read().then(({ done: r, value: i }) => {
                    if (r) e.close();
                    else {
                      s += i.byteLength;
                      let r = new ProgressEvent(`progress`, {
                        lengthComputable: o,
                        loaded: s,
                        total: a,
                      });
                      for (let e = 0, t = n.length; e < t; e++) {
                        let t = n[e];
                        t.onProgress && t.onProgress(r);
                      }
                      (e.enqueue(i), t());
                    }
                  });
                }
              },
            });
          } else
            throw Error(
              `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,
            );
        })
        .then((e) => {
          let t = new Response(e);
          switch (this.responseType) {
            case `arraybuffer`:
              return t.arrayBuffer();
            case `blob`:
              return t.blob();
            case `document`:
              return t
                .text()
                .then((e) => new DOMParser().parseFromString(e, this.mimeType));
            case `json`:
              return t.json();
            default:
              return t.text();
          }
        })
        .then((t) => {
          Ld.add(e, t);
          let n = Vd[e];
          delete Vd[e];
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e];
            r.onLoad && r.onLoad(t);
          }
          this.manager.itemEnd(e);
        })
        .catch((t) => {
          let n = Vd[e];
          delete Vd[e];
          for (let e = 0, r = n.length; e < r; e++) {
            let r = n[e];
            r.onError && r.onError(t);
          }
          (this.manager.itemError(e), this.manager.itemEnd(e));
        }),
        this.manager.itemStart(e));
    }
    setResponseType(e) {
      return ((this.responseType = e), this);
    }
    setMimeType(e) {
      return ((this.mimeType = e), this);
    }
  },
  Ud = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = new Hd(this.manager);
      (a.setPath(this.path),
        a.setRequestHeader(this.requestHeader),
        a.setWithCredentials(this.withCredentials),
        a.load(
          e,
          function (n) {
            try {
              t(i.parse(JSON.parse(n)));
            } catch (t) {
              (r ? r(t) : console.error(t), i.manager.itemError(e));
            }
          },
          n,
          r,
        ));
    }
    parse(e) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let r = Pd.parse(e[n]);
        t.push(r);
      }
      return t;
    }
  },
  Wd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = [],
        o = new Tl(),
        s = new Hd(this.manager);
      (s.setPath(this.path),
        s.setResponseType(`arraybuffer`),
        s.setRequestHeader(this.requestHeader),
        s.setWithCredentials(i.withCredentials));
      let c = 0;
      function l(l) {
        s.load(
          e[l],
          function (e) {
            let n = i.parse(e, !0);
            ((a[l] = {
              width: n.width,
              height: n.height,
              format: n.format,
              mipmaps: n.mipmaps,
            }),
              (c += 1),
              c === 6 &&
                (n.mipmapCount === 1 && (o.minFilter = P),
                (o.image = a),
                (o.format = n.format),
                (o.needsUpdate = !0),
                t && t(o)));
          },
          n,
          r,
        );
      }
      if (Array.isArray(e)) for (let t = 0, n = e.length; t < n; ++t) l(t);
      else
        s.load(
          e,
          function (e) {
            let n = i.parse(e, !0);
            if (n.isCubemap) {
              let e = n.mipmaps.length / n.mipmapCount;
              for (let t = 0; t < e; t++) {
                a[t] = { mipmaps: [] };
                for (let e = 0; e < n.mipmapCount; e++)
                  (a[t].mipmaps.push(n.mipmaps[t * n.mipmapCount + e]),
                    (a[t].format = n.format),
                    (a[t].width = n.width),
                    (a[t].height = n.height));
              }
              o.image = a;
            } else
              ((o.image.width = n.width),
                (o.image.height = n.height),
                (o.mipmaps = n.mipmaps));
            (n.mipmapCount === 1 && (o.minFilter = P),
              (o.format = n.format),
              (o.needsUpdate = !0),
              t && t(o));
          },
          n,
          r,
        );
      return o;
    }
  },
  Gd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      (this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = this,
        a = Ld.get(e);
      if (a !== void 0)
        return (
          i.manager.itemStart(e),
          setTimeout(function () {
            (t && t(a), i.manager.itemEnd(e));
          }, 0),
          a
        );
      let o = Nn(`img`);
      function s() {
        (l(), Ld.add(e, this), t && t(this), i.manager.itemEnd(e));
      }
      function c(t) {
        (l(), r && r(t), i.manager.itemError(e), i.manager.itemEnd(e));
      }
      function l() {
        (o.removeEventListener(`load`, s, !1),
          o.removeEventListener(`error`, c, !1));
      }
      return (
        o.addEventListener(`load`, s, !1),
        o.addEventListener(`error`, c, !1),
        e.substr(0, 5) !== `data:` &&
          this.crossOrigin !== void 0 &&
          (o.crossOrigin = this.crossOrigin),
        i.manager.itemStart(e),
        (o.src = e),
        o
      );
    }
  },
  Kd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = new aa(),
        a = new Gd(this.manager);
      (a.setCrossOrigin(this.crossOrigin), a.setPath(this.path));
      let o = 0;
      function s(n) {
        a.load(
          e[n],
          function (e) {
            ((i.images[n] = e),
              o++,
              o === 6 && ((i.needsUpdate = !0), t && t(i)));
          },
          void 0,
          r,
        );
      }
      for (let t = 0; t < e.length; ++t) s(t);
      return i;
    }
  },
  qd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = new Xc(),
        o = new Hd(this.manager);
      return (
        o.setResponseType(`arraybuffer`),
        o.setRequestHeader(this.requestHeader),
        o.setPath(this.path),
        o.setWithCredentials(i.withCredentials),
        o.load(
          e,
          function (e) {
            let n = i.parse(e);
            n &&
              (n.image === void 0
                ? n.data !== void 0 &&
                  ((a.image.width = n.width),
                  (a.image.height = n.height),
                  (a.image.data = n.data))
                : (a.image = n.image),
              (a.wrapS = n.wrapS === void 0 ? A : n.wrapS),
              (a.wrapT = n.wrapT === void 0 ? A : n.wrapT),
              (a.magFilter = n.magFilter === void 0 ? P : n.magFilter),
              (a.minFilter = n.minFilter === void 0 ? P : n.minFilter),
              (a.anisotropy = n.anisotropy === void 0 ? 1 : n.anisotropy),
              n.encoding !== void 0 && (a.encoding = n.encoding),
              n.flipY !== void 0 && (a.flipY = n.flipY),
              n.format !== void 0 && (a.format = n.format),
              n.type !== void 0 && (a.type = n.type),
              n.mipmaps !== void 0 &&
                ((a.mipmaps = n.mipmaps), (a.minFilter = se)),
              n.mipmapCount === 1 && (a.minFilter = P),
              n.generateMipmaps !== void 0 &&
                (a.generateMipmaps = n.generateMipmaps),
              (a.needsUpdate = !0),
              t && t(a, n));
          },
          n,
          r,
        ),
        a
      );
    }
  },
  Jd = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = new Rn(),
        a = new Gd(this.manager);
      return (
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(
          e,
          function (e) {
            ((i.image = e), (i.needsUpdate = !0), t !== void 0 && t(i));
          },
          n,
          r,
        ),
        i
      );
    }
  },
  Yd = class extends U {
    constructor(e, t = 1) {
      (super(),
        (this.type = `Light`),
        (this.color = new W(e)),
        (this.intensity = t));
    }
    dispose() {}
    copy(e) {
      return (
        super.copy(e),
        this.color.copy(e.color),
        (this.intensity = e.intensity),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.color = this.color.getHex()),
        (t.object.intensity = this.intensity),
        this.groundColor !== void 0 &&
          (t.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (t.object.distance = this.distance),
        this.angle !== void 0 && (t.object.angle = this.angle),
        this.decay !== void 0 && (t.object.decay = this.decay),
        this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
        t
      );
    }
  };
Yd.prototype.isLight = !0;
var Xd = class extends Yd {
  constructor(e, t, n) {
    (super(e, n),
      (this.type = `HemisphereLight`),
      this.position.copy(U.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new W(t)));
  }
  copy(e) {
    return (
      Yd.prototype.copy.call(this, e),
      this.groundColor.copy(e.groundColor),
      this
    );
  }
};
Xd.prototype.isHemisphereLight = !0;
var Zd = new H(),
  Qd = new V(),
  $d = new V(),
  ef = class {
    constructor(e) {
      ((this.camera = e),
        (this.bias = 0),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new z(512, 512)),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new H()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new pa()),
        (this._frameExtents = new z(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new B(0, 0, 1, 1)]));
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(e) {
      let t = this.camera,
        n = this.matrix;
      (Qd.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Qd),
        $d.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt($d),
        t.updateMatrixWorld(),
        Zd.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Zd),
        n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(t.projectionMatrix),
        n.multiply(t.matrixWorldInverse));
    }
    getViewport(e) {
      return this._viewports[e];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
    }
    copy(e) {
      return (
        (this.camera = e.camera.clone()),
        (this.bias = e.bias),
        (this.radius = e.radius),
        this.mapSize.copy(e.mapSize),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let e = {};
      return (
        this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
          (e.mapSize = this.mapSize.toArray()),
        (e.camera = this.camera.toJSON(!1).object),
        delete e.camera.matrix,
        e
      );
    }
  },
  tf = class extends ef {
    constructor() {
      (super(new ta(50, 1, 0.5, 500)), (this.focus = 1));
    }
    updateMatrices(e) {
      let t = this.camera,
        n = an * 2 * e.angle * this.focus,
        r = this.mapSize.width / this.mapSize.height,
        i = e.distance || t.far;
      ((n !== t.fov || r !== t.aspect || i !== t.far) &&
        ((t.fov = n), (t.aspect = r), (t.far = i), t.updateProjectionMatrix()),
        super.updateMatrices(e));
    }
    copy(e) {
      return (super.copy(e), (this.focus = e.focus), this);
    }
  };
tf.prototype.isSpotLightShadow = !0;
var nf = class extends Yd {
  constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 1) {
    (super(e, t),
      (this.type = `SpotLight`),
      this.position.copy(U.DefaultUp),
      this.updateMatrix(),
      (this.target = new U()),
      (this.distance = n),
      (this.angle = r),
      (this.penumbra = i),
      (this.decay = a),
      (this.shadow = new tf()));
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
};
nf.prototype.isSpotLight = !0;
var rf = new H(),
  af = new V(),
  of = new V(),
  sf = class extends ef {
    constructor() {
      (super(new ta(90, 1, 0.5, 500)),
        (this._frameExtents = new z(4, 2)),
        (this._viewportCount = 6),
        (this._viewports = [
          new B(2, 1, 1, 1),
          new B(0, 1, 1, 1),
          new B(3, 1, 1, 1),
          new B(1, 1, 1, 1),
          new B(3, 0, 1, 1),
          new B(1, 0, 1, 1),
        ]),
        (this._cubeDirections = [
          new V(1, 0, 0),
          new V(-1, 0, 0),
          new V(0, 0, 1),
          new V(0, 0, -1),
          new V(0, 1, 0),
          new V(0, -1, 0),
        ]),
        (this._cubeUps = [
          new V(0, 1, 0),
          new V(0, 1, 0),
          new V(0, 1, 0),
          new V(0, 1, 0),
          new V(0, 0, 1),
          new V(0, 0, -1),
        ]));
    }
    updateMatrices(e, t = 0) {
      let n = this.camera,
        r = this.matrix,
        i = e.distance || n.far;
      (i !== n.far && ((n.far = i), n.updateProjectionMatrix()),
        af.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(af),
        of.copy(n.position),
        of.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(of),
        n.updateMatrixWorld(),
        r.makeTranslation(-af.x, -af.y, -af.z),
        rf.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(rf));
    }
  };
sf.prototype.isPointLightShadow = !0;
var cf = class extends Yd {
  constructor(e, t, n = 0, r = 1) {
    (super(e, t),
      (this.type = `PointLight`),
      (this.distance = n),
      (this.decay = r),
      (this.shadow = new sf()));
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
};
cf.prototype.isPointLight = !0;
var lf = class extends ef {
  constructor() {
    super(new wa(-5, 5, 5, -5, 0.5, 500));
  }
};
lf.prototype.isDirectionalLightShadow = !0;
var uf = class extends Yd {
  constructor(e, t) {
    (super(e, t),
      (this.type = `DirectionalLight`),
      this.position.copy(U.DefaultUp),
      this.updateMatrix(),
      (this.target = new U()),
      (this.shadow = new lf()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
};
uf.prototype.isDirectionalLight = !0;
var df = class extends Yd {
  constructor(e, t) {
    (super(e, t), (this.type = `AmbientLight`));
  }
};
df.prototype.isAmbientLight = !0;
var ff = class extends Yd {
  constructor(e, t, n = 10, r = 10) {
    (super(e, t),
      (this.type = `RectAreaLight`),
      (this.width = n),
      (this.height = r));
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.width = e.width),
      (this.height = e.height),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return ((t.object.width = this.width), (t.object.height = this.height), t);
  }
};
ff.prototype.isRectAreaLight = !0;
var pf = class {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new V());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    let n = e.x,
      r = e.y,
      i = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.282095),
      t.addScaledVector(a[1], 0.488603 * r),
      t.addScaledVector(a[2], 0.488603 * i),
      t.addScaledVector(a[3], 0.488603 * n),
      t.addScaledVector(a[4], n * r * 1.092548),
      t.addScaledVector(a[5], r * i * 1.092548),
      t.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)),
      t.addScaledVector(a[7], n * i * 1.092548),
      t.addScaledVector(a[8], 0.546274 * (n * n - r * r)),
      t
    );
  }
  getIrradianceAt(e, t) {
    let n = e.x,
      r = e.y,
      i = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.886227),
      t.addScaledVector(a[1], 2 * 0.511664 * r),
      t.addScaledVector(a[2], 2 * 0.511664 * i),
      t.addScaledVector(a[3], 2 * 0.511664 * n),
      t.addScaledVector(a[4], 2 * 0.429043 * n * r),
      t.addScaledVector(a[5], 2 * 0.429043 * r * i),
      t.addScaledVector(a[6], 0.743125 * i * i - 0.247708),
      t.addScaledVector(a[7], 2 * 0.429043 * n * i),
      t.addScaledVector(a[8], 0.429043 * (n * n - r * r)),
      t
    );
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    let n = this.coefficients;
    for (let r = 0; r < 9; r++) n[r].fromArray(e, t + r * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.coefficients;
    for (let r = 0; r < 9; r++) n[r].toArray(e, t + r * 3);
    return e;
  }
  static getBasisAt(e, t) {
    let n = e.x,
      r = e.y,
      i = e.z;
    ((t[0] = 0.282095),
      (t[1] = 0.488603 * r),
      (t[2] = 0.488603 * i),
      (t[3] = 0.488603 * n),
      (t[4] = 1.092548 * n * r),
      (t[5] = 1.092548 * r * i),
      (t[6] = 0.315392 * (3 * i * i - 1)),
      (t[7] = 1.092548 * n * i),
      (t[8] = 0.546274 * (n * n - r * r)));
  }
};
pf.prototype.isSphericalHarmonics3 = !0;
var mf = class extends Yd {
  constructor(e = new pf(), t = 1) {
    (super(void 0, t), (this.sh = e));
  }
  copy(e) {
    return (super.copy(e), this.sh.copy(e.sh), this);
  }
  fromJSON(e) {
    return ((this.intensity = e.intensity), this.sh.fromArray(e.sh), this);
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return ((t.object.sh = this.sh.toArray()), t);
  }
};
mf.prototype.isLightProbe = !0;
var hf = class extends Bd {
    constructor(e) {
      (super(e), (this.textures = {}));
    }
    load(e, t, n, r) {
      let i = this,
        a = new Hd(i.manager);
      (a.setPath(i.path),
        a.setRequestHeader(i.requestHeader),
        a.setWithCredentials(i.withCredentials),
        a.load(
          e,
          function (n) {
            try {
              t(i.parse(JSON.parse(n)));
            } catch (t) {
              (r ? r(t) : console.error(t), i.manager.itemError(e));
            }
          },
          n,
          r,
        ));
    }
    parse(e) {
      let t = this.textures;
      function n(e) {
        return (
          t[e] === void 0 &&
            console.warn(`THREE.MaterialLoader: Undefined texture`, e),
          t[e]
        );
      }
      let r = new xd[e.type]();
      if (
        (e.uuid !== void 0 && (r.uuid = e.uuid),
        e.name !== void 0 && (r.name = e.name),
        e.color !== void 0 && r.color !== void 0 && r.color.setHex(e.color),
        e.roughness !== void 0 && (r.roughness = e.roughness),
        e.metalness !== void 0 && (r.metalness = e.metalness),
        e.sheen !== void 0 && (r.sheen = e.sheen),
        e.sheenColor !== void 0 &&
          (r.sheenColor = new W().setHex(e.sheenColor)),
        e.sheenRoughness !== void 0 && (r.sheenRoughness = e.sheenRoughness),
        e.emissive !== void 0 &&
          r.emissive !== void 0 &&
          r.emissive.setHex(e.emissive),
        e.specular !== void 0 &&
          r.specular !== void 0 &&
          r.specular.setHex(e.specular),
        e.specularIntensity !== void 0 &&
          (r.specularIntensity = e.specularIntensity),
        e.specularColor !== void 0 &&
          r.specularColor !== void 0 &&
          r.specularColor.setHex(e.specularColor),
        e.shininess !== void 0 && (r.shininess = e.shininess),
        e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat),
        e.clearcoatRoughness !== void 0 &&
          (r.clearcoatRoughness = e.clearcoatRoughness),
        e.transmission !== void 0 && (r.transmission = e.transmission),
        e.thickness !== void 0 && (r.thickness = e.thickness),
        e.attenuationDistance !== void 0 &&
          (r.attenuationDistance = e.attenuationDistance),
        e.attenuationColor !== void 0 &&
          r.attenuationColor !== void 0 &&
          r.attenuationColor.setHex(e.attenuationColor),
        e.fog !== void 0 && (r.fog = e.fog),
        e.flatShading !== void 0 && (r.flatShading = e.flatShading),
        e.blending !== void 0 && (r.blending = e.blending),
        e.combine !== void 0 && (r.combine = e.combine),
        e.side !== void 0 && (r.side = e.side),
        e.shadowSide !== void 0 && (r.shadowSide = e.shadowSide),
        e.opacity !== void 0 && (r.opacity = e.opacity),
        e.format !== void 0 && (r.format = e.format),
        e.transparent !== void 0 && (r.transparent = e.transparent),
        e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest),
        e.depthTest !== void 0 && (r.depthTest = e.depthTest),
        e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite),
        e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite),
        e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite),
        e.stencilWriteMask !== void 0 &&
          (r.stencilWriteMask = e.stencilWriteMask),
        e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc),
        e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef),
        e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask),
        e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail),
        e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail),
        e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass),
        e.wireframe !== void 0 && (r.wireframe = e.wireframe),
        e.wireframeLinewidth !== void 0 &&
          (r.wireframeLinewidth = e.wireframeLinewidth),
        e.wireframeLinecap !== void 0 &&
          (r.wireframeLinecap = e.wireframeLinecap),
        e.wireframeLinejoin !== void 0 &&
          (r.wireframeLinejoin = e.wireframeLinejoin),
        e.rotation !== void 0 && (r.rotation = e.rotation),
        e.linewidth !== 1 && (r.linewidth = e.linewidth),
        e.dashSize !== void 0 && (r.dashSize = e.dashSize),
        e.gapSize !== void 0 && (r.gapSize = e.gapSize),
        e.scale !== void 0 && (r.scale = e.scale),
        e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset),
        e.polygonOffsetFactor !== void 0 &&
          (r.polygonOffsetFactor = e.polygonOffsetFactor),
        e.polygonOffsetUnits !== void 0 &&
          (r.polygonOffsetUnits = e.polygonOffsetUnits),
        e.dithering !== void 0 && (r.dithering = e.dithering),
        e.alphaToCoverage !== void 0 && (r.alphaToCoverage = e.alphaToCoverage),
        e.premultipliedAlpha !== void 0 &&
          (r.premultipliedAlpha = e.premultipliedAlpha),
        e.visible !== void 0 && (r.visible = e.visible),
        e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped),
        e.userData !== void 0 && (r.userData = e.userData),
        e.vertexColors !== void 0 &&
          (typeof e.vertexColors == `number`
            ? (r.vertexColors = e.vertexColors > 0)
            : (r.vertexColors = e.vertexColors)),
        e.uniforms !== void 0)
      )
        for (let t in e.uniforms) {
          let i = e.uniforms[t];
          switch (((r.uniforms[t] = {}), i.type)) {
            case `t`:
              r.uniforms[t].value = n(i.value);
              break;
            case `c`:
              r.uniforms[t].value = new W().setHex(i.value);
              break;
            case `v2`:
              r.uniforms[t].value = new z().fromArray(i.value);
              break;
            case `v3`:
              r.uniforms[t].value = new V().fromArray(i.value);
              break;
            case `v4`:
              r.uniforms[t].value = new B().fromArray(i.value);
              break;
            case `m3`:
              r.uniforms[t].value = new kn().fromArray(i.value);
              break;
            case `m4`:
              r.uniforms[t].value = new H().fromArray(i.value);
              break;
            default:
              r.uniforms[t].value = i.value;
          }
        }
      if (
        (e.defines !== void 0 && (r.defines = e.defines),
        e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader),
        e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader),
        e.extensions !== void 0)
      )
        for (let t in e.extensions) r.extensions[t] = e.extensions[t];
      if (
        (e.shading !== void 0 && (r.flatShading = e.shading === 1),
        e.size !== void 0 && (r.size = e.size),
        e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation),
        e.map !== void 0 && (r.map = n(e.map)),
        e.matcap !== void 0 && (r.matcap = n(e.matcap)),
        e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap)),
        e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)),
        e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale),
        e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)),
        e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType),
        e.normalScale !== void 0)
      ) {
        let t = e.normalScale;
        (Array.isArray(t) === !1 && (t = [t, t]),
          (r.normalScale = new z().fromArray(t)));
      }
      return (
        e.displacementMap !== void 0 &&
          (r.displacementMap = n(e.displacementMap)),
        e.displacementScale !== void 0 &&
          (r.displacementScale = e.displacementScale),
        e.displacementBias !== void 0 &&
          (r.displacementBias = e.displacementBias),
        e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)),
        e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)),
        e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)),
        e.emissiveIntensity !== void 0 &&
          (r.emissiveIntensity = e.emissiveIntensity),
        e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)),
        e.specularIntensityMap !== void 0 &&
          (r.specularIntensityMap = n(e.specularIntensityMap)),
        e.specularColorMap !== void 0 &&
          (r.specularColorMap = n(e.specularColorMap)),
        e.envMap !== void 0 && (r.envMap = n(e.envMap)),
        e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity),
        e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity),
        e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio),
        e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)),
        e.lightMapIntensity !== void 0 &&
          (r.lightMapIntensity = e.lightMapIntensity),
        e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)),
        e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity),
        e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)),
        e.clearcoatMap !== void 0 && (r.clearcoatMap = n(e.clearcoatMap)),
        e.clearcoatRoughnessMap !== void 0 &&
          (r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)),
        e.clearcoatNormalMap !== void 0 &&
          (r.clearcoatNormalMap = n(e.clearcoatNormalMap)),
        e.clearcoatNormalScale !== void 0 &&
          (r.clearcoatNormalScale = new z().fromArray(e.clearcoatNormalScale)),
        e.transmissionMap !== void 0 &&
          (r.transmissionMap = n(e.transmissionMap)),
        e.thicknessMap !== void 0 && (r.thicknessMap = n(e.thicknessMap)),
        e.sheenColorMap !== void 0 && (r.sheenColorMap = n(e.sheenColorMap)),
        e.sheenRoughnessMap !== void 0 &&
          (r.sheenRoughnessMap = n(e.sheenRoughnessMap)),
        r
      );
    }
    setTextures(e) {
      return ((this.textures = e), this);
    }
  },
  gf = class {
    static decodeText(e) {
      if (typeof TextDecoder < `u`) return new TextDecoder().decode(e);
      let t = ``;
      for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
      try {
        return decodeURIComponent(escape(t));
      } catch {
        return t;
      }
    }
    static extractUrlBase(e) {
      let t = e.lastIndexOf(`/`);
      return t === -1 ? `./` : e.substr(0, t + 1);
    }
    static resolveURL(e, t) {
      return typeof e != `string` || e === ``
        ? ``
        : (/^https?:\/\//i.test(t) &&
            /^\//.test(e) &&
            (t = t.replace(/(^https?:\/\/[^\/]+).*/i, `$1`)),
          /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e)
            ? e
            : t + e);
    }
  },
  _f = class extends J {
    constructor() {
      (super(),
        (this.type = `InstancedBufferGeometry`),
        (this.instanceCount = 1 / 0));
    }
    copy(e) {
      return (super.copy(e), (this.instanceCount = e.instanceCount), this);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let e = super.toJSON(this);
      return (
        (e.instanceCount = this.instanceCount),
        (e.isInstancedBufferGeometry = !0),
        e
      );
    }
  };
_f.prototype.isInstancedBufferGeometry = !0;
var vf = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = new Hd(i.manager);
      (a.setPath(i.path),
        a.setRequestHeader(i.requestHeader),
        a.setWithCredentials(i.withCredentials),
        a.load(
          e,
          function (n) {
            try {
              t(i.parse(JSON.parse(n)));
            } catch (t) {
              (r ? r(t) : console.error(t), i.manager.itemError(e));
            }
          },
          n,
          r,
        ));
    }
    parse(e) {
      let t = {},
        n = {};
      function r(e, n) {
        if (t[n] !== void 0) return t[n];
        let r = e.interleavedBuffers[n],
          a = i(e, r.buffer),
          o = new xc(Mn(r.type, a), r.stride);
        return ((o.uuid = r.uuid), (t[n] = o), o);
      }
      function i(e, t) {
        if (n[t] !== void 0) return n[t];
        let r = e.arrayBuffers[t],
          i = new Uint32Array(r).buffer;
        return ((n[t] = i), i);
      }
      let a = e.isInstancedBufferGeometry ? new _f() : new J(),
        o = e.data.index;
      if (o !== void 0) {
        let e = Mn(o.type, o.array);
        a.setIndex(new K(e, 1));
      }
      let s = e.data.attributes;
      for (let t in s) {
        let n = s[t],
          i;
        if (n.isInterleavedBufferAttribute)
          i = new Cc(r(e.data, n.data), n.itemSize, n.offset, n.normalized);
        else {
          let e = Mn(n.type, n.array);
          i = new (n.isInstancedBufferAttribute ? el : K)(
            e,
            n.itemSize,
            n.normalized,
          );
        }
        (n.name !== void 0 && (i.name = n.name),
          n.usage !== void 0 && i.setUsage(n.usage),
          n.updateRange !== void 0 &&
            ((i.updateRange.offset = n.updateRange.offset),
            (i.updateRange.count = n.updateRange.count)),
          a.setAttribute(t, i));
      }
      let c = e.data.morphAttributes;
      if (c)
        for (let t in c) {
          let n = c[t],
            i = [];
          for (let t = 0, a = n.length; t < a; t++) {
            let a = n[t],
              o;
            ((o = a.isInterleavedBufferAttribute
              ? new Cc(r(e.data, a.data), a.itemSize, a.offset, a.normalized)
              : new K(Mn(a.type, a.array), a.itemSize, a.normalized)),
              a.name !== void 0 && (o.name = a.name),
              i.push(o));
          }
          a.morphAttributes[t] = i;
        }
      e.data.morphTargetsRelative && (a.morphTargetsRelative = !0);
      let l = e.data.groups || e.data.drawcalls || e.data.offsets;
      if (l !== void 0)
        for (let e = 0, t = l.length; e !== t; ++e) {
          let t = l[e];
          a.addGroup(t.start, t.count, t.materialIndex);
        }
      let u = e.data.boundingSphere;
      if (u !== void 0) {
        let e = new V();
        (u.center !== void 0 && e.fromArray(u.center),
          (a.boundingSphere = new dr(e, u.radius)));
      }
      return (
        e.name && (a.name = e.name),
        e.userData && (a.userData = e.userData),
        a
      );
    }
  },
  yf = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = this.path === `` ? gf.extractUrlBase(e) : this.path;
      this.resourcePath = this.resourcePath || a;
      let o = new Hd(this.manager);
      (o.setPath(this.path),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(
          e,
          function (n) {
            let a = null;
            try {
              a = JSON.parse(n);
            } catch (t) {
              (r !== void 0 && r(t),
                console.error(
                  `THREE:ObjectLoader: Can't parse ` + e + `.`,
                  t.message,
                ));
              return;
            }
            let o = a.metadata;
            if (
              o === void 0 ||
              o.type === void 0 ||
              o.type.toLowerCase() === `geometry`
            ) {
              console.error(`THREE.ObjectLoader: Can't load ` + e);
              return;
            }
            i.parse(a, t);
          },
          n,
          r,
        ));
    }
    async loadAsync(e, t) {
      let n = this,
        r = this.path === `` ? gf.extractUrlBase(e) : this.path;
      this.resourcePath = this.resourcePath || r;
      let i = new Hd(this.manager);
      (i.setPath(this.path),
        i.setRequestHeader(this.requestHeader),
        i.setWithCredentials(this.withCredentials));
      let a = await i.loadAsync(e, t),
        o = JSON.parse(a),
        s = o.metadata;
      if (
        s === void 0 ||
        s.type === void 0 ||
        s.type.toLowerCase() === `geometry`
      )
        throw Error(`THREE.ObjectLoader: Can't load ` + e);
      return await n.parseAsync(o);
    }
    parse(e, t) {
      let n = this.parseAnimations(e.animations),
        r = this.parseShapes(e.shapes),
        i = this.parseGeometries(e.geometries, r),
        a = this.parseImages(e.images, function () {
          t !== void 0 && t(c);
        }),
        o = this.parseTextures(e.textures, a),
        s = this.parseMaterials(e.materials, o),
        c = this.parseObject(e.object, i, s, o, n),
        l = this.parseSkeletons(e.skeletons, c);
      if ((this.bindSkeletons(c, l), t !== void 0)) {
        let e = !1;
        for (let t in a)
          if (a[t] instanceof HTMLImageElement) {
            e = !0;
            break;
          }
        e === !1 && t(c);
      }
      return c;
    }
    async parseAsync(e) {
      let t = this.parseAnimations(e.animations),
        n = this.parseShapes(e.shapes),
        r = this.parseGeometries(e.geometries, n),
        i = await this.parseImagesAsync(e.images),
        a = this.parseTextures(e.textures, i),
        o = this.parseMaterials(e.materials, a),
        s = this.parseObject(e.object, r, o, a, t),
        c = this.parseSkeletons(e.skeletons, s);
      return (this.bindSkeletons(s, c), s);
    }
    parseShapes(e) {
      let t = {};
      if (e !== void 0)
        for (let n = 0, r = e.length; n < r; n++) {
          let r = new pu().fromJSON(e[n]);
          t[r.uuid] = r;
        }
      return t;
    }
    parseSkeletons(e, t) {
      let n = {},
        r = {};
      if (
        (t.traverse(function (e) {
          e.isBone && (r[e.uuid] = e);
        }),
        e !== void 0)
      )
        for (let t = 0, i = e.length; t < i; t++) {
          let i = new $c().fromJSON(e[t], r);
          n[i.uuid] = i;
        }
      return n;
    }
    parseGeometries(e, t) {
      let n = {};
      if (e !== void 0) {
        let r = new vf();
        for (let i = 0, a = e.length; i < a; i++) {
          let a,
            o = e[i];
          switch (o.type) {
            case `BufferGeometry`:
            case `InstancedBufferGeometry`:
              a = r.parse(o);
              break;
            case `Geometry`:
              console.error(
                `THREE.ObjectLoader: The legacy Geometry type is no longer supported.`,
              );
              break;
            default:
              o.type in dd
                ? (a = dd[o.type].fromJSON(o, t))
                : console.warn(
                    `THREE.ObjectLoader: Unsupported geometry type "${o.type}"`,
                  );
          }
          ((a.uuid = o.uuid),
            o.name !== void 0 && (a.name = o.name),
            a.isBufferGeometry === !0 &&
              o.userData !== void 0 &&
              (a.userData = o.userData),
            (n[o.uuid] = a));
        }
      }
      return n;
    }
    parseMaterials(e, t) {
      let n = {},
        r = {};
      if (e !== void 0) {
        let i = new hf();
        i.setTextures(t);
        for (let t = 0, a = e.length; t < a; t++) {
          let a = e[t];
          if (a.type === `MultiMaterial`) {
            let e = [];
            for (let t = 0; t < a.materials.length; t++) {
              let r = a.materials[t];
              (n[r.uuid] === void 0 && (n[r.uuid] = i.parse(r)),
                e.push(n[r.uuid]));
            }
            r[a.uuid] = e;
          } else
            (n[a.uuid] === void 0 && (n[a.uuid] = i.parse(a)),
              (r[a.uuid] = n[a.uuid]));
        }
      }
      return r;
    }
    parseAnimations(e) {
      let t = {};
      if (e !== void 0)
        for (let n = 0; n < e.length; n++) {
          let r = e[n],
            i = Pd.parse(r);
          t[i.uuid] = i;
        }
      return t;
    }
    parseImages(e, t) {
      let n = this,
        r = {},
        i;
      function a(e) {
        return (
          n.manager.itemStart(e),
          i.load(
            e,
            function () {
              n.manager.itemEnd(e);
            },
            void 0,
            function () {
              (n.manager.itemError(e), n.manager.itemEnd(e));
            },
          )
        );
      }
      function o(e) {
        if (typeof e == `string`) {
          let t = e;
          return a(
            /^(\/\/)|([a-z]+:(\/\/)?)/i.test(t) ? t : n.resourcePath + t,
          );
        } else if (e.data)
          return { data: Mn(e.type, e.data), width: e.width, height: e.height };
        else return null;
      }
      if (e !== void 0 && e.length > 0) {
        ((i = new Gd(new Rd(t))), i.setCrossOrigin(this.crossOrigin));
        for (let t = 0, n = e.length; t < n; t++) {
          let n = e[t],
            i = n.url;
          if (Array.isArray(i)) {
            r[n.uuid] = [];
            for (let e = 0, t = i.length; e < t; e++) {
              let t = i[e],
                a = o(t);
              a !== null &&
                (a instanceof HTMLImageElement
                  ? r[n.uuid].push(a)
                  : r[n.uuid].push(new Xc(a.data, a.width, a.height)));
            }
          } else {
            let e = o(n.url);
            e !== null && (r[n.uuid] = e);
          }
        }
      }
      return r;
    }
    async parseImagesAsync(e) {
      let t = this,
        n = {},
        r;
      async function i(e) {
        if (typeof e == `string`) {
          let n = e,
            i = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : t.resourcePath + n;
          return await r.loadAsync(i);
        } else if (e.data)
          return { data: Mn(e.type, e.data), width: e.width, height: e.height };
        else return null;
      }
      if (e !== void 0 && e.length > 0) {
        ((r = new Gd(this.manager)), r.setCrossOrigin(this.crossOrigin));
        for (let t = 0, r = e.length; t < r; t++) {
          let r = e[t],
            a = r.url;
          if (Array.isArray(a)) {
            n[r.uuid] = [];
            for (let e = 0, t = a.length; e < t; e++) {
              let t = a[e],
                o = await i(t);
              o !== null &&
                (o instanceof HTMLImageElement
                  ? n[r.uuid].push(o)
                  : n[r.uuid].push(new Xc(o.data, o.width, o.height)));
            }
          } else {
            let e = await i(r.url);
            e !== null && (n[r.uuid] = e);
          }
        }
      }
      return n;
    }
    parseTextures(e, t) {
      function n(e, t) {
        return typeof e == `number`
          ? e
          : (console.warn(
              `THREE.ObjectLoader.parseTexture: Constant should be in numeric form.`,
              e,
            ),
            t[e]);
      }
      let r = {};
      if (e !== void 0)
        for (let i = 0, a = e.length; i < a; i++) {
          let a = e[i];
          (a.image === void 0 &&
            console.warn(
              `THREE.ObjectLoader: No "image" specified for`,
              a.uuid,
            ),
            t[a.image] === void 0 &&
              console.warn(`THREE.ObjectLoader: Undefined image`, a.image));
          let o,
            s = t[a.image];
          (Array.isArray(s)
            ? ((o = new aa(s)), s.length === 6 && (o.needsUpdate = !0))
            : ((o =
                s && s.data ? new Xc(s.data, s.width, s.height) : new Rn(s)),
              s && (o.needsUpdate = !0)),
            (o.uuid = a.uuid),
            a.name !== void 0 && (o.name = a.name),
            a.mapping !== void 0 && (o.mapping = n(a.mapping, bf)),
            a.offset !== void 0 && o.offset.fromArray(a.offset),
            a.repeat !== void 0 && o.repeat.fromArray(a.repeat),
            a.center !== void 0 && o.center.fromArray(a.center),
            a.rotation !== void 0 && (o.rotation = a.rotation),
            a.wrap !== void 0 &&
              ((o.wrapS = n(a.wrap[0], xf)), (o.wrapT = n(a.wrap[1], xf))),
            a.format !== void 0 && (o.format = a.format),
            a.type !== void 0 && (o.type = a.type),
            a.encoding !== void 0 && (o.encoding = a.encoding),
            a.minFilter !== void 0 && (o.minFilter = n(a.minFilter, Sf)),
            a.magFilter !== void 0 && (o.magFilter = n(a.magFilter, Sf)),
            a.anisotropy !== void 0 && (o.anisotropy = a.anisotropy),
            a.flipY !== void 0 && (o.flipY = a.flipY),
            a.premultiplyAlpha !== void 0 &&
              (o.premultiplyAlpha = a.premultiplyAlpha),
            a.unpackAlignment !== void 0 &&
              (o.unpackAlignment = a.unpackAlignment),
            a.userData !== void 0 && (o.userData = a.userData),
            (r[a.uuid] = o));
        }
      return r;
    }
    parseObject(e, t, n, r, i) {
      let a;
      function o(e) {
        return (
          t[e] === void 0 &&
            console.warn(`THREE.ObjectLoader: Undefined geometry`, e),
          t[e]
        );
      }
      function s(e) {
        if (e !== void 0) {
          if (Array.isArray(e)) {
            let t = [];
            for (let r = 0, i = e.length; r < i; r++) {
              let i = e[r];
              (n[i] === void 0 &&
                console.warn(`THREE.ObjectLoader: Undefined material`, i),
                t.push(n[i]));
            }
            return t;
          }
          return (
            n[e] === void 0 &&
              console.warn(`THREE.ObjectLoader: Undefined material`, e),
            n[e]
          );
        }
      }
      function c(e) {
        return (
          r[e] === void 0 &&
            console.warn(`THREE.ObjectLoader: Undefined texture`, e),
          r[e]
        );
      }
      let l, u;
      switch (e.type) {
        case `Scene`:
          ((a = new bc()),
            e.background !== void 0 &&
              (Number.isInteger(e.background)
                ? (a.background = new W(e.background))
                : (a.background = c(e.background))),
            e.environment !== void 0 && (a.environment = c(e.environment)),
            e.fog !== void 0 &&
              (e.fog.type === `Fog`
                ? (a.fog = new yc(e.fog.color, e.fog.near, e.fog.far))
                : e.fog.type === `FogExp2` &&
                  (a.fog = new vc(e.fog.color, e.fog.density))));
          break;
        case `PerspectiveCamera`:
          ((a = new ta(e.fov, e.aspect, e.near, e.far)),
            e.focus !== void 0 && (a.focus = e.focus),
            e.zoom !== void 0 && (a.zoom = e.zoom),
            e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge),
            e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset),
            e.view !== void 0 && (a.view = Object.assign({}, e.view)));
          break;
        case `OrthographicCamera`:
          ((a = new wa(e.left, e.right, e.top, e.bottom, e.near, e.far)),
            e.zoom !== void 0 && (a.zoom = e.zoom),
            e.view !== void 0 && (a.view = Object.assign({}, e.view)));
          break;
        case `AmbientLight`:
          a = new df(e.color, e.intensity);
          break;
        case `DirectionalLight`:
          a = new uf(e.color, e.intensity);
          break;
        case `PointLight`:
          a = new cf(e.color, e.intensity, e.distance, e.decay);
          break;
        case `RectAreaLight`:
          a = new ff(e.color, e.intensity, e.width, e.height);
          break;
        case `SpotLight`:
          a = new nf(
            e.color,
            e.intensity,
            e.distance,
            e.angle,
            e.penumbra,
            e.decay,
          );
          break;
        case `HemisphereLight`:
          a = new Xd(e.color, e.groundColor, e.intensity);
          break;
        case `LightProbe`:
          a = new mf().fromJSON(e);
          break;
        case `SkinnedMesh`:
          ((l = o(e.geometry)),
            (u = s(e.material)),
            (a = new Jc(l, u)),
            e.bindMode !== void 0 && (a.bindMode = e.bindMode),
            e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix),
            e.skeleton !== void 0 && (a.skeleton = e.skeleton));
          break;
        case `Mesh`:
          ((l = o(e.geometry)), (u = s(e.material)), (a = new Wi(l, u)));
          break;
        case `InstancedMesh`:
          ((l = o(e.geometry)), (u = s(e.material)));
          let t = e.count,
            n = e.instanceMatrix,
            r = e.instanceColor;
          ((a = new al(l, u, t)),
            (a.instanceMatrix = new el(new Float32Array(n.array), 16)),
            r !== void 0 &&
              (a.instanceColor = new el(
                new Float32Array(r.array),
                r.itemSize,
              )));
          break;
        case `LOD`:
          a = new Hc();
          break;
        case `Line`:
          a = new fl(o(e.geometry), s(e.material));
          break;
        case `LineLoop`:
          a = new gl(o(e.geometry), s(e.material));
          break;
        case `LineSegments`:
          a = new hl(o(e.geometry), s(e.material));
          break;
        case `PointCloud`:
        case `Points`:
          a = new Sl(o(e.geometry), s(e.material));
          break;
        case `Sprite`:
          a = new Rc(s(e.material));
          break;
        case `Group`:
          a = new dc();
          break;
        case `Bone`:
          a = new Yc();
          break;
        default:
          a = new U();
      }
      if (
        ((a.uuid = e.uuid),
        e.name !== void 0 && (a.name = e.name),
        e.matrix === void 0
          ? (e.position !== void 0 && a.position.fromArray(e.position),
            e.rotation !== void 0 && a.rotation.fromArray(e.rotation),
            e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion),
            e.scale !== void 0 && a.scale.fromArray(e.scale))
          : (a.matrix.fromArray(e.matrix),
            e.matrixAutoUpdate !== void 0 &&
              (a.matrixAutoUpdate = e.matrixAutoUpdate),
            a.matrixAutoUpdate &&
              a.matrix.decompose(a.position, a.quaternion, a.scale)),
        e.castShadow !== void 0 && (a.castShadow = e.castShadow),
        e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow),
        e.shadow &&
          (e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias),
          e.shadow.normalBias !== void 0 &&
            (a.shadow.normalBias = e.shadow.normalBias),
          e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius),
          e.shadow.mapSize !== void 0 &&
            a.shadow.mapSize.fromArray(e.shadow.mapSize),
          e.shadow.camera !== void 0 &&
            (a.shadow.camera = this.parseObject(e.shadow.camera))),
        e.visible !== void 0 && (a.visible = e.visible),
        e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled),
        e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder),
        e.userData !== void 0 && (a.userData = e.userData),
        e.layers !== void 0 && (a.layers.mask = e.layers),
        e.children !== void 0)
      ) {
        let o = e.children;
        for (let e = 0; e < o.length; e++)
          a.add(this.parseObject(o[e], t, n, r, i));
      }
      if (e.animations !== void 0) {
        let t = e.animations;
        for (let e = 0; e < t.length; e++) {
          let n = t[e];
          a.animations.push(i[n]);
        }
      }
      if (e.type === `LOD`) {
        e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate);
        let t = e.levels;
        for (let e = 0; e < t.length; e++) {
          let n = t[e],
            r = a.getObjectByProperty(`uuid`, n.object);
          r !== void 0 && a.addLevel(r, n.distance);
        }
      }
      return a;
    }
    bindSkeletons(e, t) {
      Object.keys(t).length !== 0 &&
        e.traverse(function (e) {
          if (e.isSkinnedMesh === !0 && e.skeleton !== void 0) {
            let n = t[e.skeleton];
            n === void 0
              ? console.warn(
                  `THREE.ObjectLoader: No skeleton found with UUID:`,
                  e.skeleton,
                )
              : e.bind(n, e.bindMatrix);
          }
        });
    }
    setTexturePath(e) {
      return (
        console.warn(
          `THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().`,
        ),
        this.setResourcePath(e)
      );
    }
  },
  bf = {
    UVMapping: 300,
    CubeReflectionMapping: 301,
    CubeRefractionMapping: 302,
    EquirectangularReflectionMapping: 303,
    EquirectangularRefractionMapping: 304,
    CubeUVReflectionMapping: 306,
    CubeUVRefractionMapping: 307,
  },
  xf = { RepeatWrapping: k, ClampToEdgeWrapping: A, MirroredRepeatWrapping: j },
  Sf = {
    NearestFilter: M,
    NearestMipmapNearestFilter: N,
    NearestMipmapLinearFilter: re,
    LinearFilter: P,
    LinearMipmapNearestFilter: ae,
    LinearMipmapLinearFilter: se,
  },
  Cf = class extends Bd {
    constructor(e) {
      (super(e),
        typeof createImageBitmap > `u` &&
          console.warn(
            `THREE.ImageBitmapLoader: createImageBitmap() not supported.`,
          ),
        typeof fetch > `u` &&
          console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),
        (this.options = { premultiplyAlpha: `none` }));
    }
    setOptions(e) {
      return ((this.options = e), this);
    }
    load(e, t, n, r) {
      (e === void 0 && (e = ``),
        this.path !== void 0 && (e = this.path + e),
        (e = this.manager.resolveURL(e)));
      let i = this,
        a = Ld.get(e);
      if (a !== void 0)
        return (
          i.manager.itemStart(e),
          setTimeout(function () {
            (t && t(a), i.manager.itemEnd(e));
          }, 0),
          a
        );
      let o = {};
      ((o.credentials =
        this.crossOrigin === `anonymous` ? `same-origin` : `include`),
        (o.headers = this.requestHeader),
        fetch(e, o)
          .then(function (e) {
            return e.blob();
          })
          .then(function (e) {
            return createImageBitmap(
              e,
              Object.assign(i.options, { colorSpaceConversion: `none` }),
            );
          })
          .then(function (n) {
            (Ld.add(e, n), t && t(n), i.manager.itemEnd(e));
          })
          .catch(function (t) {
            (r && r(t), i.manager.itemError(e), i.manager.itemEnd(e));
          }),
        i.manager.itemStart(e));
    }
  };
Cf.prototype.isImageBitmapLoader = !0;
var wf,
  Tf = {
    getContext: function () {
      return (
        wf === void 0 &&
          (wf = new (window.AudioContext || window.webkitAudioContext)()),
        wf
      );
    },
    setContext: function (e) {
      wf = e;
    },
  },
  Ef = class extends Bd {
    constructor(e) {
      super(e);
    }
    load(e, t, n, r) {
      let i = this,
        a = new Hd(this.manager);
      (a.setResponseType(`arraybuffer`),
        a.setPath(this.path),
        a.setRequestHeader(this.requestHeader),
        a.setWithCredentials(this.withCredentials),
        a.load(
          e,
          function (n) {
            try {
              let e = n.slice(0);
              Tf.getContext().decodeAudioData(e, function (e) {
                t(e);
              });
            } catch (t) {
              (r ? r(t) : console.error(t), i.manager.itemError(e));
            }
          },
          n,
          r,
        ));
    }
  },
  Df = class extends mf {
    constructor(e, t, n = 1) {
      super(void 0, n);
      let r = new W().set(e),
        i = new W().set(t),
        a = new V(r.r, r.g, r.b),
        o = new V(i.r, i.g, i.b),
        s = Math.sqrt(Math.PI),
        c = s * Math.sqrt(0.75);
      (this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),
        this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c));
    }
  };
Df.prototype.isHemisphereLightProbe = !0;
var Of = class extends mf {
  constructor(e, t = 1) {
    super(void 0, t);
    let n = new W().set(e);
    this.sh.coefficients[0]
      .set(n.r, n.g, n.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
};
Of.prototype.isAmbientLightProbe = !0;
var kf = new H(),
  Af = new H(),
  jf = class {
    constructor() {
      ((this.type = `StereoCamera`),
        (this.aspect = 1),
        (this.eyeSep = 0.064),
        (this.cameraL = new ta()),
        this.cameraL.layers.enable(1),
        (this.cameraL.matrixAutoUpdate = !1),
        (this.cameraR = new ta()),
        this.cameraR.layers.enable(2),
        (this.cameraR.matrixAutoUpdate = !1),
        (this._cache = {
          focus: null,
          fov: null,
          aspect: null,
          near: null,
          far: null,
          zoom: null,
          eyeSep: null,
        }));
    }
    update(e) {
      let t = this._cache;
      if (
        t.focus !== e.focus ||
        t.fov !== e.fov ||
        t.aspect !== e.aspect * this.aspect ||
        t.near !== e.near ||
        t.far !== e.far ||
        t.zoom !== e.zoom ||
        t.eyeSep !== this.eyeSep
      ) {
        ((t.focus = e.focus),
          (t.fov = e.fov),
          (t.aspect = e.aspect * this.aspect),
          (t.near = e.near),
          (t.far = e.far),
          (t.zoom = e.zoom),
          (t.eyeSep = this.eyeSep));
        let n = e.projectionMatrix.clone(),
          r = t.eyeSep / 2,
          i = (r * t.near) / t.focus,
          a = (t.near * Math.tan(rn * t.fov * 0.5)) / t.zoom,
          o,
          s;
        ((Af.elements[12] = -r),
          (kf.elements[12] = r),
          (o = -a * t.aspect + i),
          (s = a * t.aspect + i),
          (n.elements[0] = (2 * t.near) / (s - o)),
          (n.elements[8] = (s + o) / (s - o)),
          this.cameraL.projectionMatrix.copy(n),
          (o = -a * t.aspect - i),
          (s = a * t.aspect - i),
          (n.elements[0] = (2 * t.near) / (s - o)),
          (n.elements[8] = (s + o) / (s - o)),
          this.cameraR.projectionMatrix.copy(n));
      }
      (this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Af),
        this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(kf));
    }
  },
  Mf = class {
    constructor(e = !0) {
      ((this.autoStart = e),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1));
    }
    start() {
      ((this.startTime = Nf()),
        (this.oldTime = this.startTime),
        (this.elapsedTime = 0),
        (this.running = !0));
    }
    stop() {
      (this.getElapsedTime(), (this.running = !1), (this.autoStart = !1));
    }
    getElapsedTime() {
      return (this.getDelta(), this.elapsedTime);
    }
    getDelta() {
      let e = 0;
      if (this.autoStart && !this.running) return (this.start(), 0);
      if (this.running) {
        let t = Nf();
        ((e = (t - this.oldTime) / 1e3),
          (this.oldTime = t),
          (this.elapsedTime += e));
      }
      return e;
    }
  };
function Nf() {
  return (typeof performance > `u` ? Date : performance).now();
}
var Pf = new V(),
  Ff = new Un(),
  If = new V(),
  Lf = new V(),
  Rf = class extends U {
    constructor() {
      (super(),
        (this.type = `AudioListener`),
        (this.context = Tf.getContext()),
        (this.gain = this.context.createGain()),
        this.gain.connect(this.context.destination),
        (this.filter = null),
        (this.timeDelta = 0),
        (this._clock = new Mf()));
    }
    getInput() {
      return this.gain;
    }
    removeFilter() {
      return (
        this.filter !== null &&
          (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination),
          this.gain.connect(this.context.destination),
          (this.filter = null)),
        this
      );
    }
    getFilter() {
      return this.filter;
    }
    setFilter(e) {
      return (
        this.filter === null
          ? this.gain.disconnect(this.context.destination)
          : (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)),
        (this.filter = e),
        this.gain.connect(this.filter),
        this.filter.connect(this.context.destination),
        this
      );
    }
    getMasterVolume() {
      return this.gain.gain.value;
    }
    setMasterVolume(e) {
      return (
        this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01),
        this
      );
    }
    updateMatrixWorld(e) {
      super.updateMatrixWorld(e);
      let t = this.context.listener,
        n = this.up;
      if (
        ((this.timeDelta = this._clock.getDelta()),
        this.matrixWorld.decompose(Pf, Ff, If),
        Lf.set(0, 0, -1).applyQuaternion(Ff),
        t.positionX)
      ) {
        let e = this.context.currentTime + this.timeDelta;
        (t.positionX.linearRampToValueAtTime(Pf.x, e),
          t.positionY.linearRampToValueAtTime(Pf.y, e),
          t.positionZ.linearRampToValueAtTime(Pf.z, e),
          t.forwardX.linearRampToValueAtTime(Lf.x, e),
          t.forwardY.linearRampToValueAtTime(Lf.y, e),
          t.forwardZ.linearRampToValueAtTime(Lf.z, e),
          t.upX.linearRampToValueAtTime(n.x, e),
          t.upY.linearRampToValueAtTime(n.y, e),
          t.upZ.linearRampToValueAtTime(n.z, e));
      } else
        (t.setPosition(Pf.x, Pf.y, Pf.z),
          t.setOrientation(Lf.x, Lf.y, Lf.z, n.x, n.y, n.z));
    }
  },
  zf = class extends U {
    constructor(e) {
      (super(),
        (this.type = `Audio`),
        (this.listener = e),
        (this.context = e.context),
        (this.gain = this.context.createGain()),
        this.gain.connect(e.getInput()),
        (this.autoplay = !1),
        (this.buffer = null),
        (this.detune = 0),
        (this.loop = !1),
        (this.loopStart = 0),
        (this.loopEnd = 0),
        (this.offset = 0),
        (this.duration = void 0),
        (this.playbackRate = 1),
        (this.isPlaying = !1),
        (this.hasPlaybackControl = !0),
        (this.source = null),
        (this.sourceType = `empty`),
        (this._startedAt = 0),
        (this._progress = 0),
        (this._connected = !1),
        (this.filters = []));
    }
    getOutput() {
      return this.gain;
    }
    setNodeSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `audioNode`),
        (this.source = e),
        this.connect(),
        this
      );
    }
    setMediaElementSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `mediaNode`),
        (this.source = this.context.createMediaElementSource(e)),
        this.connect(),
        this
      );
    }
    setMediaStreamSource(e) {
      return (
        (this.hasPlaybackControl = !1),
        (this.sourceType = `mediaStreamNode`),
        (this.source = this.context.createMediaStreamSource(e)),
        this.connect(),
        this
      );
    }
    setBuffer(e) {
      return (
        (this.buffer = e),
        (this.sourceType = `buffer`),
        this.autoplay && this.play(),
        this
      );
    }
    play(e = 0) {
      if (this.isPlaying === !0) {
        console.warn(`THREE.Audio: Audio is already playing.`);
        return;
      }
      if (this.hasPlaybackControl === !1) {
        console.warn(`THREE.Audio: this Audio has no playback control.`);
        return;
      }
      this._startedAt = this.context.currentTime + e;
      let t = this.context.createBufferSource();
      return (
        (t.buffer = this.buffer),
        (t.loop = this.loop),
        (t.loopStart = this.loopStart),
        (t.loopEnd = this.loopEnd),
        (t.onended = this.onEnded.bind(this)),
        t.start(this._startedAt, this._progress + this.offset, this.duration),
        (this.isPlaying = !0),
        (this.source = t),
        this.setDetune(this.detune),
        this.setPlaybackRate(this.playbackRate),
        this.connect()
      );
    }
    pause() {
      if (this.hasPlaybackControl === !1) {
        console.warn(`THREE.Audio: this Audio has no playback control.`);
        return;
      }
      return (
        this.isPlaying === !0 &&
          ((this._progress +=
            Math.max(this.context.currentTime - this._startedAt, 0) *
            this.playbackRate),
          this.loop === !0 &&
            (this._progress %= this.duration || this.buffer.duration),
          this.source.stop(),
          (this.source.onended = null),
          (this.isPlaying = !1)),
        this
      );
    }
    stop() {
      if (this.hasPlaybackControl === !1) {
        console.warn(`THREE.Audio: this Audio has no playback control.`);
        return;
      }
      return (
        (this._progress = 0),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1),
        this
      );
    }
    connect() {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].connect(this.filters[e]);
        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());
      return ((this._connected = !0), this);
    }
    disconnect() {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return ((this._connected = !1), this);
    }
    getFilters() {
      return this.filters;
    }
    setFilters(e) {
      return (
        (e ||= []),
        this._connected === !0
          ? (this.disconnect(), (this.filters = e.slice()), this.connect())
          : (this.filters = e.slice()),
        this
      );
    }
    setDetune(e) {
      if (((this.detune = e), this.source.detune !== void 0))
        return (
          this.isPlaying === !0 &&
            this.source.detune.setTargetAtTime(
              this.detune,
              this.context.currentTime,
              0.01,
            ),
          this
        );
    }
    getDetune() {
      return this.detune;
    }
    getFilter() {
      return this.getFilters()[0];
    }
    setFilter(e) {
      return this.setFilters(e ? [e] : []);
    }
    setPlaybackRate(e) {
      if (this.hasPlaybackControl === !1) {
        console.warn(`THREE.Audio: this Audio has no playback control.`);
        return;
      }
      return (
        (this.playbackRate = e),
        this.isPlaying === !0 &&
          this.source.playbackRate.setTargetAtTime(
            this.playbackRate,
            this.context.currentTime,
            0.01,
          ),
        this
      );
    }
    getPlaybackRate() {
      return this.playbackRate;
    }
    onEnded() {
      this.isPlaying = !1;
    }
    getLoop() {
      return this.hasPlaybackControl === !1
        ? (console.warn(`THREE.Audio: this Audio has no playback control.`), !1)
        : this.loop;
    }
    setLoop(e) {
      if (this.hasPlaybackControl === !1) {
        console.warn(`THREE.Audio: this Audio has no playback control.`);
        return;
      }
      return (
        (this.loop = e),
        this.isPlaying === !0 && (this.source.loop = this.loop),
        this
      );
    }
    setLoopStart(e) {
      return ((this.loopStart = e), this);
    }
    setLoopEnd(e) {
      return ((this.loopEnd = e), this);
    }
    getVolume() {
      return this.gain.gain.value;
    }
    setVolume(e) {
      return (
        this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01),
        this
      );
    }
  },
  Bf = new V(),
  Vf = new Un(),
  Hf = new V(),
  Uf = new V(),
  Wf = class extends zf {
    constructor(e) {
      (super(e),
        (this.panner = this.context.createPanner()),
        (this.panner.panningModel = `HRTF`),
        this.panner.connect(this.gain));
    }
    getOutput() {
      return this.panner;
    }
    getRefDistance() {
      return this.panner.refDistance;
    }
    setRefDistance(e) {
      return ((this.panner.refDistance = e), this);
    }
    getRolloffFactor() {
      return this.panner.rolloffFactor;
    }
    setRolloffFactor(e) {
      return ((this.panner.rolloffFactor = e), this);
    }
    getDistanceModel() {
      return this.panner.distanceModel;
    }
    setDistanceModel(e) {
      return ((this.panner.distanceModel = e), this);
    }
    getMaxDistance() {
      return this.panner.maxDistance;
    }
    setMaxDistance(e) {
      return ((this.panner.maxDistance = e), this);
    }
    startResizealCone(e, t, n) {
      return (
        (this.panner.coneInnerAngle = e),
        (this.panner.coneOuterAngle = t),
        (this.panner.coneOuterGain = n),
        this
      );
    }
    updateMatrixWorld(e) {
      if (
        (super.updateMatrixWorld(e),
        this.hasPlaybackControl === !0 && this.isPlaying === !1)
      )
        return;
      (this.matrixWorld.decompose(Bf, Vf, Hf),
        Uf.set(0, 0, 1).applyQuaternion(Vf));
      let t = this.panner;
      if (t.positionX) {
        let e = this.context.currentTime + this.listener.timeDelta;
        (t.positionX.linearRampToValueAtTime(Bf.x, e),
          t.positionY.linearRampToValueAtTime(Bf.y, e),
          t.positionZ.linearRampToValueAtTime(Bf.z, e),
          t.orientationX.linearRampToValueAtTime(Uf.x, e),
          t.orientationY.linearRampToValueAtTime(Uf.y, e),
          t.orientationZ.linearRampToValueAtTime(Uf.z, e));
      } else
        (t.setPosition(Bf.x, Bf.y, Bf.z), t.setOrientation(Uf.x, Uf.y, Uf.z));
    }
  },
  Gf = class {
    constructor(e, t = 2048) {
      ((this.analyser = e.context.createAnalyser()),
        (this.analyser.fftSize = t),
        (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
        e.getOutput().connect(this.analyser));
    }
    getFrequencyData() {
      return (this.analyser.getByteFrequencyData(this.data), this.data);
    }
    getAverageFrequency() {
      let e = 0,
        t = this.getFrequencyData();
      for (let n = 0; n < t.length; n++) e += t[n];
      return e / t.length;
    }
  },
  Kf = class {
    constructor(e, t, n) {
      ((this.binding = e), (this.valueSize = n));
      let r, i, a;
      switch (t) {
        case `quaternion`:
          ((r = this._slerp),
            (i = this._slerpAdditive),
            (a = this._setAdditiveIdentityQuaternion),
            (this.buffer = new Float64Array(n * 6)),
            (this._workIndex = 5));
          break;
        case `string`:
        case `bool`:
          ((r = this._select),
            (i = this._select),
            (a = this._setAdditiveIdentityOther),
            (this.buffer = Array(n * 5)));
          break;
        default:
          ((r = this._lerp),
            (i = this._lerpAdditive),
            (a = this._setAdditiveIdentityNumeric),
            (this.buffer = new Float64Array(n * 5)));
      }
      ((this._mixBufferRegion = r),
        (this._mixBufferRegionAdditive = i),
        (this._setIdentity = a),
        (this._origIndex = 3),
        (this._addIndex = 4),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        (this.useCount = 0),
        (this.referenceCount = 0));
    }
    accumulate(e, t) {
      let n = this.buffer,
        r = this.valueSize,
        i = e * r + r,
        a = this.cumulativeWeight;
      if (a === 0) {
        for (let e = 0; e !== r; ++e) n[i + e] = n[e];
        a = t;
      } else {
        a += t;
        let e = t / a;
        this._mixBufferRegion(n, i, 0, e, r);
      }
      this.cumulativeWeight = a;
    }
    accumulateAdditive(e) {
      let t = this.buffer,
        n = this.valueSize,
        r = n * this._addIndex;
      (this.cumulativeWeightAdditive === 0 && this._setIdentity(),
        this._mixBufferRegionAdditive(t, r, 0, e, n),
        (this.cumulativeWeightAdditive += e));
    }
    apply(e) {
      let t = this.valueSize,
        n = this.buffer,
        r = e * t + t,
        i = this.cumulativeWeight,
        a = this.cumulativeWeightAdditive,
        o = this.binding;
      if (
        ((this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0),
        i < 1)
      ) {
        let e = t * this._origIndex;
        this._mixBufferRegion(n, r, e, 1 - i, t);
      }
      a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
      for (let e = t, i = t + t; e !== i; ++e)
        if (n[e] !== n[e + t]) {
          o.setValue(n, r);
          break;
        }
    }
    saveOriginalState() {
      let e = this.binding,
        t = this.buffer,
        n = this.valueSize,
        r = n * this._origIndex;
      e.getValue(t, r);
      for (let e = n, i = r; e !== i; ++e) t[e] = t[r + (e % n)];
      (this._setIdentity(),
        (this.cumulativeWeight = 0),
        (this.cumulativeWeightAdditive = 0));
    }
    restoreOriginalState() {
      let e = this.valueSize * 3;
      this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
      let e = this._addIndex * this.valueSize,
        t = e + this.valueSize;
      for (let n = e; n < t; n++) this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
      (this._setAdditiveIdentityNumeric(),
        (this.buffer[this._addIndex * this.valueSize + 3] = 1));
    }
    _setAdditiveIdentityOther() {
      let e = this._origIndex * this.valueSize,
        t = this._addIndex * this.valueSize;
      for (let n = 0; n < this.valueSize; n++)
        this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, r, i) {
      if (r >= 0.5) for (let r = 0; r !== i; ++r) e[t + r] = e[n + r];
    }
    _slerp(e, t, n, r) {
      Un.slerpFlat(e, t, e, t, e, n, r);
    }
    _slerpAdditive(e, t, n, r, i) {
      let a = this._workIndex * i;
      (Un.multiplyQuaternionsFlat(e, a, e, t, e, n),
        Un.slerpFlat(e, t, e, t, e, a, r));
    }
    _lerp(e, t, n, r, i) {
      let a = 1 - r;
      for (let o = 0; o !== i; ++o) {
        let i = t + o;
        e[i] = e[i] * a + e[n + o] * r;
      }
    }
    _lerpAdditive(e, t, n, r, i) {
      for (let a = 0; a !== i; ++a) {
        let i = t + a;
        e[i] = e[i] + e[n + a] * r;
      }
    }
  },
  qf = `\\[\\]\\.:\\/`,
  Jf = RegExp(`[` + qf + `]`, `g`),
  Yf = `[^` + qf + `]`,
  Xf = `[^` + qf.replace(`\\.`, ``) + `]`,
  Zf = `((?:WC+[\\/:])*)`.replace(`WC`, Yf),
  Qf = `(WCOD+)?`.replace(`WCOD`, Xf),
  $f = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Yf),
  ep = `\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`, Yf),
  tp = RegExp(`^` + Zf + Qf + $f + ep + `$`),
  np = [`material`, `materials`, `bones`],
  rp = class {
    constructor(e, t, n) {
      let r = n || $.parseTrackName(t);
      ((this._targetGroup = e), (this._bindings = e.subscribe_(t, r)));
    }
    getValue(e, t) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        r = this._bindings[n];
      r !== void 0 && r.getValue(e, t);
    }
    setValue(e, t) {
      let n = this._bindings;
      for (
        let r = this._targetGroup.nCachedObjects_, i = n.length;
        r !== i;
        ++r
      )
        n[r].setValue(e, t);
    }
    bind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].bind();
    }
    unbind() {
      let e = this._bindings;
      for (
        let t = this._targetGroup.nCachedObjects_, n = e.length;
        t !== n;
        ++t
      )
        e[t].unbind();
    }
  },
  $ = class e {
    constructor(t, n, r) {
      ((this.path = n),
        (this.parsedPath = r || e.parseTrackName(n)),
        (this.node = e.findNode(t, this.parsedPath.nodeName) || t),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, n, r) {
      return t && t.isAnimationObjectGroup
        ? new e.Composite(t, n, r)
        : new e(t, n, r);
    }
    static sanitizeNodeName(e) {
      return e.replace(/\s/g, `_`).replace(Jf, ``);
    }
    static parseTrackName(e) {
      let t = tp.exec(e);
      if (!t) throw Error(`PropertyBinding: Cannot parse trackName: ` + e);
      let n = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6],
        },
        r = n.nodeName && n.nodeName.lastIndexOf(`.`);
      if (r !== void 0 && r !== -1) {
        let e = n.nodeName.substring(r + 1);
        np.indexOf(e) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = e));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw Error(
          `PropertyBinding: can not parse propertyName from trackName: ` + e,
        );
      return n;
    }
    static findNode(e, t) {
      if (
        !t ||
        t === `` ||
        t === `.` ||
        t === -1 ||
        t === e.name ||
        t === e.uuid
      )
        return e;
      if (e.skeleton) {
        let n = e.skeleton.getBoneByName(t);
        if (n !== void 0) return n;
      }
      if (e.children) {
        let n = function (e) {
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              if (i.name === t || i.uuid === t) return i;
              let a = n(i.children);
              if (a) return a;
            }
            return null;
          },
          r = n(e.children);
        if (r) return r;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
      e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
    }
    _getValue_arrayElement(e, t) {
      e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
      this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
      this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
      ((this.targetObject[this.propertyName] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
      let n = this.resolvedProperty;
      for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
      this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
      ((this.resolvedProperty[this.propertyIndex] = e[t]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(e, t) {
      this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
      (this.resolvedProperty.fromArray(e, t),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(e, t) {
      (this.bind(), this.getValue(e, t));
    }
    _setValue_unbound(e, t) {
      (this.bind(), this.setValue(e, t));
    }
    bind() {
      let t = this.node,
        n = this.parsedPath,
        r = n.objectName,
        i = n.propertyName,
        a = n.propertyIndex;
      if (
        (t ||
          ((t = e.findNode(this.rootNode, n.nodeName) || this.rootNode),
          (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        console.error(
          `THREE.PropertyBinding: Trying to update node for track: ` +
            this.path +
            ` but it wasn't found.`,
        );
        return;
      }
      if (r) {
        let e = n.objectIndex;
        switch (r) {
          case `materials`:
            if (!t.material) {
              console.error(
                `THREE.PropertyBinding: Can not bind to material as node does not have a material.`,
                this,
              );
              return;
            }
            if (!t.material.materials) {
              console.error(
                `THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case `bones`:
            if (!t.skeleton) {
              console.error(
                `THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let n = 0; n < t.length; n++)
              if (t[n].name === e) {
                e = n;
                break;
              }
            break;
          default:
            if (t[r] === void 0) {
              console.error(
                `THREE.PropertyBinding: Can not bind to objectName of node undefined.`,
                this,
              );
              return;
            }
            t = t[r];
        }
        if (e !== void 0) {
          if (t[e] === void 0) {
            console.error(
              `THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,
              this,
              t,
            );
            return;
          }
          t = t[e];
        }
      }
      let o = t[i];
      if (o === void 0) {
        let e = n.nodeName;
        console.error(
          `THREE.PropertyBinding: Trying to update property for track: ` +
            e +
            `.` +
            i +
            ` but it wasn't found.`,
          t,
        );
        return;
      }
      let s = this.Versioning.None;
      ((this.targetObject = t),
        t.needsUpdate === void 0
          ? t.matrixWorldNeedsUpdate !== void 0 &&
            (s = this.Versioning.MatrixWorldNeedsUpdate)
          : (s = this.Versioning.NeedsUpdate));
      let c = this.BindingType.Direct;
      if (a !== void 0) {
        if (i === `morphTargetInfluences`) {
          if (!t.geometry) {
            console.error(
              `THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,
              this,
            );
            return;
          }
          if (t.geometry.isBufferGeometry) {
            if (!t.geometry.morphAttributes) {
              console.error(
                `THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,
                this,
              );
              return;
            }
            t.morphTargetDictionary[a] !== void 0 &&
              (a = t.morphTargetDictionary[a]);
          } else {
            console.error(
              `THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.`,
              this,
            );
            return;
          }
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = o),
          (this.propertyIndex = a));
      } else
        o.fromArray !== void 0 && o.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = o))
          : Array.isArray(o)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = o))
            : (this.propertyName = i);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][s]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
(($.Composite = rp),
  ($.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  ($.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  ($.prototype.GetterByBindingType = [
    $.prototype._getValue_direct,
    $.prototype._getValue_array,
    $.prototype._getValue_arrayElement,
    $.prototype._getValue_toArray,
  ]),
  ($.prototype.SetterByBindingTypeAndVersioning = [
    [
      $.prototype._setValue_direct,
      $.prototype._setValue_direct_setNeedsUpdate,
      $.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_array,
      $.prototype._setValue_array_setNeedsUpdate,
      $.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_arrayElement,
      $.prototype._setValue_arrayElement_setNeedsUpdate,
      $.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      $.prototype._setValue_fromArray,
      $.prototype._setValue_fromArray_setNeedsUpdate,
      $.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]));
var ip = class {
  constructor() {
    ((this.uuid = cn()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0));
    let e = {};
    this._indicesByUUID = e;
    for (let t = 0, n = arguments.length; t !== n; ++t)
      e[arguments[t].uuid] = t;
    ((this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {}));
    let t = this;
    this.stats = {
      objects: {
        get total() {
          return t._objects.length;
        },
        get inUse() {
          return this.total - t.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return t._bindings.length;
      },
    };
  }
  add() {
    let e = this._objects,
      t = this._indicesByUUID,
      n = this._paths,
      r = this._parsedPaths,
      i = this._bindings,
      a = i.length,
      o,
      s = e.length,
      c = this.nCachedObjects_;
    for (let l = 0, u = arguments.length; l !== u; ++l) {
      let u = arguments[l],
        d = u.uuid,
        f = t[d];
      if (f === void 0) {
        ((f = s++), (t[d] = f), e.push(u));
        for (let e = 0, t = a; e !== t; ++e) i[e].push(new $(u, n[e], r[e]));
      } else if (f < c) {
        o = e[f];
        let s = --c,
          l = e[s];
        ((t[l.uuid] = f), (e[f] = l), (t[d] = s), (e[s] = u));
        for (let e = 0, t = a; e !== t; ++e) {
          let t = i[e],
            a = t[s],
            o = t[f];
          ((t[f] = a), o === void 0 && (o = new $(u, n[e], r[e])), (t[s] = o));
        }
      } else
        e[f] !== o &&
          console.error(
            `THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.`,
          );
    }
    this.nCachedObjects_ = c;
  }
  remove() {
    let e = this._objects,
      t = this._indicesByUUID,
      n = this._bindings,
      r = n.length,
      i = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      let o = arguments[a],
        s = o.uuid,
        c = t[s];
      if (c !== void 0 && c >= i) {
        let a = i++,
          l = e[a];
        ((t[l.uuid] = c), (e[c] = l), (t[s] = a), (e[a] = o));
        for (let e = 0, t = r; e !== t; ++e) {
          let t = n[e],
            r = t[a],
            i = t[c];
          ((t[c] = r), (t[a] = i));
        }
      }
    }
    this.nCachedObjects_ = i;
  }
  uncache() {
    let e = this._objects,
      t = this._indicesByUUID,
      n = this._bindings,
      r = n.length,
      i = this.nCachedObjects_,
      a = e.length;
    for (let o = 0, s = arguments.length; o !== s; ++o) {
      let s = arguments[o].uuid,
        c = t[s];
      if (c !== void 0)
        if ((delete t[s], c < i)) {
          let o = --i,
            s = e[o],
            l = --a,
            u = e[l];
          ((t[s.uuid] = c), (e[c] = s), (t[u.uuid] = o), (e[o] = u), e.pop());
          for (let e = 0, t = r; e !== t; ++e) {
            let t = n[e],
              r = t[o],
              i = t[l];
            ((t[c] = r), (t[o] = i), t.pop());
          }
        } else {
          let i = --a,
            o = e[i];
          (i > 0 && (t[o.uuid] = c), (e[c] = o), e.pop());
          for (let e = 0, t = r; e !== t; ++e) {
            let t = n[e];
            ((t[c] = t[i]), t.pop());
          }
        }
    }
    this.nCachedObjects_ = i;
  }
  subscribe_(e, t) {
    let n = this._bindingsIndicesByPath,
      r = n[e],
      i = this._bindings;
    if (r !== void 0) return i[r];
    let a = this._paths,
      o = this._parsedPaths,
      s = this._objects,
      c = s.length,
      l = this.nCachedObjects_,
      u = Array(c);
    ((r = i.length), (n[e] = r), a.push(e), o.push(t), i.push(u));
    for (let n = l, r = s.length; n !== r; ++n) {
      let r = s[n];
      u[n] = new $(r, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    let t = this._bindingsIndicesByPath,
      n = t[e];
    if (n !== void 0) {
      let r = this._paths,
        i = this._parsedPaths,
        a = this._bindings,
        o = a.length - 1,
        s = a[o],
        c = e[o];
      ((t[c] = n),
        (a[n] = s),
        a.pop(),
        (i[n] = i[o]),
        i.pop(),
        (r[n] = r[o]),
        r.pop());
    }
  }
};
ip.prototype.isAnimationObjectGroup = !0;
var ap = class {
    constructor(e, t, n = null, r = t.blendMode) {
      ((this._mixer = e),
        (this._clip = t),
        (this._localRoot = n),
        (this.blendMode = r));
      let i = t.tracks,
        a = i.length,
        o = Array(a),
        s = { endingStart: Ct, endingEnd: Ct };
      for (let e = 0; e !== a; ++e) {
        let t = i[e].createInterpolant(null);
        ((o[e] = t), (t.settings = s));
      }
      ((this._interpolantSettings = s),
        (this._interpolants = o),
        (this._propertyBindings = Array(a)),
        (this._cacheIndex = null),
        (this._byClipCacheIndex = null),
        (this._timeScaleInterpolant = null),
        (this._weightInterpolant = null),
        (this.loop = vt),
        (this._loopCount = -1),
        (this._startTime = null),
        (this.time = 0),
        (this.timeScale = 1),
        (this._effectiveTimeScale = 1),
        (this.weight = 1),
        (this._effectiveWeight = 1),
        (this.repetitions = 1 / 0),
        (this.paused = !1),
        (this.enabled = !0),
        (this.clampWhenFinished = !1),
        (this.zeroSlopeAtStart = !0),
        (this.zeroSlopeAtEnd = !0));
    }
    play() {
      return (this._mixer._activateAction(this), this);
    }
    stop() {
      return (this._mixer._deactivateAction(this), this.reset());
    }
    reset() {
      return (
        (this.paused = !1),
        (this.enabled = !0),
        (this.time = 0),
        (this._loopCount = -1),
        (this._startTime = null),
        this.stopFading().stopWarping()
      );
    }
    isRunning() {
      return (
        this.enabled &&
        !this.paused &&
        this.timeScale !== 0 &&
        this._startTime === null &&
        this._mixer._isActiveAction(this)
      );
    }
    isScheduled() {
      return this._mixer._isActiveAction(this);
    }
    startAt(e) {
      return ((this._startTime = e), this);
    }
    setLoop(e, t) {
      return ((this.loop = e), (this.repetitions = t), this);
    }
    setEffectiveWeight(e) {
      return (
        (this.weight = e),
        (this._effectiveWeight = this.enabled ? e : 0),
        this.stopFading()
      );
    }
    getEffectiveWeight() {
      return this._effectiveWeight;
    }
    fadeIn(e) {
      return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
      return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
      if ((e.fadeOut(t), this.fadeIn(t), n)) {
        let n = this._clip.duration,
          r = e._clip.duration,
          i = r / n,
          a = n / r;
        (e.warp(1, i, t), this.warp(a, 1, t));
      }
      return this;
    }
    crossFadeTo(e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
      let e = this._weightInterpolant;
      return (
        e !== null &&
          ((this._weightInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    setEffectiveTimeScale(e) {
      return (
        (this.timeScale = e),
        (this._effectiveTimeScale = this.paused ? 0 : e),
        this.stopWarping()
      );
    }
    getEffectiveTimeScale() {
      return this._effectiveTimeScale;
    }
    setDuration(e) {
      return ((this.timeScale = this._clip.duration / e), this.stopWarping());
    }
    syncWith(e) {
      return (
        (this.time = e.time),
        (this.timeScale = e.timeScale),
        this.stopWarping()
      );
    }
    halt(e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
      let r = this._mixer,
        i = r.time,
        a = this.timeScale,
        o = this._timeScaleInterpolant;
      o === null &&
        ((o = r._lendControlInterpolant()), (this._timeScaleInterpolant = o));
      let s = o.parameterPositions,
        c = o.sampleValues;
      return ((s[0] = i), (s[1] = i + n), (c[0] = e / a), (c[1] = t / a), this);
    }
    stopWarping() {
      let e = this._timeScaleInterpolant;
      return (
        e !== null &&
          ((this._timeScaleInterpolant = null),
          this._mixer._takeBackControlInterpolant(e)),
        this
      );
    }
    getMixer() {
      return this._mixer;
    }
    getClip() {
      return this._clip;
    }
    getRoot() {
      return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, r) {
      if (!this.enabled) {
        this._updateWeight(e);
        return;
      }
      let i = this._startTime;
      if (i !== null) {
        let r = (e - i) * n;
        if (r < 0 || n === 0) return;
        ((this._startTime = null), (t = n * r));
      }
      t *= this._updateTimeScale(e);
      let a = this._updateTime(t),
        o = this._updateWeight(e);
      if (o > 0) {
        let e = this._interpolants,
          t = this._propertyBindings;
        switch (this.blendMode) {
          case Dt:
            for (let n = 0, r = e.length; n !== r; ++n)
              (e[n].evaluate(a), t[n].accumulateAdditive(o));
            break;
          case Et:
          default:
            for (let n = 0, i = e.length; n !== i; ++n)
              (e[n].evaluate(a), t[n].accumulate(r, o));
        }
      }
    }
    _updateWeight(e) {
      let t = 0;
      if (this.enabled) {
        t = this.weight;
        let n = this._weightInterpolant;
        if (n !== null) {
          let r = n.evaluate(e)[0];
          ((t *= r),
            e > n.parameterPositions[1] &&
              (this.stopFading(), r === 0 && (this.enabled = !1)));
        }
      }
      return ((this._effectiveWeight = t), t);
    }
    _updateTimeScale(e) {
      let t = 0;
      if (!this.paused) {
        t = this.timeScale;
        let n = this._timeScaleInterpolant;
        if (n !== null) {
          let r = n.evaluate(e)[0];
          ((t *= r),
            e > n.parameterPositions[1] &&
              (this.stopWarping(),
              t === 0 ? (this.paused = !0) : (this.timeScale = t)));
        }
      }
      return ((this._effectiveTimeScale = t), t);
    }
    _updateTime(e) {
      let t = this._clip.duration,
        n = this.loop,
        r = this.time + e,
        i = this._loopCount,
        a = n === yt;
      if (e === 0) return i === -1 ? r : a && (i & 1) == 1 ? t - r : r;
      if (n === 2200) {
        i === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
        handle_stop: {
          if (r >= t) r = t;
          else if (r < 0) r = 0;
          else {
            this.time = r;
            break handle_stop;
          }
          (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = r),
            this._mixer.dispatchEvent({
              type: `finished`,
              action: this,
              direction: e < 0 ? -1 : 1,
            }));
        }
      } else {
        if (
          (i === -1 &&
            (e >= 0
              ? ((i = 0), this._setEndings(!0, this.repetitions === 0, a))
              : this._setEndings(this.repetitions === 0, !0, a)),
          r >= t || r < 0)
        ) {
          let n = Math.floor(r / t);
          ((r -= t * n), (i += Math.abs(n)));
          let o = this.repetitions - i;
          if (o <= 0)
            (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
              (r = e > 0 ? t : 0),
              (this.time = r),
              this._mixer.dispatchEvent({
                type: `finished`,
                action: this,
                direction: e > 0 ? 1 : -1,
              }));
          else {
            if (o === 1) {
              let t = e < 0;
              this._setEndings(t, !t, a);
            } else this._setEndings(!1, !1, a);
            ((this._loopCount = i),
              (this.time = r),
              this._mixer.dispatchEvent({
                type: `loop`,
                action: this,
                loopDelta: n,
              }));
          }
        } else this.time = r;
        if (a && (i & 1) == 1) return t - r;
      }
      return r;
    }
    _setEndings(e, t, n) {
      let r = this._interpolantSettings;
      n
        ? ((r.endingStart = wt), (r.endingEnd = wt))
        : (e
            ? (r.endingStart = this.zeroSlopeAtStart ? wt : Ct)
            : (r.endingStart = Tt),
          t
            ? (r.endingEnd = this.zeroSlopeAtEnd ? wt : Ct)
            : (r.endingEnd = Tt));
    }
    _scheduleFading(e, t, n) {
      let r = this._mixer,
        i = r.time,
        a = this._weightInterpolant;
      a === null &&
        ((a = r._lendControlInterpolant()), (this._weightInterpolant = a));
      let o = a.parameterPositions,
        s = a.sampleValues;
      return ((o[0] = i), (s[0] = t), (o[1] = i + e), (s[1] = n), this);
    }
  },
  op = class extends tn {
    constructor(e) {
      (super(),
        (this._root = e),
        this._initMemoryManager(),
        (this._accuIndex = 0),
        (this.time = 0),
        (this.timeScale = 1));
    }
    _bindAction(e, t) {
      let n = e._localRoot || this._root,
        r = e._clip.tracks,
        i = r.length,
        a = e._propertyBindings,
        o = e._interpolants,
        s = n.uuid,
        c = this._bindingsByRootAndName,
        l = c[s];
      l === void 0 && ((l = {}), (c[s] = l));
      for (let e = 0; e !== i; ++e) {
        let i = r[e],
          c = i.name,
          u = l[c];
        if (u !== void 0) a[e] = u;
        else {
          if (((u = a[e]), u !== void 0)) {
            u._cacheIndex === null &&
              (++u.referenceCount, this._addInactiveBinding(u, s, c));
            continue;
          }
          let r = t && t._propertyBindings[e].binding.parsedPath;
          ((u = new Kf($.create(n, c, r), i.ValueTypeName, i.getValueSize())),
            ++u.referenceCount,
            this._addInactiveBinding(u, s, c),
            (a[e] = u));
        }
        o[e].resultBuffer = u.buffer;
      }
    }
    _activateAction(e) {
      if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
          let t = (e._localRoot || this._root).uuid,
            n = e._clip.uuid,
            r = this._actionsByClip[n];
          (this._bindAction(e, r && r.knownActions[0]),
            this._addInactiveAction(e, n, t));
        }
        let t = e._propertyBindings;
        for (let e = 0, n = t.length; e !== n; ++e) {
          let n = t[e];
          n.useCount++ === 0 && (this._lendBinding(n), n.saveOriginalState());
        }
        this._lendAction(e);
      }
    }
    _deactivateAction(e) {
      if (this._isActiveAction(e)) {
        let t = e._propertyBindings;
        for (let e = 0, n = t.length; e !== n; ++e) {
          let n = t[e];
          --n.useCount === 0 &&
            (n.restoreOriginalState(), this._takeBackBinding(n));
        }
        this._takeBackAction(e);
      }
    }
    _initMemoryManager() {
      ((this._actions = []),
        (this._nActiveActions = 0),
        (this._actionsByClip = {}),
        (this._bindings = []),
        (this._nActiveBindings = 0),
        (this._bindingsByRootAndName = {}),
        (this._controlInterpolants = []),
        (this._nActiveControlInterpolants = 0));
      let e = this;
      this.stats = {
        actions: {
          get total() {
            return e._actions.length;
          },
          get inUse() {
            return e._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return e._bindings.length;
          },
          get inUse() {
            return e._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return e._controlInterpolants.length;
          },
          get inUse() {
            return e._nActiveControlInterpolants;
          },
        },
      };
    }
    _isActiveAction(e) {
      let t = e._cacheIndex;
      return t !== null && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
      let r = this._actions,
        i = this._actionsByClip,
        a = i[t];
      if (a === void 0)
        ((a = { knownActions: [e], actionByRoot: {} }),
          (e._byClipCacheIndex = 0),
          (i[t] = a));
      else {
        let t = a.knownActions;
        ((e._byClipCacheIndex = t.length), t.push(e));
      }
      ((e._cacheIndex = r.length), r.push(e), (a.actionByRoot[n] = e));
    }
    _removeInactiveAction(e) {
      let t = this._actions,
        n = t[t.length - 1],
        r = e._cacheIndex;
      ((n._cacheIndex = r), (t[r] = n), t.pop(), (e._cacheIndex = null));
      let i = e._clip.uuid,
        a = this._actionsByClip,
        o = a[i],
        s = o.knownActions,
        c = s[s.length - 1],
        l = e._byClipCacheIndex;
      ((c._byClipCacheIndex = l),
        (s[l] = c),
        s.pop(),
        (e._byClipCacheIndex = null));
      let u = o.actionByRoot,
        d = (e._localRoot || this._root).uuid;
      (delete u[d],
        s.length === 0 && delete a[i],
        this._removeInactiveBindingsForAction(e));
    }
    _removeInactiveBindingsForAction(e) {
      let t = e._propertyBindings;
      for (let e = 0, n = t.length; e !== n; ++e) {
        let n = t[e];
        --n.referenceCount === 0 && this._removeInactiveBinding(n);
      }
    }
    _lendAction(e) {
      let t = this._actions,
        n = e._cacheIndex,
        r = this._nActiveActions++,
        i = t[r];
      ((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i));
    }
    _takeBackAction(e) {
      let t = this._actions,
        n = e._cacheIndex,
        r = --this._nActiveActions,
        i = t[r];
      ((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i));
    }
    _addInactiveBinding(e, t, n) {
      let r = this._bindingsByRootAndName,
        i = this._bindings,
        a = r[t];
      (a === void 0 && ((a = {}), (r[t] = a)),
        (a[n] = e),
        (e._cacheIndex = i.length),
        i.push(e));
    }
    _removeInactiveBinding(e) {
      let t = this._bindings,
        n = e.binding,
        r = n.rootNode.uuid,
        i = n.path,
        a = this._bindingsByRootAndName,
        o = a[r],
        s = t[t.length - 1],
        c = e._cacheIndex;
      ((s._cacheIndex = c),
        (t[c] = s),
        t.pop(),
        delete o[i],
        Object.keys(o).length === 0 && delete a[r]);
    }
    _lendBinding(e) {
      let t = this._bindings,
        n = e._cacheIndex,
        r = this._nActiveBindings++,
        i = t[r];
      ((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i));
    }
    _takeBackBinding(e) {
      let t = this._bindings,
        n = e._cacheIndex,
        r = --this._nActiveBindings,
        i = t[r];
      ((e._cacheIndex = r), (t[r] = e), (i._cacheIndex = n), (t[n] = i));
    }
    _lendControlInterpolant() {
      let e = this._controlInterpolants,
        t = this._nActiveControlInterpolants++,
        n = e[t];
      return (
        n === void 0 &&
          ((n = new wd(
            new Float32Array(2),
            new Float32Array(2),
            1,
            this._controlInterpolantsResultBuffer,
          )),
          (n.__cacheIndex = t),
          (e[t] = n)),
        n
      );
    }
    _takeBackControlInterpolant(e) {
      let t = this._controlInterpolants,
        n = e.__cacheIndex,
        r = --this._nActiveControlInterpolants,
        i = t[r];
      ((e.__cacheIndex = r), (t[r] = e), (i.__cacheIndex = n), (t[n] = i));
    }
    clipAction(e, t, n) {
      let r = t || this._root,
        i = r.uuid,
        a = typeof e == `string` ? Pd.findByName(r, e) : e,
        o = a === null ? e : a.uuid,
        s = this._actionsByClip[o],
        c = null;
      if ((n === void 0 && (n = a === null ? Et : a.blendMode), s !== void 0)) {
        let e = s.actionByRoot[i];
        if (e !== void 0 && e.blendMode === n) return e;
        ((c = s.knownActions[0]), a === null && (a = c._clip));
      }
      if (a === null) return null;
      let l = new ap(this, a, t, n);
      return (this._bindAction(l, c), this._addInactiveAction(l, o, i), l);
    }
    existingAction(e, t) {
      let n = t || this._root,
        r = n.uuid,
        i = typeof e == `string` ? Pd.findByName(n, e) : e,
        a = i ? i.uuid : e,
        o = this._actionsByClip[a];
      return o === void 0 ? null : o.actionByRoot[r] || null;
    }
    stopAllAction() {
      let e = this._actions,
        t = this._nActiveActions;
      for (let n = t - 1; n >= 0; --n) e[n].stop();
      return this;
    }
    update(e) {
      e *= this.timeScale;
      let t = this._actions,
        n = this._nActiveActions,
        r = (this.time += e),
        i = Math.sign(e),
        a = (this._accuIndex ^= 1);
      for (let o = 0; o !== n; ++o) t[o]._update(r, e, i, a);
      let o = this._bindings,
        s = this._nActiveBindings;
      for (let e = 0; e !== s; ++e) o[e].apply(a);
      return this;
    }
    setTime(e) {
      this.time = 0;
      for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
      return this.update(e);
    }
    getRoot() {
      return this._root;
    }
    uncacheClip(e) {
      let t = this._actions,
        n = e.uuid,
        r = this._actionsByClip,
        i = r[n];
      if (i !== void 0) {
        let e = i.knownActions;
        for (let n = 0, r = e.length; n !== r; ++n) {
          let r = e[n];
          this._deactivateAction(r);
          let i = r._cacheIndex,
            a = t[t.length - 1];
          ((r._cacheIndex = null),
            (r._byClipCacheIndex = null),
            (a._cacheIndex = i),
            (t[i] = a),
            t.pop(),
            this._removeInactiveBindingsForAction(r));
        }
        delete r[n];
      }
    }
    uncacheRoot(e) {
      let t = e.uuid,
        n = this._actionsByClip;
      for (let e in n) {
        let r = n[e].actionByRoot[t];
        r !== void 0 &&
          (this._deactivateAction(r), this._removeInactiveAction(r));
      }
      let r = this._bindingsByRootAndName[t];
      if (r !== void 0)
        for (let e in r) {
          let t = r[e];
          (t.restoreOriginalState(), this._removeInactiveBinding(t));
        }
    }
    uncacheAction(e, t) {
      let n = this.existingAction(e, t);
      n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
  };
op.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
var sp = class e {
    constructor(e) {
      (typeof e == `string` &&
        (console.warn(`THREE.Uniform: Type parameter is no longer needed.`),
        (e = arguments[1])),
        (this.value = e));
    }
    clone() {
      return new e(
        this.value.clone === void 0 ? this.value : this.value.clone(),
      );
    }
  },
  cp = class extends xc {
    constructor(e, t, n = 1) {
      (super(e, t), (this.meshPerAttribute = n));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.meshPerAttribute = e.meshPerAttribute),
        this
      );
    }
    clone(e) {
      let t = super.clone(e);
      return ((t.meshPerAttribute = this.meshPerAttribute), t);
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.isInstancedInterleavedBuffer = !0),
        (t.meshPerAttribute = this.meshPerAttribute),
        t
      );
    }
  };
cp.prototype.isInstancedInterleavedBuffer = !0;
var lp = class {
  constructor(e, t, n, r, i) {
    ((this.buffer = e),
      (this.type = t),
      (this.itemSize = n),
      (this.elementSize = r),
      (this.count = i),
      (this.version = 0));
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setBuffer(e) {
    return ((this.buffer = e), this);
  }
  setType(e, t) {
    return ((this.type = e), (this.elementSize = t), this);
  }
  setItemSize(e) {
    return ((this.itemSize = e), this);
  }
  setCount(e) {
    return ((this.count = e), this);
  }
};
lp.prototype.isGLBufferAttribute = !0;
var up = class {
  constructor(e, t, n = 0, r = 1 / 0) {
    ((this.ray = new yr(e, t)),
      (this.near = n),
      (this.far = r),
      (this.camera = null),
      (this.layers = new Ar()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }));
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t && t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t && t.isOrthographicCamera
        ? (this.ray.origin
            .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
            .unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
          (this.camera = t))
        : console.error(`THREE.Raycaster: Unsupported camera type: ` + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return (fp(e, this, n, t), n.sort(dp), n);
  }
  intersectObjects(e, t = !0, n = []) {
    for (let r = 0, i = e.length; r < i; r++) fp(e[r], this, n, t);
    return (n.sort(dp), n);
  }
};
function dp(e, t) {
  return e.distance - t.distance;
}
function fp(e, t, n, r) {
  if ((e.layers.test(t.layers) && e.raycast(t, n), r === !0)) {
    let r = e.children;
    for (let e = 0, i = r.length; e < i; e++) fp(r[e], t, n, !0);
  }
}
var pp = class {
    constructor(e = 1, t = 0, n = 0) {
      return ((this.radius = e), (this.phi = t), (this.theta = n), this);
    }
    set(e, t, n) {
      return ((this.radius = e), (this.phi = t), (this.theta = n), this);
    }
    copy(e) {
      return (
        (this.radius = e.radius),
        (this.phi = e.phi),
        (this.theta = e.theta),
        this
      );
    }
    makeSafe() {
      let e = 1e-6;
      return ((this.phi = Math.max(e, Math.min(Math.PI - e, this.phi))), this);
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
      return (
        (this.radius = Math.sqrt(e * e + t * t + n * n)),
        this.radius === 0
          ? ((this.theta = 0), (this.phi = 0))
          : ((this.theta = Math.atan2(e, n)),
            (this.phi = Math.acos(ln(t / this.radius, -1, 1)))),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  mp = class {
    constructor(e = 1, t = 0, n = 0) {
      return ((this.radius = e), (this.theta = t), (this.y = n), this);
    }
    set(e, t, n) {
      return ((this.radius = e), (this.theta = t), (this.y = n), this);
    }
    copy(e) {
      return (
        (this.radius = e.radius),
        (this.theta = e.theta),
        (this.y = e.y),
        this
      );
    }
    setFromVector3(e) {
      return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
      return (
        (this.radius = Math.sqrt(e * e + n * n)),
        (this.theta = Math.atan2(e, n)),
        (this.y = t),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  hp = new z(),
  gp = class {
    constructor(e = new z(1 / 0, 1 / 0), t = new z(-1 / 0, -1 / 0)) {
      ((this.min = e), (this.max = t));
    }
    set(e, t) {
      return (this.min.copy(e), this.max.copy(t), this);
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      let n = hp.copy(t).multiplyScalar(0.5);
      return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (this.min.copy(e.min), this.max.copy(e.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(e) {
      return this.isEmpty()
        ? e.set(0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return (this.min.min(e), this.max.max(e), this);
    }
    expandByVector(e) {
      return (this.min.sub(e), this.max.add(e), this);
    }
    expandByScalar(e) {
      return (this.min.addScalar(-e), this.max.addScalar(e), this);
    }
    containsPoint(e) {
      return !(
        e.x < this.min.x ||
        e.x > this.max.x ||
        e.y < this.min.y ||
        e.y > this.max.y
      );
    }
    containsBox(e) {
      return (
        this.min.x <= e.min.x &&
        e.max.x <= this.max.x &&
        this.min.y <= e.min.y &&
        e.max.y <= this.max.y
      );
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
      );
    }
    intersectsBox(e) {
      return !(
        e.max.x < this.min.x ||
        e.min.x > this.max.x ||
        e.max.y < this.min.y ||
        e.min.y > this.max.y
      );
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return hp.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    intersect(e) {
      return (this.min.max(e.min), this.max.min(e.max), this);
    }
    union(e) {
      return (this.min.min(e.min), this.max.max(e.max), this);
    }
    translate(e) {
      return (this.min.add(e), this.max.add(e), this);
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  };
gp.prototype.isBox2 = !0;
var _p = new V(),
  vp = new V(),
  yp = class {
    constructor(e = new V(), t = new V()) {
      ((this.start = e), (this.end = t));
    }
    set(e, t) {
      return (this.start.copy(e), this.end.copy(t), this);
    }
    copy(e) {
      return (this.start.copy(e.start), this.end.copy(e.end), this);
    }
    getCenter(e) {
      return e.addVectors(this.start, this.end).multiplyScalar(0.5);
    }
    delta(e) {
      return e.subVectors(this.end, this.start);
    }
    distanceSq() {
      return this.start.distanceToSquared(this.end);
    }
    distance() {
      return this.start.distanceTo(this.end);
    }
    at(e, t) {
      return this.delta(t).multiplyScalar(e).add(this.start);
    }
    closestPointToPointParameter(e, t) {
      (_p.subVectors(e, this.start), vp.subVectors(this.end, this.start));
      let n = vp.dot(vp),
        r = vp.dot(_p) / n;
      return (t && (r = ln(r, 0, 1)), r);
    }
    closestPointToPoint(e, t, n) {
      let r = this.closestPointToPointParameter(e, t);
      return this.delta(n).multiplyScalar(r).add(this.start);
    }
    applyMatrix4(e) {
      return (this.start.applyMatrix4(e), this.end.applyMatrix4(e), this);
    }
    equals(e) {
      return e.start.equals(this.start) && e.end.equals(this.end);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  bp = new V(),
  xp = class extends U {
    constructor(e, t) {
      (super(),
        (this.light = e),
        this.light.updateMatrixWorld(),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1),
        (this.color = t));
      let n = new J(),
        r = [
          0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1,
          1, 0, 0, 0, 0, -1, 1,
        ];
      for (let e = 0, t = 1; e < 32; e++, t++) {
        let n = (e / 32) * Math.PI * 2,
          i = (t / 32) * Math.PI * 2;
        r.push(Math.cos(n), Math.sin(n), 1, Math.cos(i), Math.sin(i), 1);
      }
      n.setAttribute(`position`, new q(r, 3));
      let i = new ol({ fog: !1, toneMapped: !1 });
      ((this.cone = new hl(n, i)), this.add(this.cone), this.update());
    }
    dispose() {
      (this.cone.geometry.dispose(), this.cone.material.dispose());
    }
    update() {
      this.light.updateMatrixWorld();
      let e = this.light.distance ? this.light.distance : 1e3,
        t = e * Math.tan(this.light.angle);
      (this.cone.scale.set(t, t, e),
        bp.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(bp),
        this.color === void 0
          ? this.cone.material.color.copy(this.light.color)
          : this.cone.material.color.set(this.color));
    }
  },
  Sp = new V(),
  Cp = new H(),
  wp = new H(),
  Tp = class extends hl {
    constructor(e) {
      let t = Ep(e),
        n = new J(),
        r = [],
        i = [],
        a = new W(0, 0, 1),
        o = new W(0, 1, 0);
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        n.parent &&
          n.parent.isBone &&
          (r.push(0, 0, 0),
          r.push(0, 0, 0),
          i.push(a.r, a.g, a.b),
          i.push(o.r, o.g, o.b));
      }
      (n.setAttribute(`position`, new q(r, 3)),
        n.setAttribute(`color`, new q(i, 3)));
      let s = new ol({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0,
      });
      (super(n, s),
        (this.type = `SkeletonHelper`),
        (this.isSkeletonHelper = !0),
        (this.root = e),
        (this.bones = t),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1));
    }
    updateMatrixWorld(e) {
      let t = this.bones,
        n = this.geometry,
        r = n.getAttribute(`position`);
      wp.copy(this.root.matrixWorld).invert();
      for (let e = 0, n = 0; e < t.length; e++) {
        let i = t[e];
        i.parent &&
          i.parent.isBone &&
          (Cp.multiplyMatrices(wp, i.matrixWorld),
          Sp.setFromMatrixPosition(Cp),
          r.setXYZ(n, Sp.x, Sp.y, Sp.z),
          Cp.multiplyMatrices(wp, i.parent.matrixWorld),
          Sp.setFromMatrixPosition(Cp),
          r.setXYZ(n + 1, Sp.x, Sp.y, Sp.z),
          (n += 2));
      }
      ((n.getAttribute(`position`).needsUpdate = !0),
        super.updateMatrixWorld(e));
    }
  };
function Ep(e) {
  let t = [];
  e && e.isBone && t.push(e);
  for (let n = 0; n < e.children.length; n++)
    t.push.apply(t, Ep(e.children[n]));
  return t;
}
var Dp = class extends Wi {
    constructor(e, t, n) {
      let r = new id(t, 4, 2),
        i = new li({ wireframe: !0, fog: !1, toneMapped: !1 });
      (super(r, i),
        (this.light = e),
        this.light.updateMatrixWorld(),
        (this.color = n),
        (this.type = `PointLightHelper`),
        (this.matrix = this.light.matrixWorld),
        (this.matrixAutoUpdate = !1),
        this.update());
    }
    dispose() {
      (this.geometry.dispose(), this.material.dispose());
    }
    update() {
      this.color === void 0
        ? this.material.color.copy(this.light.color)
        : this.material.color.set(this.color);
    }
  },
  Op = new V(),
  kp = new W(),
  Ap = new W(),
  jp = class extends U {
    constructor(e, t, n) {
      (super(),
        (this.light = e),
        this.light.updateMatrixWorld(),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1),
        (this.color = n));
      let r = new ed(t);
      (r.rotateY(Math.PI * 0.5),
        (this.material = new li({ wireframe: !0, fog: !1, toneMapped: !1 })),
        this.color === void 0 && (this.material.vertexColors = !0));
      let i = r.getAttribute(`position`),
        a = new Float32Array(i.count * 3);
      (r.setAttribute(`color`, new K(a, 3)),
        this.add(new Wi(r, this.material)),
        this.update());
    }
    dispose() {
      (this.children[0].geometry.dispose(),
        this.children[0].material.dispose());
    }
    update() {
      let e = this.children[0];
      if (this.color !== void 0) this.material.color.set(this.color);
      else {
        let t = e.geometry.getAttribute(`color`);
        (kp.copy(this.light.color), Ap.copy(this.light.groundColor));
        for (let e = 0, n = t.count; e < n; e++) {
          let r = e < n / 2 ? kp : Ap;
          t.setXYZ(e, r.r, r.g, r.b);
        }
        t.needsUpdate = !0;
      }
      e.lookAt(Op.setFromMatrixPosition(this.light.matrixWorld).negate());
    }
  },
  Mp = class extends hl {
    constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
      ((n = new W(n)), (r = new W(r)));
      let i = t / 2,
        a = e / t,
        o = e / 2,
        s = [],
        c = [];
      for (let e = 0, l = 0, u = -o; e <= t; e++, u += a) {
        (s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o));
        let t = e === i ? n : r;
        (t.toArray(c, l),
          (l += 3),
          t.toArray(c, l),
          (l += 3),
          t.toArray(c, l),
          (l += 3),
          t.toArray(c, l),
          (l += 3));
      }
      let l = new J();
      (l.setAttribute(`position`, new q(s, 3)),
        l.setAttribute(`color`, new q(c, 3)));
      let u = new ol({ vertexColors: !0, toneMapped: !1 });
      (super(l, u), (this.type = `GridHelper`));
    }
  },
  Np = class extends hl {
    constructor(e = 10, t = 16, n = 8, r = 64, i = 4473924, a = 8947848) {
      ((i = new W(i)), (a = new W(a)));
      let o = [],
        s = [];
      for (let n = 0; n <= t; n++) {
        let r = (n / t) * (Math.PI * 2),
          c = Math.sin(r) * e,
          l = Math.cos(r) * e;
        (o.push(0, 0, 0), o.push(c, 0, l));
        let u = n & 1 ? i : a;
        (s.push(u.r, u.g, u.b), s.push(u.r, u.g, u.b));
      }
      for (let t = 0; t <= n; t++) {
        let c = t & 1 ? i : a,
          l = e - (e / n) * t;
        for (let e = 0; e < r; e++) {
          let t = (e / r) * (Math.PI * 2),
            n = Math.sin(t) * l,
            i = Math.cos(t) * l;
          (o.push(n, 0, i),
            s.push(c.r, c.g, c.b),
            (t = ((e + 1) / r) * (Math.PI * 2)),
            (n = Math.sin(t) * l),
            (i = Math.cos(t) * l),
            o.push(n, 0, i),
            s.push(c.r, c.g, c.b));
        }
      }
      let c = new J();
      (c.setAttribute(`position`, new q(o, 3)),
        c.setAttribute(`color`, new q(s, 3)));
      let l = new ol({ vertexColors: !0, toneMapped: !1 });
      (super(c, l), (this.type = `PolarGridHelper`));
    }
  },
  Pp = new V(),
  Fp = new V(),
  Ip = new V(),
  Lp = class extends U {
    constructor(e, t, n) {
      (super(),
        (this.light = e),
        this.light.updateMatrixWorld(),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1),
        (this.color = n),
        t === void 0 && (t = 1));
      let r = new J();
      r.setAttribute(
        `position`,
        new q([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3),
      );
      let i = new ol({ fog: !1, toneMapped: !1 });
      ((this.lightPlane = new fl(r, i)),
        this.add(this.lightPlane),
        (r = new J()),
        r.setAttribute(`position`, new q([0, 0, 0, 0, 0, 1], 3)),
        (this.targetLine = new fl(r, i)),
        this.add(this.targetLine),
        this.update());
    }
    dispose() {
      (this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose());
    }
    update() {
      (Pp.setFromMatrixPosition(this.light.matrixWorld),
        Fp.setFromMatrixPosition(this.light.target.matrixWorld),
        Ip.subVectors(Fp, Pp),
        this.lightPlane.lookAt(Fp),
        this.color === void 0
          ? (this.lightPlane.material.color.copy(this.light.color),
            this.targetLine.material.color.copy(this.light.color))
          : (this.lightPlane.material.color.set(this.color),
            this.targetLine.material.color.set(this.color)),
        this.targetLine.lookAt(Fp),
        (this.targetLine.scale.z = Ip.length()));
    }
  },
  Rp = new V(),
  zp = new ea(),
  Bp = class extends hl {
    constructor(e) {
      let t = new J(),
        n = new ol({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
        r = [],
        i = [],
        a = {},
        o = new W(16755200),
        s = new W(16711680),
        c = new W(43775),
        l = new W(16777215),
        u = new W(3355443);
      (d(`n1`, `n2`, o),
        d(`n2`, `n4`, o),
        d(`n4`, `n3`, o),
        d(`n3`, `n1`, o),
        d(`f1`, `f2`, o),
        d(`f2`, `f4`, o),
        d(`f4`, `f3`, o),
        d(`f3`, `f1`, o),
        d(`n1`, `f1`, o),
        d(`n2`, `f2`, o),
        d(`n3`, `f3`, o),
        d(`n4`, `f4`, o),
        d(`p`, `n1`, s),
        d(`p`, `n2`, s),
        d(`p`, `n3`, s),
        d(`p`, `n4`, s),
        d(`u1`, `u2`, c),
        d(`u2`, `u3`, c),
        d(`u3`, `u1`, c),
        d(`c`, `t`, l),
        d(`p`, `c`, u),
        d(`cn1`, `cn2`, u),
        d(`cn3`, `cn4`, u),
        d(`cf1`, `cf2`, u),
        d(`cf3`, `cf4`, u));
      function d(e, t, n) {
        (f(e, n), f(t, n));
      }
      function f(e, t) {
        (r.push(0, 0, 0),
          i.push(t.r, t.g, t.b),
          a[e] === void 0 && (a[e] = []),
          a[e].push(r.length / 3 - 1));
      }
      (t.setAttribute(`position`, new q(r, 3)),
        t.setAttribute(`color`, new q(i, 3)),
        super(t, n),
        (this.type = `CameraHelper`),
        (this.camera = e),
        this.camera.updateProjectionMatrix &&
          this.camera.updateProjectionMatrix(),
        (this.matrix = e.matrixWorld),
        (this.matrixAutoUpdate = !1),
        (this.pointMap = a),
        this.update());
    }
    update() {
      let e = this.geometry,
        t = this.pointMap;
      (zp.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
        Vp(`c`, t, e, zp, 0, 0, -1),
        Vp(`t`, t, e, zp, 0, 0, 1),
        Vp(`n1`, t, e, zp, -1, -1, -1),
        Vp(`n2`, t, e, zp, 1, -1, -1),
        Vp(`n3`, t, e, zp, -1, 1, -1),
        Vp(`n4`, t, e, zp, 1, 1, -1),
        Vp(`f1`, t, e, zp, -1, -1, 1),
        Vp(`f2`, t, e, zp, 1, -1, 1),
        Vp(`f3`, t, e, zp, -1, 1, 1),
        Vp(`f4`, t, e, zp, 1, 1, 1),
        Vp(`u1`, t, e, zp, 1 * 0.7, 1 * 1.1, -1),
        Vp(`u2`, t, e, zp, -1 * 0.7, 1 * 1.1, -1),
        Vp(`u3`, t, e, zp, 0, 2, -1),
        Vp(`cf1`, t, e, zp, -1, 0, 1),
        Vp(`cf2`, t, e, zp, 1, 0, 1),
        Vp(`cf3`, t, e, zp, 0, -1, 1),
        Vp(`cf4`, t, e, zp, 0, 1, 1),
        Vp(`cn1`, t, e, zp, -1, 0, -1),
        Vp(`cn2`, t, e, zp, 1, 0, -1),
        Vp(`cn3`, t, e, zp, 0, -1, -1),
        Vp(`cn4`, t, e, zp, 0, 1, -1),
        (e.getAttribute(`position`).needsUpdate = !0));
    }
    dispose() {
      (this.geometry.dispose(), this.material.dispose());
    }
  };
function Vp(e, t, n, r, i, a, o) {
  Rp.set(i, a, o).unproject(r);
  let s = t[e];
  if (s !== void 0) {
    let e = n.getAttribute(`position`);
    for (let t = 0, n = s.length; t < n; t++) e.setXYZ(s[t], Rp.x, Rp.y, Rp.z);
  }
}
var Hp = new Kn(),
  Up = class extends hl {
    constructor(e, t = 16776960) {
      let n = new Uint16Array([
          0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
          7,
        ]),
        r = new Float32Array(24),
        i = new J();
      (i.setIndex(new K(n, 1)),
        i.setAttribute(`position`, new K(r, 3)),
        super(i, new ol({ color: t, toneMapped: !1 })),
        (this.object = e),
        (this.type = `BoxHelper`),
        (this.matrixAutoUpdate = !1),
        this.update());
    }
    update(e) {
      if (
        (e !== void 0 &&
          console.warn(`THREE.BoxHelper: .update() has no longer arguments.`),
        this.object !== void 0 && Hp.setFromObject(this.object),
        Hp.isEmpty())
      )
        return;
      let t = Hp.min,
        n = Hp.max,
        r = this.geometry.attributes.position,
        i = r.array;
      ((i[0] = n.x),
        (i[1] = n.y),
        (i[2] = n.z),
        (i[3] = t.x),
        (i[4] = n.y),
        (i[5] = n.z),
        (i[6] = t.x),
        (i[7] = t.y),
        (i[8] = n.z),
        (i[9] = n.x),
        (i[10] = t.y),
        (i[11] = n.z),
        (i[12] = n.x),
        (i[13] = n.y),
        (i[14] = t.z),
        (i[15] = t.x),
        (i[16] = n.y),
        (i[17] = t.z),
        (i[18] = t.x),
        (i[19] = t.y),
        (i[20] = t.z),
        (i[21] = n.x),
        (i[22] = t.y),
        (i[23] = t.z),
        (r.needsUpdate = !0),
        this.geometry.computeBoundingSphere());
    }
    setFromObject(e) {
      return ((this.object = e), this.update(), this);
    }
    copy(e) {
      return (hl.prototype.copy.call(this, e), (this.object = e.object), this);
    }
  },
  Wp = class extends hl {
    constructor(e, t = 16776960) {
      let n = new Uint16Array([
          0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
          7,
        ]),
        r = [
          1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1,
          -1, 1, -1, -1,
        ],
        i = new J();
      (i.setIndex(new K(n, 1)),
        i.setAttribute(`position`, new q(r, 3)),
        super(i, new ol({ color: t, toneMapped: !1 })),
        (this.box = e),
        (this.type = `Box3Helper`),
        this.geometry.computeBoundingSphere());
    }
    updateMatrixWorld(e) {
      let t = this.box;
      t.isEmpty() ||
        (t.getCenter(this.position),
        t.getSize(this.scale),
        this.scale.multiplyScalar(0.5),
        super.updateMatrixWorld(e));
    }
  },
  Gp = class extends fl {
    constructor(e, t = 1, n = 16776960) {
      let r = n,
        i = [
          1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
          1, 1, 1, 0, 0, 1, 0, 0, 0,
        ],
        a = new J();
      (a.setAttribute(`position`, new q(i, 3)),
        a.computeBoundingSphere(),
        super(a, new ol({ color: r, toneMapped: !1 })),
        (this.type = `PlaneHelper`),
        (this.plane = e),
        (this.size = t));
      let o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
        s = new J();
      (s.setAttribute(`position`, new q(o, 3)),
        s.computeBoundingSphere(),
        this.add(
          new Wi(
            s,
            new li({
              color: r,
              opacity: 0.2,
              transparent: !0,
              depthWrite: !1,
              toneMapped: !1,
            }),
          ),
        ));
    }
    updateMatrixWorld(e) {
      let t = -this.plane.constant;
      (Math.abs(t) < 1e-8 && (t = 1e-8),
        this.scale.set(0.5 * this.size, 0.5 * this.size, t),
        (this.children[0].material.side = +(t < 0)),
        this.lookAt(this.plane.normal),
        super.updateMatrixWorld(e));
    }
  },
  Kp = new V(),
  qp,
  Jp,
  Yp = class extends U {
    constructor(
      e = new V(0, 0, 1),
      t = new V(0, 0, 0),
      n = 1,
      r = 16776960,
      i = n * 0.2,
      a = i * 0.2,
    ) {
      (super(),
        (this.type = `ArrowHelper`),
        qp === void 0 &&
          ((qp = new J()),
          qp.setAttribute(`position`, new q([0, 0, 0, 0, 1, 0], 3)),
          (Jp = new kl(0, 0.5, 1, 5, 1)),
          Jp.translate(0, -0.5, 0)),
        this.position.copy(t),
        (this.line = new fl(qp, new ol({ color: r, toneMapped: !1 }))),
        (this.line.matrixAutoUpdate = !1),
        this.add(this.line),
        (this.cone = new Wi(Jp, new li({ color: r, toneMapped: !1 }))),
        (this.cone.matrixAutoUpdate = !1),
        this.add(this.cone),
        this.startResize(e),
        this.setLength(n, i, a));
    }
    startResize(e) {
      if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
      else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
      else {
        Kp.set(e.z, 0, -e.x).normalize();
        let t = Math.acos(e.y);
        this.quaternion.setFromAxisAngle(Kp, t);
      }
    }
    setLength(e, t = e * 0.2, n = t * 0.2) {
      (this.line.scale.set(1, Math.max(1e-4, e - t), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(n, t, n),
        (this.cone.position.y = e),
        this.cone.updateMatrix());
    }
    setColor(e) {
      (this.line.material.color.set(e), this.cone.material.color.set(e));
    }
    copy(e) {
      return (
        super.copy(e, !1),
        this.line.copy(e.line),
        this.cone.copy(e.cone),
        this
      );
    }
  },
  Xp = class extends hl {
    constructor(e = 1) {
      let t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
        n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
        r = new J();
      (r.setAttribute(`position`, new q(t, 3)),
        r.setAttribute(`color`, new q(n, 3)));
      let i = new ol({ vertexColors: !0, toneMapped: !1 });
      (super(r, i), (this.type = `AxesHelper`));
    }
    setColors(e, t, n) {
      let r = new W(),
        i = this.geometry.attributes.color.array;
      return (
        r.set(e),
        r.toArray(i, 0),
        r.toArray(i, 3),
        r.set(t),
        r.toArray(i, 6),
        r.toArray(i, 9),
        r.set(n),
        r.toArray(i, 12),
        r.toArray(i, 15),
        (this.geometry.attributes.color.needsUpdate = !0),
        this
      );
    }
    dispose() {
      (this.geometry.dispose(), this.material.dispose());
    }
  },
  Zp = class {
    constructor() {
      ((this.type = `ShapePath`),
        (this.color = new W()),
        (this.subPaths = []),
        (this.currentPath = null));
    }
    moveTo(e, t) {
      return (
        (this.currentPath = new fu()),
        this.subPaths.push(this.currentPath),
        this.currentPath.moveTo(e, t),
        this
      );
    }
    lineTo(e, t) {
      return (this.currentPath.lineTo(e, t), this);
    }
    quadraticCurveTo(e, t, n, r) {
      return (this.currentPath.quadraticCurveTo(e, t, n, r), this);
    }
    bezierCurveTo(e, t, n, r, i, a) {
      return (this.currentPath.bezierCurveTo(e, t, n, r, i, a), this);
    }
    splineThru(e) {
      return (this.currentPath.splineThru(e), this);
    }
    toShapes(e, t) {
      function n(e) {
        let t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n],
            i = new pu();
          ((i.curves = r.curves), t.push(i));
        }
        return t;
      }
      function r(e, t) {
        let n = t.length,
          r = !1;
        for (let i = n - 1, a = 0; a < n; i = a++) {
          let n = t[i],
            o = t[a],
            s = o.x - n.x,
            c = o.y - n.y;
          if (Math.abs(c) > 2 ** -52) {
            if (
              (c < 0 && ((n = t[a]), (s = -s), (o = t[i]), (c = -c)),
              e.y < n.y || e.y > o.y)
            )
              continue;
            if (e.y === n.y) {
              if (e.x === n.x) return !0;
            } else {
              let t = c * (e.x - n.x) - s * (e.y - n.y);
              if (t === 0) return !0;
              if (t < 0) continue;
              r = !r;
            }
          } else {
            if (e.y !== n.y) continue;
            if ((o.x <= e.x && e.x <= n.x) || (n.x <= e.x && e.x <= o.x))
              return !0;
          }
        }
        return r;
      }
      let i = Ku.isClockWise,
        a = this.subPaths;
      if (a.length === 0) return [];
      if (t === !0) return n(a);
      let o,
        s,
        c,
        l = [];
      if (a.length === 1)
        return (
          (s = a[0]),
          (c = new pu()),
          (c.curves = s.curves),
          l.push(c),
          l
        );
      let u = !i(a[0].getPoints());
      u = e ? !u : u;
      let d = [],
        f = [],
        p = [],
        m = 0,
        h;
      ((f[m] = void 0), (p[m] = []));
      for (let t = 0, n = a.length; t < n; t++)
        ((s = a[t]),
          (h = s.getPoints()),
          (o = i(h)),
          (o = e ? !o : o),
          o
            ? (!u && f[m] && m++,
              (f[m] = { s: new pu(), p: h }),
              (f[m].s.curves = s.curves),
              u && m++,
              (p[m] = []))
            : p[m].push({ h: s, p: h[0] }));
      if (!f[0]) return n(a);
      if (f.length > 1) {
        let e = !1,
          t = [];
        for (let e = 0, t = f.length; e < t; e++) d[e] = [];
        for (let n = 0, i = f.length; n < i; n++) {
          let i = p[n];
          for (let a = 0; a < i.length; a++) {
            let o = i[a],
              s = !0;
            for (let i = 0; i < f.length; i++)
              r(o.p, f[i].p) &&
                (n !== i && t.push({ froms: n, tos: i, hole: a }),
                s ? ((s = !1), d[i].push(o)) : (e = !0));
            s && d[n].push(o);
          }
        }
        t.length > 0 && (e || (p = d));
      }
      let g;
      for (let e = 0, t = f.length; e < t; e++) {
        ((c = f[e].s), l.push(c), (g = p[e]));
        for (let e = 0, t = g.length; e < t; e++) c.holes.push(g[e].h);
      }
      return l;
    }
  },
  Qp = new Float32Array(1),
  $p = new Int32Array(Qp.buffer),
  em = class {
    static toHalfFloat(e) {
      (e > 65504 &&
        (console.warn(`THREE.DataUtils.toHalfFloat(): value exceeds 65504.`),
        (e = 65504)),
        (Qp[0] = e));
      let t = $p[0],
        n = (t >> 16) & 32768,
        r = (t >> 12) & 2047,
        i = (t >> 23) & 255;
      return i < 103
        ? n
        : i > 142
          ? ((n |= 31744), (n |= (i == 255 ? 0 : 1) && t & 8388607), n)
          : i < 113
            ? ((r |= 2048), (n |= (r >> (114 - i)) + ((r >> (113 - i)) & 1)), n)
            : ((n |= ((i - 112) << 10) | (r >> 1)), (n += r & 1), n);
    }
  };
function tm(e) {
  return (
    console.warn(
      `THREE.MeshFaceMaterial has been removed. Use an Array instead.`,
    ),
    e
  );
}
function nm(e = []) {
  return (
    console.warn(`THREE.MultiMaterial has been removed. Use an Array instead.`),
    (e.isMultiMaterial = !0),
    (e.materials = e),
    (e.clone = function () {
      return e.slice();
    }),
    e
  );
}
function rm(e, t) {
  return (
    console.warn(`THREE.PointCloud has been renamed to THREE.Points.`),
    new Sl(e, t)
  );
}
function im(e) {
  return (
    console.warn(`THREE.Particle has been renamed to THREE.Sprite.`),
    new Rc(e)
  );
}
function am(e, t) {
  return (
    console.warn(`THREE.ParticleSystem has been renamed to THREE.Points.`),
    new Sl(e, t)
  );
}
function om(e) {
  return (
    console.warn(
      `THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.`,
    ),
    new _l(e)
  );
}
function sm(e) {
  return (
    console.warn(
      `THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.`,
    ),
    new _l(e)
  );
}
function cm(e) {
  return (
    console.warn(
      `THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.`,
    ),
    new _l(e)
  );
}
function lm(e, t, n) {
  return (
    console.warn(`THREE.Vertex has been removed. Use THREE.Vector3 instead.`),
    new V(e, t, n)
  );
}
function um(e, t) {
  return (
    console.warn(
      `THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.`,
    ),
    new K(e, t).setUsage(Kt)
  );
}
function dm(e, t) {
  return (
    console.warn(
      `THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.`,
    ),
    new di(e, t)
  );
}
function fm(e, t) {
  return (
    console.warn(
      `THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.`,
    ),
    new fi(e, t)
  );
}
function pm(e, t) {
  return (
    console.warn(
      `THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.`,
    ),
    new pi(e, t)
  );
}
function mm(e, t) {
  return (
    console.warn(
      `THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.`,
    ),
    new mi(e, t)
  );
}
function hm(e, t) {
  return (
    console.warn(
      `THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.`,
    ),
    new hi(e, t)
  );
}
function gm(e, t) {
  return (
    console.warn(
      `THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.`,
    ),
    new gi(e, t)
  );
}
function _m(e, t) {
  return (
    console.warn(
      `THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.`,
    ),
    new _i(e, t)
  );
}
function vm(e, t) {
  return (
    console.warn(
      `THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.`,
    ),
    new q(e, t)
  );
}
function ym(e, t) {
  return (
    console.warn(
      `THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.`,
    ),
    new yi(e, t)
  );
}
((Rl.create = function (e, t) {
  return (
    console.log(`THREE.Curve.create() has been deprecated`),
    (e.prototype = Object.create(Rl.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.getPoint = t),
    e
  );
}),
  (fu.prototype.fromPoints = function (e) {
    return (
      console.warn(
        `THREE.Path: .fromPoints() has been renamed to .setFromPoints().`,
      ),
      this.setFromPoints(e)
    );
  }));
function bm(e) {
  return (
    console.warn(`THREE.AxisHelper has been renamed to THREE.AxesHelper.`),
    new Xp(e)
  );
}
function xm(e, t) {
  return (
    console.warn(
      `THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.`,
    ),
    new Up(e, t)
  );
}
function Sm(e, t) {
  return (
    console.warn(
      `THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.`,
    ),
    new hl(new Ll(e.geometry), new ol({ color: t === void 0 ? 16777215 : t }))
  );
}
((Mp.prototype.setColors = function () {
  console.error(
    `THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.`,
  );
}),
  (Tp.prototype.update = function () {
    console.error(
      `THREE.SkeletonHelper: update() no longer needs to be called.`,
    );
  }));
function Cm(e, t) {
  return (
    console.warn(
      `THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.`,
    ),
    new hl(new ld(e.geometry), new ol({ color: t === void 0 ? 16777215 : t }))
  );
}
((Bd.prototype.extractUrlBase = function (e) {
  return (
    console.warn(
      `THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.`,
    ),
    gf.extractUrlBase(e)
  );
}),
  (Bd.Handlers = {
    add: function () {
      console.error(
        `THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.`,
      );
    },
    get: function () {
      console.error(
        `THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.`,
      );
    },
  }));
function wm(e) {
  return (
    console.warn(`THREE.XHRLoader has been renamed to THREE.FileLoader.`),
    new Hd(e)
  );
}
function Tm(e) {
  return (
    console.warn(
      `THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.`,
    ),
    new qd(e)
  );
}
((gp.prototype.center = function (e) {
  return (
    console.warn(`THREE.Box2: .center() has been renamed to .getCenter().`),
    this.getCenter(e)
  );
}),
  (gp.prototype.empty = function () {
    return (
      console.warn(`THREE.Box2: .empty() has been renamed to .isEmpty().`),
      this.isEmpty()
    );
  }),
  (gp.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        `THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().`,
      ),
      this.intersectsBox(e)
    );
  }),
  (gp.prototype.size = function (e) {
    return (
      console.warn(`THREE.Box2: .size() has been renamed to .getSize().`),
      this.getSize(e)
    );
  }),
  (Kn.prototype.center = function (e) {
    return (
      console.warn(`THREE.Box3: .center() has been renamed to .getCenter().`),
      this.getCenter(e)
    );
  }),
  (Kn.prototype.empty = function () {
    return (
      console.warn(`THREE.Box3: .empty() has been renamed to .isEmpty().`),
      this.isEmpty()
    );
  }),
  (Kn.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        `THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().`,
      ),
      this.intersectsBox(e)
    );
  }),
  (Kn.prototype.isIntersectionSphere = function (e) {
    return (
      console.warn(
        `THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().`,
      ),
      this.intersectsSphere(e)
    );
  }),
  (Kn.prototype.size = function (e) {
    return (
      console.warn(`THREE.Box3: .size() has been renamed to .getSize().`),
      this.getSize(e)
    );
  }),
  (dr.prototype.empty = function () {
    return (
      console.warn(`THREE.Sphere: .empty() has been renamed to .isEmpty().`),
      this.isEmpty()
    );
  }),
  (pa.prototype.setFromMatrix = function (e) {
    return (
      console.warn(
        `THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().`,
      ),
      this.setFromProjectionMatrix(e)
    );
  }),
  (yp.prototype.center = function (e) {
    return (
      console.warn(`THREE.Line3: .center() has been renamed to .getCenter().`),
      this.getCenter(e)
    );
  }),
  (kn.prototype.flattenToArrayOffset = function (e, t) {
    return (
      console.warn(
        `THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`,
      ),
      this.toArray(e, t)
    );
  }),
  (kn.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        `THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.`,
      ),
      e.applyMatrix3(this)
    );
  }),
  (kn.prototype.multiplyVector3Array = function () {
    console.error(`THREE.Matrix3: .multiplyVector3Array() has been removed.`);
  }),
  (kn.prototype.applyToBufferAttribute = function (e) {
    return (
      console.warn(
        `THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.`,
      ),
      e.applyMatrix3(this)
    );
  }),
  (kn.prototype.applyToVector3Array = function () {
    console.error(`THREE.Matrix3: .applyToVector3Array() has been removed.`);
  }),
  (kn.prototype.getInverse = function (e) {
    return (
      console.warn(
        `THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`,
      ),
      this.copy(e).invert()
    );
  }),
  (H.prototype.extractPosition = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().`,
      ),
      this.copyPosition(e)
    );
  }),
  (H.prototype.flattenToArrayOffset = function (e, t) {
    return (
      console.warn(
        `THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`,
      ),
      this.toArray(e, t)
    );
  }),
  (H.prototype.getPosition = function () {
    return (
      console.warn(
        `THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.`,
      ),
      new V().setFromMatrixColumn(this, 3)
    );
  }),
  (H.prototype.setRotationFromQuaternion = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().`,
      ),
      this.makeRotationFromQuaternion(e)
    );
  }),
  (H.prototype.multiplyToArray = function () {
    console.warn(`THREE.Matrix4: .multiplyToArray() has been removed.`);
  }),
  (H.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.`,
      ),
      e.applyMatrix4(this)
    );
  }),
  (H.prototype.multiplyVector4 = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.`,
      ),
      e.applyMatrix4(this)
    );
  }),
  (H.prototype.multiplyVector3Array = function () {
    console.error(`THREE.Matrix4: .multiplyVector3Array() has been removed.`);
  }),
  (H.prototype.rotateAxis = function (e) {
    (console.warn(
      `THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.`,
    ),
      e.transformDirection(this));
  }),
  (H.prototype.crossVector = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.`,
      ),
      e.applyMatrix4(this)
    );
  }),
  (H.prototype.translate = function () {
    console.error(`THREE.Matrix4: .translate() has been removed.`);
  }),
  (H.prototype.rotateX = function () {
    console.error(`THREE.Matrix4: .rotateX() has been removed.`);
  }),
  (H.prototype.rotateY = function () {
    console.error(`THREE.Matrix4: .rotateY() has been removed.`);
  }),
  (H.prototype.rotateZ = function () {
    console.error(`THREE.Matrix4: .rotateZ() has been removed.`);
  }),
  (H.prototype.rotateByAxis = function () {
    console.error(`THREE.Matrix4: .rotateByAxis() has been removed.`);
  }),
  (H.prototype.applyToBufferAttribute = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.`,
      ),
      e.applyMatrix4(this)
    );
  }),
  (H.prototype.applyToVector3Array = function () {
    console.error(`THREE.Matrix4: .applyToVector3Array() has been removed.`);
  }),
  (H.prototype.makeFrustum = function (e, t, n, r, i, a) {
    return (
      console.warn(
        `THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.`,
      ),
      this.makePerspective(e, t, r, n, i, a)
    );
  }),
  (H.prototype.getInverse = function (e) {
    return (
      console.warn(
        `THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`,
      ),
      this.copy(e).invert()
    );
  }),
  (ua.prototype.isIntersectionLine = function (e) {
    return (
      console.warn(
        `THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().`,
      ),
      this.intersectsLine(e)
    );
  }),
  (Un.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        `THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.`,
      ),
      e.applyQuaternion(this)
    );
  }),
  (Un.prototype.inverse = function () {
    return (
      console.warn(
        `THREE.Quaternion: .inverse() has been renamed to invert().`,
      ),
      this.invert()
    );
  }),
  (yr.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        `THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().`,
      ),
      this.intersectsBox(e)
    );
  }),
  (yr.prototype.isIntersectionPlane = function (e) {
    return (
      console.warn(
        `THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().`,
      ),
      this.intersectsPlane(e)
    );
  }),
  (yr.prototype.isIntersectionSphere = function (e) {
    return (
      console.warn(
        `THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().`,
      ),
      this.intersectsSphere(e)
    );
  }),
  (ei.prototype.area = function () {
    return (
      console.warn(`THREE.Triangle: .area() has been renamed to .getArea().`),
      this.getArea()
    );
  }),
  (ei.prototype.barycoordFromPoint = function (e, t) {
    return (
      console.warn(
        `THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`,
      ),
      this.getBarycoord(e, t)
    );
  }),
  (ei.prototype.midpoint = function (e) {
    return (
      console.warn(
        `THREE.Triangle: .midpoint() has been renamed to .getMidpoint().`,
      ),
      this.getMidpoint(e)
    );
  }),
  (ei.prototypenormal = function (e) {
    return (
      console.warn(
        `THREE.Triangle: .normal() has been renamed to .getNormal().`,
      ),
      this.getNormal(e)
    );
  }),
  (ei.prototype.plane = function (e) {
    return (
      console.warn(`THREE.Triangle: .plane() has been renamed to .getPlane().`),
      this.getPlane(e)
    );
  }),
  (ei.barycoordFromPoint = function (e, t, n, r, i) {
    return (
      console.warn(
        `THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`,
      ),
      ei.getBarycoord(e, t, n, r, i)
    );
  }),
  (ei.normal = function (e, t, n, r) {
    return (
      console.warn(
        `THREE.Triangle: .normal() has been renamed to .getNormal().`,
      ),
      ei.getNormal(e, t, n, r)
    );
  }),
  (pu.prototype.extractAllPoints = function (e) {
    return (
      console.warn(
        `THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.`,
      ),
      this.extractPoints(e)
    );
  }),
  (pu.prototype.extrude = function (e) {
    return (
      console.warn(
        `THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.`,
      ),
      new Yu(this, e)
    );
  }),
  (pu.prototype.makeGeometry = function (e) {
    return (
      console.warn(
        `THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.`,
      ),
      new nd(this, e)
    );
  }),
  (z.prototype.fromAttribute = function (e, t, n) {
    return (
      console.warn(
        `THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().`,
      ),
      this.fromBufferAttribute(e, t, n)
    );
  }),
  (z.prototype.distanceToManhattan = function (e) {
    return (
      console.warn(
        `THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`,
      ),
      this.manhattanDistanceTo(e)
    );
  }),
  (z.prototype.lengthManhattan = function () {
    return (
      console.warn(
        `THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().`,
      ),
      this.manhattanLength()
    );
  }),
  (V.prototype.setEulerFromRotationMatrix = function () {
    console.error(
      `THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.`,
    );
  }),
  (V.prototype.setEulerFromQuaternion = function () {
    console.error(
      `THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.`,
    );
  }),
  (V.prototype.getPositionFromMatrix = function (e) {
    return (
      console.warn(
        `THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().`,
      ),
      this.setFromMatrixPosition(e)
    );
  }),
  (V.prototype.getScaleFromMatrix = function (e) {
    return (
      console.warn(
        `THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().`,
      ),
      this.setFromMatrixScale(e)
    );
  }),
  (V.prototype.getColumnFromMatrix = function (e, t) {
    return (
      console.warn(
        `THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().`,
      ),
      this.setFromMatrixColumn(t, e)
    );
  }),
  (V.prototype.applyProjection = function (e) {
    return (
      console.warn(
        `THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.`,
      ),
      this.applyMatrix4(e)
    );
  }),
  (V.prototype.fromAttribute = function (e, t, n) {
    return (
      console.warn(
        `THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().`,
      ),
      this.fromBufferAttribute(e, t, n)
    );
  }),
  (V.prototype.distanceToManhattan = function (e) {
    return (
      console.warn(
        `THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`,
      ),
      this.manhattanDistanceTo(e)
    );
  }),
  (V.prototype.lengthManhattan = function () {
    return (
      console.warn(
        `THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().`,
      ),
      this.manhattanLength()
    );
  }),
  (B.prototype.fromAttribute = function (e, t, n) {
    return (
      console.warn(
        `THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().`,
      ),
      this.fromBufferAttribute(e, t, n)
    );
  }),
  (B.prototype.lengthManhattan = function () {
    return (
      console.warn(
        `THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().`,
      ),
      this.manhattanLength()
    );
  }),
  (U.prototype.getChildByName = function (e) {
    return (
      console.warn(
        `THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().`,
      ),
      this.getObjectByName(e)
    );
  }),
  (U.prototype.renderDepth = function () {
    console.warn(
      `THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.`,
    );
  }),
  (U.prototype.translate = function (e, t) {
    return (
      console.warn(
        `THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.`,
      ),
      this.translateOnAxis(t, e)
    );
  }),
  (U.prototype.getWorldRotation = function () {
    console.error(
      `THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.`,
    );
  }),
  (U.prototype.applyMatrix = function (e) {
    return (
      console.warn(
        `THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().`,
      ),
      this.applyMatrix4(e)
    );
  }),
  Object.defineProperties(U.prototype, {
    eulerOrder: {
      get: function () {
        return (
          console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),
          this.rotation.order
        );
      },
      set: function (e) {
        (console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),
          (this.rotation.order = e));
      },
    },
    useQuaternion: {
      get: function () {
        console.warn(
          `THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`,
        );
      },
    },
  }),
  (Wi.prototype.setDrawMode = function () {
    console.error(
      `THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`,
    );
  }),
  Object.defineProperties(Wi.prototype, {
    drawMode: {
      get: function () {
        return (
          console.error(
            `THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.`,
          ),
          0
        );
      },
      set: function () {
        console.error(
          `THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`,
        );
      },
    },
  }),
  (Jc.prototype.initBones = function () {
    console.error(`THREE.SkinnedMesh: initBones() has been removed.`);
  }),
  (ta.prototype.setLens = function (e, t) {
    (console.warn(
      `THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.`,
    ),
      t !== void 0 && (this.filmGauge = t),
      this.setFocalLength(e));
  }),
  Object.defineProperties(Yd.prototype, {
    onlyShadow: {
      set: function () {
        console.warn(`THREE.Light: .onlyShadow has been removed.`);
      },
    },
    shadowCameraFov: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraFov is now .shadow.camera.fov.`,
        ),
          (this.shadow.camera.fov = e));
      },
    },
    shadowCameraLeft: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraLeft is now .shadow.camera.left.`,
        ),
          (this.shadow.camera.left = e));
      },
    },
    shadowCameraRight: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraRight is now .shadow.camera.right.`,
        ),
          (this.shadow.camera.right = e));
      },
    },
    shadowCameraTop: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraTop is now .shadow.camera.top.`,
        ),
          (this.shadow.camera.top = e));
      },
    },
    shadowCameraBottom: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.`,
        ),
          (this.shadow.camera.bottom = e));
      },
    },
    shadowCameraNear: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraNear is now .shadow.camera.near.`,
        ),
          (this.shadow.camera.near = e));
      },
    },
    shadowCameraFar: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowCameraFar is now .shadow.camera.far.`,
        ),
          (this.shadow.camera.far = e));
      },
    },
    shadowCameraVisible: {
      set: function () {
        console.warn(
          `THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.`,
        );
      },
    },
    shadowBias: {
      set: function (e) {
        (console.warn(`THREE.Light: .shadowBias is now .shadow.bias.`),
          (this.shadow.bias = e));
      },
    },
    shadowDarkness: {
      set: function () {
        console.warn(`THREE.Light: .shadowDarkness has been removed.`);
      },
    },
    shadowMapWidth: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.`,
        ),
          (this.shadow.mapSize.width = e));
      },
    },
    shadowMapHeight: {
      set: function (e) {
        (console.warn(
          `THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.`,
        ),
          (this.shadow.mapSize.height = e));
      },
    },
  }),
  Object.defineProperties(K.prototype, {
    length: {
      get: function () {
        return (
          console.warn(
            `THREE.BufferAttribute: .length has been deprecated. Use .count instead.`,
          ),
          this.array.length
        );
      },
    },
    dynamic: {
      get: function () {
        return (
          console.warn(
            `THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`,
          ),
          this.usage === Kt
        );
      },
      set: function () {
        (console.warn(
          `THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`,
        ),
          this.setUsage(Kt));
      },
    },
  }),
  (K.prototype.setDynamic = function (e) {
    return (
      console.warn(
        `THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.`,
      ),
      this.setUsage(e === !0 ? Kt : Gt),
      this
    );
  }),
  (K.prototype.copyIndicesArray = function () {
    console.error(
      `THREE.BufferAttribute: .copyIndicesArray() has been removed.`,
    );
  }),
  (K.prototype.setArray = function () {
    console.error(
      `THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`,
    );
  }),
  (J.prototype.addIndex = function (e) {
    (console.warn(
      `THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().`,
    ),
      this.setIndex(e));
  }),
  (J.prototype.addAttribute = function (e, t) {
    return (
      console.warn(
        `THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().`,
      ),
      !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute)
        ? (console.warn(
            `THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).`,
          ),
          this.setAttribute(e, new K(arguments[1], arguments[2])))
        : e === `index`
          ? (console.warn(
              `THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.`,
            ),
            this.setIndex(t),
            this)
          : this.setAttribute(e, t)
    );
  }),
  (J.prototype.addDrawCall = function (e, t, n) {
    (n !== void 0 &&
      console.warn(
        `THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.`,
      ),
      console.warn(`THREE.BufferGeometry: .addDrawCall() is now .addGroup().`),
      this.addGroup(e, t));
  }),
  (J.prototype.clearDrawCalls = function () {
    (console.warn(
      `THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().`,
    ),
      this.clearGroups());
  }),
  (J.prototype.computeOffsets = function () {
    console.warn(`THREE.BufferGeometry: .computeOffsets() has been removed.`);
  }),
  (J.prototype.removeAttribute = function (e) {
    return (
      console.warn(
        `THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().`,
      ),
      this.deleteAttribute(e)
    );
  }),
  (J.prototype.applyMatrix = function (e) {
    return (
      console.warn(
        `THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().`,
      ),
      this.applyMatrix4(e)
    );
  }),
  Object.defineProperties(J.prototype, {
    drawcalls: {
      get: function () {
        return (
          console.error(
            `THREE.BufferGeometry: .drawcalls has been renamed to .groups.`,
          ),
          this.groups
        );
      },
    },
    offsets: {
      get: function () {
        return (
          console.warn(
            `THREE.BufferGeometry: .offsets has been renamed to .groups.`,
          ),
          this.groups
        );
      },
    },
  }),
  (xc.prototype.setDynamic = function (e) {
    return (
      console.warn(
        `THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.`,
      ),
      this.setUsage(e === !0 ? Kt : Gt),
      this
    );
  }),
  (xc.prototype.setArray = function () {
    console.error(
      `THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`,
    );
  }),
  (Yu.prototype.getArrays = function () {
    console.error(`THREE.ExtrudeGeometry: .getArrays() has been removed.`);
  }),
  (Yu.prototype.addShapeList = function () {
    console.error(`THREE.ExtrudeGeometry: .addShapeList() has been removed.`);
  }),
  (Yu.prototype.addShape = function () {
    console.error(`THREE.ExtrudeGeometry: .addShape() has been removed.`);
  }),
  (bc.prototype.dispose = function () {
    console.error(`THREE.Scene: .dispose() has been removed.`);
  }),
  (sp.prototype.onUpdate = function () {
    return (
      console.warn(
        `THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.`,
      ),
      this
    );
  }),
  Object.defineProperties(ni.prototype, {
    wrapAround: {
      get: function () {
        console.warn(`THREE.Material: .wrapAround has been removed.`);
      },
      set: function () {
        console.warn(`THREE.Material: .wrapAround has been removed.`);
      },
    },
    overdraw: {
      get: function () {
        console.warn(`THREE.Material: .overdraw has been removed.`);
      },
      set: function () {
        console.warn(`THREE.Material: .overdraw has been removed.`);
      },
    },
    wrapRGB: {
      get: function () {
        return (
          console.warn(`THREE.Material: .wrapRGB has been removed.`),
          new W()
        );
      },
    },
    shading: {
      get: function () {
        console.error(
          `THREE.` +
            this.type +
            `: .shading has been removed. Use the boolean .flatShading instead.`,
        );
      },
      set: function (e) {
        (console.warn(
          `THREE.` +
            this.type +
            `: .shading has been removed. Use the boolean .flatShading instead.`,
        ),
          (this.flatShading = e === 1));
      },
    },
    stencilMask: {
      get: function () {
        return (
          console.warn(
            `THREE.` +
              this.type +
              `: .stencilMask has been removed. Use .stencilFuncMask instead.`,
          ),
          this.stencilFuncMask
        );
      },
      set: function (e) {
        (console.warn(
          `THREE.` +
            this.type +
            `: .stencilMask has been removed. Use .stencilFuncMask instead.`,
        ),
          (this.stencilFuncMask = e));
      },
    },
    vertexTangents: {
      get: function () {
        console.warn(
          `THREE.` + this.type + `: .vertexTangents has been removed.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.` + this.type + `: .vertexTangents has been removed.`,
        );
      },
    },
  }),
  Object.defineProperties($i.prototype, {
    derivatives: {
      get: function () {
        return (
          console.warn(
            `THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`,
          ),
          this.extensions.derivatives
        );
      },
      set: function (e) {
        (console.warn(
          `THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`,
        ),
          (this.extensions.derivatives = e));
      },
    },
  }),
  (Z.prototype.clearTarget = function (e, t, n, r) {
    (console.warn(
      `THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.`,
    ),
      this.setRenderTarget(e),
      this.clear(t, n, r));
  }),
  (Z.prototype.animate = function (e) {
    (console.warn(
      `THREE.WebGLRenderer: .animate() is now .setAnimationLoop().`,
    ),
      this.setAnimationLoop(e));
  }),
  (Z.prototype.getCurrentRenderTarget = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().`,
      ),
      this.getRenderTarget()
    );
  }),
  (Z.prototype.getMaxAnisotropy = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().`,
      ),
      this.capabilities.getMaxAnisotropy()
    );
  }),
  (Z.prototype.getPrecision = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.`,
      ),
      this.capabilities.precision
    );
  }),
  (Z.prototype.resetGLState = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .resetGLState() is now .state.reset().`,
      ),
      this.state.reset()
    );
  }),
  (Z.prototype.supportsFloatTextures = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).`,
      ),
      this.extensions.get(`OES_texture_float`)
    );
  }),
  (Z.prototype.supportsHalfFloatTextures = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).`,
      ),
      this.extensions.get(`OES_texture_half_float`)
    );
  }),
  (Z.prototype.supportsStandardDerivatives = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).`,
      ),
      this.extensions.get(`OES_standard_derivatives`)
    );
  }),
  (Z.prototype.supportsCompressedTextureS3TC = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).`,
      ),
      this.extensions.get(`WEBGL_compressed_texture_s3tc`)
    );
  }),
  (Z.prototype.supportsCompressedTexturePVRTC = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).`,
      ),
      this.extensions.get(`WEBGL_compressed_texture_pvrtc`)
    );
  }),
  (Z.prototype.supportsBlendMinMax = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).`,
      ),
      this.extensions.get(`EXT_blend_minmax`)
    );
  }),
  (Z.prototype.supportsVertexTextures = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.`,
      ),
      this.capabilities.vertexTextures
    );
  }),
  (Z.prototype.supportsInstancedArrays = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).`,
      ),
      this.extensions.get(`ANGLE_instanced_arrays`)
    );
  }),
  (Z.prototype.enableScissorTest = function (e) {
    (console.warn(
      `THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().`,
    ),
      this.setScissorTest(e));
  }),
  (Z.prototype.initMaterial = function () {
    console.warn(`THREE.WebGLRenderer: .initMaterial() has been removed.`);
  }),
  (Z.prototype.addPrePlugin = function () {
    console.warn(`THREE.WebGLRenderer: .addPrePlugin() has been removed.`);
  }),
  (Z.prototype.addPostPlugin = function () {
    console.warn(`THREE.WebGLRenderer: .addPostPlugin() has been removed.`);
  }),
  (Z.prototype.updateShadowMap = function () {
    console.warn(`THREE.WebGLRenderer: .updateShadowMap() has been removed.`);
  }),
  (Z.prototype.setFaceCulling = function () {
    console.warn(`THREE.WebGLRenderer: .setFaceCulling() has been removed.`);
  }),
  (Z.prototype.allocTextureUnit = function () {
    console.warn(`THREE.WebGLRenderer: .allocTextureUnit() has been removed.`);
  }),
  (Z.prototype.setTexture = function () {
    console.warn(`THREE.WebGLRenderer: .setTexture() has been removed.`);
  }),
  (Z.prototype.setTexture2D = function () {
    console.warn(`THREE.WebGLRenderer: .setTexture2D() has been removed.`);
  }),
  (Z.prototype.setTextureCube = function () {
    console.warn(`THREE.WebGLRenderer: .setTextureCube() has been removed.`);
  }),
  (Z.prototype.getActiveMipMapLevel = function () {
    return (
      console.warn(
        `THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().`,
      ),
      this.getActiveMipmapLevel()
    );
  }),
  Object.defineProperties(Z.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled;
      },
      set: function (e) {
        (console.warn(
          `THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.`,
        ),
          (this.shadowMap.enabled = e));
      },
    },
    shadowMapType: {
      get: function () {
        return this.shadowMap.type;
      },
      set: function (e) {
        (console.warn(
          `THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.`,
        ),
          (this.shadowMap.type = e));
      },
    },
    shadowMapCullFace: {
      get: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`,
        );
      },
    },
    context: {
      get: function () {
        return (
          console.warn(
            `THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.`,
          ),
          this.getContext()
        );
      },
    },
    vr: {
      get: function () {
        return (
          console.warn(`THREE.WebGLRenderer: .vr has been renamed to .xr`),
          this.xr
        );
      },
    },
    gammaInput: {
      get: function () {
        return (
          console.warn(
            `THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`,
          ),
          !1
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`,
        );
      },
    },
    gammaOutput: {
      get: function () {
        return (
          console.warn(
            `THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`,
          ),
          !1
        );
      },
      set: function (e) {
        (console.warn(
          `THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`,
        ),
          (this.outputEncoding = e === !0 ? kt : Ot));
      },
    },
    toneMappingWhitePoint: {
      get: function () {
        return (
          console.warn(
            `THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`,
          ),
          1
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`,
        );
      },
    },
  }),
  Object.defineProperties(oc.prototype, {
    cullFace: {
      get: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`,
        );
      },
    },
    renderReverseSided: {
      get: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`,
        );
      },
    },
    renderSingleSided: {
      get: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`,
        );
      },
      set: function () {
        console.warn(
          `THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`,
        );
      },
    },
  }));
function Em(e, t, n) {
  return (
    console.warn(
      `THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).`,
    ),
    new oa(e, n)
  );
}
(Object.defineProperties(Bn.prototype, {
  wrapS: {
    get: function () {
      return (
        console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),
        this.texture.wrapS
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),
        (this.texture.wrapS = e));
    },
  },
  wrapT: {
    get: function () {
      return (
        console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),
        this.texture.wrapT
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),
        (this.texture.wrapT = e));
    },
  },
  magFilter: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`,
        ),
        this.texture.magFilter
      );
    },
    set: function (e) {
      (console.warn(
        `THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`,
      ),
        (this.texture.magFilter = e));
    },
  },
  minFilter: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`,
        ),
        this.texture.minFilter
      );
    },
    set: function (e) {
      (console.warn(
        `THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`,
      ),
        (this.texture.minFilter = e));
    },
  },
  anisotropy: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`,
        ),
        this.texture.anisotropy
      );
    },
    set: function (e) {
      (console.warn(
        `THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`,
      ),
        (this.texture.anisotropy = e));
    },
  },
  offset: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .offset is now .texture.offset.`,
        ),
        this.texture.offset
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .offset is now .texture.offset.`),
        (this.texture.offset = e));
    },
  },
  repeat: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`,
        ),
        this.texture.repeat
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`),
        (this.texture.repeat = e));
    },
  },
  format: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .format is now .texture.format.`,
        ),
        this.texture.format
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .format is now .texture.format.`),
        (this.texture.format = e));
    },
  },
  type: {
    get: function () {
      return (
        console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),
        this.texture.type
      );
    },
    set: function (e) {
      (console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),
        (this.texture.type = e));
    },
  },
  generateMipmaps: {
    get: function () {
      return (
        console.warn(
          `THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`,
        ),
        this.texture.generateMipmaps
      );
    },
    set: function (e) {
      (console.warn(
        `THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`,
      ),
        (this.texture.generateMipmaps = e));
    },
  },
}),
  (zf.prototype.load = function (e) {
    console.warn(
      `THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.`,
    );
    let t = this;
    return (
      new Ef().load(e, function (e) {
        t.setBuffer(e);
      }),
      this
    );
  }),
  (Gf.prototype.getData = function () {
    return (
      console.warn(
        `THREE.AudioAnalyser: .getData() is now .getFrequencyData().`,
      ),
      this.getFrequencyData()
    );
  }),
  (ia.prototype.updateCubeMap = function (e, t) {
    return (
      console.warn(`THREE.CubeCamera: .updateCubeMap() is now .update().`),
      this.update(e, t)
    );
  }),
  (ia.prototype.clear = function (e, t, n, r) {
    return (
      console.warn(`THREE.CubeCamera: .clear() is now .renderTarget.clear().`),
      this.renderTarget.clear(e, t, n, r)
    );
  }),
  (In.crossOrigin = void 0),
  (In.loadTexture = function (e, t, n, r) {
    console.warn(
      `THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.`,
    );
    let i = new Jd();
    i.setCrossOrigin(this.crossOrigin);
    let a = i.load(e, n, void 0, r);
    return (t && (a.mapping = t), a);
  }),
  (In.loadTextureCube = function (e, t, n, r) {
    console.warn(
      `THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.`,
    );
    let i = new Kd();
    i.setCrossOrigin(this.crossOrigin);
    let a = i.load(e, n, void 0, r);
    return (t && (a.mapping = t), a);
  }),
  (In.loadCompressedTexture = function () {
    console.error(
      `THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.`,
    );
  }),
  (In.loadCompressedTextureCube = function () {
    console.error(
      `THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.`,
    );
  }));
function Dm() {
  console.error(`THREE.CanvasRenderer has been removed`);
}
function Om() {
  console.error(`THREE.JSONLoader has been removed.`);
}
var km = {
  createMultiMaterialObject: function () {
    console.error(
      `THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js`,
    );
  },
  detach: function () {
    console.error(
      `THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js`,
    );
  },
  attach: function () {
    console.error(
      `THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js`,
    );
  },
};
function Am() {
  console.error(
    `THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js`,
  );
}
function jm() {
  return (
    console.error(
      `THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js`,
    ),
    new J()
  );
}
function Mm() {
  return (
    console.error(
      `THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js`,
    ),
    new J()
  );
}
function Nm() {
  console.error(
    `THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js`,
  );
}
function Pm() {
  console.error(
    `THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js`,
  );
}
function Fm() {
  console.error(`THREE.ImmediateRenderObject has been removed.`);
}
(typeof __THREE_DEVTOOLS__ < `u` &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent(`register`, { detail: { revision: `134` } }),
  ),
  typeof window < `u` &&
    (window.__THREE__
      ? console.warn(`WARNING: Multiple instances of Three.js being imported.`)
      : (window.__THREE__ = `134`)),
  (Number.prototype.clamp = function (e, t) {
    return Math.min(Math.max(this, e), t);
  }));
function Im() {
  return typeof navigator < `u`
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth < 600
    : null;
}
function Lm(e, t) {
  return ((e ??= 0), (t ??= 1), e + Math.random() * (t - e));
}
function Rm(e, t) {
  return ((e ??= 0), (t ??= 1), Math.floor(e + Math.random() * (t - e + 1)));
}
var zm = (e) => document.querySelector(e),
  Bm = (e) =>
    typeof e == `number` ? `#` + (`00000` + e.toString(16)).slice(-6) : e;
function Vm(e) {
  for (; e.children && e.children.length > 0; )
    (Vm(e.children[0]), e.remove(e.children[0]));
  (e.geometry && e.geometry.dispose(),
    e.material &&
      (Object.keys(e.material).forEach((t) => {
        e.material[t] &&
          e.material[t] !== null &&
          typeof e.material[t].dispose == `function` &&
          e.material[t].dispose();
      }),
      e.material.dispose()));
}
var Hm = typeof window == `object`,
  Um = (Hm && window.THREE) || {};
Hm && !window.VANTA && (window.VANTA = {});
var Wm = (Hm && window.VANTA) || {};
((Wm.register = (e, t) => (Wm[e] = (e) => new t(e))), (Wm.version = `0.5.24`));
var Gm = function () {
  return (
    Array.prototype.unshift.call(arguments, `[VANTA]`),
    console.error.apply(this, arguments)
  );
};
Wm.VantaBase = class {
  constructor(e = {}) {
    if (!Hm) return !1;
    ((Wm.current = this),
      (this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this)),
      (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
      (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
      (this.resize = this.resize.bind(this)),
      (this.animationLoop = this.animationLoop.bind(this)),
      (this.restart = this.restart.bind(this)));
    let t =
      typeof this.getDefaultOptions == `function`
        ? this.getDefaultOptions()
        : this.defaultOptions;
    if (
      ((this.options = Object.assign(
        {
          mouseControls: !0,
          touchControls: !0,
          gyroControls: !1,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
        },
        t,
      )),
      (e instanceof HTMLElement || typeof e == `string`) && (e = { el: e }),
      Object.assign(this.options, e),
      this.options.THREE && (Um = this.options.THREE),
      (this.el = this.options.el),
      this.el == null)
    )
      Gm(`Instance needs "el" param!`);
    else if (!(this.options.el instanceof HTMLElement)) {
      let e = this.el;
      if (((this.el = zm(e)), !this.el)) {
        Gm(`Cannot find element`, e);
        return;
      }
    }
    (this.prepareEl(), this.initThree(), this.setSize());
    try {
      this.init();
    } catch (e) {
      (Gm(`Init error`, e),
        this.renderer &&
          this.renderer.domElement &&
          this.el.removeChild(this.renderer.domElement),
        this.options.backgroundColor &&
          (console.log(`[VANTA] Falling back to backgroundColor`),
          (this.el.style.background = Bm(this.options.backgroundColor))));
      return;
    }
    (this.initMouse(), this.resize(), this.animationLoop());
    let n = window.addEventListener;
    (n(`resize`, this.resize),
      window.requestAnimationFrame(this.resize),
      this.options.mouseControls &&
        (n(`scroll`, this.windowMouseMoveWrapper),
        n(`mousemove`, this.windowMouseMoveWrapper)),
      this.options.touchControls &&
        (n(`touchstart`, this.windowTouchWrapper),
        n(`touchmove`, this.windowTouchWrapper)),
      this.options.gyroControls &&
        n(`deviceorientation`, this.windowGyroWrapper));
  }
  setOptions(e = {}) {
    (Object.assign(this.options, e), this.triggerMouseMove());
  }
  prepareEl() {
    let e, t;
    if (typeof Node < `u` && Node.TEXT_NODE)
      for (e = 0; e < this.el.childNodes.length; e++) {
        let t = this.el.childNodes[e];
        if (t.nodeType === Node.TEXT_NODE) {
          let e = document.createElement(`span`);
          ((e.textContent = t.textContent),
            t.parentElement.insertBefore(e, t),
            t.remove());
        }
      }
    for (e = 0; e < this.el.children.length; e++)
      ((t = this.el.children[e]),
        getComputedStyle(t).position === `static` &&
          (t.style.position = `relative`),
        getComputedStyle(t).zIndex === `auto` && (t.style.zIndex = 1));
    getComputedStyle(this.el).position === `static` &&
      (this.el.style.position = `relative`);
  }
  applyCanvasStyles(e, t = {}) {
    (Object.assign(e.style, {
      position: `absolute`,
      zIndex: 0,
      top: 0,
      left: 0,
      background: ``,
    }),
      Object.assign(e.style, t),
      e.classList.add(`vanta-canvas`));
  }
  initThree() {
    if (!Um.WebGLRenderer) {
      console.warn(`[VANTA] No THREE defined on window`);
      return;
    }
    ((this.renderer = new Um.WebGLRenderer({ alpha: !0, antialias: !0 })),
      this.el.appendChild(this.renderer.domElement),
      this.applyCanvasStyles(this.renderer.domElement),
      isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1),
      (this.scene = new Um.Scene()));
  }
  getCanvasElement() {
    if (this.renderer) return this.renderer.domElement;
    if (this.p5renderer) return this.p5renderer.canvas;
  }
  getCanvasRect() {
    let e = this.getCanvasElement();
    return e ? e.getBoundingClientRect() : !1;
  }
  windowMouseMoveWrapper(e) {
    let t = this.getCanvasRect();
    if (!t) return !1;
    let n = e.clientX - t.left,
      r = e.clientY - t.top;
    n >= 0 &&
      r >= 0 &&
      n <= t.width &&
      r <= t.height &&
      ((this.mouseX = n),
      (this.mouseY = r),
      this.options.mouseEase || this.triggerMouseMove(n, r));
  }
  windowTouchWrapper(e) {
    let t = this.getCanvasRect();
    if (!t) return !1;
    if (e.touches.length === 1) {
      let n = e.touches[0].clientX - t.left,
        r = e.touches[0].clientY - t.top;
      n >= 0 &&
        r >= 0 &&
        n <= t.width &&
        r <= t.height &&
        ((this.mouseX = n),
        (this.mouseY = r),
        this.options.mouseEase || this.triggerMouseMove(n, r));
    }
  }
  windowGyroWrapper(e) {
    let t = this.getCanvasRect();
    if (!t) return !1;
    let n = Math.round(e.alpha * 2) - t.left,
      r = Math.round(e.beta * 2) - t.top;
    n >= 0 &&
      r >= 0 &&
      n <= t.width &&
      r <= t.height &&
      ((this.mouseX = n),
      (this.mouseY = r),
      this.options.mouseEase || this.triggerMouseMove(n, r));
  }
  triggerMouseMove(e, t) {
    (e === void 0 &&
      t === void 0 &&
      (this.options.mouseEase
        ? ((e = this.mouseEaseX), (t = this.mouseEaseY))
        : ((e = this.mouseX), (t = this.mouseY))),
      this.uniforms &&
        ((this.uniforms.iMouse.value.x = e / this.scale),
        (this.uniforms.iMouse.value.y = t / this.scale)));
    let n = e / this.width,
      r = t / this.height;
    typeof this.onMouseMove == `function` && this.onMouseMove(n, r);
  }
  setSize() {
    ((this.scale ||= 1),
      Im() && this.options.scaleMobile
        ? (this.scale = this.options.scaleMobile)
        : this.options.scale && (this.scale = this.options.scale),
      (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
      (this.height = Math.max(this.el.offsetHeight, this.options.minHeight)));
  }
  initMouse() {
    ((!this.mouseX && !this.mouseY) ||
      (this.mouseX === this.options.minWidth / 2 &&
        this.mouseY === this.options.minHeight / 2)) &&
      ((this.mouseX = this.width / 2),
      (this.mouseY = this.height / 2),
      this.triggerMouseMove(this.mouseX, this.mouseY));
  }
  resize() {
    (this.setSize(),
      this.camera &&
        ((this.camera.aspect = this.width / this.height),
        typeof this.camera.updateProjectionMatrix == `function` &&
          this.camera.updateProjectionMatrix()),
      this.renderer &&
        (this.renderer.setSize(this.width, this.height),
        this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)),
      typeof this.onResize == `function` && this.onResize());
  }
  isOnScreen() {
    let e = this.el.offsetHeight,
      t = this.el.getBoundingClientRect(),
      n =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop,
      r = t.top + n,
      i = r - window.innerHeight,
      a = r + e;
    return i <= n && n <= a;
  }
  animationLoop() {
    ((this.t ||= 0), (this.t2 ||= 0));
    let e = performance.now();
    if (this.prevNow) {
      let t = (e - this.prevNow) / (1e3 / 60);
      ((t = Math.max(0.2, Math.min(t, 5))),
        (this.t += t),
        (this.t2 += (this.options.speed || 1) * t),
        this.uniforms && (this.uniforms.iTime.value = this.t2 * 0.016667));
    }
    return (
      (this.prevNow = e),
      this.options.mouseEase &&
        ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
        (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
        Math.abs(this.mouseEaseX - this.mouseX) +
          Math.abs(this.mouseEaseY - this.mouseY) >
          0.1 &&
          ((this.mouseEaseX += (this.mouseX - this.mouseEaseX) * 0.05),
          (this.mouseEaseY += (this.mouseY - this.mouseEaseY) * 0.05),
          this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
      (this.isOnScreen() || this.options.forceAnimate) &&
        (typeof this.onUpdate == `function` && this.onUpdate(),
        this.scene &&
          this.camera &&
          (this.renderer.render(this.scene, this.camera),
          this.renderer.setClearColor(
            this.options.backgroundColor,
            this.options.backgroundAlpha,
          )),
        this.fps && this.fps.update && this.fps.update(),
        typeof this.afterRender == `function` && this.afterRender()),
      (this.req = window.requestAnimationFrame(this.animationLoop))
    );
  }
  restart() {
    if (this.scene)
      for (; this.scene.children.length; )
        this.scene.remove(this.scene.children[0]);
    (typeof this.onRestart == `function` && this.onRestart(), this.init());
  }
  init() {
    typeof this.onInit == `function` && this.onInit();
  }
  destroy() {
    typeof this.onDestroy == `function` && this.onDestroy();
    let e = window.removeEventListener;
    (e(`touchstart`, this.windowTouchWrapper),
      e(`touchmove`, this.windowTouchWrapper),
      e(`scroll`, this.windowMouseMoveWrapper),
      e(`mousemove`, this.windowMouseMoveWrapper),
      e(`deviceorientation`, this.windowGyroWrapper),
      e(`resize`, this.resize),
      window.cancelAnimationFrame(this.req));
    let t = this.scene;
    (t && t.children && Vm(t),
      this.renderer &&
        (this.renderer.domElement &&
          this.el.removeChild(this.renderer.domElement),
        (this.renderer = null),
        (this.scene = null)),
      Wm.current === this && (Wm.current = null));
  }
};
var Km = Wm.VantaBase,
  qm = typeof window == `object` && window.THREE,
  Jm = { color: 21896, shininess: 30, waveHeight: 15, waveSpeed: 1, zoom: 1 },
  Ym = class extends Km {
    static initClass() {
      ((this.prototype.ww = 100),
        (this.prototype.hh = 80),
        (this.prototype.waveNoise = 4));
    }
    constructor(e) {
      ((qm = e.THREE || qm), super(e));
    }
    getMaterial() {
      let e = {
        color: this.options.color,
        shininess: this.options.shininess,
        flatShading: !0,
        side: qm.DoubleSide,
      };
      return new qm.MeshPhongMaterial(e);
    }
    onInit() {
      let e,
        t,
        n = this.getMaterial(),
        r = new qm.BufferGeometry();
      this.gg = [];
      let i = [];
      for (e = 0; e <= this.ww; e++)
        for (this.gg[e] = [], t = 0; t <= this.hh; t++) {
          let n = i.length,
            r = new qm.Vector3(
              (e - this.ww * 0.5) * 18,
              Lm(0, this.waveNoise) - 10,
              (this.hh * 0.5 - t) * 18,
            );
          (i.push(r), (this.gg[e][t] = n));
        }
      r.setFromPoints(i);
      let a = [];
      for (e = 1; e <= this.ww; e++)
        for (t = 1; t <= this.hh; t++) {
          let n,
            r,
            i = this.gg[e][t],
            o = this.gg[e][t - 1],
            s = this.gg[e - 1][t],
            c = this.gg[e - 1][t - 1];
          (Rm(0, 1)
            ? ((n = [c, o, s]), (r = [o, s, i]))
            : ((n = [c, o, i]), (r = [c, s, i])),
            a.push(...n, ...r));
        }
      (r.setIndex(a),
        (this.plane = new qm.Mesh(r, n)),
        this.scene.add(this.plane));
      let o = new qm.AmbientLight(16777215, 0.9);
      this.scene.add(o);
      let s = new qm.PointLight(16777215, 0.9);
      (s.position.set(-100, 250, -100),
        this.scene.add(s),
        (this.camera = new qm.PerspectiveCamera(
          35,
          this.width / this.height,
          50,
          1e4,
        )),
        (this.cameraPosition = new qm.Vector3(240, 200, 390)),
        (this.cameraTarget = new qm.Vector3(140, -30, 190)),
        this.camera.position.copy(this.cameraPosition),
        this.scene.add(this.camera));
    }
    onUpdate() {
      let e;
      (this.plane.material.color.set(this.options.color),
        (this.plane.material.shininess = this.options.shininess),
        (this.camera.ox = this.cameraPosition.x / this.options.zoom),
        (this.camera.oy = this.cameraPosition.y / this.options.zoom),
        (this.camera.oz = this.cameraPosition.z / this.options.zoom),
        this.controls != null && this.controls.update());
      let t = this.camera;
      (Math.abs(t.tx - t.position.x) > 0.01 &&
        ((e = t.tx - t.position.x), (t.position.x += e * 0.02)),
        Math.abs(t.ty - t.position.y) > 0.01 &&
          ((e = t.ty - t.position.y), (t.position.y += e * 0.02)),
        Math.abs(t.tz - t.position.z) > 0.01 &&
          ((e = t.tz - t.position.z), (t.position.z += e * 0.02)),
        t.lookAt(this.cameraTarget),
        (this.oy = this.oy || {}));
      for (
        let e = 0;
        e < this.plane.geometry.attributes.position.array.length;
        e += 3
      ) {
        let t = {
          x: this.plane.geometry.attributes.position.array[e],
          y: this.plane.geometry.attributes.position.array[e + 1],
          z: this.plane.geometry.attributes.position.array[e + 2],
          oy: this.oy[e],
        };
        if (!t.oy) this.oy[e] = t.y;
        else {
          let n = this.options.waveSpeed,
            r = Math.sqrt(n) * Math.cos(-t.x - t.z * 0.7),
            i =
              (Math.sin(
                n * this.t * 0.02 - n * t.x * 0.025 + n * t.z * 0.015 + r,
              ) +
                1) **
                2 /
              4;
          ((t.y = t.oy + i * this.options.waveHeight),
            (this.plane.geometry.attributes.position.array[e + 1] = t.y));
        }
      }
      (this.plane.geometry.attributes.position.setUsage(qm.DynamicDrawUsage),
        this.plane.geometry.computeVertexNormals(),
        (this.plane.geometry.attributes.position.needsUpdate = !0),
        this.wireframe &&
          (this.wireframe.geometry.fromGeometry(this.plane.geometry),
          this.wireframe.geometry.computeFaceNormals()));
    }
    onMouseMove(e, t) {
      let n = this.camera;
      return (
        n.oy ||
          ((n.oy = n.position.y), (n.ox = n.position.x), (n.oz = n.position.z)),
        (n.tx = n.ox + ((e - 0.5) * 100) / this.options.zoom),
        (n.ty = n.oy + ((t - 0.5) * -100) / this.options.zoom),
        (n.tz = n.oz + ((e - 0.5) * -50) / this.options.zoom)
      );
    }
  };
((Ym.prototype.defaultOptions = Jm), Ym.initClass());
var Xm = Wm.register(`WAVES`, Ym),
  Zm = { class: `auth-card` },
  Qm = { class: `login-link` },
  $m = m(
    p({
      __name: `SignUpPage`,
      setup(i) {
        let c = u(null),
          l = null;
        return (
          r(() => {
            l = Xm({
              el: c.value,
              THREE: O,
              mouseControls: !0,
              touchControls: !0,
              gyroControls: !1,
              minHeight: 200,
              minWidth: 200,
              scale: 1,
              scaleMobile: 1,
            });
          }),
          e(() => {
            l && l.destroy();
          }),
          (e, r) => {
            let i = t(`RouterLink`);
            return (
              n(),
              d(
                `div`,
                { class: `page`, ref_key: `vantaRef`, ref: c },
                [
                  f(`div`, Zm, [
                    (r[2] ||= f(
                      `h1`,
                      { class: `title` },
                      `アカウント作成`,
                      -1,
                    )),
                    o(D),
                    f(`p`, Qm, [
                      (r[1] ||= s(` すでにアカウントをお持ちですか？ `, -1)),
                      o(
                        i,
                        { to: `/login` },
                        {
                          default: a(() => [...(r[0] ||= [s(`ログイン`, -1)])]),
                          _: 1,
                        },
                      ),
                    ]),
                  ]),
                ],
                512,
              )
            );
          }
        );
      },
    }),
    [[`__scopeId`, `data-v-7ab285c6`]],
  );
export { $m as default };
