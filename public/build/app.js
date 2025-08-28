(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/JS/debugMatch.js":
/*!*********************************!*\
  !*** ./assets/JS/debugMatch.js ***!
  \*********************************/
/***/ (() => {

// Fichier de debug supprimé - fonctionnalité de debug désactivée en production
console.log('Debug mode désactivé');

/***/ }),

/***/ "./assets/JS/game-interface.js":
/*!*************************************!*\
  !*** ./assets/JS/game-interface.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== INTERFACE DE JEU - SANTONS SCRIPT TACTICS ===============
var GameInterface = /*#__PURE__*/function () {
  "use strict";

  function GameInterface() {
    _classCallCheck(this, GameInterface);
    this.currentTab = 'team';
    this.init();
  }
  return _createClass(GameInterface, [{
    key: "init",
    value: function init() {
      this.setupTabs();
      this.setupRankingFilters();
      this.loadCharacters();
      this.checkUrlTab(); // Vérifier si un onglet est spécifié dans l'URL
    }

    // =============== SYSTÈME D'ONGLETS ===============
  }, {
    key: "checkUrlTab",
    value: function checkUrlTab() {
      // Vérifier si un onglet est spécifié dans l'URL (fragment ou paramètre)
      var urlFragment = window.location.hash.replace('#', '');
      var urlParams = new URLSearchParams(window.location.search);
      var tabParam = urlParams.get('tab');
      var targetTab = urlFragment || tabParam;
      if (targetTab && ['team', 'characters', 'battle', 'ranking', 'history'].includes(targetTab)) {
        this.switchTab(targetTab);
      }
    }
  }, {
    key: "setupTabs",
    value: function setupTabs() {
      var _this = this;
      var tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var tabName = button.dataset.tab;
          _this.switchTab(tabName);
        });
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(tabName) {
      var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$getElementB;
      // Désactiver l'onglet actuel
      (_document$querySelect = document.querySelector('.tab-button.active')) === null || _document$querySelect === void 0 || _document$querySelect.classList.remove('active');
      (_document$querySelect2 = document.querySelector('.tab-panel.active')) === null || _document$querySelect2 === void 0 || _document$querySelect2.classList.remove('active');

      // Activer le nouvel onglet
      (_document$querySelect3 = document.querySelector("[data-tab=\"".concat(tabName, "\"]"))) === null || _document$querySelect3 === void 0 || _document$querySelect3.classList.add('active');
      (_document$getElementB = document.getElementById("".concat(tabName, "-panel"))) === null || _document$getElementB === void 0 || _document$getElementB.classList.add('active');
      this.currentTab = tabName;
      if (tabName === 'ranking') {
        this.loadRanking(); // AJOUTEZ CETTE LIGNE
      }
      // Actions spécifiques par onglet
      switch (tabName) {
        case 'characters':
          this.loadCharacters();
          break;
        case 'battle':
          this.updateBattleTab();
          // Également appeler la méthode de team-management si elle existe
          if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
            window.teamManagement.updateBattleTab();
          }
          break;
        case 'history':
          this.loadMatchHistory();
          break;
      }
    }

    // =============== PERSONNAGES ===============
  }, {
    key: "loadCharacters",
    value: function loadCharacters() {
      var _this2 = this;
      var container = document.querySelector('.characters-grid');
      if (!container) return;

      // Simuler le chargement
      container.innerHTML = '<p class="loading-text">Chargement des personnages...</p>';

      // Personnages d'exemple
      var sampleCharacters = [{
        id: 1,
        name: 'Garde Royal',
        role: 'Tank',
        power: 150
      }, {
        id: 2,
        name: 'Archer Mystique',
        role: 'DPS',
        power: 180
      }, {
        id: 3,
        name: 'Clerc Divin',
        role: 'Support',
        power: 120
      }, {
        id: 4,
        name: 'Mage de Bataille',
        role: 'DPS',
        power: 200
      }, {
        id: 5,
        name: 'Paladin',
        role: 'Tank',
        power: 170
      }, {
        id: 6,
        name: 'Druide',
        role: 'Support',
        power: 140
      }];
      setTimeout(function () {
        container.innerHTML = '';
        sampleCharacters.forEach(function (character) {
          container.appendChild(_this2.createCharacterCard(character));
        });
      }, 500);
    }
  }, {
    key: "createCharacterCard",
    value: function createCharacterCard(character) {
      var card = document.createElement('div');
      card.className = 'character-card';
      card.innerHTML = "\n            <div class=\"character-header\">\n                <h3>".concat(character.name, "</h3>\n                <span class=\"character-role role-").concat(character.role.toLowerCase(), "\">").concat(character.role, "</span>\n            </div>\n            <div class=\"character-stats\">\n                <div class=\"stat\">\n                    <span class=\"stat-label\">Puissance</span>\n                    <span class=\"stat-value\">").concat(character.power, "</span>\n                </div>\n            </div>\n        ");
      return card;
    }

    // =============== COMBAT ===============
  }, {
    key: "updateBattleTab",
    value: function updateBattleTab() {
      var searchBtn = document.querySelector('.search-battle-btn');
      var infoText = document.querySelector('.battle-search .info-text');
      if (!searchBtn || !infoText) return;

      // Vérifier le nombre de personnages sélectionnés
      var selectedCharacters = document.querySelectorAll('.character-card.selected');
      var teamSize = selectedCharacters.length;
      if (teamSize === 3) {
        searchBtn.disabled = false;
        infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
      } else {
        searchBtn.disabled = true;
        infoText.textContent = "S\xE9lectionnez ".concat(3 - teamSize, " personnage(s) de plus pour commencer");
      }
    }

    // =============== HISTORIQUE ===============
  }, {
    key: "loadMatchHistory",
    value: function () {
      var _loadMatchHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var historyContainer, response, data, historyHTML, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              historyContainer = document.querySelector('.match-history');
              if (historyContainer) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              // Afficher un indicateur de chargement
              historyContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement de l\'historique...</p>';
              _context.p = 2;
              _context.n = 3;
              return fetch('/api/matchmaking/history');
            case 3:
              response = _context.v;
              _context.n = 4;
              return response.json();
            case 4:
              data = _context.v;
              if (!(!data.success || data.matches.length === 0)) {
                _context.n = 5;
                break;
              }
              historyContainer.innerHTML = '<p class="empty-history">Aucun combat joué pour le moment</p>';
              return _context.a(2);
            case 5:
              // Construire l'historique
              historyHTML = "\n                <div class=\"history-stats\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-label\">Total</span>\n                        <span class=\"stat-value\">".concat(data.total_matches, "</span>\n                    </div>\n                    <div class=\"stat-item wins\">\n                        <span class=\"stat-label\">Victoires</span>\n                        <span class=\"stat-value\">").concat(data.wins, "</span>\n                    </div>\n                    <div class=\"stat-item losses\">\n                        <span class=\"stat-label\">D\xE9faites</span>\n                        <span class=\"stat-value\">").concat(data.losses, "</span>\n                    </div>\n                    <div class=\"stat-item winrate\">\n                        <span class=\"stat-label\">Taux de victoire</span>\n                        <span class=\"stat-value\">").concat(data.total_matches > 0 ? Math.round(data.wins / data.total_matches * 100) : 0, "%</span>\n                    </div>\n                </div>\n                <div class=\"history-list\">\n            ");
              data.matches.forEach(function (match) {
                var resultClass = match.is_winner ? 'victory' : 'defeat';
                var resultIcon = match.is_winner ? 'trophy' : 'times';
                var resultText = match.is_winner ? 'VICTOIRE' : 'DÉFAITE';
                historyHTML += "\n                    <div class=\"match-item ".concat(resultClass, "\">\n                        <div class=\"match-result\">\n                            <i class=\"fas fa-").concat(resultIcon, "\"></i>\n                            <span class=\"result-text\">").concat(resultText, "</span>\n                        </div>\n                        <div class=\"match-details\">\n                            <div class=\"teams\">\n                                <div class=\"team player-team\">\n                                    <span class=\"team-name\">").concat(match.player_team, "</span>\n                                    <span class=\"team-power\">").concat(Math.round(match.player_power), "</span>\n                                </div>\n                                <div class=\"vs\">VS</div>\n                                <div class=\"team opponent-team\">\n                                    <span class=\"team-name\">").concat(match.opponent_team, "</span>\n                                    <span class=\"team-power\">").concat(Math.round(match.opponent_power), "</span>\n                                </div>\n                            </div>\n                            <div class=\"opponent-info\">\n                                <span class=\"opponent-name\">").concat(match.opponent_player, "</span>\n                            </div>\n                        </div>\n                        <div class=\"match-meta\">\n                            <div class=\"match-info\">\n                                <span class=\"match-date\">").concat(match.finished_at, "</span>\n                                <span class=\"match-duration\">").concat(match.duration, "</span>\n                            </div>\n                            <div class=\"match-actions\">\n                                <button class=\"btn btn-recap\" onclick=\"gameInterface.showMatchRecap(").concat(match.id, ")\" title=\"Voir le recap du combat\">\n                                    <i class=\"fas fa-eye\"></i>\n                                    <span>Recap</span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                ");
              });
              historyHTML += '</div>';
              historyContainer.innerHTML = historyHTML;
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Erreur lors du chargement de l\'historique:', _t);
              historyContainer.innerHTML = '<p class="error-text">Erreur lors du chargement de l\'historique</p>';
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[2, 6]]);
      }));
      function loadMatchHistory() {
        return _loadMatchHistory.apply(this, arguments);
      }
      return loadMatchHistory;
    }() // =============== UTILITAIRES ===============
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var notification = document.createElement('div');
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n            <i class=\"fas fa-".concat(this.getNotificationIcon(type), "\"></i>\n            <span>").concat(message, "</span>\n        ");
      document.body.appendChild(notification);
      setTimeout(function () {
        return notification.classList.add('show');
      }, 10);
      setTimeout(function () {
        notification.classList.remove('show');
        setTimeout(function () {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  }, {
    key: "getNotificationIcon",
    value: function getNotificationIcon(type) {
      var icons = {
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle',
        'info': 'info-circle'
      };
      return icons[type] || 'info-circle';
    }

    // =============== CLASSEMENT ===============
  }, {
    key: "setupRankingFilters",
    value: function setupRankingFilters() {
      var _this3 = this;
      var filterButtons = document.querySelectorAll('.ranking-btn');
      filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          // Désactiver tous les boutons
          filterButtons.forEach(function (btn) {
            return btn.classList.remove('active');
          });

          // Activer le bouton cliqué
          button.classList.add('active');

          // Charger le classement avec le filtre
          var filter = button.dataset.filter;
          _this3.loadRanking(filter);
        });
      });
    }
  }, {
    key: "loadRanking",
    value: function () {
      var _loadRanking = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var filter,
          rankingContainer,
          response,
          data,
          emptyMessage,
          rankingHTML,
          i,
          player,
          topClass,
          rankClass,
          rankIcon,
          changeClass,
          changeSign,
          _i,
          _player,
          _changeClass,
          _changeSign,
          _args2 = arguments,
          _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              filter = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'global';
              rankingContainer = document.querySelector('#ranking-list');
              if (rankingContainer) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              // Afficher un indicateur de chargement
              rankingContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement du classement...</p>';
              _context2.p = 2;
              _context2.n = 3;
              return fetch("/api/matchmaking/ranking?filter=".concat(filter));
            case 3:
              response = _context2.v;
              _context2.n = 4;
              return response.json();
            case 4:
              data = _context2.v;
              if (!(!data.success || data.ranking.length === 0)) {
                _context2.n = 5;
                break;
              }
              emptyMessage = 'Aucun joueur classé pour le moment';
              if (filter === 'weekly') emptyMessage = 'Aucun match joué cette semaine';
              if (filter === 'monthly') emptyMessage = 'Aucun match joué ce mois-ci';
              rankingContainer.innerHTML = "<p class=\"empty-ranking\">".concat(emptyMessage, "</p>");
              return _context2.a(2);
            case 5:
              // Mettre à jour la position du joueur actuel
              this.updateUserPosition(data.current_player_position, data.current_player_mmr);

              // Construire le classement
              rankingHTML = "<div class=\"top-players\">"; // Top 3 avec design spécial
              for (i = 0; i < Math.min(3, data.ranking.length); i++) {
                player = data.ranking[i];
                topClass = i === 0 ? 'top-1' : i === 1 ? 'top-2' : 'top-3';
                rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze';
                rankIcon = i === 0 ? 'crown' : i === 1 ? 'medal' : 'award';
                changeClass = player.mmr_change >= 0 ? 'positive' : 'negative';
                changeSign = player.mmr_change >= 0 ? '+' : '';
                rankingHTML += "\n                    <div class=\"ranking-entry ".concat(topClass, " ").concat(player.is_current_player ? 'current-player' : '', "\">\n                        <span class=\"rank ").concat(rankClass, "\"><i class=\"fas fa-").concat(rankIcon, "\"></i> ").concat(player.position, "</span>\n                        <div class=\"player-info\">\n                            <span class=\"player-name\" style=\"color: ").concat(player.username === window.userInfo.username ? window.userInfo.usernameColor : 'inherit', "\">").concat(player.username, "</span>\n                            <div class=\"player-stats\">\n                                <span class=\"rating\"><i class=\"fas fa-star\"></i> ").concat(player.mmr, "</span>\n                                <span class=\"wins\"><i class=\"fas fa-trophy\"></i> ").concat(player.wins, "V</span>\n                                <span class=\"losses\"><i class=\"fas fa-times\"></i> ").concat(player.losses, "D</span>\n                            </div>\n                        </div>\n                        <span class=\"rating-change ").concat(changeClass, "\">").concat(changeSign).concat(player.mmr_change, "</span>\n                    </div>\n                ");
              }
              rankingHTML += '</div><div class="other-players">';

              // Autres joueurs (position 4+)
              _i = 3;
            case 6:
              if (!(_i < data.ranking.length)) {
                _context2.n = 8;
                break;
              }
              _player = data.ranking[_i];
              _changeClass = _player.mmr_change >= 0 ? 'positive' : 'negative';
              _changeSign = _player.mmr_change >= 0 ? '+' : '';
              rankingHTML += "\n                    <div class=\"ranking-entry ".concat(_player.is_current_player ? 'current-player' : '', "\">\n                        <span class=\"rank\">#").concat(_player.position, "</span>\n                        <div class=\"player-info\">\n                            <span class=\"player-name\" style=\"color: ").concat(_player.is_current_player ? window.userInfo.usernameColor : 'inherit', "\">").concat(_player.username, "</span>\n                            <div class=\"player-stats\">\n                                <span class=\"rating\"><i class=\"fas fa-star\"></i> ").concat(_player.mmr, "</span>\n                                <span class=\"wins\"><i class=\"fas fa-trophy\"></i> ").concat(_player.wins, "V</span>\n                                <span class=\"losses\"><i class=\"fas fa-times\"></i> ").concat(_player.losses, "D</span>\n                            </div>\n                        </div>\n                        <span class=\"rating-change ").concat(_changeClass, "\">").concat(_changeSign).concat(_player.mmr_change, "</span>\n                    </div>\n                ");

              // Afficher seulement les 10 premiers, puis un bouton "Voir plus"
              if (!(_i >= 9)) {
                _context2.n = 7;
                break;
              }
              rankingHTML += "\n                        <div class=\"ranking-more\">\n                            <button class=\"load-more-btn\" onclick=\"gameInterface.loadMoreRanking(".concat(_i + 1, ")\">\n                                <i class=\"fas fa-chevron-down\"></i> Voir plus de joueurs\n                            </button>\n                        </div>\n                    ");
              return _context2.a(3, 8);
            case 7:
              _i++;
              _context2.n = 6;
              break;
            case 8:
              rankingHTML += '</div>';
              rankingContainer.innerHTML = rankingHTML;
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              console.error('Erreur lors du chargement du classement:', _t2);
              rankingContainer.innerHTML = '<p class="error-text">Erreur lors du chargement du classement</p>';
            case 10:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 9]]);
      }));
      function loadRanking() {
        return _loadRanking.apply(this, arguments);
      }
      return loadRanking;
    }()
  }, {
    key: "updateUserPosition",
    value: function updateUserPosition(position, mmr) {
      var userPositionElement = document.querySelector('.position-number');
      var userRatingElement = document.querySelector('.rating-text');
      if (userPositionElement) {
        userPositionElement.textContent = "#".concat(position || '?');
      }
      if (userRatingElement) {
        userRatingElement.textContent = "".concat(mmr || 1200, " pts");
      }
    }
  }, {
    key: "loadMoreRanking",
    value: function loadMoreRanking(startIndex) {
      console.log('Charger plus de joueurs à partir de:', startIndex);
      this.showNotification('Fonctionnalité bientôt disponible !', 'info');
    }

    // =============== SYSTÈME DE VISUALISATION DE COMBAT ===============
  }, {
    key: "showCombatVisualization",
    value: function () {
      var _showCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(matchId) {
        var response, matchData, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch("/api/matchmaking/match/".concat(matchId, "/events"));
            case 1:
              response = _context3.v;
              if (response.ok) {
                _context3.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context3.n = 3;
              return response.json();
            case 3:
              matchData = _context3.v;
              this.displayCombatVisualizationModal(matchData);
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t3 = _context3.v;
              console.error('Erreur lors du chargement de la visualisation:', _t3);
              this.showNotification('Erreur lors du chargement du combat', 'error');
            case 5:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 4]]);
      }));
      function showCombatVisualization(_x) {
        return _showCombatVisualization.apply(this, arguments);
      }
      return showCombatVisualization;
    }()
  }, {
    key: "displayCombatVisualizationModal",
    value: function displayCombatVisualizationModal(matchData) {
      // Créer le modal de visualisation de combat
      var modalHTML = "\n            <div class=\"modal-overlay\" id=\"combat-visualization-modal\">\n                <div class=\"combat-visualization-container\">\n                    <!-- Header avec contr\xF4les -->\n                    <div class=\"combat-header\">\n                        <div class=\"combat-title\">\n                            <h2><i class=\"fas fa-swords\"></i> Combat vs ".concat(matchData.team_b.player, "</h2>\n                        </div>\n                        <div class=\"combat-controls\">\n                            <div class=\"speed-controls\">\n                                <span>Vitesse:</span>\n                                <button class=\"speed-btn\" data-speed=\"0.5\">x0.5</button>\n                                <button class=\"speed-btn active\" data-speed=\"1\">x1</button>\n                                <button class=\"speed-btn\" data-speed=\"2\">x2</button>\n                                <button class=\"speed-btn\" data-speed=\"5\">x5</button>\n                                <button class=\"speed-btn\" data-speed=\"10\">x10</button>\n                            </div>\n                            <button class=\"combat-close-btn\" id=\"combat-close-btn\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    \n                    <!-- Guild Guide positionn\xE9 \xE0 gauche et au milieu -->\n                    <div class=\"guild-guide-container\">\n                        <div class=\"guild-guide\" id=\"guild-guide\">\n                            <div class=\"guild-guide-avatar\">\n                                <img src=\"/images/guild-guide.png\" alt=\"Guild Guide\" />\n                            </div>\n                            <div class=\"guild-guide-commentary\" id=\"guild-guide-commentary\">\n                                <div class=\"commentary-bubble\">\n                                    <p>Que le combat commence !</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <!-- Zone de combat principale -->\n                    <div class=\"combat-battlefield\" id=\"combat-battlefield\">\n                        <!-- \xC9quipe adverse (haut) -->\n                        <div class=\"team-zone enemy-zone\">\n                            <div class=\"team-characters centered-characters\" id=\"enemy-characters\">\n                                ").concat(this.generateTeamCharacters(matchData.team_b, 'enemy'), "\n                            </div>\n                        </div>\n                        \n                        <!-- Zone centrale pour les animations -->\n                        <div class=\"combat-center\" id=\"combat-center\">\n                            <div class=\"center-animation\" id=\"center-animation\"></div>\n                        </div>\n                        \n                        <!-- \xC9quipe du joueur (bas) -->\n                        <div class=\"team-zone player-zone\">\n                            <div class=\"team-characters centered-characters\" id=\"player-characters\">\n                                ").concat(this.generateTeamCharacters(matchData.team_a, 'player'), "\n                            </div>\n                        </div>\n                        \n                        <!-- Info \xE9quipe joueur en bas -->\n                        <div class=\"team-info-bottom player-info-bottom\" id=\"player-info\">\n                            ").concat(matchData.team_a.name, "\n                        </div>\n                    </div>\n                    \n                    <!-- Zone de narration en bas -->\n                    <div class=\"combat-narration\" id=\"combat-narration\">\n                        <div class=\"narration-text\" id=\"narration-text\">\n                            En attente du d\xE9but du combat...\n                        </div>\n                        \n                        <button class=\"start-combat-btn\" id=\"start-combat-btn\">\n                            <i class=\"fas fa-play\"></i> D\xE9marrer le combat\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ");

      // Injecter le modal dans le DOM
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // Initialiser les contrôles et animations
      this.initCombatVisualization(matchData);

      // Définir le background aléatoire
      var battlefield = document.getElementById('combat-battlefield');
      if (battlefield) {
        var randomBg = this.getRandomBattlefield();
        battlefield.style.backgroundImage = "url('/images/".concat(randomBg, "')");
      }
    }
  }, {
    key: "getRandomBattlefield",
    value: function getRandomBattlefield() {
      var battlefields = [
      // Plateaux Dystopiques
      'plateauxDysto/champ de bataille dysto.png', 'plateauxDysto/cours moderne.png', 'plateauxDysto/place village moderne.png',
      // Plateaux Médiévaux
      'plateauxMedieval/cimetière.png', 'plateauxMedieval/cours du chateau.png', 'plateauxMedieval/place du village.png'];
      return battlefields[Math.floor(Math.random() * battlefields.length)];
    }
  }, {
    key: "generateTeamCharacters",
    value: function generateTeamCharacters(team, teamType) {
      var _this4 = this;
      var charactersHTML = '';

      // Si on a les vraies données des personnages, on les utilise
      if (team.characters && team.characters.length > 0) {
        team.characters.forEach(function (character, index) {
          var roleIcon = _this4.getRoleIcon(character.role);
          var characterImage = _this4.getCharacterImage(character);
          charactersHTML += "\n                    <div class=\"character modern-card\" id=\"".concat(teamType, "-char-").concat(index, "\">\n                        <div class=\"character-image\">\n                            <img src=\"").concat(characterImage, "\" alt=\"").concat(character.name, "\" onerror=\"this.style.display='none'; this.nextElementSibling.style.display='flex';\">\n                            <div class=\"character-fallback\" style=\"display: none;\">\n                                <i class=\"").concat(roleIcon, "\"></i>\n                            </div>\n                        </div>\n                        <div class=\"character-info\">\n                            <div class=\"character-name\">").concat(character.name, "</div>\n                            <div class=\"character-role ").concat(character.role, "\">").concat(_this4.getRoleName(character.role), "</div>\n                            <div class=\"character-stats\">\n                                <span class=\"stat hp\" title=\"HP\">\u2764\uFE0F ").concat(character.hp, "</span>\n                                <span class=\"stat atk\" title=\"ATK\">\u2694\uFE0F ").concat(character.atk, "</span>\n                            </div>\n                        </div>\n                        <div class=\"character-effects\" id=\"").concat(teamType, "-effects-").concat(index, "\"></div>\n                        <div class=\"character-glow\"></div>\n                    </div>\n                ");
        });
      } else {
        // Fallback avec des personnages par défaut
        for (var i = 0; i < 3; i++) {
          var defaultImage = '/images/characters/placeholder.png';
          charactersHTML += "\n                    <div class=\"character modern-card\" id=\"".concat(teamType, "-char-").concat(i, "\">\n                        <div class=\"character-image\">\n                            <img src=\"").concat(defaultImage, "\" alt=\"H\xE9ros ").concat(i + 1, "\" onerror=\"this.style.display='none'; this.nextElementSibling.style.display='flex';\">\n                            <div class=\"character-fallback\" style=\"display: none;\">\n                                <i class=\"fas fa-sword\"></i>\n                            </div>\n                        </div>\n                        <div class=\"character-info\">\n                            <div class=\"character-name\">H\xE9ros ").concat(i + 1, "</div>\n                            <div class=\"character-role fighter\">Combattant</div>\n                            <div class=\"character-stats\">\n                                <span class=\"stat hp\">\u2764\uFE0F 100</span>\n                                <span class=\"stat atk\">\u2694\uFE0F 50</span>\n                            </div>\n                        </div>\n                        <div class=\"character-effects\" id=\"").concat(teamType, "-effects-").concat(i, "\"></div>\n                        <div class=\"character-glow\"></div>\n                    </div>\n                ");
        }
      }
      return charactersHTML;
    }
  }, {
    key: "getCharacterImage",
    value: function getCharacterImage(character) {
      // Si le personnage a une artworkUrl, l'utiliser en priorité
      if (character && character.artworkUrl) {
        return character.artworkUrl;
      }

      // Sinon, utiliser le système de mapping existant
      var characterName = typeof character === 'string' ? character : character === null || character === void 0 ? void 0 : character.name;

      // Mapper les noms des personnages vers leurs images
      var characterImages = {
        'default': '/images/characters/warrior.png',
        'warrior': '/images/characters/warrior.png',
        'mage': '/images/characters/mage.png',
        'archer': '/images/characters/archer.png',
        'priest': '/images/characters/priest.png',
        'healer': '/images/characters/priest.png',
        'paladin': '/images/characters/paladin.png',
        'tank': '/images/characters/paladin.png',
        'assassin': '/images/characters/assassin.png',
        'fighter': '/images/characters/warrior.png'
      };

      // Essayer plusieurs approches pour matcher l'image
      var imagePath = characterImages['default'];
      if (characterName) {
        var normalizedName = characterName.toLowerCase().replace(/\s+/g, '');

        // Essayer par nom exact
        if (characterImages[characterName.toLowerCase()]) {
          imagePath = characterImages[characterName.toLowerCase()];
        }
        // Essayer par nom sans espaces
        else if (characterImages[normalizedName]) {
          imagePath = characterImages[normalizedName];
        }
        // Essayer de deviner par le rôle dans le nom
        else if (normalizedName.includes('guerrier') || normalizedName.includes('warrior')) {
          imagePath = characterImages['warrior'];
        } else if (normalizedName.includes('mage') || normalizedName.includes('wizard')) {
          imagePath = characterImages['mage'];
        } else if (normalizedName.includes('archer') || normalizedName.includes('bow')) {
          imagePath = characterImages['archer'];
        } else if (normalizedName.includes('pretre') || normalizedName.includes('priest') || normalizedName.includes('healer')) {
          imagePath = characterImages['priest'];
        } else if (normalizedName.includes('paladin') || normalizedName.includes('tank')) {
          imagePath = characterImages['paladin'];
        } else if (normalizedName.includes('assassin') || normalizedName.includes('rogue')) {
          imagePath = characterImages['assassin'];
        }
      }
      console.log("\uD83D\uDDBC\uFE0F Image pour \"".concat(characterName, "\": ").concat(imagePath));
      return imagePath;
    }
  }, {
    key: "getRoleName",
    value: function getRoleName(role) {
      var roleNames = {
        'tank': 'Tank',
        'healer': 'Soigneur',
        'mage': 'Mage',
        'assassin': 'Assassin',
        'archer': 'Archer',
        'fighter': 'Combattant'
      };
      return roleNames[role] || 'Combattant';
    }
  }, {
    key: "getRoleIcon",
    value: function getRoleIcon(role) {
      switch (role) {
        case 'tank':
          return 'fas fa-shield-alt';
        case 'healer':
          return 'fas fa-heart';
        case 'mage':
          return 'fas fa-magic';
        case 'assassin':
          return 'fas fa-dagger';
        case 'archer':
          return 'fas fa-bow-arrow';
        default:
          return 'fas fa-sword';
      }
    }
  }, {
    key: "initCombatVisualization",
    value: function initCombatVisualization(matchData) {
      var _this5 = this;
      var modal = document.getElementById('combat-visualization-modal');
      var closeBtn = document.getElementById('combat-close-btn');
      var startBtn = document.getElementById('start-combat-btn');
      var speedBtns = document.querySelectorAll('.speed-btn');
      var currentSpeedSpan = document.querySelector('.current-speed');
      var currentSpeed = 1;
      var isPlaying = false;

      // Initialiser le guild guide
      this.initGuildGuide();

      // Fermer le modal
      var closeModal = function closeModal() {
        if (modal) {
          modal.remove();
        }
      };
      closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', closeModal);

      // Fermer avec Escape
      var _escapeHandler = function escapeHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', _escapeHandler);
        }
      };
      document.addEventListener('keydown', _escapeHandler);

      // Fermer en cliquant sur l'overlay
      modal === null || modal === void 0 || modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });

      // Contrôles de vitesse améliorés
      speedBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          speedBtns.forEach(function (b) {
            return b.classList.remove('active');
          });
          btn.classList.add('active');
          currentSpeed = parseFloat(btn.dataset.speed);
          currentSpeedSpan.textContent = "x".concat(currentSpeed);

          // Commentaire du guild guide sur la vitesse
          var speedComments = {
            0.5: "Très bien ! Prenons le temps d'analyser chaque mouvement...",
            1: "Vitesse normale, parfait pour bien suivre l'action !",
            2: "On accélère un peu ! Gardez les yeux ouverts...",
            5: "Ça va vite maintenant ! Concentration maximum !",
            10: "Mode éclair activé ! Blink et vous ratez tout !"
          };
          _this5.showGuildGuideComment(speedComments[currentSpeed] || "Vitesse ajustée !", '⚡');
          console.log('🎮 Vitesse changée:', currentSpeed);
        });
      });

      // Démarrer le combat
      startBtn === null || startBtn === void 0 || startBtn.addEventListener('click', function () {
        if (!isPlaying) {
          isPlaying = true;
          startBtn.style.display = 'none';
          _this5.showGuildGuideComment("Le combat commence ! Que le meilleur gagne !", '⚔️');
          _this5.playCombatAnimation(matchData.events, currentSpeed, function () {
            isPlaying = false;
            startBtn.style.display = 'flex';
            startBtn.innerHTML = '<i class="fas fa-redo"></i> Rejouer le combat';
          });
        }
      });
    }

    // =============== GUILD GUIDE SYSTEM ===============
  }, {
    key: "initGuildGuide",
    value: function initGuildGuide() {
      this.guildGuideComments = [
      // Commentaires de début
      "Mes champions, le combat va commencer !", "Analysons les forces en présence...", "Que la stratégie l'emporte sur la force brute !",
      // Commentaires d'action
      "Excellente attaque ! L'adversaire recule !", "Une défense exemplaire ! Bien joué !", "Attention ! Cette attaque semble critique !", "Magnifique coordination d'équipe !", "La magie opère ! L'avantage change de camp !", "Quel retournement de situation !", "Les soins arrivent à temps !", "Une stratégie payante !",
      // Commentaires d'avantage
      "Bel avantage pour l'équipe bleue !", "L'équipe rouge prend l'ascendant !", "L'équilibre des forces bascule !", "La victoire se dessine !",
      // Commentaires critiques
      "Coup critique ! Quel impact !", "Une blessure grave ! La situation devient critique !", "L'issue du combat se joue maintenant !", "Dernière chance pour renverser la vapeur !"];
      this.lastCommentTime = 0;
      this.commentCooldown = 2000; // 2 secondes entre les commentaires
    }
  }, {
    key: "showGuildGuideComment",
    value: function showGuildGuideComment(text) {
      var emoji = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '💬';
      var commentaryText = document.getElementById('commentary-text');
      var guideStatus = document.getElementById('guide-status');
      var bubble = document.querySelector('.commentary-bubble');
      if (commentaryText && guideStatus && bubble) {
        // Mettre à jour le contenu
        commentaryText.textContent = text;
        guideStatus.textContent = emoji;

        // Animation d'apparition
        bubble.classList.add('guide-speaking');

        // Retirer l'animation après un délai
        setTimeout(function () {
          bubble.classList.remove('guide-speaking');
        }, 3000);
        console.log('🗣️ Guild Guide:', text);
      }
    }
  }, {
    key: "getRandomGuildComment",
    value: function getRandomGuildComment() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'action';
      var now = Date.now();
      if (now - this.lastCommentTime < this.commentCooldown) {
        return null; // Pas de commentaire si trop récent
      }
      var comments;
      switch (type) {
        case 'advantage':
          comments = ["Bel avantage pour cette équipe !", "L'ascendant se dessine !", "Une stratégie payante !", "L'équilibre bascule !"];
          break;
        case 'critical':
          comments = ["Attention ! Cette attaque peut être critique !", "Coup puissant en préparation !", "Une attaque décisive approche !", "Moment critique du combat !"];
          break;
        case 'heal':
          comments = ["Les soins arrivent à temps !", "Excellente récupération !", "La magie curative opère !", "Retour en force !"];
          break;
        default:
          comments = ["Excellente manœuvre !", "Magnifique coordination !", "Quelle technique !", "Bien joué !", "L'action s'intensifie !", "Le combat bat son plein !"];
      }
      this.lastCommentTime = now;
      return comments[Math.floor(Math.random() * comments.length)];
    }
  }, {
    key: "playCombatAnimation",
    value: function () {
      var _playCombatAnimation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(events, speed, onComplete) {
        var centerAnimation, playerInfo, enemyInfo, baseDelay, animationDelay, i, event, randomAction, randomComment, winner;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              centerAnimation = document.getElementById('center-animation');
              playerInfo = document.getElementById('player-info');
              enemyInfo = document.querySelector('.enemy-info-header'); // Base de temps adaptée à la vitesse
              baseDelay = 1000 / Math.max(speed, 0.5); // Minimum 0.5 pour éviter les vitesses trop lentes
              animationDelay = Math.max(baseDelay * 0.8, 200); // Minimum 200ms
              console.log("\uD83C\uDFAE Animation avec vitesse x".concat(speed, ", d\xE9lai: ").concat(animationDelay, "ms"));

              // Commentaire initial du guild guide
              this.showGuildGuideComment("Le combat commence ! Observez bien chaque mouvement !", '⚔️');
              i = 0;
            case 1:
              if (!(i < events.length)) {
                _context4.n = 8;
                break;
              }
              event = events[i]; // Commentaires dynamiques du guild guide
              _context4.n = 2;
              return this.addGuildGuideCommentary(event, i, events.length);
            case 2:
              _context4.n = 3;
              return this.animateEvent(event, centerAnimation, playerInfo, enemyInfo);
            case 3:
              if (!(event.action === 'ATTACK' || event.action === 'ROUND_START')) {
                _context4.n = 6;
                break;
              }
              if (!(Math.random() < 0.3)) {
                _context4.n = 6;
                break;
              }
              _context4.n = 4;
              return this.sleep(animationDelay * 0.3);
            case 4:
              randomAction = Math.random() < 0.5 ? 'HEAL' : 'DEFENSE';
              _context4.n = 5;
              return this.animateRandomCharacterAction(randomAction);
            case 5:
              // Commentaire sur l'action aléatoire
              randomComment = this.getRandomGuildComment(randomAction === 'HEAL' ? 'heal' : 'action');
              if (randomComment) {
                this.showGuildGuideComment(randomComment, randomAction === 'HEAL' ? '💚' : '🛡️');
              }
            case 6:
              _context4.n = 7;
              return this.sleep(animationDelay);
            case 7:
              i++;
              _context4.n = 1;
              break;
            case 8:
              // Animation finale
              winner = events.find(function (e) {
                return e.action === 'VICTORY';
              });
              if (!winner) {
                _context4.n = 9;
                break;
              }
              this.showGuildGuideComment("Le combat touche à sa fin ! Qui l'emportera ?", '🏆');
              _context4.n = 9;
              return this.animateVictory(winner, centerAnimation);
            case 9:
              onComplete();
            case 10:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function playCombatAnimation(_x2, _x3, _x4) {
        return _playCombatAnimation.apply(this, arguments);
      }
      return playCombatAnimation;
    }()
  }, {
    key: "addGuildGuideCommentary",
    value: function () {
      var _addGuildGuideCommentary = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(event, eventIndex, totalEvents) {
        var comment, emoji, attackComments, progress, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              comment = null;
              emoji = '💬'; // Commentaires basés sur l'action
              _t4 = event.action;
              _context5.n = _t4 === 'COMBAT_START' ? 1 : _t4 === 'ROUND_START' ? 2 : _t4 === 'ATTACK' ? 3 : _t4 === 'TEAM_PRESENTATION' ? 4 : _t4 === 'VICTORY' ? 5 : 6;
              break;
            case 1:
              comment = "Voici nos combattants ! Que le spectacle commence !";
              emoji = '🎭';
              return _context5.a(3, 6);
            case 2:
              comment = "Round ".concat(eventIndex + 1, " ! L'intensit\xE9 monte !");
              emoji = '🔥';
              return _context5.a(3, 6);
            case 3:
              if (Math.random() < 0.7) {
                // 70% de chance de commenter
                attackComments = ["Attention ! Cette attaque peut être critique !", "Excellente technique ! L'adversaire recule !", "Une frappe puissante ! Ça va faire mal !", "Magnifique coordination d'équipe !", "L'action s'intensifie !"];
                comment = attackComments[Math.floor(Math.random() * attackComments.length)];
                emoji = '⚔️';
              }
              return _context5.a(3, 6);
            case 4:
              if (event.target_name.includes('Équipe')) {
                comment = "".concat(event.target_name, " entre en lice ! Quelle puissance !");
                emoji = '👥';
              }
              return _context5.a(3, 6);
            case 5:
              comment = "Et voilà ! Le combat est terminé ! Quelle bataille épique !";
              emoji = '🏆';
              return _context5.a(3, 6);
            case 6:
              // Commentaires basés sur la progression
              progress = eventIndex / totalEvents;
              if (!comment) {
                if (progress < 0.2) {
                  comment = this.getRandomGuildComment('action');
                  emoji = '👀';
                } else if (progress < 0.5) {
                  comment = this.getRandomGuildComment('advantage');
                  emoji = '💪';
                } else if (progress < 0.8) {
                  comment = this.getRandomGuildComment('critical');
                  emoji = '⚡';
                }
              }
              if (comment) {
                this.showGuildGuideComment(comment, emoji);
              }
            case 7:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function addGuildGuideCommentary(_x5, _x6, _x7) {
        return _addGuildGuideCommentary.apply(this, arguments);
      }
      return addGuildGuideCommentary;
    }()
  }, {
    key: "animateRandomCharacterAction",
    value: function () {
      var _animateRandomCharacterAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(actionType) {
        var teams, randomTeam, randomCharIndex, characterElement, effectsElement, effectHTML, effectClass;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              // Action aléatoire sur un personnage aléatoire
              teams = ['player', 'enemy'];
              randomTeam = teams[Math.floor(Math.random() * teams.length)];
              randomCharIndex = Math.floor(Math.random() * 3);
              characterElement = document.getElementById("".concat(randomTeam, "-char-").concat(randomCharIndex));
              effectsElement = document.getElementById("".concat(randomTeam, "-effects-").concat(randomCharIndex));
              if (!(characterElement && effectsElement)) {
                _context6.n = 2;
                break;
              }
              characterElement.classList.add('character-acting');
              effectHTML = '';
              effectClass = '';
              if (actionType === 'HEAL') {
                effectHTML = '<div class="heal-effect"><i class="fas fa-heart"></i></div>';
                effectClass = 'effect-heal';
              } else if (actionType === 'DEFENSE') {
                effectHTML = '<div class="defense-effect"><i class="fas fa-shield"></i></div>';
                effectClass = 'effect-defense';
              }
              effectsElement.innerHTML = effectHTML;
              effectsElement.classList.add(effectClass);
              _context6.n = 1;
              return this.sleep(400);
            case 1:
              characterElement.classList.remove('character-acting');
              effectsElement.classList.remove(effectClass);
              effectsElement.innerHTML = '';
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function animateRandomCharacterAction(_x8) {
        return _animateRandomCharacterAction.apply(this, arguments);
      }
      return animateRandomCharacterAction;
    }()
  }, {
    key: "animateEvent",
    value: function () {
      var _animateEvent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(event, centerElement, playerInfo, enemyInfo) {
        var action, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              action = event.action;
              _t5 = action;
              _context7.n = _t5 === 'COMBAT_START' ? 1 : _t5 === 'TEAM_PRESENTATION' ? 3 : _t5 === 'ROUND_START' ? 5 : _t5 === 'ATTACK' ? 7 : _t5 === 'HEAL' ? 7 : _t5 === 'DEFENSE' ? 7 : _t5 === 'ROUND_END' ? 9 : _t5 === 'VICTORY' ? 11 : 13;
              break;
            case 1:
              _context7.n = 2;
              return this.animateCombatStart(centerElement);
            case 2:
              return _context7.a(3, 13);
            case 3:
              _context7.n = 4;
              return this.animateTeamPresentation(event, playerInfo, enemyInfo);
            case 4:
              return _context7.a(3, 13);
            case 5:
              _context7.n = 6;
              return this.animateRoundStart(centerElement, event);
            case 6:
              return _context7.a(3, 13);
            case 7:
              _context7.n = 8;
              return this.animateCharacterAction(event, action);
            case 8:
              return _context7.a(3, 13);
            case 9:
              _context7.n = 10;
              return this.animateRoundEnd(centerElement);
            case 10:
              return _context7.a(3, 13);
            case 11:
              _context7.n = 12;
              return this.animateVictory(event, centerElement);
            case 12:
              return _context7.a(3, 13);
            case 13:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function animateEvent(_x9, _x0, _x1, _x10) {
        return _animateEvent.apply(this, arguments);
      }
      return animateEvent;
    }()
  }, {
    key: "animateCombatStart",
    value: function () {
      var _animateCombatStart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(centerElement) {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              centerElement.innerHTML = "\n            <div class=\"combat-start-animation\">\n                <div class=\"halo-effect\"></div>\n                <div class=\"combat-text\">D\xE9but du Combat!</div>\n            </div>\n        ";
              centerElement.classList.add('animate-glow');
              _context8.n = 1;
              return this.sleep(1000);
            case 1:
              centerElement.classList.remove('animate-glow');
              centerElement.innerHTML = '';
            case 2:
              return _context8.a(2);
          }
        }, _callee8, this);
      }));
      function animateCombatStart(_x11) {
        return _animateCombatStart.apply(this, arguments);
      }
      return animateCombatStart;
    }()
  }, {
    key: "animateTeamPresentation",
    value: function () {
      var _animateTeamPresentation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(event, playerInfo, enemyInfo) {
        var _document$querySelect4;
        var isTeamA, targetElement;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              isTeamA = event.target_name.includes('Équipe A') || event.target_name.includes(((_document$querySelect4 = document.querySelector('.player-info .team-name')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.textContent) || '');
              targetElement = isTeamA ? playerInfo : enemyInfo;
              targetElement.classList.add('team-highlight');
              _context9.n = 1;
              return this.sleep(800);
            case 1:
              targetElement.classList.remove('team-highlight');
            case 2:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function animateTeamPresentation(_x12, _x13, _x14) {
        return _animateTeamPresentation.apply(this, arguments);
      }
      return animateTeamPresentation;
    }()
  }, {
    key: "animateRoundStart",
    value: function () {
      var _animateRoundStart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(centerElement, event) {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              centerElement.innerHTML = "\n            <div class=\"round-start-modern\">\n                <div class=\"round-girl\">\n                    <img src=\"/images/plateauxMedieval/guildGuide.jpg\" alt=\"Annonceur\" class=\"round-announcer\">\n                    <div class=\"speech-bubble\">\n                        <div class=\"round-text\">".concat(event.target_name || 'Nouveau Round !', "</div>\n                    </div>\n                </div>\n            </div>\n        ");
              centerElement.classList.add('animate-round-start');
              _context0.n = 1;
              return this.sleep(1200);
            case 1:
              centerElement.classList.remove('animate-round-start');
              centerElement.innerHTML = '';
            case 2:
              return _context0.a(2);
          }
        }, _callee0, this);
      }));
      function animateRoundStart(_x15, _x16) {
        return _animateRoundStart.apply(this, arguments);
      }
      return animateRoundStart;
    }()
  }, {
    key: "animateCharacterAction",
    value: function () {
      var _animateCharacterAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(event, actionType) {
        var teamType, charIndex, characterElement, effectsElement, effectHTML, effectClass, randomActions, randomAction, _t6;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              // Déterminer quel personnage agit basé sur les données de l'événement

              // Essayer de déterminer l'équipe et le personnage basé sur les données de l'événement
              if (event.target_name && event.target_name.includes('🔵')) {
                teamType = 'player';
              } else if (event.target_name && event.target_name.includes('�')) {
                teamType = 'enemy';
              } else {
                // Fallback aléatoire
                teamType = Math.random() > 0.5 ? 'player' : 'enemy';
              }
              charIndex = Math.floor(Math.random() * 3);
              characterElement = document.getElementById("".concat(teamType, "-char-").concat(charIndex));
              effectsElement = document.getElementById("".concat(teamType, "-effects-").concat(charIndex));
              if (!(characterElement && effectsElement)) {
                _context1.n = 7;
                break;
              }
              // Animation du personnage
              characterElement.classList.add('character-acting');

              // Animation de l'effet selon l'action
              effectHTML = '';
              effectClass = '';
              _t6 = actionType;
              _context1.n = _t6 === 'ATTACK' ? 1 : _t6 === 'HEAL' ? 2 : _t6 === 'DEFENSE' ? 3 : 4;
              break;
            case 1:
              effectHTML = '<div class="attack-effect"><i class="fas fa-fist-raised"></i></div>';
              effectClass = 'effect-attack';
              return _context1.a(3, 5);
            case 2:
              effectHTML = '<div class="heal-effect"><i class="fas fa-heart"></i></div>';
              effectClass = 'effect-heal';
              return _context1.a(3, 5);
            case 3:
              effectHTML = '<div class="defense-effect"><i class="fas fa-shield"></i></div>';
              effectClass = 'effect-defense';
              return _context1.a(3, 5);
            case 4:
              // Actions aléatoires pour plus de variété
              randomActions = [{
                html: '<div class="magic-effect"><i class="fas fa-magic"></i></div>',
                "class": 'effect-magic'
              }, {
                html: '<div class="speed-effect"><i class="fas fa-bolt"></i></div>',
                "class": 'effect-speed'
              }, {
                html: '<div class="attack-effect"><i class="fas fa-sword"></i></div>',
                "class": 'effect-attack'
              }];
              randomAction = randomActions[Math.floor(Math.random() * randomActions.length)];
              effectHTML = randomAction.html;
              effectClass = randomAction["class"];
            case 5:
              effectsElement.innerHTML = effectHTML;
              effectsElement.classList.add(effectClass);
              _context1.n = 6;
              return this.sleep(800);
            case 6:
              characterElement.classList.remove('character-acting');
              effectsElement.classList.remove(effectClass);
              effectsElement.innerHTML = '';
            case 7:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function animateCharacterAction(_x17, _x18) {
        return _animateCharacterAction.apply(this, arguments);
      }
      return animateCharacterAction;
    }()
  }, {
    key: "animateRoundEnd",
    value: function () {
      var _animateRoundEnd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(centerElement) {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              centerElement.innerHTML = "\n            <div class=\"round-end-animation\">\n                <div class=\"hourglass-icon\">\n                    <i class=\"fas fa-hourglass-end\"></i>\n                </div>\n                <div class=\"end-text\">Fin du tour</div>\n            </div>\n        ";
              centerElement.classList.add('animate-fade');
              _context10.n = 1;
              return this.sleep(800);
            case 1:
              centerElement.classList.remove('animate-fade');
              centerElement.innerHTML = '';
            case 2:
              return _context10.a(2);
          }
        }, _callee10, this);
      }));
      function animateRoundEnd(_x19) {
        return _animateRoundEnd.apply(this, arguments);
      }
      return animateRoundEnd;
    }()
  }, {
    key: "animateVictory",
    value: function () {
      var _animateVictory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(event, centerElement) {
        var _document$querySelect5;
        var isPlayerVictory;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              isPlayerVictory = event.target_name.includes(((_document$querySelect5 = document.querySelector('.team-info-bottom')) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.textContent) || '');
              centerElement.innerHTML = "\n            <div class=\"victory-modern ".concat(isPlayerVictory ? 'player-victory' : 'enemy-victory', "\">\n                <div class=\"guild-guide-announce\">\n                    <img src=\"/images/plateauxMedieval/guildGuide.jpg\" alt=\"Guild Guide\" class=\"guild-guide\">\n                    <div class=\"victory-speech-bubble\">\n                        <div class=\"victory-announcement\">\n                            ").concat(isPlayerVictory ? 'Oyé Oyé ! Vous avez remporté cette victoire !' : 'Oyé Oyé ! Vous avez subi une défaite...', "\n                        </div>\n                    </div>\n                </div>\n                <div class=\"victory-effects\">\n                    ").concat(isPlayerVictory ? '<div class="confetti"></div><div class="sparkles"></div>' : '<div class="defeat-smoke"></div>', "\n                </div>\n            </div>\n        ");
              centerElement.classList.add('animate-victory-modern');
              _context11.n = 1;
              return this.sleep(2500);
            case 1:
              return _context11.a(2);
          }
        }, _callee11, this);
      }));
      function animateVictory(_x20, _x21) {
        return _animateVictory.apply(this, arguments);
      }
      return animateVictory;
    }()
  }, {
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }

    // =============== SYSTÈME DE RECAP DE COMBAT ===============
  }, {
    key: "showMatchRecap",
    value: function () {
      var _showMatchRecap = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(matchId) {
        var response, matchData, _t7;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              _context12.p = 0;
              _context12.n = 1;
              return fetch("/api/matchmaking/match/".concat(matchId, "/events"));
            case 1:
              response = _context12.v;
              if (response.ok) {
                _context12.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context12.n = 3;
              return response.json();
            case 3:
              matchData = _context12.v;
              this.displayMatchRecapModal(matchData);
              _context12.n = 5;
              break;
            case 4:
              _context12.p = 4;
              _t7 = _context12.v;
              console.error('Erreur lors du chargement du recap:', _t7);
              this.showNotification('Erreur lors du chargement du recap du combat', 'error');
            case 5:
              return _context12.a(2);
          }
        }, _callee12, this, [[0, 4]]);
      }));
      function showMatchRecap(_x22) {
        return _showMatchRecap.apply(this, arguments);
      }
      return showMatchRecap;
    }()
  }, {
    key: "displayMatchRecapModal",
    value: function displayMatchRecapModal(matchData) {
      var _this6 = this;
      // Créer le contenu du modal
      var modalHTML = "\n            <div class=\"modal-overlay\" id=\"match-recap-modal\">\n                <div class=\"modal-content match-recap-modal\">\n                    <div class=\"modal-header\">\n                        <h2><i class=\"fas fa-scroll\"></i> Recap du Combat</h2>\n                        <button class=\"modal-close\" id=\"modal-close-btn\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                    \n                    <div class=\"modal-body\">\n                        <div class=\"match-summary\">\n                            <div class=\"teams-overview\">\n                                <div class=\"team-card ".concat(matchData.winner_team === matchData.team_a.name ? 'winner' : 'loser', "\">\n                                    <div class=\"team-name\">").concat(matchData.team_a.name, "</div>\n                                    <div class=\"player-name\">").concat(matchData.team_a.player, "</div>\n                                    <div class=\"team-mmr\">").concat(matchData.team_a.mmr, " MMR</div>\n                                    ").concat(matchData.winner_team === matchData.team_a.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : '', "\n                                </div>\n                                \n                                <div class=\"vs-separator\">\n                                    <span>VS</span>\n                                </div>\n                                \n                                <div class=\"team-card ").concat(matchData.winner_team === matchData.team_b.name ? 'winner' : 'loser', "\">\n                                    <div class=\"team-name\">").concat(matchData.team_b.name, "</div>\n                                    <div class=\"player-name\">").concat(matchData.team_b.player, "</div>\n                                    <div class=\"team-mmr\">").concat(matchData.team_b.mmr, " MMR</div>\n                                    ").concat(matchData.winner_team === matchData.team_b.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : '', "\n                                </div>\n                            </div>\n                            \n                            <div class=\"match-info\">\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-calendar\"></i>\n                                    <span>D\xE9but: ").concat(matchData.started_at || 'N/A', "</span>\n                                </div>\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-flag-checkered\"></i>\n                                    <span>Fin: ").concat(matchData.finished_at || 'N/A', "</span>\n                                </div>\n                                <div class=\"info-item\">\n                                    <i class=\"fas fa-info-circle\"></i>\n                                    <span>Statut: ").concat(matchData.status, "</span>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"combat-events\">\n                            <h3><i class=\"fas fa-list\"></i> D\xE9roulement du Combat</h3>\n                            <div class=\"events-timeline\">\n                                ").concat(this.generateEventsHTML(matchData.events), "\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"modal-footer\">\n                        <button class=\"btn btn-secondary\" id=\"modal-fermer-btn\">\n                            <i class=\"fas fa-times\"></i> Fermer\n                        </button>\n                        <button class=\"btn btn-primary\" id=\"modal-partager-btn\" data-match-id=\"").concat(matchData.id, "\">\n                            <i class=\"fas fa-share\"></i> Partager\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ");

      // Ajouter le modal au DOM
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // Récupérer les éléments du modal
      var modal = document.getElementById('match-recap-modal');
      var closeBtn = document.getElementById('modal-close-btn');
      var fermerBtn = document.getElementById('modal-fermer-btn');
      var partagerBtn = document.getElementById('modal-partager-btn');

      // Event listeners pour fermer la modal
      var closeModal = function closeModal() {
        return _this6.closeMatchRecap();
      };

      // Fermer en cliquant sur la croix
      if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
      }

      // Fermer en cliquant sur le bouton "Fermer"
      if (fermerBtn) {
        fermerBtn.addEventListener('click', closeModal);
      }

      // Partager le match
      if (partagerBtn) {
        partagerBtn.addEventListener('click', function () {
          var matchId = partagerBtn.getAttribute('data-match-id');
          _this6.shareMatchRecap(matchId);
        });
      }

      // Fermer en cliquant sur l'overlay (fond noir)
      if (modal) {
        modal.addEventListener('click', function (e) {
          if (e.target === modal) {
            closeModal();
          }
        });
      }

      // Fermer avec la touche Escape
      var _escapeHandler2 = function escapeHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', _escapeHandler2);
        }
      };
      document.addEventListener('keydown', _escapeHandler2);
    }
  }, {
    key: "generateEventsHTML",
    value: function generateEventsHTML(events) {
      var eventsHTML = '';
      events.forEach(function (event, index) {
        var eventClass = 'event-item';
        var eventIcon = 'fas fa-circle';

        // Définir l'icône et la classe selon le type d'action
        switch (event.action) {
          case 'COMBAT_START':
            eventIcon = 'fas fa-play';
            eventClass += ' event-start';
            break;
          case 'TEAM_PRESENTATION':
            eventIcon = 'fas fa-users';
            eventClass += ' event-info';
            break;
          case 'ROUND_START':
            eventIcon = 'fas fa-sword';
            eventClass += ' event-round';
            break;
          case 'ATTACK':
            eventIcon = 'fas fa-fist-raised';
            eventClass += ' event-attack';
            break;
          case 'DEFENSE':
            eventIcon = 'fas fa-shield-alt';
            eventClass += ' event-defense';
            break;
          case 'HEALING':
            eventIcon = 'fas fa-heart';
            eventClass += ' event-heal';
            break;
          case 'VICTORY':
            eventIcon = 'fas fa-trophy';
            eventClass += ' event-victory';
            break;
          case 'MMR_UPDATE':
            eventIcon = 'fas fa-chart-line';
            eventClass += ' event-mmr';
            break;
          case 'COMBAT_END':
            eventIcon = 'fas fa-stop';
            eventClass += ' event-end';
            break;
          default:
            eventIcon = 'fas fa-info';
            eventClass += ' event-default';
        }

        // Formatage spécial pour les critiques
        if (event.is_crit) {
          eventClass += ' event-crit';
        }

        // Formatage du montant s'il existe
        var amountText = '';
        if (event.amount !== null) {
          amountText = " (".concat(event.amount, ")");
        }
        eventsHTML += "\n                <div class=\"".concat(eventClass, "\" data-event-index=\"").concat(index, "\">\n                    <div class=\"event-icon\">\n                        <i class=\"").concat(eventIcon, "\"></i>\n                    </div>\n                    <div class=\"event-content\">\n                        <div class=\"event-header\">\n                            <span class=\"event-actor\">").concat(event.actor_name, "</span>\n                            <span class=\"event-time\">").concat(event.created_at, "</span>\n                        </div>\n                        <div class=\"event-description\">\n                            ").concat(event.target_name).concat(amountText, "\n                            ").concat(event.is_crit ? ' <span class="crit-indicator">CRITIQUE!</span>' : '', "\n                        </div>\n                    </div>\n                </div>\n            ");
      });
      return eventsHTML;
    }
  }, {
    key: "closeMatchRecap",
    value: function closeMatchRecap() {
      var modal = document.getElementById('match-recap-modal');
      if (modal) {
        modal.remove();
      }
    }
  }, {
    key: "shareMatchRecap",
    value: function shareMatchRecap(matchId) {
      var _this7 = this;
      // Copier le lien vers le presse-papier
      var shareUrl = "".concat(window.location.origin, "/match/").concat(matchId, "/recap");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(function () {
          _this7.showNotification('Lien de partage copié !', 'success');
        })["catch"](function () {
          _this7.showNotification('Erreur lors de la copie', 'error');
        });
      } else {
        // Fallback pour les navigateurs plus anciens
        var textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.showNotification('Lien de partage copié !', 'success');
        } catch (err) {
          this.showNotification('Erreur lors de la copie', 'error');
        }
        document.body.removeChild(textArea);
      }
    }
  }]);
}(); // Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Attendre un peu que le DOM soit complètement chargé
    setTimeout(function () {
      var gameInterfaceElement = document.querySelector('.game-interface');
      console.log('Élément game-interface trouvé:', gameInterfaceElement);
      if (gameInterfaceElement) {
        window.gameInterface = new GameInterface();
        console.log(' Interface de jeu Santons Script Tactics initialisée');
        console.log('Instance créée:', window.gameInterface);
      } else {
        console.warn(' Élément .game-interface non trouvé dans le DOM');
        // Créer l'instance quand même pour les fonctions globales
        window.gameInterface = new GameInterface();
        console.log('Instance créée sans vérification DOM');
      }
    }, 100);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de l\'interface de jeu:', error);
  }
});

/***/ }),

/***/ "./assets/JS/guild-guide.js":
/*!**********************************!*\
  !*** ./assets/JS/guild-guide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== GUIDE DE GUILDE - SANTONS SCRIPT TACTICS ===============
var GuildGuide = /*#__PURE__*/function () {
  "use strict";

  function GuildGuide() {
    _classCallCheck(this, GuildGuide);
    this.currentGuildImage = 1;
    this.isLoggedIn = false;
    this.userName = '';
    this.dialogueState = 'welcome';
    this.init();
  }
  return _createClass(GuildGuide, [{
    key: "init",
    value: function init() {
      try {
        this.checkUserStatus();
        this.createGuideInterface();
        this.startImageRotation();
      } catch (error) {
        console.warn('Erreur lors de l\'initialisation du guide:', error);
      }
    }
  }, {
    key: "checkUserStatus",
    value: function checkUserStatus() {
      // Utiliser les informations passées depuis Twig
      try {
        if (window.userInfo) {
          this.isLoggedIn = window.userInfo.isLoggedIn;
          this.userName = window.userInfo.username || 'Joueur';
          console.log('Statut utilisateur:', this.isLoggedIn ? "Connect\xE9 - ".concat(this.userName) : 'Non connecté');
        } else {
          console.warn('window.userInfo non disponible');
        }
      } catch (error) {
        console.warn('Erreur lors de la vérification du statut utilisateur:', error);
      }
    }
  }, {
    key: "createGuideInterface",
    value: function createGuideInterface() {
      var guideHTML = "\n            <div class=\"guild-guide-container\" id=\"guild-guide\">\n                <div class=\"guild-avatar\" id=\"guild-avatar\">\n                    <img src=\"images/guild1.png\" alt=\"Guide de Guilde\" id=\"guild-img\">\n                </div>\n                \n                <div class=\"guild-dialogue-box\" id=\"guild-dialogue\" style=\"display: none;\">\n                    <div class=\"dialogue-content\">\n                        <div class=\"dialogue-text\" id=\"dialogue-text\"></div>\n                        <div class=\"dialogue-buttons\" id=\"dialogue-buttons\"></div>\n                    </div>\n                    <button class=\"dialogue-close\" id=\"dialogue-close\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n                </div>\n            </div>\n        ";
      document.body.insertAdjacentHTML('beforeend', guideHTML);
      this.attachEventListeners();
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;
      try {
        var avatar = document.getElementById('guild-avatar');
        var dialogueBox = document.getElementById('guild-dialogue');
        var closeBtn = document.getElementById('dialogue-close');
        if (avatar) {
          avatar.addEventListener('click', function () {
            _this.openDialogue();
          });
        }
        if (closeBtn) {
          closeBtn.addEventListener('click', function () {
            _this.closeDialogue();
          });
        }
        document.addEventListener('click', function (e) {
          // Ne fermer que si le clic est vraiment à l'extérieur ET que ce n'est pas un bouton du dialogue
          if (dialogueBox && !dialogueBox.contains(e.target) && !(avatar !== null && avatar !== void 0 && avatar.contains(e.target)) && !e.target.classList.contains('dialogue-btn')) {
            _this.closeDialogue();
          }
        });
      } catch (error) {
        console.warn('Erreur lors de l\'attachement des événements Guild Guide:', error);
      }
    }
  }, {
    key: "startImageRotation",
    value: function startImageRotation() {
      var _this2 = this;
      setInterval(function () {
        try {
          if (_this2.dialogueState !== 'response') {
            _this2.currentGuildImage = _this2.currentGuildImage % 3 + 1;
            var imgElement = document.getElementById('guild-img');
            if (imgElement) {
              imgElement.src = "images/guild".concat(_this2.currentGuildImage, ".png");
            }
          }
        } catch (error) {
          console.warn('Erreur lors de la rotation d\'images:', error);
        }
      }, 3000);
    }
  }, {
    key: "openDialogue",
    value: function openDialogue() {
      try {
        var dialogueBox = document.getElementById('guild-dialogue');
        if (dialogueBox) {
          dialogueBox.style.display = 'block';
          setTimeout(function () {
            dialogueBox.classList.add('active');
          }, 10);
          this.showWelcomeMessage();
        }
      } catch (error) {
        console.warn('Erreur lors de l\'ouverture du dialogue:', error);
      }
    }
  }, {
    key: "closeDialogue",
    value: function closeDialogue() {
      var _this3 = this;
      try {
        var dialogueBox = document.getElementById('guild-dialogue');
        if (dialogueBox) {
          dialogueBox.classList.remove('active');
          setTimeout(function () {
            dialogueBox.style.display = 'none';
            _this3.dialogueState = 'welcome';
          }, 300);
        }
      } catch (error) {
        console.warn('Erreur lors de la fermeture du dialogue:', error);
      }
    }
  }, {
    key: "showWelcomeMessage",
    value: function showWelcomeMessage() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        if (!this.isLoggedIn) {
          textEl.innerHTML = "\n                    <p>Bonjour noble \xE9tranger, bienvenue au <strong>Santons Script Tactics</strong> !</p>\n                    <p>Cr\xE9ez votre \xE9quipe de 3 h\xE9ros et affrontez d'autres joueurs dans des combats tactiques.</p>\n                    <p>Pour commencer votre aventure :</p>\n                ";
          buttonsEl.innerHTML = "\n                    <button class=\"dialogue-btn primary\" onclick=\"window.location.href='/register'\">\n                        <i class=\"fas fa-user-plus\"></i> S'inscrire\n                    </button>\n                    <button class=\"dialogue-btn secondary\" onclick=\"window.location.href='/login'\">\n                        <i class=\"fas fa-sign-in-alt\"></i> Se connecter\n                    </button>\n                ";
        } else {
          textEl.innerHTML = "\n                    <p>Bonjour <strong style=\"color: ".concat(window.userInfo.usernameColor || '#8b3a3a', "\">").concat(this.userName, "</strong>, quelle est votre demande ?</p>\n                ");
          buttonsEl.innerHTML = "\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showGameplayHelp()\">\n                        <i class=\"fas fa-gamepad\"></i> Comment Jouer\n                    </button>\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showCharacterRoles()\">\n                        <i class=\"fas fa-users\"></i> R\xF4les des Personnages\n                    </button>\n                    <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTeamStrategy()\">\n                        <i class=\"fas fa-chess\"></i> Strat\xE9gies d'\xC9quipe\n                    </button>\n                ";
        }
      } catch (error) {
        console.warn('Erreur lors de l\'affichage du message de bienvenue:', error);
      }
    }
  }, {
    key: "showGameplayHelp",
    value: function showGameplayHelp() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        textEl.innerHTML = "<p>Choisissez ce que vous souhaitez apprendre :</p>";
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTeamCreation()\">\n                    <i class=\"fas fa-plus-circle\"></i> Cr\xE9er votre \xC9quipe\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showFindBattle()\">\n                    <i class=\"fas fa-search\"></i> Rechercher un Combat\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showAutoBattle()\">\n                    <i class=\"fas fa-play\"></i> Combat Automatique\n                </button>\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      } catch (error) {
        console.warn('Erreur lors de l\'affichage de l\'aide gameplay:', error);
      }
    }
  }, {
    key: "showCharacterRoles",
    value: function showCharacterRoles() {
      var textEl = document.getElementById('dialogue-text');
      var buttonsEl = document.getElementById('dialogue-buttons');
      textEl.innerHTML = "<p>D\xE9couvrez les diff\xE9rents r\xF4les de vos h\xE9ros :</p>";
      buttonsEl.innerHTML = "\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showTankRole()\">\n                <i class=\"fas fa-shield-alt\"></i> Tank\n            </button>\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showDPSRole()\">\n                <i class=\"fas fa-sword\"></i> DPS\n            </button>\n            <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showHealerRole()\">\n                <i class=\"fas fa-heart\"></i> Soigneur\n            </button>\n            <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                <i class=\"fas fa-arrow-left\"></i> Retour\n            </button>\n        ";
    }
  }, {
    key: "showTeamCreation",
    value: function showTeamCreation() {
      this.showDetailedResponse("Création d'Équipe", "<p><strong>Former votre \xE9quipe parfaite :</strong></p>\n            <ul>\n                <li>Choisissez <strong>3 personnages</strong> compl\xE9mentaires</li>\n                <li>\xC9quilibrez Tank, DPS et Soigneur</li>\n                <li>Consultez les statistiques totales</li>\n                <li>Testez diff\xE9rentes combinaisons</li>\n            </ul>");
    }
  }, {
    key: "showFindBattle",
    value: function showFindBattle() {
      this.showDetailedResponse("Recherche de Combat", "<p><strong>Trouver des adversaires :</strong></p>\n            <ul>\n                <li>Votre \xE9quipe doit \xEAtre compl\xE8te (3 h\xE9ros)</li>\n                <li>Le syst\xE8me trouve un adversaire \xE9quitable</li>\n                <li>Attendez la confirmation de match</li>\n            </ul>");
    }
  }, {
    key: "showDetailedResponse",
    value: function showDetailedResponse(title, content) {
      this.dialogueState = 'response';
      var imgElement = document.getElementById('guild-img');
      if (imgElement) {
        imgElement.src = 'images/guild4.png';
      }
      var textEl = document.getElementById('dialogue-text');
      var buttonsEl = document.getElementById('dialogue-buttons');
      if (textEl) {
        textEl.innerHTML = "<h3>".concat(title, "</h3>").concat(content);
      }
      if (buttonsEl) {
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.returnToPreviousMenu()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      }
    }
  }, {
    key: "returnToPreviousMenu",
    value: function returnToPreviousMenu() {
      try {
        this.dialogueState = 'menu';
        this.currentGuildImage = 1;
        var imgElement = document.getElementById('guild-img');
        if (imgElement) {
          imgElement.src = "images/guild".concat(this.currentGuildImage, ".png");
        }
        this.showWelcomeMessage();
      } catch (error) {
        console.warn('Erreur lors du retour au menu précédent:', error);
      }
    }
  }, {
    key: "showTeamStrategy",
    value: function showTeamStrategy() {
      try {
        var textEl = document.getElementById('dialogue-text');
        var buttonsEl = document.getElementById('dialogue-buttons');
        if (!textEl || !buttonsEl) return;
        textEl.innerHTML = "<p>Choisissez le type de strat\xE9gie \xE0 apprendre :</p>";
        buttonsEl.innerHTML = "\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showBalancedStrategy()\">\n                    <i class=\"fas fa-balance-scale\"></i> \xC9quipe \xC9quilibr\xE9e\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showAggressiveStrategy()\">\n                    <i class=\"fas fa-fire\"></i> Strat\xE9gie Agressive\n                </button>\n                <button class=\"dialogue-btn\" onclick=\"event.stopPropagation(); window.guildGuide.showDefensiveStrategy()\">\n                    <i class=\"fas fa-shield\"></i> Strat\xE9gie D\xE9fensive\n                </button>\n                <button class=\"dialogue-btn back\" onclick=\"event.stopPropagation(); window.guildGuide.showWelcomeMessage()\">\n                    <i class=\"fas fa-arrow-left\"></i> Retour\n                </button>\n            ";
      } catch (error) {
        console.warn('Erreur lors de l\'affichage des stratégies d\'équipe:', error);
      }
    }
  }, {
    key: "showBalancedStrategy",
    value: function showBalancedStrategy() {
      this.showDetailedResponse("Équipe Équilibrée", "<p><strong>La composition classique :</strong></p>\n            <ul>\n                <li><strong>1 Tank</strong> - Absorbe les d\xE9g\xE2ts</li>\n                <li><strong>1 DPS</strong> - Inflige les d\xE9g\xE2ts</li>\n                <li><strong>1 Soigneur</strong> - Maintient l'\xE9quipe en vie</li>\n            </ul>\n            <p>Cette composition offre une bonne polyvalence pour tous types d'adversaires.</p>");
    }
  }, {
    key: "showAggressiveStrategy",
    value: function showAggressiveStrategy() {
      this.showDetailedResponse("Stratégie Agressive", "<p><strong>Maximum de d\xE9g\xE2ts :</strong></p>\n            <ul>\n                <li><strong>2 DPS</strong> - Double puissance d'attaque</li>\n                <li><strong>1 Tank</strong> - Protection minimale</li>\n            </ul>\n            <p>Id\xE9al contre des \xE9quipes d\xE9fensives, mais risqu\xE9 face \xE0 d'autres \xE9quipes agressives.</p>");
    }
  }, {
    key: "showDefensiveStrategy",
    value: function showDefensiveStrategy() {
      this.showDetailedResponse("Stratégie Défensive", "<p><strong>Survie maximale :</strong></p>\n            <ul>\n                <li><strong>1 Tank</strong> - Protection principale</li>\n                <li><strong>2 Soigneurs</strong> - R\xE9cup\xE9ration constante</li>\n            </ul>\n            <p>Parfait pour survivre aux \xE9quipes agressives et gagner par endurance.</p>");
    }
  }, {
    key: "showTankRole",
    value: function showTankRole() {
      this.showDetailedResponse("Rôle Tank", "<p><strong>Le protecteur de l'\xE9quipe :</strong></p>\n            <ul>\n                <li><strong>Points de Vie \xE9lev\xE9s</strong> - Encaisse les d\xE9g\xE2ts</li>\n                <li><strong>D\xE9fense \xE9lev\xE9e</strong> - R\xE9duit les d\xE9g\xE2ts re\xE7us</li>\n                <li><strong>Comp\xE9tences d\xE9fensives</strong> - Prot\xE8ge les alli\xE9s</li>\n            </ul>\n            <p>Placez toujours votre Tank en premi\xE8re ligne !</p>");
    }
  }, {
    key: "showDPSRole",
    value: function showDPSRole() {
      this.showDetailedResponse("Rôle DPS", "<p><strong>Le destructeur d'ennemis :</strong></p>\n            <ul>\n                <li><strong>Attaque \xE9lev\xE9e</strong> - Inflige de gros d\xE9g\xE2ts</li>\n                <li><strong>Vitesse \xE9lev\xE9e</strong> - Frappe en premier</li>\n                <li><strong>Comp\xE9tences offensives</strong> - \xC9liminations rapides</li>\n            </ul>\n            <p>Le DPS doit cibler les ennemis les plus dangereux en premier !</p>");
    }
  }, {
    key: "showHealerRole",
    value: function showHealerRole() {
      this.showDetailedResponse("Rôle Soigneur", "<p><strong>Le soutien de l'\xE9quipe :</strong></p>\n            <ul>\n                <li><strong>Comp\xE9tences de soin</strong> - Restaure les PV</li>\n                <li><strong>Buffs d'\xE9quipe</strong> - Am\xE9liore les alli\xE9s</li>\n                <li><strong>Magie \xE9lev\xE9e</strong> - Soins plus puissants</li>\n            </ul>\n            <p>Le Soigneur doit rester en s\xE9curit\xE9 derri\xE8re la ligne de front !</p>");
    }
  }, {
    key: "showAutoBattle",
    value: function showAutoBattle() {
      this.showDetailedResponse("Combat Automatique", "<p><strong>Comment fonctionne le combat :</strong></p>\n            <ul>\n                <li>Les combats sont <strong>automatiques</strong></li>\n                <li>Bas\xE9s sur les <strong>statistiques</strong> de vos h\xE9ros</li>\n                <li>Chaque personnage utilise ses <strong>comp\xE9tences</strong></li>\n                <li>La <strong>strat\xE9gie d'\xE9quipe</strong> est importante</li>\n            </ul>\n            <p>Concentrez-vous sur la formation et l'\xE9quipement de votre \xE9quipe !</p>");
    }
  }]);
}(); // Initialisation
window.guildGuide = null;
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.guildGuide = new GuildGuide();
    console.log('🏰 Guide de guilde initialisé');
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation du guide de guilde:', error);
  }
});

/***/ }),

/***/ "./assets/JS/matchmaking-system.js":
/*!*****************************************!*\
  !*** ./assets/JS/matchmaking-system.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// Variables globales pour le matchmaking
var statusCheckInterval;
var matchmaking = {
  inQueue: false,
  teamId: null
};

// Initialiser le système au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  initializeMatchmaking();
  checkCurrentStatus();
});
function initializeMatchmaking() {
  // Bouton de recherche de match
  var searchBtn = document.getElementById('search-battle-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      joinMatchmaking();
    });
  }

  // Bouton d'annulation
  var cancelBtn = document.getElementById('cancel-queue');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function (e) {
      e.preventDefault();
      cancelMatchmaking();
    });
  }

  // Bouton retour à la recherche
  var backBtn = document.getElementById('back-to-search');
  if (backBtn) {
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      resetToSearch();
    });
  }
}
function joinMatchmaking() {
  var searchBtn = document.getElementById('search-battle-btn');
  var teamId = (searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.dataset.teamId) || '1'; // Valeur par défaut

  // Désactiver le bouton pendant la requête
  if (searchBtn) {
    searchBtn.disabled = true;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
  }
  fetch('/api/matchmaking/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      team_id: parseInt(teamId)
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      matchmaking.inQueue = true;
      matchmaking.teamId = teamId;
      showMatchmakingStatus();
      startStatusCheck();
    } else {
      alert(data.error || 'Erreur lors de la recherche de match');
      resetSearchButton();
    }
  })["catch"](function (error) {
    console.error('Erreur:', error);
    alert('Erreur de connexion');
    resetSearchButton();
  });
}
function cancelMatchmaking() {
  fetch('/api/matchmaking/cancel', {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success) {
      matchmaking.inQueue = false;
      hideMatchmakingStatus();
      stopStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de l\'annulation:', error);
  });
}
function resetSearchButton() {
  var searchBtn = document.getElementById('search-battle-btn');
  if (searchBtn) {
    // Ne plus forcer l'activation - laisser team-management.js gérer l'état
    searchBtn.innerHTML = '<i class="fas fa-search"></i> Rechercher un Match';

    // Si une instance de TeamManagement existe, laisser updateBattleTab() gérer l'état
    if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
      window.teamManagement.updateBattleTab();
    } else {
      // Sinon vérifier manuellement le nombre de personnages
      var teamSize = document.querySelectorAll('.character-slot.occupied').length;
      if (teamSize < 3) {
        searchBtn.disabled = true;
        searchBtn.classList.add('disabled');
        searchBtn.setAttribute('disabled', 'disabled');
      } else {
        searchBtn.disabled = false;
        searchBtn.classList.remove('disabled');
        searchBtn.removeAttribute('disabled');
      }
    }
  }
}
function showMatchmakingStatus() {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'none';
  if (matchmakingStatus) matchmakingStatus.style.display = 'block';
  if (matchResult) matchResult.style.display = 'none';
}
function hideMatchmakingStatus() {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'block';
  if (matchmakingStatus) matchmakingStatus.style.display = 'none';
  if (matchResult) matchResult.style.display = 'none';
  resetSearchButton();
}
function showMatchResult(result) {
  var teamSelection = document.getElementById('team-selection');
  var matchmakingStatus = document.getElementById('matchmaking-status');
  var matchResult = document.getElementById('match-result');
  if (teamSelection) teamSelection.style.display = 'none';
  if (matchmakingStatus) matchmakingStatus.style.display = 'none';
  if (matchResult) matchResult.style.display = 'block';
  var resultContent = document.getElementById('result-content');
  var resultTitle = document.getElementById('result-title');
  if (result && resultContent) {
    var isWinner = result.winner_team_id == matchmaking.teamId;
    if (resultTitle) {
      resultTitle.textContent = '⚔️ COMBAT TERMINÉ !';
      resultTitle.className = 'text-info';
    }
    resultContent.innerHTML = "\n            <div class=\"result-card completed\">\n                <div class=\"match-details\">\n                    <p><strong>Votre \xE9quipe:</strong> ".concat(result.team1_power || 'N/A', " pts</p>\n                    <p><strong>\xC9quipe adverse:</strong> ").concat(result.team2_power || 'N/A', " pts</p>\n                    <p><strong>Dur\xE9e:</strong> ").concat(result.duration || 'N/A', " rounds</p>\n                    <p class=\"match-completed-message\">Le combat s'est d\xE9roul\xE9 ! Voulez-vous voir le d\xE9roulement ?</p>\n                </div>\n                <div class=\"match-actions-result\">\n                    <button class=\"btn btn-combat-view\" onclick=\"gameInterface.showCombatVisualization(").concat(result.match_id, ")\" title=\"Voir le combat\">\n                        <i class=\"fas fa-play-circle\"></i>\n                        <span>Voir le Combat</span>\n                    </button>\n                    <button class=\"btn btn-new-match\" onclick=\"resetToSearch()\">\n                        <i class=\"fas fa-redo\"></i>\n                        <span>Nouveau Combat</span>\n                    </button>\n                </div>\n            </div>\n        ");
  }
}
function resetToSearch() {
  matchmaking.inQueue = false;
  hideMatchmakingStatus();
}
function startStatusCheck() {
  statusCheckInterval = setInterval(checkStatus, 2000);
}
function stopStatusCheck() {
  if (statusCheckInterval) {
    clearInterval(statusCheckInterval);
    statusCheckInterval = null;
  }
}
function checkStatus() {
  fetch('/api/matchmaking/status').then(function (response) {
    return response.json();
  }).then(function (data) {
    updateStatusDisplay(data);
    if (data.status === 'MATCH_RESULT_PENDING') {
      matchmaking.inQueue = false;
      stopStatusCheck();
      showCombatPendingResult(data.match);
    } else if (data.status === 'MATCH_FOUND') {
      matchmaking.inQueue = false;
      stopStatusCheck();
      showMatchResult(data.match);
    } else if (data.status === 'NOT_IN_QUEUE') {
      matchmaking.inQueue = false;
      hideMatchmakingStatus();
      stopStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de la vérification du statut:', error);
  });
}
function updateStatusDisplay(data) {
  var statusText = document.getElementById('status-text');
  var waitingTime = document.getElementById('waiting-time');
  var playersInQueue = document.getElementById('players-in-queue');
  if (statusText) {
    statusText.textContent = data.status === 'SEARCHING' ? 'Recherche en cours...' : 'En attente...';
  }
  if (waitingTime && data.waiting_time !== undefined) {
    waitingTime.textContent = "Temps d'attente: ".concat(data.waiting_time, " secondes");
  }
  if (playersInQueue && data.players_in_queue !== undefined) {
    playersInQueue.textContent = "Joueurs en file: ".concat(data.players_in_queue);
  }
}
function checkCurrentStatus() {
  fetch('/api/matchmaking/status').then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === 'SEARCHING') {
      matchmaking.inQueue = true;
      showMatchmakingStatus();
      startStatusCheck();
    }
  })["catch"](function (error) {
    console.error('Erreur lors de la vérification du statut initial:', error);
  });
}

// Nouvelle fonction pour afficher un match en attente de visualisation
function showCombatPendingResult(matchData) {
  hideMatchmakingStatus();
  var notification = document.createElement('div');
  notification.className = 'combat-pending-notification';
  notification.innerHTML = "\n        <div class=\"pending-combat-card\">\n            <div class=\"pending-header\">\n                <h3>\u2694\uFE0F Combat Termin\xE9 !</h3>\n                <p>Votre combat vient de se terminer. Voulez-vous voir ce qui s'est pass\xE9 ?</p>\n            </div>\n            <div class=\"pending-actions\">\n                <button class=\"btn-view-combat\" onclick=\"viewCombatVisualization(".concat(matchData.id, ")\">\n                    <i class=\"fas fa-eye\"></i> Voir le Combat\n                </button>\n                <button class=\"btn-skip-combat\" onclick=\"skipCombatVisualization(").concat(matchData.id, ")\">\n                    <i class=\"fas fa-forward\"></i> Passer\n                </button>\n            </div>\n        </div>\n    ");
  document.body.appendChild(notification);
}

// Exposition des fonctions globales
window.viewCombatVisualization = viewCombatVisualization;
window.skipCombatVisualization = skipCombatVisualization;

// Fonction pour voir la visualisation du combat
function viewCombatVisualization(_x) {
  return _viewCombatVisualization.apply(this, arguments);
} // Fonction pour passer la visualisation
function _viewCombatVisualization() {
  _viewCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(matchId) {
    var notification, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId, "/mark-viewed"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 1:
          // Fermer la notification
          notification = document.querySelector('.combat-pending-notification');
          if (notification) {
            notification.remove();
          }

          // Afficher la visualisation du combat
          if (!(window.gameInterface && window.gameInterface.showCombatVisualization)) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return window.gameInterface.showCombatVisualization(matchId);
        case 2:
          _context.n = 4;
          break;
        case 3:
          console.error('Interface de jeu non disponible');
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error('Erreur lors de la visualisation du combat:', _t);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _viewCombatVisualization.apply(this, arguments);
}
function skipCombatVisualization(_x2) {
  return _skipCombatVisualization.apply(this, arguments);
} // Fonction pour afficher un résultat simple sans animation
function _skipCombatVisualization() {
  _skipCombatVisualization = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(matchId) {
    var notification, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId, "/mark-viewed"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
        case 1:
          // Fermer la notification
          notification = document.querySelector('.combat-pending-notification');
          if (notification) {
            notification.remove();
          }

          // Optionnel: afficher un message simple avec le résultat
          showSimpleMatchResult(matchId);
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.error('Erreur lors du passage du combat:', _t2);
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _skipCombatVisualization.apply(this, arguments);
}
function showSimpleMatchResult(_x3) {
  return _showSimpleMatchResult.apply(this, arguments);
}
function _showSimpleMatchResult() {
  _showSimpleMatchResult = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(matchId) {
    var response, matchData, resultMessage, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return fetch("/api/matchmaking/match/".concat(matchId));
        case 1:
          response = _context3.v;
          _context3.n = 2;
          return response.json();
        case 2:
          matchData = _context3.v;
          // Afficher un simple message de résultat
          resultMessage = matchData.is_winner ? '🎉 Victoire ! Vous avez remporté ce combat !' : '😔 Défaite... Vous pourrez vous venger la prochaine fois !'; // Afficher une notification simple
          if (window.showNotification) {
            window.showNotification(resultMessage, matchData.is_winner ? 'success' : 'error');
          }
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error('Erreur lors de l\'affichage du résultat simple:', _t3);
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _showSimpleMatchResult.apply(this, arguments);
}

/***/ }),

/***/ "./assets/JS/team-management.js":
/*!**************************************!*\
  !*** ./assets/JS/team-management.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== SYSTÈME DE GESTION D'ÉQUIPE - SANTONS SCRIPT TACTICS ===============
var TeamManagement = /*#__PURE__*/function () {
  "use strict";

  function TeamManagement() {
    _classCallCheck(this, TeamManagement);
    this.currentTab = 'team';
    this.playerTeam = null;
    this.availableCharacters = [];
    this.selectedSlot = null;
    this.init();
  }
  return _createClass(TeamManagement, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.setupTabs();
              _context.n = 1;
              return this.loadPlayerTeam();
            case 1:
              _context.n = 2;
              return this.loadCharacters();
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }() // =============== GESTION DES ONGLETS ===============
  }, {
    key: "setupTabs",
    value: function setupTabs() {
      var _this = this;
      var tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var tabName = button.dataset.tab;
          _this.switchTab(tabName);
        });
      });
    }
  }, {
    key: "switchTab",
    value: function switchTab(tabName) {
      // Désactiver tous les onglets
      document.querySelectorAll('.tab-button').forEach(function (btn) {
        return btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-panel').forEach(function (panel) {
        return panel.classList.remove('active');
      });

      // Activer l'onglet sélectionné
      var activeButton = document.querySelector("[data-tab=\"".concat(tabName, "\"]"));
      var activePanel = document.getElementById("".concat(tabName, "-panel"));
      if (activeButton) activeButton.classList.add('active');
      if (activePanel) activePanel.classList.add('active');
      this.currentTab = tabName;

      // Actions spécifiques par onglet
      if (tabName === 'characters') {
        this.displayCharacters();
      } else if (tabName === 'battle') {
        this.updateBattleTab();
      }
    }

    // =============== GESTION DE L'ÉQUIPE ===============
  }, {
    key: "loadPlayerTeam",
    value: function () {
      var _loadPlayerTeam = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return fetch('/api/matchmaking/team');
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              data = _context2.v;
              console.log('loadPlayerTeam response:', data);
              this.playerTeam = data.team;
              this.updateTeamDisplay(data.characters);
              if (this.playerTeam) {
                _context2.n = 3;
                break;
              }
              console.log('No team found, creating automatically...');
              _context2.n = 3;
              return this.createTeamAutomatically();
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t = _context2.v;
              console.error('Erreur lors du chargement de l\'équipe:', _t);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 4]]);
      }));
      function loadPlayerTeam() {
        return _loadPlayerTeam.apply(this, arguments);
      }
      return loadPlayerTeam;
    }()
  }, {
    key: "createTeamAutomatically",
    value: function () {
      var _createTeamAutomatically = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, data, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch('/api/matchmaking/team/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
              });
            case 1:
              response = _context3.v;
              _context3.n = 2;
              return response.json();
            case 2:
              data = _context3.v;
              if (data.success) {
                this.playerTeam = data.team;
                this.showNotification('Équipe créée automatiquement !', 'success');
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Erreur lors de la création d\'équipe:', _t2);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 3]]);
      }));
      function createTeamAutomatically() {
        return _createTeamAutomatically.apply(this, arguments);
      }
      return createTeamAutomatically;
    }()
  }, {
    key: "updateTeamDisplay",
    value: function updateTeamDisplay() {
      var _this2 = this;
      var teamCharacters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slots = document.querySelectorAll('.character-slot');
      slots.forEach(function (slot, index) {
        var character = teamCharacters[index] || null;
        var placeholder = slot.querySelector('.slot-placeholder');
        if (character) {
          placeholder.innerHTML = "\n                    <div class=\"character-info\">\n                        <h4>".concat(character.name, "</h4>\n                        <span class=\"character-role\">").concat(character.role, "</span>\n                        <div class=\"character-stats\">\n                            <small>HP: ").concat(character.hp, " | ATK: ").concat(character.atk, " | DEF: ").concat(character.def, "</small>\n                        </div>\n                        <button class=\"remove-character\" data-character-id=\"").concat(character.id, "\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </div>\n                ");
          slot.classList.add('occupied');

          // Événement de suppression
          var removeBtn = slot.querySelector('.remove-character');
          removeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            _this2.removeCharacter(character.id);
          });
        } else {
          placeholder.innerHTML = "\n                    <i class=\"fas fa-plus\"></i>\n                    <span>H\xE9ros ".concat(index + 1, "</span>\n                ");
          slot.classList.remove('occupied');

          // Événement d'ajout
          slot.onclick = function () {
            _this2.selectedSlot = index;
            _this2.switchTab('characters');
            _this2.showNotification('Sélectionnez un personnage à ajouter', 'info');
          };
        }
      });

      // Forcer la mise à jour du bouton bataille avec un délai plus long
      this.updateBattleTab();
      setTimeout(function () {
        _this2.updateBattleTab();
      }, 200);
      setTimeout(function () {
        _this2.updateBattleTab();
      }, 500);
    }

    // =============== GESTION DES PERSONNAGES ===============
  }, {
    key: "loadCharacters",
    value: function () {
      var _loadCharacters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return fetch('/api/matchmaking/characters');
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return response.json();
            case 2:
              this.availableCharacters = _context4.v;
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              console.error('Erreur lors du chargement des personnages:', _t3);
            case 4:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 3]]);
      }));
      function loadCharacters() {
        return _loadCharacters.apply(this, arguments);
      }
      return loadCharacters;
    }()
  }, {
    key: "displayCharacters",
    value: function displayCharacters() {
      var _this3 = this;
      var container = document.querySelector('.characters-grid');
      if (!container || !this.availableCharacters.length) return;
      container.innerHTML = '';
      this.availableCharacters.forEach(function (character) {
        var card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = "\n                <div class=\"character-header\">\n                    <h3>".concat(character.name, "</h3>\n                    <span class=\"character-role role-").concat(character.role.toLowerCase(), "\">").concat(character.role, "</span>\n                </div>\n                <div class=\"character-stats\">\n                    <div class=\"stat-row\">\n                        <span>\u2764\uFE0F ").concat(character.hp, "</span>\n                        <span>\u2694\uFE0F ").concat(character.atk, "</span>\n                        <span>\uD83D\uDEE1\uFE0F ").concat(character.def, "</span>\n                    </div>\n                    <div class=\"stat-row\">\n                        <span>\uD83D\uDCA8 ").concat(character.spd, "</span>\n                        <span>\uD83D\uDD25 ").concat(character.crit, "%</span>\n                        <span>\uD83D\uDC9A ").concat(character.heal || 0, "</span>\n                    </div>\n                </div>\n                <button class=\"add-character-btn\" data-character-id=\"").concat(character.id, "\">\n                    <i class=\"fas fa-plus\"></i> Ajouter\n                </button>\n            ");

        // Événement d'ajout
        var addBtn = card.querySelector('.add-character-btn');
        addBtn.addEventListener('click', function () {
          _this3.addCharacter(character.id);
        });
        container.appendChild(card);
      });
    }
  }, {
    key: "addCharacter",
    value: function () {
      var _addCharacter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(characterId) {
        var _this4 = this;
        var response, data, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return fetch('/api/matchmaking/team/add-character', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  character_id: characterId
                })
              });
            case 1:
              response = _context5.v;
              _context5.n = 2;
              return response.json();
            case 2:
              data = _context5.v;
              if (!data.success) {
                _context5.n = 4;
                break;
              }
              this.showNotification(data.message, 'success');
              _context5.n = 3;
              return this.loadPlayerTeam();
            case 3:
              // Recharger l'équipe
              this.switchTab('team'); // Retourner à l'onglet équipe

              // Forcer la mise à jour du bouton bataille après un délai
              setTimeout(function () {
                _this4.updateBattleTab();
              }, 100);
              _context5.n = 5;
              break;
            case 4:
              this.showNotification(data.error, 'error');
            case 5:
              _context5.n = 7;
              break;
            case 6:
              _context5.p = 6;
              _t4 = _context5.v;
              console.error('Erreur lors de l\'ajout du personnage:', _t4);
              this.showNotification('Erreur de connexion', 'error');
            case 7:
              return _context5.a(2);
          }
        }, _callee5, this, [[0, 6]]);
      }));
      function addCharacter(_x) {
        return _addCharacter.apply(this, arguments);
      }
      return addCharacter;
    }()
  }, {
    key: "removeCharacter",
    value: function () {
      var _removeCharacter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(characterId) {
        var _this5 = this;
        var response, data, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return fetch('/api/matchmaking/team/remove-character', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  character_id: characterId
                })
              });
            case 1:
              response = _context6.v;
              _context6.n = 2;
              return response.json();
            case 2:
              data = _context6.v;
              if (!data.success) {
                _context6.n = 4;
                break;
              }
              this.showNotification(data.message, 'info');
              _context6.n = 3;
              return this.loadPlayerTeam();
            case 3:
              // Recharger l'équipe

              // Forcer la mise à jour du bouton bataille après un délai
              setTimeout(function () {
                _this5.updateBattleTab();
              }, 100);
              _context6.n = 5;
              break;
            case 4:
              this.showNotification(data.error, 'error');
            case 5:
              _context6.n = 7;
              break;
            case 6:
              _context6.p = 6;
              _t5 = _context6.v;
              console.error('Erreur lors de la suppression du personnage:', _t5);
            case 7:
              return _context6.a(2);
          }
        }, _callee6, this, [[0, 6]]);
      }));
      function removeCharacter(_x2) {
        return _removeCharacter.apply(this, arguments);
      }
      return removeCharacter;
    }() // =============== COMBAT ===============
  }, {
    key: "updateBattleTab",
    value: function updateBattleTab() {
      var searchBtn = document.getElementById('search-battle-btn');
      var infoText = document.querySelector('.battle-search .info-text');
      if (!searchBtn || !infoText) return;

      // Compter les personnages dans l'équipe
      var teamSize = document.querySelectorAll('.character-slot.occupied').length;
      if (teamSize === 3 && this.playerTeam) {
        console.log('ENABLING BUTTON: teamSize=3, playerTeam exists');
        searchBtn.disabled = false;
        searchBtn.classList.remove('disabled');
        searchBtn.removeAttribute('disabled');
        searchBtn.dataset.teamId = this.playerTeam.id;
        infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
        console.log('Button state after enabling:', {
          disabled: searchBtn.disabled,
          hasDisabledAttr: searchBtn.hasAttribute('disabled'),
          hasDisabledClass: searchBtn.classList.contains('disabled')
        });
      } else {
        console.log('DISABLING BUTTON: teamSize=' + teamSize + ', hasPlayerTeam=' + !!this.playerTeam);
        searchBtn.disabled = true;
        searchBtn.classList.add('disabled');
        searchBtn.setAttribute('disabled', 'disabled');
        if (!this.playerTeam) {
          infoText.textContent = 'Chargement de votre équipe...';
        } else {
          infoText.textContent = "Ajoutez ".concat(3 - teamSize, " personnage(s) pour commencer");
        }
      }
    }

    // =============== NOTIFICATIONS ===============
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var notification = document.createElement('div');
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n            <i class=\"fas fa-".concat(this.getNotificationIcon(type), "\"></i>\n            <span>").concat(message, "</span>\n        ");

      // Styles inline pour assurer l'affichage
      notification.style.cssText = "\n            position: fixed; top: 20px; right: 20px; z-index: 1000;\n            padding: 12px 20px; border-radius: 5px; color: white;\n            background: ".concat(type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8', ";\n            box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n            transform: translateX(100%); transition: transform 0.3s ease;\n        ");
      document.body.appendChild(notification);

      // Animation d'entrée
      setTimeout(function () {
        return notification.style.transform = 'translateX(0)';
      }, 10);

      // Suppression automatique
      setTimeout(function () {
        notification.style.transform = 'translateX(100%)';
        setTimeout(function () {
          if (notification.parentNode) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  }, {
    key: "getNotificationIcon",
    value: function getNotificationIcon(type) {
      var icons = {
        'success': 'check-circle',
        'error': 'times-circle',
        'info': 'info-circle'
      };
      return icons[type] || 'info-circle';
    }
  }]);
}(); // Initialisation automatique
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.game-interface')) {
    window.teamManagement = new TeamManagement();
  }
});

/***/ }),

/***/ "./assets/JS/theme-system.js":
/*!***********************************!*\
  !*** ./assets/JS/theme-system.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== SYSTÈME DE THÈMES - MÉDIÉVAL / DYSTOPIQUE ===============
var ThemeSystem = /*#__PURE__*/function () {
  "use strict";

  function ThemeSystem() {
    _classCallCheck(this, ThemeSystem);
    this.currentTheme = 'medieval'; // Par défaut médiéval
    this.themes = {
      medieval: {
        name: 'Médiéval',
        backgrounds: ['images/plateauxMedieval/cimetière.png', 'images/plateauxMedieval/cours du chateau.png', 'images/plateauxMedieval/place du village.png'],
        videos: ['images/backgroundMedieval/AdobeStock_265340144.mov', 'images/backgroundMedieval/bgMedieval1.mp4'],
        colors: {
          primary: '#8b4513',
          secondary: '#daa520',
          accent: '#2d4a2b'
        }
      },
      dysto: {
        name: 'Dystopique',
        backgrounds: ['images/plateauxDysto/champ de bataille dysto.png', 'images/plateauxDysto/cours moderne.png', 'images/plateauxDysto/place village moderne.png'],
        videos: ['images/backgroundDysto/bgDysto.mov', 'images/backgroundDysto/bgDysto1.mov'],
        colors: {
          primary: '#8e26f0ff',
          secondary: '#7209b7',
          accent: '#c71585'
        }
      }
    };
    this.init();
  }
  return _createClass(ThemeSystem, [{
    key: "init",
    value: function init() {
      this.createThemeSwitcher();
      this.createVideoBackground();
      this.applyTheme(this.currentTheme);
      this.setRandomBackground();
      this.setRandomVideo();
    }
  }, {
    key: "createThemeSwitcher",
    value: function createThemeSwitcher() {
      var _this = this;
      var switcher = document.createElement('div');
      switcher.className = 'theme-switcher';
      switcher.innerHTML = "\n            <div class=\"theme-switcher-container\">\n                <button class=\"theme-btn\" data-theme=\"medieval\">\n                    <i class=\"fas fa-castle\"></i>\n                    <span>M\xE9di\xE9val</span>\n                </button>\n                <button class=\"theme-btn\" data-theme=\"dysto\">\n                    <i class=\"fas fa-city\"></i>\n                    <span>Dystopique</span>\n                </button>\n            </div>\n        ";
      document.body.appendChild(switcher);

      // Event listeners pour les boutons
      var themeButtons = switcher.querySelectorAll('.theme-btn');
      themeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var theme = btn.dataset.theme;
          _this.switchTheme(theme);
        });
      });
      this.updateActiveButton();
    }
  }, {
    key: "createVideoBackground",
    value: function createVideoBackground() {
      // Créer l'élément vidéo pour le background de la page
      var videoElement = document.getElementById('theme-video-background');
      if (!videoElement) {
        videoElement = document.createElement('video');
        videoElement.id = 'theme-video-background';
        videoElement.className = 'theme-video-background';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.playsInline = true;

        // La vidéo utilise uniquement les styles CSS définis dans _theme-system.scss
        // Pas de styles inline pour permettre au CSS de contrôler l'apparence

        document.body.insertBefore(videoElement, document.body.firstChild);
      }

      // Créer l'overlay sombre séparé
      var overlayElement = document.getElementById('video-overlay');
      if (!overlayElement) {
        overlayElement = document.createElement('div');
        overlayElement.id = 'video-overlay';
        overlayElement.className = 'video-overlay';

        // Insérer l'overlay après la vidéo (donc au-dessus)
        document.body.insertBefore(overlayElement, document.body.children[1]);
      }
    }
  }, {
    key: "switchTheme",
    value: function switchTheme(themeName) {
      if (this.themes[themeName]) {
        this.currentTheme = themeName;
        this.applyTheme(themeName);
        this.setRandomBackground();
        this.setRandomVideo();
        this.updateActiveButton();

        // Sauvegarder le choix
        localStorage.setItem('sst-theme', themeName);

        // Thème changé silencieusement
      }
    }
  }, {
    key: "applyTheme",
    value: function applyTheme(themeName) {
      var theme = this.themes[themeName];
      if (!theme) return;

      // Appliquer les couleurs CSS custom properties
      var root = document.documentElement;
      root.style.setProperty('--theme-primary', theme.colors.primary);
      root.style.setProperty('--theme-secondary', theme.colors.secondary);
      root.style.setProperty('--theme-accent', theme.colors.accent);

      // Ajouter classe de thème au body
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add("theme-".concat(themeName));
    }
  }, {
    key: "setRandomBackground",
    value: function setRandomBackground() {
      var theme = this.themes[this.currentTheme];
      var randomBg = theme.backgrounds[Math.floor(Math.random() * theme.backgrounds.length)];

      // Appliquer le background directement sur la game-card
      var gameCard = document.querySelector('.game-card');
      if (gameCard) {
        gameCard.style.backgroundImage = "url('".concat(randomBg, "')");
        gameCard.style.backgroundSize = 'cover';
        gameCard.style.backgroundPosition = 'center';
        gameCard.style.backgroundRepeat = 'no-repeat';
        gameCard.style.position = 'relative';

        // Ajouter un overlay pour la lisibilité
        if (!gameCard.querySelector('.theme-overlay')) {
          var overlay = document.createElement('div');
          overlay.className = 'theme-overlay';
          overlay.style.cssText = "\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: linear-gradient(135deg, \n                        rgba(248, 247, 244, 0.8) 0%,\n                        rgba(248, 247, 244, 0.7) 50%,\n                        rgba(248, 247, 244, 0.9) 100%\n                    );\n                    border-radius: inherit;\n                    pointer-events: none;\n                    z-index: 1;\n                ";
          gameCard.appendChild(overlay);

          // S'assurer que le contenu reste au-dessus
          var cardContent = gameCard.children;
          for (var i = 0; i < cardContent.length; i++) {
            if (cardContent[i] !== overlay) {
              cardContent[i].style.position = 'relative';
              cardContent[i].style.zIndex = '2';
            }
          }
        }
      }
    }
  }, {
    key: "setRandomVideo",
    value: function setRandomVideo() {
      var theme = this.themes[this.currentTheme];
      var randomVideo = theme.videos[Math.floor(Math.random() * theme.videos.length)];

      // Appliquer la vidéo de background sur toute la page
      var videoElement = document.getElementById('theme-video-background');
      if (videoElement) {
        videoElement.src = randomVideo;
        videoElement.load(); // Recharger la vidéo

        // S'assurer que la vidéo démarre
        videoElement.play()["catch"](function (error) {
          console.warn('Impossible de lire la vidéo automatiquement:', error);
        });
      }
    }
  }, {
    key: "updateActiveButton",
    value: function updateActiveButton() {
      var _this2 = this;
      var buttons = document.querySelectorAll('.theme-btn');
      buttons.forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.theme === _this2.currentTheme);
      });
    }

    // Charger le thème sauvegardé
  }, {
    key: "loadSavedTheme",
    value: function loadSavedTheme() {
      var saved = localStorage.getItem('sst-theme');
      if (saved && this.themes[saved]) {
        this.currentTheme = saved;
      }
    }
  }]);
}(); // Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.themeSystem = new ThemeSystem();
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation du système de thèmes:', error);
  }
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./assets/navbar.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JS_game_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/game-interface.js */ "./assets/JS/game-interface.js");
/* harmony import */ var _JS_game_interface_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_JS_game_interface_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS/guild-guide.js */ "./assets/JS/guild-guide.js");
/* harmony import */ var _JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_JS_guild_guide_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _JS_theme_system_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/theme-system.js */ "./assets/JS/theme-system.js");
/* harmony import */ var _JS_theme_system_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_JS_theme_system_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _JS_debugMatch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JS/debugMatch.js */ "./assets/JS/debugMatch.js");
/* harmony import */ var _JS_debugMatch_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_JS_debugMatch_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JS/matchmaking-system.js */ "./assets/JS/matchmaking-system.js");
/* harmony import */ var _JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_JS_matchmaking_system_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _JS_team_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JS/team-management.js */ "./assets/JS/team-management.js");
/* harmony import */ var _JS_team_management_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_JS_team_management_js__WEBPACK_IMPORTED_MODULE_7__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */





// import './JS/ranking-system.js'; // desactivation du classement gérer par le JS ( il est en php et en JS dans game-interface.js a la ligne 320 ) je l'ai pas encore supprimé au cas ou on en a encore besoin mais il faudra le faire a la fin




console.log('📦 [APP] Application principale chargée avec système de classement');

/***/ }),

/***/ "./assets/navbar.js":
/*!**************************!*\
  !*** ./assets/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =============== NAVBAR MODERNE AVEC DROPDOWN ===============
var ModernNavbar = /*#__PURE__*/function () {
  "use strict";

  function ModernNavbar() {
    _classCallCheck(this, ModernNavbar);
    this.init();
  }
  return _createClass(ModernNavbar, [{
    key: "init",
    value: function init() {
      this.setupLogo();
      this.setupMobileMenu();
      this.setupOutsideClick();
      this.setupEscapeKey();
    }
  }, {
    key: "setupLogo",
    value: function setupLogo() {
      var _this = this;
      var logoBtn = document.querySelector('.navbar-logo');
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (logoBtn && dropdown && logoContainer) {
        logoBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this.toggleDropdown();
        });
      }
    }
  }, {
    key: "setupMobileMenu",
    value: function setupMobileMenu() {
      var _this2 = this;
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this2.toggleMobileMenu();
        });
      }
    }
  }, {
    key: "setupOutsideClick",
    value: function setupOutsideClick() {
      var _this3 = this;
      document.addEventListener('click', function (e) {
        var dropdown = document.querySelector('.navbar-dropdown');
        var logoContainer = document.querySelector('.navbar-logo-container');
        var mobileMenu = document.querySelector('.navbar-mobile-menu');

        // Fermer dropdown si clic extérieur
        if (dropdown && logoContainer && !e.target.closest('.navbar-logo-container')) {
          dropdown.classList.remove('active');
          logoContainer.classList.remove('dropdown-active');
        }

        // Fermer menu mobile si clic extérieur
        if (mobileMenu && !e.target.closest('.navbar-burger')) {
          _this3.closeMobileMenu();
        }
      });

      // Empêcher fermeture si clic dans dropdown
      var dropdown = document.querySelector('.navbar-dropdown');
      if (dropdown) {
        dropdown.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    }
  }, {
    key: "setupEscapeKey",
    value: function setupEscapeKey() {
      var _this4 = this;
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          _this4.closeDropdown();
          _this4.closeMobileMenu();
        }
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (dropdown && logoContainer) {
        var isActive = dropdown.classList.contains('active');
        dropdown.classList.toggle('active');
        logoContainer.classList.toggle('dropdown-active', !isActive);
        console.log('Dropdown', !isActive ? 'ouvert' : 'fermé');
      }
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      var dropdown = document.querySelector('.navbar-dropdown');
      var logoContainer = document.querySelector('.navbar-logo-container');
      if (dropdown && logoContainer) {
        dropdown.classList.remove('active');
        logoContainer.classList.remove('dropdown-active');
      }
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        var isActive = mobileMenu.classList.contains('active');
        if (isActive) {
          this.closeMobileMenu();
        } else {
          burgerBtn.classList.add('active');
          mobileMenu.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
        console.log('Menu mobile', isActive ? 'fermé' : 'ouvert');
      }
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      var burgerBtn = document.querySelector('.navbar-burger');
      var mobileMenu = document.querySelector('.navbar-mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }]);
}(); // Initialisation
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.modernNavbar = new ModernNavbar();
    console.log('Navbar moderne initialisée');
  } catch (error) {
    console.warn('Erreur lors de l\'initialisation de la navbar:', error);
  }
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-fbc107"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBSTtJQUNBbEIsTUFBTSxDQUFDeWlCLFlBQVksR0FBRyxJQUFJakIsWUFBWSxDQUFDLENBQUM7SUFDeENubUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7RUFDN0MsQ0FBQyxDQUFDLE9BQU9pSyxLQUFLLEVBQUU7SUFDWmxLLE9BQU8sQ0FBQzRhLElBQUksQ0FBQyxnREFBZ0QsRUFBRTFRLEtBQUssQ0FBQztFQUN6RTtBQUNKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUM1SUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvZGVidWdNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvZ2FtZS1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0pTL2d1aWxkLWd1aWRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9KUy9tYXRjaG1ha2luZy1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0pTL3RlYW0tbWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvSlMvdGhlbWUtc3lzdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmljaGllciBkZSBkZWJ1ZyBzdXBwcmltw6kgLSBmb25jdGlvbm5hbGl0w6kgZGUgZGVidWcgZMOpc2FjdGl2w6llIGVuIHByb2R1Y3Rpb25cclxuY29uc29sZS5sb2coJ0RlYnVnIG1vZGUgZMOpc2FjdGl2w6knKTtcclxuXHJcbiIsIi8vID09PT09PT09PT09PT09PSBJTlRFUkZBQ0UgREUgSkVVIC0gU0FOVE9OUyBTQ1JJUFQgVEFDVElDUyA9PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIEdhbWVJbnRlcmZhY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gJ3RlYW0nO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRhYnMoKTtcclxuICAgICAgICB0aGlzLnNldHVwUmFua2luZ0ZpbHRlcnMoKTtcclxuICAgICAgICB0aGlzLmxvYWRDaGFyYWN0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1VybFRhYigpOyAvLyBWw6lyaWZpZXIgc2kgdW4gb25nbGV0IGVzdCBzcMOpY2lmacOpIGRhbnMgbCdVUkxcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gU1lTVMOITUUgRCdPTkdMRVRTID09PT09PT09PT09PT09PVxyXG4gICAgY2hlY2tVcmxUYWIoKSB7XHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIHNpIHVuIG9uZ2xldCBlc3Qgc3DDqWNpZmnDqSBkYW5zIGwnVVJMIChmcmFnbWVudCBvdSBwYXJhbcOodHJlKVxyXG4gICAgICAgIGNvbnN0IHVybEZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IHRhYlBhcmFtID0gdXJsUGFyYW1zLmdldCgndGFiJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFiID0gdXJsRnJhZ21lbnQgfHwgdGFiUGFyYW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRhcmdldFRhYiAmJiBbJ3RlYW0nLCAnY2hhcmFjdGVycycsICdiYXR0bGUnLCAncmFua2luZycsICdoaXN0b3J5J10uaW5jbHVkZXModGFyZ2V0VGFiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYih0YXJnZXRUYWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldHVwVGFicygpIHtcclxuICAgICAgICBjb25zdCB0YWJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICB0YWJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IGJ1dHRvbi5kYXRhc2V0LnRhYjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKHRhYk5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUYWIodGFiTmFtZSkge1xyXG4gICAgICAgIC8vIETDqXNhY3RpdmVyIGwnb25nbGV0IGFjdHVlbFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItYnV0dG9uLmFjdGl2ZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXBhbmVsLmFjdGl2ZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aXZlciBsZSBub3V2ZWwgb25nbGV0XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiPVwiJHt0YWJOYW1lfVwiXWApPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YWJOYW1lfS1wYW5lbGApPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gdGFiTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRhYk5hbWUgPT09ICdyYW5raW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKCk7IC8vIEFKT1VURVogQ0VUVEUgTElHTkVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWN0aW9ucyBzcMOpY2lmaXF1ZXMgcGFyIG9uZ2xldFxyXG4gICAgICAgIHN3aXRjaCh0YWJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NoYXJhY3RlcnMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2hhcmFjdGVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgICAgICAgICAgLy8gw4lnYWxlbWVudCBhcHBlbGVyIGxhIG3DqXRob2RlIGRlIHRlYW0tbWFuYWdlbWVudCBzaSBlbGxlIGV4aXN0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy50ZWFtTWFuYWdlbWVudCAmJiB0eXBlb2Ygd2luZG93LnRlYW1NYW5hZ2VtZW50LnVwZGF0ZUJhdHRsZVRhYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50ZWFtTWFuYWdlbWVudC51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoaXN0b3J5JzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hdGNoSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBQRVJTT05OQUdFUyA9PT09PT09PT09PT09PT1cclxuICAgIGxvYWRDaGFyYWN0ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFyYWN0ZXJzLWdyaWQnKTtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTaW11bGVyIGxlIGNoYXJnZW1lbnRcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+Q2hhcmdlbWVudCBkZXMgcGVyc29ubmFnZXMuLi48L3A+JztcclxuXHJcbiAgICAgICAgLy8gUGVyc29ubmFnZXMgZCdleGVtcGxlXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlQ2hhcmFjdGVycyA9IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0dhcmRlIFJveWFsJywgcm9sZTogJ1RhbmsnLCBwb3dlcjogMTUwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ0FyY2hlciBNeXN0aXF1ZScsIHJvbGU6ICdEUFMnLCBwb3dlcjogMTgwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogMywgbmFtZTogJ0NsZXJjIERpdmluJywgcm9sZTogJ1N1cHBvcnQnLCBwb3dlcjogMTIwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ01hZ2UgZGUgQmF0YWlsbGUnLCByb2xlOiAnRFBTJywgcG93ZXI6IDIwMCwgIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdQYWxhZGluJywgcm9sZTogJ1RhbmsnLCBwb3dlcjogMTcwLCAgfSxcclxuICAgICAgICAgICAgeyBpZDogNiwgbmFtZTogJ0RydWlkZScsIHJvbGU6ICdTdXBwb3J0JywgcG93ZXI6IDE0MCwgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBzYW1wbGVDaGFyYWN0ZXJzLmZvckVhY2goY2hhcmFjdGVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNoYXJhY3RlckNhcmQoY2hhcmFjdGVyKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hhcmFjdGVyQ2FyZChjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc05hbWUgPSAnY2hhcmFjdGVyLWNhcmQnO1xyXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPiR7Y2hhcmFjdGVyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcmFjdGVyLXJvbGUgcm9sZS0ke2NoYXJhY3Rlci5yb2xlLnRvTG93ZXJDYXNlKCl9XCI+JHtjaGFyYWN0ZXIucm9sZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlB1aXNzYW5jZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2NoYXJhY3Rlci5wb3dlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZUJhdHRsZVRhYigpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhdHRsZS1idG4nKTtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXR0bGUtc2VhcmNoIC5pbmZvLXRleHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXNlYXJjaEJ0biB8fCAhaW5mb1RleHQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWw6lyaWZpZXIgbGUgbm9tYnJlIGRlIHBlcnNvbm5hZ2VzIHPDqWxlY3Rpb25uw6lzXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGFyYWN0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1jYXJkLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgY29uc3QgdGVhbVNpemUgPSBzZWxlY3RlZENoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0ZWFtU2l6ZSA9PT0gMykge1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSAnVm90cmUgw6lxdWlwZSBlc3QgcHLDqnRlICEgVHJvdXZleiB1biBhZHZlcnNhaXJlLic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBgU8OpbGVjdGlvbm5leiAkezMgLSB0ZWFtU2l6ZX0gcGVyc29ubmFnZShzKSBkZSBwbHVzIHBvdXIgY29tbWVuY2VyYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IEhJU1RPUklRVUUgPT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBsb2FkTWF0Y2hIaXN0b3J5KCkge1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF0Y2gtaGlzdG9yeScpO1xyXG4gICAgICAgIGlmICghaGlzdG9yeUNvbnRhaW5lcikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIHVuIGluZGljYXRldXIgZGUgY2hhcmdlbWVudFxyXG4gICAgICAgIGhpc3RvcnlDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBDaGFyZ2VtZW50IGRlIGxcXCdoaXN0b3JpcXVlLi4uPC9wPic7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9oaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcyB8fCBkYXRhLm1hdGNoZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5Q29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImVtcHR5LWhpc3RvcnlcIj5BdWN1biBjb21iYXQgam91w6kgcG91ciBsZSBtb21lbnQ8L3A+JztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29uc3RydWlyZSBsJ2hpc3RvcmlxdWVcclxuICAgICAgICAgICAgbGV0IGhpc3RvcnlIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpc3Rvcnktc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlRvdGFsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2RhdGEudG90YWxfbWF0Y2hlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSB3aW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlZpY3RvaXJlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLndpbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWl0ZW0gbG9zc2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPkTDqWZhaXRlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtkYXRhLmxvc3Nlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaXRlbSB3aW5yYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPlRhdXggZGUgdmljdG9pcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7ZGF0YS50b3RhbF9tYXRjaGVzID4gMCA/IE1hdGgucm91bmQoKGRhdGEud2lucyAvIGRhdGEudG90YWxfbWF0Y2hlcykgKiAxMDApIDogMH0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlzdG9yeS1saXN0XCI+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhLm1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRDbGFzcyA9IG1hdGNoLmlzX3dpbm5lciA/ICd2aWN0b3J5JyA6ICdkZWZlYXQnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0SWNvbiA9IG1hdGNoLmlzX3dpbm5lciA/ICd0cm9waHknIDogJ3RpbWVzJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRleHQgPSBtYXRjaC5pc193aW5uZXIgPyAnVklDVE9JUkUnIDogJ0TDiUZBSVRFJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGlzdG9yeUhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1pdGVtICR7cmVzdWx0Q2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLSR7cmVzdWx0SWNvbn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3VsdC10ZXh0XCI+JHtyZXN1bHRUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbSBwbGF5ZXItdGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlYW0tbmFtZVwiPiR7bWF0Y2gucGxheWVyX3RlYW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlYW0tcG93ZXJcIj4ke01hdGgucm91bmQobWF0Y2gucGxheWVyX3Bvd2VyKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZzXCI+VlM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbSBvcHBvbmVudC10ZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaC5vcHBvbmVudF90ZWFtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWFtLXBvd2VyXCI+JHtNYXRoLnJvdW5kKG1hdGNoLm9wcG9uZW50X3Bvd2VyKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHBvbmVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvcHBvbmVudC1uYW1lXCI+JHttYXRjaC5vcHBvbmVudF9wbGF5ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGNoLWRhdGVcIj4ke21hdGNoLmZpbmlzaGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGNoLWR1cmF0aW9uXCI+JHttYXRjaC5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcmVjYXBcIiBvbmNsaWNrPVwiZ2FtZUludGVyZmFjZS5zaG93TWF0Y2hSZWNhcCgke21hdGNoLmlkfSlcIiB0aXRsZT1cIlZvaXIgbGUgcmVjYXAgZHUgY29tYmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVjYXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhpc3RvcnlIVE1MICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICBoaXN0b3J5Q29udGFpbmVyLmlubmVySFRNTCA9IGhpc3RvcnlIVE1MO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxcXCdoaXN0b3JpcXVlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgaGlzdG9yeUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+RXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsXFwnaGlzdG9yaXF1ZTwvcD4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gVVRJTElUQUlSRVMgPT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLSR7dHlwZX1gO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLSR7dGhpcy5nZXROb3RpZmljYXRpb25JY29uKHR5cGUpfVwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSwgMTApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90aWZpY2F0aW9uSWNvbih0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogJ2NoZWNrLWNpcmNsZScsXHJcbiAgICAgICAgICAgICd3YXJuaW5nJzogJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyxcclxuICAgICAgICAgICAgJ2Vycm9yJzogJ3RpbWVzLWNpcmNsZScsXHJcbiAgICAgICAgICAgICdpbmZvJzogJ2luZm8tY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGljb25zW3R5cGVdIHx8ICdpbmZvLWNpcmNsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IENMQVNTRU1FTlQgPT09PT09PT09PT09PT09XHJcblxyXG4gICAgc2V0dXBSYW5raW5nRmlsdGVycygpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmtpbmctYnRuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIETDqXNhY3RpdmVyIHRvdXMgbGVzIGJvdXRvbnNcclxuICAgICAgICAgICAgICAgIGZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWN0aXZlciBsZSBib3V0b24gY2xpcXXDqVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGFyZ2VyIGxlIGNsYXNzZW1lbnQgYXZlYyBsZSBmaWx0cmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGJ1dHRvbi5kYXRhc2V0LmZpbHRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJhbmtpbmcoZmlsdGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZFJhbmtpbmcoZmlsdGVyID0gJ2dsb2JhbCcpIHtcclxuICAgICAgICBjb25zdCByYW5raW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmtpbmctbGlzdCcpO1xyXG4gICAgICAgIGlmICghcmFua2luZ0NvbnRhaW5lcikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIHVuIGluZGljYXRldXIgZGUgY2hhcmdlbWVudFxyXG4gICAgICAgIHJhbmtpbmdDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBDaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQuLi48L3A+JztcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL3Jhbmtpbmc/ZmlsdGVyPSR7ZmlsdGVyfWApO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MgfHwgZGF0YS5yYW5raW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcHR5TWVzc2FnZSA9ICdBdWN1biBqb3VldXIgY2xhc3PDqSBwb3VyIGxlIG1vbWVudCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSAnd2Vla2x5JykgZW1wdHlNZXNzYWdlID0gJ0F1Y3VuIG1hdGNoIGpvdcOpIGNldHRlIHNlbWFpbmUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gJ21vbnRobHknKSBlbXB0eU1lc3NhZ2UgPSAnQXVjdW4gbWF0Y2ggam91w6kgY2UgbW9pcy1jaSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJhbmtpbmdDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZW1wdHktcmFua2luZ1wiPiR7ZW1wdHlNZXNzYWdlfTwvcD5gO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBqb3VldXIgYWN0dWVsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlclBvc2l0aW9uKGRhdGEuY3VycmVudF9wbGF5ZXJfcG9zaXRpb24sIGRhdGEuY3VycmVudF9wbGF5ZXJfbW1yKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVpcmUgbGUgY2xhc3NlbWVudFxyXG4gICAgICAgICAgICBsZXQgcmFua2luZ0hUTUwgPSBgPGRpdiBjbGFzcz1cInRvcC1wbGF5ZXJzXCI+YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvcCAzIGF2ZWMgZGVzaWduIHNww6ljaWFsXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5taW4oMywgZGF0YS5yYW5raW5nLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZGF0YS5yYW5raW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQ2xhc3MgPSBpID09PSAwID8gJ3RvcC0xJyA6IGkgPT09IDEgPyAndG9wLTInIDogJ3RvcC0zJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtDbGFzcyA9IGkgPT09IDAgPyAnZ29sZCcgOiBpID09PSAxID8gJ3NpbHZlcicgOiAnYnJvbnplJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtJY29uID0gaSA9PT0gMCA/ICdjcm93bicgOiBpID09PSAxID8gJ21lZGFsJyA6ICdhd2FyZCc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDbGFzcyA9IHBsYXllci5tbXJfY2hhbmdlID49IDAgPyAncG9zaXRpdmUnIDogJ25lZ2F0aXZlJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZVNpZ24gPSBwbGF5ZXIubW1yX2NoYW5nZSA+PSAwID8gJysnIDogJyc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFua2luZy1lbnRyeSAke3RvcENsYXNzfSAke3BsYXllci5pc19jdXJyZW50X3BsYXllciA/ICdjdXJyZW50LXBsYXllcicgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5rICR7cmFua0NsYXNzfVwiPjxpIGNsYXNzPVwiZmFzIGZhLSR7cmFua0ljb259XCI+PC9pPiAke3BsYXllci5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGF5ZXItbmFtZVwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLnVzZXJuYW1lID09PSB3aW5kb3cudXNlckluZm8udXNlcm5hbWUgPyB3aW5kb3cudXNlckluZm8udXNlcm5hbWVDb2xvciA6ICdpbmhlcml0J31cIj4ke3BsYXllci51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmdcIj48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPiAke3BsYXllci5tbXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2luc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRyb3BoeVwiPjwvaT4gJHtwbGF5ZXIud2luc31WPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibG9zc2VzXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+ICR7cGxheWVyLmxvc3Nlc31EPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhdGluZy1jaGFuZ2UgJHtjaGFuZ2VDbGFzc31cIj4ke2NoYW5nZVNpZ259JHtwbGF5ZXIubW1yX2NoYW5nZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByYW5raW5nSFRNTCArPSAnPC9kaXY+PGRpdiBjbGFzcz1cIm90aGVyLXBsYXllcnNcIj4nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXV0cmVzIGpvdWV1cnMgKHBvc2l0aW9uIDQrKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGRhdGEucmFua2luZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZGF0YS5yYW5raW5nW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlQ2xhc3MgPSBwbGF5ZXIubW1yX2NoYW5nZSA+PSAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VTaWduID0gcGxheWVyLm1tcl9jaGFuZ2UgPj0gMCA/ICcrJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByYW5raW5nSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmtpbmctZW50cnkgJHtwbGF5ZXIuaXNfY3VycmVudF9wbGF5ZXIgPyAnY3VycmVudC1wbGF5ZXInIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFua1wiPiMke3BsYXllci5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGF5ZXItbmFtZVwiIHN0eWxlPVwiY29sb3I6ICR7cGxheWVyLmlzX2N1cnJlbnRfcGxheWVyID8gd2luZG93LnVzZXJJbmZvLnVzZXJuYW1lQ29sb3IgOiAnaW5oZXJpdCd9XCI+JHtwbGF5ZXIudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nXCI+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gJHtwbGF5ZXIubW1yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpbnNcIj48aSBjbGFzcz1cImZhcyBmYS10cm9waHlcIj48L2k+ICR7cGxheWVyLndpbnN9Vjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxvc3Nlc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPiAke3BsYXllci5sb3NzZXN9RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctY2hhbmdlICR7Y2hhbmdlQ2xhc3N9XCI+JHtjaGFuZ2VTaWdufSR7cGxheWVyLm1tcl9jaGFuZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgc2V1bGVtZW50IGxlcyAxMCBwcmVtaWVycywgcHVpcyB1biBib3V0b24gXCJWb2lyIHBsdXNcIlxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhbmtpbmctbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvYWQtbW9yZS1idG5cIiBvbmNsaWNrPVwiZ2FtZUludGVyZmFjZS5sb2FkTW9yZVJhbmtpbmcoJHtpICsgMX0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPiBWb2lyIHBsdXMgZGUgam91ZXVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJhbmtpbmdIVE1MICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9IHJhbmtpbmdIVE1MO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByYW5raW5nQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImVycm9yLXRleHRcIj5FcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNsYXNzZW1lbnQ8L3A+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXNlclBvc2l0aW9uKHBvc2l0aW9uLCBtbXIpIHtcclxuICAgICAgICBjb25zdCB1c2VyUG9zaXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc2l0aW9uLW51bWJlcicpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSYXRpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZy10ZXh0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHVzZXJQb3NpdGlvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdXNlclBvc2l0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGAjJHtwb3NpdGlvbiB8fCAnPyd9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHVzZXJSYXRpbmdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHVzZXJSYXRpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7bW1yIHx8IDEyMDB9IHB0c2A7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNb3JlUmFua2luZyhzdGFydEluZGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYXJnZXIgcGx1cyBkZSBqb3VldXJzIMOgIHBhcnRpciBkZTonLCBzdGFydEluZGV4KTtcclxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ0ZvbmN0aW9ubmFsaXTDqSBiaWVudMO0dCBkaXNwb25pYmxlICEnLCAnaW5mbycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBTWVNUw4hNRSBERSBWSVNVQUxJU0FUSU9OIERFIENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHNob3dDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoSWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vZXZlbnRzYCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlDb21iYXRWaXN1YWxpemF0aW9uTW9kYWwobWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsYSB2aXN1YWxpc2F0aW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IGNvbWJhdCcsICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Q29tYmF0VmlzdWFsaXphdGlvbk1vZGFsKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIC8vIENyw6llciBsZSBtb2RhbCBkZSB2aXN1YWxpc2F0aW9uIGRlIGNvbWJhdFxyXG4gICAgICAgIGNvbnN0IG1vZGFsSFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIiBpZD1cImNvbWJhdC12aXN1YWxpemF0aW9uLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LXZpc3VhbGl6YXRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBIZWFkZXIgYXZlYyBjb250csO0bGVzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48aSBjbGFzcz1cImZhcyBmYS1zd29yZHNcIj48L2k+IENvbWJhdCB2cyAke21hdGNoRGF0YS50ZWFtX2IucGxheWVyfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlZWQtY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WaXRlc3NlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuXCIgZGF0YS1zcGVlZD1cIjAuNVwiPngwLjU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuIGFjdGl2ZVwiIGRhdGEtc3BlZWQ9XCIxXCI+eDE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlZWQtYnRuXCIgZGF0YS1zcGVlZD1cIjJcIj54MjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzcGVlZC1idG5cIiBkYXRhLXNwZWVkPVwiNVwiPng1PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNwZWVkLWJ0blwiIGRhdGEtc3BlZWQ9XCIxMFwiPngxMDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tYmF0LWNsb3NlLWJ0blwiIGlkPVwiY29tYmF0LWNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gR3VpbGQgR3VpZGUgcG9zaXRpb25uw6kgw6AgZ2F1Y2hlIGV0IGF1IG1pbGlldSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1ndWlkZVwiIGlkPVwiZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1ndWlkZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ3VpbGQtZ3VpZGUucG5nXCIgYWx0PVwiR3VpbGQgR3VpZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpbGQtZ3VpZGUtY29tbWVudGFyeVwiIGlkPVwiZ3VpbGQtZ3VpZGUtY29tbWVudGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50YXJ5LWJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5RdWUgbGUgY29tYmF0IGNvbW1lbmNlICE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBab25lIGRlIGNvbWJhdCBwcmluY2lwYWxlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtYmF0dGxlZmllbGRcIiBpZD1cImNvbWJhdC1iYXR0bGVmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIMOJcXVpcGUgYWR2ZXJzZSAoaGF1dCkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLXpvbmUgZW5lbXktem9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2hhcmFjdGVycyBjZW50ZXJlZC1jaGFyYWN0ZXJzXCIgaWQ9XCJlbmVteS1jaGFyYWN0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdlbmVyYXRlVGVhbUNoYXJhY3RlcnMobWF0Y2hEYXRhLnRlYW1fYiwgJ2VuZW15Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFpvbmUgY2VudHJhbGUgcG91ciBsZXMgYW5pbWF0aW9ucyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbWJhdC1jZW50ZXJcIiBpZD1cImNvbWJhdC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItYW5pbWF0aW9uXCIgaWQ9XCJjZW50ZXItYW5pbWF0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSDDiXF1aXBlIGR1IGpvdWV1ciAoYmFzKSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tem9uZSBwbGF5ZXItem9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2hhcmFjdGVycyBjZW50ZXJlZC1jaGFyYWN0ZXJzXCIgaWQ9XCJwbGF5ZXItY2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZW5lcmF0ZVRlYW1DaGFyYWN0ZXJzKG1hdGNoRGF0YS50ZWFtX2EsICdwbGF5ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSW5mbyDDqXF1aXBlIGpvdWV1ciBlbiBiYXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLWluZm8tYm90dG9tIHBsYXllci1pbmZvLWJvdHRvbVwiIGlkPVwicGxheWVyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWF0Y2hEYXRhLnRlYW1fYS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIFpvbmUgZGUgbmFycmF0aW9uIGVuIGJhcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LW5hcnJhdGlvblwiIGlkPVwiY29tYmF0LW5hcnJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFycmF0aW9uLXRleHRcIiBpZD1cIm5hcnJhdGlvbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbiBhdHRlbnRlIGR1IGTDqWJ1dCBkdSBjb21iYXQuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnQtY29tYmF0LWJ0blwiIGlkPVwic3RhcnQtY29tYmF0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvaT4gRMOpbWFycmVyIGxlIGNvbWJhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICAvLyBJbmplY3RlciBsZSBtb2RhbCBkYW5zIGxlIERPTVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtb2RhbEhUTUwpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXNlciBsZXMgY29udHLDtGxlcyBldCBhbmltYXRpb25zXHJcbiAgICAgICAgdGhpcy5pbml0Q29tYmF0VmlzdWFsaXphdGlvbihtYXRjaERhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIETDqWZpbmlyIGxlIGJhY2tncm91bmQgYWzDqWF0b2lyZVxyXG4gICAgICAgIGNvbnN0IGJhdHRsZWZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWJhdC1iYXR0bGVmaWVsZCcpO1xyXG4gICAgICAgIGlmIChiYXR0bGVmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21CZyA9IHRoaXMuZ2V0UmFuZG9tQmF0dGxlZmllbGQoKTtcclxuICAgICAgICAgICAgYmF0dGxlZmllbGQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2ltYWdlcy8ke3JhbmRvbUJnfScpYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQmF0dGxlZmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgYmF0dGxlZmllbGRzID0gW1xyXG4gICAgICAgICAgICAvLyBQbGF0ZWF1eCBEeXN0b3BpcXVlc1xyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9jaGFtcCBkZSBiYXRhaWxsZSBkeXN0by5wbmcnLFxyXG4gICAgICAgICAgICAncGxhdGVhdXhEeXN0by9jb3VycyBtb2Rlcm5lLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eER5c3RvL3BsYWNlIHZpbGxhZ2UgbW9kZXJuZS5wbmcnLFxyXG4gICAgICAgICAgICAvLyBQbGF0ZWF1eCBNw6lkacOpdmF1eFxyXG4gICAgICAgICAgICAncGxhdGVhdXhNZWRpZXZhbC9jaW1ldGnDqHJlLnBuZycsXHJcbiAgICAgICAgICAgICdwbGF0ZWF1eE1lZGlldmFsL2NvdXJzIGR1IGNoYXRlYXUucG5nJyxcclxuICAgICAgICAgICAgJ3BsYXRlYXV4TWVkaWV2YWwvcGxhY2UgZHUgdmlsbGFnZS5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYmF0dGxlZmllbGRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJhdHRsZWZpZWxkcy5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVRlYW1DaGFyYWN0ZXJzKHRlYW0sIHRlYW1UeXBlKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlcnNIVE1MID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgb24gYSBsZXMgdnJhaWVzIGRvbm7DqWVzIGRlcyBwZXJzb25uYWdlcywgb24gbGVzIHV0aWxpc2VcclxuICAgICAgICBpZiAodGVhbS5jaGFyYWN0ZXJzICYmIHRlYW0uY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRlYW0uY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyYWN0ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb2xlSWNvbiA9IHRoaXMuZ2V0Um9sZUljb24oY2hhcmFjdGVyLnJvbGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVySW1hZ2UgPSB0aGlzLmdldENoYXJhY3RlckltYWdlKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3RlciBtb2Rlcm4tY2FyZFwiIGlkPVwiJHt0ZWFtVHlwZX0tY2hhci0ke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2hhcmFjdGVySW1hZ2V9XCIgYWx0PVwiJHtjaGFyYWN0ZXIubmFtZX1cIiBvbmVycm9yPVwidGhpcy5zdHlsZS5kaXNwbGF5PSdub25lJzsgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheT0nZmxleCc7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWZhbGxiYWNrXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHtyb2xlSWNvbn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1uYW1lXCI+JHtjaGFyYWN0ZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItcm9sZSAke2NoYXJhY3Rlci5yb2xlfVwiPiR7dGhpcy5nZXRSb2xlTmFtZShjaGFyYWN0ZXIucm9sZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0IGhwXCIgdGl0bGU9XCJIUFwiPuKdpO+4jyAke2NoYXJhY3Rlci5ocH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0IGF0a1wiIHRpdGxlPVwiQVRLXCI+4pqU77iPICR7Y2hhcmFjdGVyLmF0a308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItZWZmZWN0c1wiIGlkPVwiJHt0ZWFtVHlwZX0tZWZmZWN0cy0ke2luZGV4fVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWdsb3dcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGF2ZWMgZGVzIHBlcnNvbm5hZ2VzIHBhciBkw6lmYXV0XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0SW1hZ2UgPSAnL2ltYWdlcy9jaGFyYWN0ZXJzL3BsYWNlaG9sZGVyLnBuZyc7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3RlciBtb2Rlcm4tY2FyZFwiIGlkPVwiJHt0ZWFtVHlwZX0tY2hhci0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkZWZhdWx0SW1hZ2V9XCIgYWx0PVwiSMOpcm9zICR7aSArIDF9XCIgb25lcnJvcj1cInRoaXMuc3R5bGUuZGlzcGxheT0nbm9uZSc7IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1mYWxsYmFja1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLW5hbWVcIj5Iw6lyb3MgJHtpICsgMX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItcm9sZSBmaWdodGVyXCI+Q29tYmF0dGFudDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdCBocFwiPuKdpO+4jyAxMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0IGF0a1wiPuKalO+4jyA1MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1lZmZlY3RzXCIgaWQ9XCIke3RlYW1UeXBlfS1lZmZlY3RzLSR7aX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1nbG93XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzSFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFyYWN0ZXJJbWFnZShjaGFyYWN0ZXIpIHtcclxuICAgICAgICAvLyBTaSBsZSBwZXJzb25uYWdlIGEgdW5lIGFydHdvcmtVcmwsIGwndXRpbGlzZXIgZW4gcHJpb3JpdMOpXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuYXJ0d29ya1VybCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmFydHdvcmtVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpbm9uLCB1dGlsaXNlciBsZSBzeXN0w6htZSBkZSBtYXBwaW5nIGV4aXN0YW50XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyTmFtZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyIDogY2hhcmFjdGVyPy5uYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1hcHBlciBsZXMgbm9tcyBkZXMgcGVyc29ubmFnZXMgdmVycyBsZXVycyBpbWFnZXNcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJJbWFnZXMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICd3YXJyaW9yJzogJy9pbWFnZXMvY2hhcmFjdGVycy93YXJyaW9yLnBuZycsXHJcbiAgICAgICAgICAgICdtYWdlJzogJy9pbWFnZXMvY2hhcmFjdGVycy9tYWdlLnBuZycsXHJcbiAgICAgICAgICAgICdhcmNoZXInOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL2FyY2hlci5wbmcnLFxyXG4gICAgICAgICAgICAncHJpZXN0JzogJy9pbWFnZXMvY2hhcmFjdGVycy9wcmllc3QucG5nJyxcclxuICAgICAgICAgICAgJ2hlYWxlcic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvcHJpZXN0LnBuZycsXHJcbiAgICAgICAgICAgICdwYWxhZGluJzogJy9pbWFnZXMvY2hhcmFjdGVycy9wYWxhZGluLnBuZycsXHJcbiAgICAgICAgICAgICd0YW5rJzogJy9pbWFnZXMvY2hhcmFjdGVycy9wYWxhZGluLnBuZycsXHJcbiAgICAgICAgICAgICdhc3Nhc3Npbic6ICcvaW1hZ2VzL2NoYXJhY3RlcnMvYXNzYXNzaW4ucG5nJyxcclxuICAgICAgICAgICAgJ2ZpZ2h0ZXInOiAnL2ltYWdlcy9jaGFyYWN0ZXJzL3dhcnJpb3IucG5nJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXNzYXllciBwbHVzaWV1cnMgYXBwcm9jaGVzIHBvdXIgbWF0Y2hlciBsJ2ltYWdlXHJcbiAgICAgICAgbGV0IGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snZGVmYXVsdCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gY2hhcmFjdGVyTmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRXNzYXllciBwYXIgbm9tIGV4YWN0XHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJJbWFnZXNbY2hhcmFjdGVyTmFtZS50b0xvd2VyQ2FzZSgpXSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzW2NoYXJhY3Rlck5hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXNzYXllciBwYXIgbm9tIHNhbnMgZXNwYWNlc1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyYWN0ZXJJbWFnZXNbbm9ybWFsaXplZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbbm9ybWFsaXplZE5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEVzc2F5ZXIgZGUgZGV2aW5lciBwYXIgbGUgcsO0bGUgZGFucyBsZSBub21cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ2d1ZXJyaWVyJykgfHwgbm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3dhcnJpb3InKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWyd3YXJyaW9yJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ21hZ2UnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnd2l6YXJkJykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snbWFnZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdhcmNoZXInKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnYm93JykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1snYXJjaGVyJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3ByZXRyZScpIHx8IG5vcm1hbGl6ZWROYW1lLmluY2x1ZGVzKCdwcmllc3QnKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnaGVhbGVyJykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlUGF0aCA9IGNoYXJhY3RlckltYWdlc1sncHJpZXN0J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9ybWFsaXplZE5hbWUuaW5jbHVkZXMoJ3BhbGFkaW4nKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygndGFuaycpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGggPSBjaGFyYWN0ZXJJbWFnZXNbJ3BhbGFkaW4nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub3JtYWxpemVkTmFtZS5pbmNsdWRlcygnYXNzYXNzaW4nKSB8fCBub3JtYWxpemVkTmFtZS5pbmNsdWRlcygncm9ndWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXRoID0gY2hhcmFjdGVySW1hZ2VzWydhc3Nhc3NpbiddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5a877iPIEltYWdlIHBvdXIgXCIke2NoYXJhY3Rlck5hbWV9XCI6ICR7aW1hZ2VQYXRofWApO1xyXG4gICAgICAgIHJldHVybiBpbWFnZVBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9sZU5hbWUocm9sZSkge1xyXG4gICAgICAgIGNvbnN0IHJvbGVOYW1lcyA9IHtcclxuICAgICAgICAgICAgJ3RhbmsnOiAnVGFuaycsXHJcbiAgICAgICAgICAgICdoZWFsZXInOiAnU29pZ25ldXInLFxyXG4gICAgICAgICAgICAnbWFnZSc6ICdNYWdlJyxcclxuICAgICAgICAgICAgJ2Fzc2Fzc2luJzogJ0Fzc2Fzc2luJyxcclxuICAgICAgICAgICAgJ2FyY2hlcic6ICdBcmNoZXInLFxyXG4gICAgICAgICAgICAnZmlnaHRlcic6ICdDb21iYXR0YW50J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJvbGVOYW1lc1tyb2xlXSB8fCAnQ29tYmF0dGFudCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9sZUljb24ocm9sZSkge1xyXG4gICAgICAgIHN3aXRjaCAocm9sZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0YW5rJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLXNoaWVsZC1hbHQnO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtaGVhcnQnO1xyXG4gICAgICAgICAgICBjYXNlICdtYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLW1hZ2ljJztcclxuICAgICAgICAgICAgY2FzZSAnYXNzYXNzaW4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtZGFnZ2VyJztcclxuICAgICAgICAgICAgY2FzZSAnYXJjaGVyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmFzIGZhLWJvdy1hcnJvdyc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1zd29yZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWJhdC12aXN1YWxpemF0aW9uLW1vZGFsJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tYmF0LWNsb3NlLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWNvbWJhdC1idG4nKTtcclxuICAgICAgICBjb25zdCBzcGVlZEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlZWQtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNwZWVkU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNwZWVkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTcGVlZCA9IDE7XHJcbiAgICAgICAgbGV0IGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy5pbml0R3VpbGRHdWlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsZSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBhdmVjIEVzY2FwZVxyXG4gICAgICAgIGNvbnN0IGVzY2FwZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgZW4gY2xpcXVhbnQgc3VyIGwnb3ZlcmxheVxyXG4gICAgICAgIG1vZGFsPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnRyw7RsZXMgZGUgdml0ZXNzZSBhbcOpbGlvcsOpc1xyXG4gICAgICAgIHNwZWVkQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNwZWVkQnRucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3BlZWQgPSBwYXJzZUZsb2F0KGJ0bi5kYXRhc2V0LnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcGVlZFNwYW4udGV4dENvbnRlbnQgPSBgeCR7Y3VycmVudFNwZWVkfWA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlIGR1IGd1aWxkIGd1aWRlIHN1ciBsYSB2aXRlc3NlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVlZENvbW1lbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAuNTogXCJUcsOocyBiaWVuICEgUHJlbm9ucyBsZSB0ZW1wcyBkJ2FuYWx5c2VyIGNoYXF1ZSBtb3V2ZW1lbnQuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICAxOiBcIlZpdGVzc2Ugbm9ybWFsZSwgcGFyZmFpdCBwb3VyIGJpZW4gc3VpdnJlIGwnYWN0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICAyOiBcIk9uIGFjY8OpbMOocmUgdW4gcGV1ICEgR2FyZGV6IGxlcyB5ZXV4IG91dmVydHMuLi5cIixcclxuICAgICAgICAgICAgICAgICAgICA1OiBcIsOHYSB2YSB2aXRlIG1haW50ZW5hbnQgISBDb25jZW50cmF0aW9uIG1heGltdW0gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwOiBcIk1vZGUgw6ljbGFpciBhY3RpdsOpICEgQmxpbmsgZXQgdm91cyByYXRleiB0b3V0ICFcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoc3BlZWRDb21tZW50c1tjdXJyZW50U3BlZWRdIHx8IFwiVml0ZXNzZSBhanVzdMOpZSAhXCIsICfimqEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfwn46uIFZpdGVzc2UgY2hhbmfDqWU6JywgY3VycmVudFNwZWVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRMOpbWFycmVyIGxlIGNvbWJhdFxyXG4gICAgICAgIHN0YXJ0QnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzdGFydEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoXCJMZSBjb21iYXQgY29tbWVuY2UgISBRdWUgbGUgbWVpbGxldXIgZ2FnbmUgIVwiLCAn4pqU77iPJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDb21iYXRBbmltYXRpb24obWF0Y2hEYXRhLmV2ZW50cywgY3VycmVudFNwZWVkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcmVkb1wiPjwvaT4gUmVqb3VlciBsZSBjb21iYXQnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gR1VJTEQgR1VJREUgU1lTVEVNID09PT09PT09PT09PT09PVxyXG4gICAgaW5pdEd1aWxkR3VpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlsZEd1aWRlQ29tbWVudHMgPSBbXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlcyBkZSBkw6lidXRcclxuICAgICAgICAgICAgXCJNZXMgY2hhbXBpb25zLCBsZSBjb21iYXQgdmEgY29tbWVuY2VyICFcIixcclxuICAgICAgICAgICAgXCJBbmFseXNvbnMgbGVzIGZvcmNlcyBlbiBwcsOpc2VuY2UuLi5cIixcclxuICAgICAgICAgICAgXCJRdWUgbGEgc3RyYXTDqWdpZSBsJ2VtcG9ydGUgc3VyIGxhIGZvcmNlIGJydXRlICFcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnRhaXJlcyBkJ2FjdGlvblxyXG4gICAgICAgICAgICBcIkV4Y2VsbGVudGUgYXR0YXF1ZSAhIEwnYWR2ZXJzYWlyZSByZWN1bGUgIVwiLFxyXG4gICAgICAgICAgICBcIlVuZSBkw6lmZW5zZSBleGVtcGxhaXJlICEgQmllbiBqb3XDqSAhXCIsXHJcbiAgICAgICAgICAgIFwiQXR0ZW50aW9uICEgQ2V0dGUgYXR0YXF1ZSBzZW1ibGUgY3JpdGlxdWUgIVwiLFxyXG4gICAgICAgICAgICBcIk1hZ25pZmlxdWUgY29vcmRpbmF0aW9uIGQnw6lxdWlwZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTGEgbWFnaWUgb3DDqHJlICEgTCdhdmFudGFnZSBjaGFuZ2UgZGUgY2FtcCAhXCIsXHJcbiAgICAgICAgICAgIFwiUXVlbCByZXRvdXJuZW1lbnQgZGUgc2l0dWF0aW9uICFcIixcclxuICAgICAgICAgICAgXCJMZXMgc29pbnMgYXJyaXZlbnQgw6AgdGVtcHMgIVwiLFxyXG4gICAgICAgICAgICBcIlVuZSBzdHJhdMOpZ2llIHBheWFudGUgIVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ29tbWVudGFpcmVzIGQnYXZhbnRhZ2VcclxuICAgICAgICAgICAgXCJCZWwgYXZhbnRhZ2UgcG91ciBsJ8OpcXVpcGUgYmxldWUgIVwiLFxyXG4gICAgICAgICAgICBcIkwnw6lxdWlwZSByb3VnZSBwcmVuZCBsJ2FzY2VuZGFudCAhXCIsXHJcbiAgICAgICAgICAgIFwiTCfDqXF1aWxpYnJlIGRlcyBmb3JjZXMgYmFzY3VsZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTGEgdmljdG9pcmUgc2UgZGVzc2luZSAhXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgY3JpdGlxdWVzXHJcbiAgICAgICAgICAgIFwiQ291cCBjcml0aXF1ZSAhIFF1ZWwgaW1wYWN0ICFcIixcclxuICAgICAgICAgICAgXCJVbmUgYmxlc3N1cmUgZ3JhdmUgISBMYSBzaXR1YXRpb24gZGV2aWVudCBjcml0aXF1ZSAhXCIsXHJcbiAgICAgICAgICAgIFwiTCdpc3N1ZSBkdSBjb21iYXQgc2Ugam91ZSBtYWludGVuYW50ICFcIixcclxuICAgICAgICAgICAgXCJEZXJuacOocmUgY2hhbmNlIHBvdXIgcmVudmVyc2VyIGxhIHZhcGV1ciAhXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRDb29sZG93biA9IDIwMDA7IC8vIDIgc2Vjb25kZXMgZW50cmUgbGVzIGNvbW1lbnRhaXJlc1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHdWlsZEd1aWRlQ29tbWVudCh0ZXh0LCBlbW9qaSA9ICfwn5KsJykge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRhcnlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRhcnktdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGd1aWRlU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWRlLXN0YXR1cycpO1xyXG4gICAgICAgIGNvbnN0IGJ1YmJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50YXJ5LWJ1YmJsZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb21tZW50YXJ5VGV4dCAmJiBndWlkZVN0YXR1cyAmJiBidWJibGUpIHtcclxuICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgY29udGVudVxyXG4gICAgICAgICAgICBjb21tZW50YXJ5VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgICAgIGd1aWRlU3RhdHVzLnRleHRDb250ZW50ID0gZW1vamk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gZCdhcHBhcml0aW9uXHJcbiAgICAgICAgICAgIGJ1YmJsZS5jbGFzc0xpc3QuYWRkKCdndWlkZS1zcGVha2luZycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV0aXJlciBsJ2FuaW1hdGlvbiBhcHLDqHMgdW4gZMOpbGFpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnViYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2d1aWRlLXNwZWFraW5nJyk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ/Cfl6PvuI8gR3VpbGQgR3VpZGU6JywgdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUd1aWxkQ29tbWVudCh0eXBlID0gJ2FjdGlvbicpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RDb21tZW50VGltZSA8IHRoaXMuY29tbWVudENvb2xkb3duKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBQYXMgZGUgY29tbWVudGFpcmUgc2kgdHJvcCByw6ljZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb21tZW50cztcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWR2YW50YWdlJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsIGF2YW50YWdlIHBvdXIgY2V0dGUgw6lxdWlwZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMJ2FzY2VuZGFudCBzZSBkZXNzaW5lICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlVuZSBzdHJhdMOpZ2llIHBheWFudGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTCfDqXF1aWxpYnJlIGJhc2N1bGUgIVwiXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NyaXRpY2FsJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXR0ZW50aW9uICEgQ2V0dGUgYXR0YXF1ZSBwZXV0IMOqdHJlIGNyaXRpcXVlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNvdXAgcHVpc3NhbnQgZW4gcHLDqXBhcmF0aW9uICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlVuZSBhdHRhcXVlIGTDqWNpc2l2ZSBhcHByb2NoZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNb21lbnQgY3JpdGlxdWUgZHUgY29tYmF0ICFcIlxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdoZWFsJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTGVzIHNvaW5zIGFycml2ZW50IMOgIHRlbXBzICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2VsbGVudGUgcsOpY3Vww6lyYXRpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGEgbWFnaWUgY3VyYXRpdmUgb3DDqHJlICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlJldG91ciBlbiBmb3JjZSAhXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiRXhjZWxsZW50ZSBtYW7Fk3V2cmUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWFnbmlmaXF1ZSBjb29yZGluYXRpb24gIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUXVlbGxlIHRlY2huaXF1ZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCaWVuIGpvdcOpICFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkwnYWN0aW9uIHMnaW50ZW5zaWZpZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZSBjb21iYXQgYmF0IHNvbiBwbGVpbiAhXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdENvbW1lbnRUaW1lID0gbm93O1xyXG4gICAgICAgIHJldHVybiBjb21tZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21tZW50cy5sZW5ndGgpXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5Q29tYmF0QW5pbWF0aW9uKGV2ZW50cywgc3BlZWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCBjZW50ZXJBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWFuaW1hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWluZm8nKTtcclxuICAgICAgICBjb25zdCBlbmVteUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktaW5mby1oZWFkZXInKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBCYXNlIGRlIHRlbXBzIGFkYXB0w6llIMOgIGxhIHZpdGVzc2VcclxuICAgICAgICBjb25zdCBiYXNlRGVsYXkgPSAxMDAwIC8gTWF0aC5tYXgoc3BlZWQsIDAuNSk7IC8vIE1pbmltdW0gMC41IHBvdXIgw6l2aXRlciBsZXMgdml0ZXNzZXMgdHJvcCBsZW50ZXNcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IE1hdGgubWF4KGJhc2VEZWxheSAqIDAuOCwgMjAwKTsgLy8gTWluaW11bSAyMDBtc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn46uIEFuaW1hdGlvbiBhdmVjIHZpdGVzc2UgeCR7c3BlZWR9LCBkw6lsYWk6ICR7YW5pbWF0aW9uRGVsYXl9bXNgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDb21tZW50YWlyZSBpbml0aWFsIGR1IGd1aWxkIGd1aWRlXHJcbiAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQoXCJMZSBjb21iYXQgY29tbWVuY2UgISBPYnNlcnZleiBiaWVuIGNoYXF1ZSBtb3V2ZW1lbnQgIVwiLCAn4pqU77iPJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb21tZW50YWlyZXMgZHluYW1pcXVlcyBkdSBndWlsZCBndWlkZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZEd1aWxkR3VpZGVDb21tZW50YXJ5KGV2ZW50LCBpLCBldmVudHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFuaW1lciBzZWxvbiBsZSB0eXBlIGQnw6l2w6luZW1lbnRcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlRXZlbnQoZXZlbnQsIGNlbnRlckFuaW1hdGlvbiwgcGxheWVySW5mbywgZW5lbXlJbmZvKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgZGVzIGFjdGlvbnMgYWzDqWF0b2lyZXMgcG91ciBwbHVzIGRlIGR5bmFtaXNtZVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYWN0aW9uID09PSAnQVRUQUNLJyB8fCBldmVudC5hY3Rpb24gPT09ICdST1VORF9TVEFSVCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIDMwJSBkZSBjaGFuY2UgZCdhdm9pciB1bmUgYWN0aW9uIGTDqWZlbnNpdmUvc29pbiBhbMOpYXRvaXJlXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoYW5pbWF0aW9uRGVsYXkgKiAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUFjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnSEVBTCcgOiAnREVGRU5TRSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uKHJhbmRvbUFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudGFpcmUgc3VyIGwnYWN0aW9uIGFsw6lhdG9pcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db21tZW50ID0gdGhpcy5nZXRSYW5kb21HdWlsZENvbW1lbnQocmFuZG9tQWN0aW9uID09PSAnSEVBTCcgPyAnaGVhbCcgOiAnYWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbUNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93R3VpbGRHdWlkZUNvbW1lbnQocmFuZG9tQ29tbWVudCwgcmFuZG9tQWN0aW9uID09PSAnSEVBTCcgPyAn8J+SmicgOiAn8J+boe+4jycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQXR0ZW5kcmUgc2Vsb24gbGEgdml0ZXNzZVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGFuaW1hdGlvbkRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGZpbmFsZVxyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGV2ZW50cy5maW5kKGUgPT4gZS5hY3Rpb24gPT09ICdWSUNUT1JZJyk7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dHdWlsZEd1aWRlQ29tbWVudChcIkxlIGNvbWJhdCB0b3VjaGUgw6Agc2EgZmluICEgUXVpIGwnZW1wb3J0ZXJhID9cIiwgJ/Cfj4YnKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlVmljdG9yeSh3aW5uZXIsIGNlbnRlckFuaW1hdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRHdWlsZEd1aWRlQ29tbWVudGFyeShldmVudCwgZXZlbnRJbmRleCwgdG90YWxFdmVudHMpIHtcclxuICAgICAgICBsZXQgY29tbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGVtb2ppID0gJ/CfkqwnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbW1lbnRhaXJlcyBiYXPDqXMgc3VyIGwnYWN0aW9uXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnQ09NQkFUX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBcIlZvaWNpIG5vcyBjb21iYXR0YW50cyAhIFF1ZSBsZSBzcGVjdGFjbGUgY29tbWVuY2UgIVwiO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+OrSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdST1VORF9TVEFSVCc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gYFJvdW5kICR7ZXZlbnRJbmRleCArIDF9ICEgTCdpbnRlbnNpdMOpIG1vbnRlICFgO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+UpSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjcpIHsgLy8gNzAlIGRlIGNoYW5jZSBkZSBjb21tZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tDb21tZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdHRlbnRpb24gISBDZXR0ZSBhdHRhcXVlIHBldXQgw6p0cmUgY3JpdGlxdWUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkV4Y2VsbGVudGUgdGVjaG5pcXVlICEgTCdhZHZlcnNhaXJlIHJlY3VsZSAhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5lIGZyYXBwZSBwdWlzc2FudGUgISDDh2EgdmEgZmFpcmUgbWFsICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYWduaWZpcXVlIGNvb3JkaW5hdGlvbiBkJ8OpcXVpcGUgIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkwnYWN0aW9uIHMnaW50ZW5zaWZpZSAhXCJcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBhdHRhY2tDb21tZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdHRhY2tDb21tZW50cy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICBlbW9qaSA9ICfimpTvuI8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVEVBTV9QUkVTRU5UQVRJT04nOlxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfDiXF1aXBlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ID0gYCR7ZXZlbnQudGFyZ2V0X25hbWV9IGVudHJlIGVuIGxpY2UgISBRdWVsbGUgcHVpc3NhbmNlICFgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppID0gJ/CfkaUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnVklDVE9SWSc6XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gXCJFdCB2b2lsw6AgISBMZSBjb21iYXQgZXN0IHRlcm1pbsOpICEgUXVlbGxlIGJhdGFpbGxlIMOpcGlxdWUgIVwiO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+Phic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29tbWVudGFpcmVzIGJhc8OpcyBzdXIgbGEgcHJvZ3Jlc3Npb25cclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGV2ZW50SW5kZXggLyB0b3RhbEV2ZW50cztcclxuICAgICAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMC4yKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gdGhpcy5nZXRSYW5kb21HdWlsZENvbW1lbnQoJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn8J+RgCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSB0aGlzLmdldFJhbmRvbUd1aWxkQ29tbWVudCgnYWR2YW50YWdlJyk7XHJcbiAgICAgICAgICAgICAgICBlbW9qaSA9ICfwn5KqJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDAuOCkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudCA9IHRoaXMuZ2V0UmFuZG9tR3VpbGRDb21tZW50KCdjcml0aWNhbCcpO1xyXG4gICAgICAgICAgICAgICAgZW1vamkgPSAn4pqhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoY29tbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dHdWlsZEd1aWRlQ29tbWVudChjb21tZW50LCBlbW9qaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVSYW5kb21DaGFyYWN0ZXJBY3Rpb24oYWN0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEFjdGlvbiBhbMOpYXRvaXJlIHN1ciB1biBwZXJzb25uYWdlIGFsw6lhdG9pcmVcclxuICAgICAgICBjb25zdCB0ZWFtcyA9IFsncGxheWVyJywgJ2VuZW15J107XHJcbiAgICAgICAgY29uc3QgcmFuZG9tVGVhbSA9IHRlYW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRlYW1zLmxlbmd0aCldO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYXJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyYW5kb21UZWFtfS1jaGFyLSR7cmFuZG9tQ2hhckluZGV4fWApO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmFuZG9tVGVhbX0tZWZmZWN0cy0ke3JhbmRvbUNoYXJJbmRleH1gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY2hhcmFjdGVyRWxlbWVudCAmJiBlZmZlY3RzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoYXJhY3Rlci1hY3RpbmcnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09ICdIRUFMJykge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0SFRNTCA9ICc8ZGl2IGNsYXNzPVwiaGVhbC1lZmZlY3RcIj48aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0Q2xhc3MgPSAnZWZmZWN0LWhlYWwnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdERUZFTlNFJykge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0SFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGVmZW5zZS1lZmZlY3RcIj48aSBjbGFzcz1cImZhcyBmYS1zaGllbGRcIj48L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIGVmZmVjdENsYXNzID0gJ2VmZmVjdC1kZWZlbnNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuaW5uZXJIVE1MID0gZWZmZWN0SFRNTDtcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlZmZlY3RDbGFzcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDQwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYXJhY3Rlci1hY3RpbmcnKTtcclxuICAgICAgICAgICAgZWZmZWN0c0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlZmZlY3RDbGFzcyk7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlRXZlbnQoZXZlbnQsIGNlbnRlckVsZW1lbnQsIHBsYXllckluZm8sIGVuZW15SW5mbykge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGV2ZW50LmFjdGlvbjtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdDT01CQVRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlQ29tYmF0U3RhcnQoY2VudGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdURUFNX1BSRVNFTlRBVElPTic6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVUZWFtUHJlc2VudGF0aW9uKGV2ZW50LCBwbGF5ZXJJbmZvLCBlbmVteUluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnUk9VTkRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUm91bmRTdGFydChjZW50ZXJFbGVtZW50LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICBjYXNlICdIRUFMJzpcclxuICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFuaW1hdGVDaGFyYWN0ZXJBY3Rpb24oZXZlbnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdST1VORF9FTkQnOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hbmltYXRlUm91bmRFbmQoY2VudGVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdWSUNUT1JZJzpcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVZpY3RvcnkoZXZlbnQsIGNlbnRlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVDb21iYXRTdGFydChjZW50ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtc3RhcnQtYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsby1lZmZlY3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21iYXQtdGV4dFwiPkTDqWJ1dCBkdSBDb21iYXQhPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWdsb3cnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1nbG93Jyk7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlVGVhbVByZXNlbnRhdGlvbihldmVudCwgcGxheWVySW5mbywgZW5lbXlJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgaXNUZWFtQSA9IGV2ZW50LnRhcmdldF9uYW1lLmluY2x1ZGVzKCfDiXF1aXBlIEEnKSB8fCBldmVudC50YXJnZXRfbmFtZS5pbmNsdWRlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWluZm8gLnRlYW0tbmFtZScpPy50ZXh0Q29udGVudCB8fCAnJyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGlzVGVhbUEgPyBwbGF5ZXJJbmZvIDogZW5lbXlJbmZvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVhbS1oaWdobGlnaHQnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDgwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0ZWFtLWhpZ2hsaWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVSb3VuZFN0YXJ0KGNlbnRlckVsZW1lbnQsIGV2ZW50KSB7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZC1zdGFydC1tb2Rlcm5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZC1naXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvZ3VpbGRHdWlkZS5qcGdcIiBhbHQ9XCJBbm5vbmNldXJcIiBjbGFzcz1cInJvdW5kLWFubm91bmNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVlY2gtYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZC10ZXh0XCI+JHtldmVudC50YXJnZXRfbmFtZSB8fCAnTm91dmVhdSBSb3VuZCAhJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1yb3VuZC1zdGFydCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTIwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXJvdW5kLXN0YXJ0Jyk7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhbmltYXRlQ2hhcmFjdGVyQWN0aW9uKGV2ZW50LCBhY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgcXVlbCBwZXJzb25uYWdlIGFnaXQgYmFzw6kgc3VyIGxlcyBkb25uw6llcyBkZSBsJ8OpdsOpbmVtZW50XHJcbiAgICAgICAgbGV0IHRlYW1UeXBlLCBjaGFySW5kZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXNzYXllciBkZSBkw6l0ZXJtaW5lciBsJ8OpcXVpcGUgZXQgbGUgcGVyc29ubmFnZSBiYXPDqSBzdXIgbGVzIGRvbm7DqWVzIGRlIGwnw6l2w6luZW1lbnRcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0X25hbWUgJiYgZXZlbnQudGFyZ2V0X25hbWUuaW5jbHVkZXMoJ/CflLUnKSkge1xyXG4gICAgICAgICAgICB0ZWFtVHlwZSA9ICdwbGF5ZXInO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0X25hbWUgJiYgZXZlbnQudGFyZ2V0X25hbWUuaW5jbHVkZXMoJ++/vScpKSB7XHJcbiAgICAgICAgICAgIHRlYW1UeXBlID0gJ2VuZW15JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBhbMOpYXRvaXJlXHJcbiAgICAgICAgICAgIHRlYW1UeXBlID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdwbGF5ZXInIDogJ2VuZW15JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RlYW1UeXBlfS1jaGFyLSR7Y2hhckluZGV4fWApO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGVhbVR5cGV9LWVmZmVjdHMtJHtjaGFySW5kZXh9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckVsZW1lbnQgJiYgZWZmZWN0c0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGR1IHBlcnNvbm5hZ2VcclxuICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGFyYWN0ZXItYWN0aW5nJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgbCdlZmZldCBzZWxvbiBsJ2FjdGlvblxyXG4gICAgICAgICAgICBsZXQgZWZmZWN0SFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0Q2xhc3MgPSAnJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQVRUQUNLJzpcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RIVE1MID0gJzxkaXYgY2xhc3M9XCJhdHRhY2stZWZmZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtZmlzdC1yYWlzZWRcIj48L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RDbGFzcyA9ICdlZmZlY3QtYXR0YWNrJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0hFQUwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdEhUTUwgPSAnPGRpdiBjbGFzcz1cImhlYWwtZWZmZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RDbGFzcyA9ICdlZmZlY3QtaGVhbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdERUZFTlNFJzpcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RIVE1MID0gJzxkaXYgY2xhc3M9XCJkZWZlbnNlLWVmZmVjdFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNoaWVsZFwiPjwvaT48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdENsYXNzID0gJ2VmZmVjdC1kZWZlbnNlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9ucyBhbMOpYXRvaXJlcyBwb3VyIHBsdXMgZGUgdmFyacOpdMOpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQWN0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGRpdiBjbGFzcz1cIm1hZ2ljLWVmZmVjdFwiPjxpIGNsYXNzPVwiZmFzIGZhLW1hZ2ljXCI+PC9pPjwvZGl2PicsIGNsYXNzOiAnZWZmZWN0LW1hZ2ljJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGh0bWw6ICc8ZGl2IGNsYXNzPVwic3BlZWQtZWZmZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtYm9sdFwiPjwvaT48L2Rpdj4nLCBjbGFzczogJ2VmZmVjdC1zcGVlZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBodG1sOiAnPGRpdiBjbGFzcz1cImF0dGFjay1lZmZlY3RcIj48aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT48L2Rpdj4nLCBjbGFzczogJ2VmZmVjdC1hdHRhY2snIH1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUFjdGlvbiA9IHJhbmRvbUFjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tQWN0aW9ucy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RIVE1MID0gcmFuZG9tQWN0aW9uLmh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0Q2xhc3MgPSByYW5kb21BY3Rpb24uY2xhc3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmlubmVySFRNTCA9IGVmZmVjdEhUTUw7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWZmZWN0Q2xhc3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCg4MDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhcmFjdGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFyYWN0ZXItYWN0aW5nJyk7XHJcbiAgICAgICAgICAgIGVmZmVjdHNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZWZmZWN0Q2xhc3MpO1xyXG4gICAgICAgICAgICBlZmZlY3RzRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYW5pbWF0ZVJvdW5kRW5kKGNlbnRlckVsZW1lbnQpIHtcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kLWVuZC1hbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyZ2xhc3MtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWhvdXJnbGFzcy1lbmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmQtdGV4dFwiPkZpbiBkdSB0b3VyPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUnKTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDgwMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWZhZGUnKTtcclxuICAgICAgICBjZW50ZXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFuaW1hdGVWaWN0b3J5KGV2ZW50LCBjZW50ZXJFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJWaWN0b3J5ID0gZXZlbnQudGFyZ2V0X25hbWUuaW5jbHVkZXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW0taW5mby1ib3R0b20nKT8udGV4dENvbnRlbnQgfHwgJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1tb2Rlcm4gJHtpc1BsYXllclZpY3RvcnkgPyAncGxheWVyLXZpY3RvcnknIDogJ2VuZW15LXZpY3RvcnknfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWFubm91bmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvZ3VpbGRHdWlkZS5qcGdcIiBhbHQ9XCJHdWlsZCBHdWlkZVwiIGNsYXNzPVwiZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1zcGVlY2gtYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWN0b3J5LWFubm91bmNlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpc1BsYXllclZpY3RvcnkgPyAnT3nDqSBPecOpICEgVm91cyBhdmV6IHJlbXBvcnTDqSBjZXR0ZSB2aWN0b2lyZSAhJyA6ICdPecOpIE95w6kgISBWb3VzIGF2ZXogc3ViaSB1bmUgZMOpZmFpdGUuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpY3RvcnktZWZmZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXNQbGF5ZXJWaWN0b3J5ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29uZmV0dGlcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3BhcmtsZXNcIj48L2Rpdj4nIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGVmZWF0LXNtb2tlXCI+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNlbnRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS12aWN0b3J5LW1vZGVybicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMjUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAobXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09IFNZU1TDiE1FIERFIFJFQ0FQIERFIENPTUJBVCA9PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHNob3dNYXRjaFJlY2FwKG1hdGNoSWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL21hdGNobWFraW5nL21hdGNoLyR7bWF0Y2hJZH0vZXZlbnRzYCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNYXRjaFJlY2FwTW9kYWwobWF0Y2hEYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSByZWNhcDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSByZWNhcCBkdSBjb21iYXQnLCAnZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheU1hdGNoUmVjYXBNb2RhbChtYXRjaERhdGEpIHtcclxuICAgICAgICAvLyBDcsOpZXIgbGUgY29udGVudSBkdSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsSFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIiBpZD1cIm1hdGNoLXJlY2FwLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBtYXRjaC1yZWNhcC1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxpIGNsYXNzPVwiZmFzIGZhLXNjcm9sbFwiPjwvaT4gUmVjYXAgZHUgQ29tYmF0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgaWQ9XCJtb2RhbC1jbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtc3VtbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW1zLW92ZXJ2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2FyZCAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYS5uYW1lID8gJ3dpbm5lcicgOiAnbG9zZXInfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9hLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPiR7bWF0Y2hEYXRhLnRlYW1fYS5wbGF5ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1tclwiPiR7bWF0Y2hEYXRhLnRlYW1fYS5tbXJ9IE1NUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYS5uYW1lID8gJzxkaXYgY2xhc3M9XCJ2aWN0b3J5LWJhZGdlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY3Jvd25cIj48L2k+IFZJQ1RPSVJFPC9kaXY+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2cy1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VlM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tY2FyZCAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYi5uYW1lID8gJ3dpbm5lcicgOiAnbG9zZXInfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1uYW1lXCI+JHttYXRjaERhdGEudGVhbV9iLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPiR7bWF0Y2hEYXRhLnRlYW1fYi5wbGF5ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1tclwiPiR7bWF0Y2hEYXRhLnRlYW1fYi5tbXJ9IE1NUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hdGNoRGF0YS53aW5uZXJfdGVhbSA9PT0gbWF0Y2hEYXRhLnRlYW1fYi5uYW1lID8gJzxkaXYgY2xhc3M9XCJ2aWN0b3J5LWJhZGdlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY3Jvd25cIj48L2k+IFZJQ1RPSVJFPC9kaXY+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RMOpYnV0OiAke21hdGNoRGF0YS5zdGFydGVkX2F0IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZsYWctY2hlY2tlcmVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GaW46ICR7bWF0Y2hEYXRhLmZpbmlzaGVkX2F0IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdGF0dXQ6ICR7bWF0Y2hEYXRhLnN0YXR1c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tYmF0LWV2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmFzIGZhLWxpc3RcIj48L2k+IETDqXJvdWxlbWVudCBkdSBDb21iYXQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy10aW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZW5lcmF0ZUV2ZW50c0hUTUwobWF0Y2hEYXRhLmV2ZW50cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBpZD1cIm1vZGFsLWZlcm1lci1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPiBGZXJtZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cIm1vZGFsLXBhcnRhZ2VyLWJ0blwiIGRhdGEtbWF0Y2gtaWQ9XCIke21hdGNoRGF0YS5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNoYXJlXCI+PC9pPiBQYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFqb3V0ZXIgbGUgbW9kYWwgYXUgRE9NXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vZGFsSFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIMOpbMOpbWVudHMgZHUgbW9kYWxcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZWNhcC1tb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNsb3NlLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGZlcm1lckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mZXJtZXItYnRuJyk7XHJcbiAgICAgICAgY29uc3QgcGFydGFnZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtcGFydGFnZXItYnRuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIHBvdXIgZmVybWVyIGxhIG1vZGFsXHJcbiAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHRoaXMuY2xvc2VNYXRjaFJlY2FwKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGVuIGNsaXF1YW50IHN1ciBsYSBjcm9peFxyXG4gICAgICAgIGlmIChjbG9zZUJ0bikge1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgZW4gY2xpcXVhbnQgc3VyIGxlIGJvdXRvbiBcIkZlcm1lclwiXHJcbiAgICAgICAgaWYgKGZlcm1lckJ0bikge1xyXG4gICAgICAgICAgICBmZXJtZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFydGFnZXIgbGUgbWF0Y2hcclxuICAgICAgICBpZiAocGFydGFnZXJCdG4pIHtcclxuICAgICAgICAgICAgcGFydGFnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaElkID0gcGFydGFnZXJCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNoLWlkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTWF0Y2hSZWNhcChtYXRjaElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBlbiBjbGlxdWFudCBzdXIgbCdvdmVybGF5IChmb25kIG5vaXIpXHJcbiAgICAgICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgYXZlYyBsYSB0b3VjaGUgRXNjYXBlXHJcbiAgICAgICAgY29uc3QgZXNjYXBlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NhcGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRXZlbnRzSFRNTChldmVudHMpIHtcclxuICAgICAgICBsZXQgZXZlbnRzSFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50Q2xhc3MgPSAnZXZlbnQtaXRlbSc7XHJcbiAgICAgICAgICAgIGxldCBldmVudEljb24gPSAnZmFzIGZhLWNpcmNsZSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEw6lmaW5pciBsJ2ljw7RuZSBldCBsYSBjbGFzc2Ugc2Vsb24gbGUgdHlwZSBkJ2FjdGlvblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ09NQkFUX1NUQVJUJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXBsYXknO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1zdGFydCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdURUFNX1BSRVNFTlRBVElPTic6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS11c2Vycyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWluZm8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUk9VTkRfU1RBUlQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtc3dvcmQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1yb3VuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBVFRBQ0snOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtZmlzdC1yYWlzZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xhc3MgKz0gJyBldmVudC1hdHRhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnREVGRU5TRSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1zaGllbGQtYWx0JztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtZGVmZW5zZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdIRUFMSU5HJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLWhlYXJ0JztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtaGVhbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdWSUNUT1JZJzpcclxuICAgICAgICAgICAgICAgICAgICBldmVudEljb24gPSAnZmFzIGZhLXRyb3BoeSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LXZpY3RvcnknO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTU1SX1VQREFURSc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJY29uID0gJ2ZhcyBmYS1jaGFydC1saW5lJztcclxuICAgICAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtbW1yJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NPTUJBVF9FTkQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtc3RvcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWVuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SWNvbiA9ICdmYXMgZmEtaW5mbyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGFzcyArPSAnIGV2ZW50LWRlZmF1bHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGb3JtYXRhZ2Ugc3DDqWNpYWwgcG91ciBsZXMgY3JpdGlxdWVzXHJcbiAgICAgICAgICAgIGlmIChldmVudC5pc19jcml0KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudENsYXNzICs9ICcgZXZlbnQtY3JpdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZvcm1hdGFnZSBkdSBtb250YW50IHMnaWwgZXhpc3RlXHJcbiAgICAgICAgICAgIGxldCBhbW91bnRUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbW91bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudFRleHQgPSBgICgke2V2ZW50LmFtb3VudH0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnRzSFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtldmVudENsYXNzfVwiIGRhdGEtZXZlbnQtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHtldmVudEljb259XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXZlbnQtYWN0b3JcIj4ke2V2ZW50LmFjdG9yX25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJldmVudC10aW1lXCI+JHtldmVudC5jcmVhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtldmVudC50YXJnZXRfbmFtZX0ke2Ftb3VudFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2V2ZW50LmlzX2NyaXQgPyAnIDxzcGFuIGNsYXNzPVwiY3JpdC1pbmRpY2F0b3JcIj5DUklUSVFVRSE8L3NwYW4+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBldmVudHNIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWF0Y2hSZWNhcCgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZWNhcC1tb2RhbCcpO1xyXG4gICAgICAgIGlmIChtb2RhbCkge1xyXG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVNYXRjaFJlY2FwKG1hdGNoSWQpIHtcclxuICAgICAgICAvLyBDb3BpZXIgbGUgbGllbiB2ZXJzIGxlIHByZXNzZS1wYXBpZXJcclxuICAgICAgICBjb25zdCBzaGFyZVVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L21hdGNoLyR7bWF0Y2hJZH0vcmVjYXBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNoYXJlVXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignTGllbiBkZSBwYXJ0YWdlIGNvcGnDqSAhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgbG9ycyBkZSBsYSBjb3BpZScsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBwb3VyIGxlcyBuYXZpZ2F0ZXVycyBwbHVzIGFuY2llbnNcclxuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICB0ZXh0QXJlYS52YWx1ZSA9IHNoYXJlVXJsO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdMaWVuIGRlIHBhcnRhZ2UgY29wacOpICEnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbignRXJyZXVyIGxvcnMgZGUgbGEgY29waWUnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQXR0ZW5kcmUgdW4gcGV1IHF1ZSBsZSBET00gc29pdCBjb21wbMOodGVtZW50IGNoYXJnw6lcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZUludGVyZmFjZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1pbnRlcmZhY2UnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ8OJbMOpbWVudCBnYW1lLWludGVyZmFjZSB0cm91dsOpOicsIGdhbWVJbnRlcmZhY2VFbGVtZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChnYW1lSW50ZXJmYWNlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdhbWVJbnRlcmZhY2UgPSBuZXcgR2FtZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyBJbnRlcmZhY2UgZGUgamV1IFNhbnRvbnMgU2NyaXB0IFRhY3RpY3MgaW5pdGlhbGlzw6llJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW5zdGFuY2UgY3LDqcOpZTonLCB3aW5kb3cuZ2FtZUludGVyZmFjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyDDiWzDqW1lbnQgLmdhbWUtaW50ZXJmYWNlIG5vbiB0cm91dsOpIGRhbnMgbGUgRE9NJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpZXIgbCdpbnN0YW5jZSBxdWFuZCBtw6ptZSBwb3VyIGxlcyBmb25jdGlvbnMgZ2xvYmFsZXNcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lSW50ZXJmYWNlID0gbmV3IEdhbWVJbnRlcmZhY2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnN0YW5jZSBjcsOpw6llIHNhbnMgdsOpcmlmaWNhdGlvbiBET00nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdpbml0aWFsaXNhdGlvbiBkZSBsXFwnaW50ZXJmYWNlIGRlIGpldTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pOyIsIi8vID09PT09PT09PT09PT09PSBHVUlERSBERSBHVUlMREUgLSBTQU5UT05TIFNDUklQVCBUQUNUSUNTID09PT09PT09PT09PT09PVxyXG5cclxuY2xhc3MgR3VpbGRHdWlkZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHdWlsZEltYWdlID0gMTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ3dlbGNvbWUnO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VzZXJTdGF0dXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVHdWlkZUludGVyZmFjZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0SW1hZ2VSb3RhdGlvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2luaXRpYWxpc2F0aW9uIGR1IGd1aWRlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVc2VyU3RhdHVzKCkge1xyXG4gICAgICAgIC8vIFV0aWxpc2VyIGxlcyBpbmZvcm1hdGlvbnMgcGFzc8OpZXMgZGVwdWlzIFR3aWdcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB3aW5kb3cudXNlckluZm8uaXNMb2dnZWRJbjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSB3aW5kb3cudXNlckluZm8udXNlcm5hbWUgfHwgJ0pvdWV1cic7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RhdHV0IHV0aWxpc2F0ZXVyOicsIHRoaXMuaXNMb2dnZWRJbiA/IGBDb25uZWN0w6kgLSAke3RoaXMudXNlck5hbWV9YCA6ICdOb24gY29ubmVjdMOpJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdy51c2VySW5mbyBub24gZGlzcG9uaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsYSB2w6lyaWZpY2F0aW9uIGR1IHN0YXR1dCB1dGlsaXNhdGV1cjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUd1aWRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGNvbnN0IGd1aWRlSFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aWxkLWd1aWRlLWNvbnRhaW5lclwiIGlkPVwiZ3VpbGQtZ3VpZGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1hdmF0YXJcIiBpZD1cImd1aWxkLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2d1aWxkMS5wbmdcIiBhbHQ9XCJHdWlkZSBkZSBHdWlsZGVcIiBpZD1cImd1aWxkLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJndWlsZC1kaWFsb2d1ZS1ib3hcIiBpZD1cImd1aWxkLWRpYWxvZ3VlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS10ZXh0XCIgaWQ9XCJkaWFsb2d1ZS10ZXh0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2d1ZS1idXR0b25zXCIgaWQ9XCJkaWFsb2d1ZS1idXR0b25zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWNsb3NlXCIgaWQ9XCJkaWFsb2d1ZS1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZ3VpZGVIVE1MKTtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1aWxkLWF2YXRhcicpO1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2d1ZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1jbG9zZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF2YXRhcikge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZ3VlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNsb3NlQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9ndWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBOZSBmZXJtZXIgcXVlIHNpIGxlIGNsaWMgZXN0IHZyYWltZW50IMOgIGwnZXh0w6lyaWV1ciBFVCBxdWUgY2Ugbidlc3QgcGFzIHVuIGJvdXRvbiBkdSBkaWFsb2d1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZ3VlQm94ICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICFkaWFsb2d1ZUJveC5jb250YWlucyhlLnRhcmdldCkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgIWF2YXRhcj8uY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlhbG9ndWUtYnRuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRGlhbG9ndWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYXR0YWNoZW1lbnQgZGVzIMOpdsOpbmVtZW50cyBHdWlsZCBHdWlkZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0SW1hZ2VSb3RhdGlvbigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWFsb2d1ZVN0YXRlICE9PSAncmVzcG9uc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpbGRJbWFnZSA9ICh0aGlzLmN1cnJlbnRHdWlsZEltYWdlICUgMykgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBgaW1hZ2VzL2d1aWxkJHt0aGlzLmN1cnJlbnRHdWlsZEltYWdlfS5wbmdgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbGEgcm90YXRpb24gZFxcJ2ltYWdlczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlhbG9ndWUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtZGlhbG9ndWUnKTtcclxuICAgICAgICAgICAgaWYgKGRpYWxvZ3VlQm94KSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93V2VsY29tZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ291dmVydHVyZSBkdSBkaWFsb2d1ZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGlhbG9ndWUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9ndWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpbGQtZGlhbG9ndWUnKTtcclxuICAgICAgICAgICAgaWYgKGRpYWxvZ3VlQm94KSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ3dlbGNvbWUnO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbGEgZmVybWV0dXJlIGR1IGRpYWxvZ3VlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dlbGNvbWVNZXNzYWdlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8cD5Cb25qb3VyIG5vYmxlIMOpdHJhbmdlciwgYmllbnZlbnVlIGF1IDxzdHJvbmc+U2FudG9ucyBTY3JpcHQgVGFjdGljczwvc3Ryb25nPiAhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyw6lleiB2b3RyZSDDqXF1aXBlIGRlIDMgaMOpcm9zIGV0IGFmZnJvbnRleiBkJ2F1dHJlcyBqb3VldXJzIGRhbnMgZGVzIGNvbWJhdHMgdGFjdGlxdWVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Qb3VyIGNvbW1lbmNlciB2b3RyZSBhdmVudHVyZSA6PC9wPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuIHByaW1hcnlcIiBvbmNsaWNrPVwid2luZG93LmxvY2F0aW9uLmhyZWY9Jy9yZWdpc3RlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1wbHVzXCI+PC9pPiBTJ2luc2NyaXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBzZWNvbmRhcnlcIiBvbmNsaWNrPVwid2luZG93LmxvY2F0aW9uLmhyZWY9Jy9sb2dpbidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+IFNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRleHRFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Qm9uam91ciA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICR7d2luZG93LnVzZXJJbmZvLnVzZXJuYW1lQ29sb3IgfHwgJyM4YjNhM2EnfVwiPiR7dGhpcy51c2VyTmFtZX08L3N0cm9uZz4sIHF1ZWxsZSBlc3Qgdm90cmUgZGVtYW5kZSA/PC9wPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93R2FtZXBsYXlIZWxwKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZ2FtZXBhZFwiPjwvaT4gQ29tbWVudCBKb3VlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dDaGFyYWN0ZXJSb2xlcygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXJzXCI+PC9pPiBSw7RsZXMgZGVzIFBlcnNvbm5hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1RlYW1TdHJhdGVneSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXNzXCI+PC9pPiBTdHJhdMOpZ2llcyBkJ8OJcXVpcGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VycmV1ciBsb3JzIGRlIGxcXCdhZmZpY2hhZ2UgZHUgbWVzc2FnZSBkZSBiaWVudmVudWU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93R2FtZXBsYXlIZWxwKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWwuaW5uZXJIVE1MID0gYDxwPkNob2lzaXNzZXogY2UgcXVlIHZvdXMgc291aGFpdGV6IGFwcHJlbmRyZSA6PC9wPmA7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1RlYW1DcmVhdGlvbigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+IENyw6llciB2b3RyZSDDiXF1aXBlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dGaW5kQmF0dGxlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+IFJlY2hlcmNoZXIgdW4gQ29tYmF0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dBdXRvQmF0dGxlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9pPiBDb21iYXQgQXV0b21hdGlxdWVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93V2VsY29tZU1lc3NhZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGRlIGxcXCdhaWRlIGdhbWVwbGF5OicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NoYXJhY3RlclJvbGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlLWJ1dHRvbnMnKTtcclxuXHJcbiAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8cD5Ew6ljb3V2cmV6IGxlcyBkaWZmw6lyZW50cyByw7RsZXMgZGUgdm9zIGjDqXJvcyA6PC9wPmA7XHJcblxyXG4gICAgICAgIGJ1dHRvbnNFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dUYW5rUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaGllbGQtYWx0XCI+PC9pPiBUYW5rXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93RFBTUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zd29yZFwiPjwvaT4gRFBTXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGlhbG9ndWUtYnRuXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93SGVhbGVyUm9sZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT4gU29pZ25ldXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG4gYmFja1wiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd1dlbGNvbWVNZXNzYWdlKClcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUZWFtQ3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsZWRSZXNwb25zZShcclxuICAgICAgICAgICAgXCJDcsOpYXRpb24gZCfDiXF1aXBlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkZvcm1lciB2b3RyZSDDqXF1aXBlIHBhcmZhaXRlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5DaG9pc2lzc2V6IDxzdHJvbmc+MyBwZXJzb25uYWdlczwvc3Ryb25nPiBjb21wbMOpbWVudGFpcmVzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT7DiXF1aWxpYnJleiBUYW5rLCBEUFMgZXQgU29pZ25ldXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNvbnN1bHRleiBsZXMgc3RhdGlzdGlxdWVzIHRvdGFsZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlRlc3RleiBkaWZmw6lyZW50ZXMgY29tYmluYWlzb25zPC9saT5cclxuICAgICAgICAgICAgPC91bD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmluZEJhdHRsZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlJlY2hlcmNoZSBkZSBDb21iYXRcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+VHJvdXZlciBkZXMgYWR2ZXJzYWlyZXMgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlZvdHJlIMOpcXVpcGUgZG9pdCDDqnRyZSBjb21wbMOodGUgKDMgaMOpcm9zKTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGUgc3lzdMOobWUgdHJvdXZlIHVuIGFkdmVyc2FpcmUgw6lxdWl0YWJsZTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+QXR0ZW5kZXogbGEgY29uZmlybWF0aW9uIGRlIG1hdGNoPC9saT5cclxuICAgICAgICAgICAgPC91bD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGV0YWlsZWRSZXNwb25zZSh0aXRsZSwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9ndWVTdGF0ZSA9ICdyZXNwb25zZSc7XHJcbiAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1pbWcnKTtcclxuICAgICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpbWdFbGVtZW50LnNyYyA9ICdpbWFnZXMvZ3VpbGQ0LnBuZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUtdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0RWwpIHtcclxuICAgICAgICAgICAgdGV4dEVsLmlubmVySFRNTCA9IGA8aDM+JHt0aXRsZX08L2gzPiR7Y29udGVudH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvbnNFbCkge1xyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5yZXR1cm5Ub1ByZXZpb3VzTWVudSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvaT4gUmV0b3VyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuVG9QcmV2aW91c01lbnUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2d1ZVN0YXRlID0gJ21lbnUnO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlsZEltYWdlID0gMTtcclxuICAgICAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWlsZC1pbWcnKTtcclxuICAgICAgICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gYGltYWdlcy9ndWlsZCR7dGhpcy5jdXJyZW50R3VpbGRJbWFnZX0ucG5nYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3dXZWxjb21lTWVzc2FnZSgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZHUgcmV0b3VyIGF1IG1lbnUgcHLDqWPDqWRlbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93VGVhbVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS10ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZS1idXR0b25zJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRFbCB8fCAhYnV0dG9uc0VsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWwuaW5uZXJIVE1MID0gYDxwPkNob2lzaXNzZXogbGUgdHlwZSBkZSBzdHJhdMOpZ2llIMOgIGFwcHJlbmRyZSA6PC9wPmA7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0blwiIG9uY2xpY2s9XCJldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgd2luZG93Lmd1aWxkR3VpZGUuc2hvd0JhbGFuY2VkU3RyYXRlZ3koKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+IMOJcXVpcGUgw4lxdWlsaWJyw6llXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dBZ2dyZXNzaXZlU3RyYXRlZ3koKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpcmVcIj48L2k+IFN0cmF0w6lnaWUgQWdyZXNzaXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkaWFsb2d1ZS1idG5cIiBvbmNsaWNrPVwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHdpbmRvdy5ndWlsZEd1aWRlLnNob3dEZWZlbnNpdmVTdHJhdGVneSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2hpZWxkXCI+PC9pPiBTdHJhdMOpZ2llIETDqWZlbnNpdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRpYWxvZ3VlLWJ0biBiYWNrXCIgb25jbGljaz1cImV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB3aW5kb3cuZ3VpbGRHdWlkZS5zaG93V2VsY29tZU1lc3NhZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG91clxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnYWZmaWNoYWdlIGRlcyBzdHJhdMOpZ2llcyBkXFwnw6lxdWlwZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dCYWxhbmNlZFN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiw4lxdWlwZSDDiXF1aWxpYnLDqWVcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGEgY29tcG9zaXRpb24gY2xhc3NpcXVlIDo8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgVGFuazwvc3Ryb25nPiAtIEFic29yYmUgbGVzIGTDqWfDonRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgRFBTPC9zdHJvbmc+IC0gSW5mbGlnZSBsZXMgZMOpZ8OidHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MSBTb2lnbmV1cjwvc3Ryb25nPiAtIE1haW50aWVudCBsJ8OpcXVpcGUgZW4gdmllPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+Q2V0dGUgY29tcG9zaXRpb24gb2ZmcmUgdW5lIGJvbm5lIHBvbHl2YWxlbmNlIHBvdXIgdG91cyB0eXBlcyBkJ2FkdmVyc2FpcmVzLjwvcD5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWdncmVzc2l2ZVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiU3RyYXTDqWdpZSBBZ3Jlc3NpdmVcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TWF4aW11bSBkZSBkw6lnw6J0cyA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4yIERQUzwvc3Ryb25nPiAtIERvdWJsZSBwdWlzc2FuY2UgZCdhdHRhcXVlPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjEgVGFuazwvc3Ryb25nPiAtIFByb3RlY3Rpb24gbWluaW1hbGU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5JZMOpYWwgY29udHJlIGRlcyDDqXF1aXBlcyBkw6lmZW5zaXZlcywgbWFpcyByaXNxdcOpIGZhY2Ugw6AgZCdhdXRyZXMgw6lxdWlwZXMgYWdyZXNzaXZlcy48L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RlZmVuc2l2ZVN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiU3RyYXTDqWdpZSBEw6lmZW5zaXZlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPlN1cnZpZSBtYXhpbWFsZSA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz4xIFRhbms8L3N0cm9uZz4gLSBQcm90ZWN0aW9uIHByaW5jaXBhbGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+MiBTb2lnbmV1cnM8L3N0cm9uZz4gLSBSw6ljdXDDqXJhdGlvbiBjb25zdGFudGU8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5QYXJmYWl0IHBvdXIgc3Vydml2cmUgYXV4IMOpcXVpcGVzIGFncmVzc2l2ZXMgZXQgZ2FnbmVyIHBhciBlbmR1cmFuY2UuPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUYW5rUm9sZSgpIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxlZFJlc3BvbnNlKFxyXG4gICAgICAgICAgICBcIlLDtGxlIFRhbmtcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGUgcHJvdGVjdGV1ciBkZSBsJ8OpcXVpcGUgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UG9pbnRzIGRlIFZpZSDDqWxldsOpczwvc3Ryb25nPiAtIEVuY2Fpc3NlIGxlcyBkw6lnw6J0czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Ew6lmZW5zZSDDqWxldsOpZTwvc3Ryb25nPiAtIFLDqWR1aXQgbGVzIGTDqWfDonRzIHJlw6d1czwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Db21ww6l0ZW5jZXMgZMOpZmVuc2l2ZXM8L3N0cm9uZz4gLSBQcm90w6hnZSBsZXMgYWxsacOpczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPlBsYWNleiB0b3Vqb3VycyB2b3RyZSBUYW5rIGVuIHByZW1pw6hyZSBsaWduZSAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEUFNSb2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiUsO0bGUgRFBTXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkxlIGRlc3RydWN0ZXVyIGQnZW5uZW1pcyA6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5BdHRhcXVlIMOpbGV2w6llPC9zdHJvbmc+IC0gSW5mbGlnZSBkZSBncm9zIGTDqWfDonRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlZpdGVzc2Ugw6lsZXbDqWU8L3N0cm9uZz4gLSBGcmFwcGUgZW4gcHJlbWllcjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Db21ww6l0ZW5jZXMgb2ZmZW5zaXZlczwvc3Ryb25nPiAtIMOJbGltaW5hdGlvbnMgcmFwaWRlczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxwPkxlIERQUyBkb2l0IGNpYmxlciBsZXMgZW5uZW1pcyBsZXMgcGx1cyBkYW5nZXJldXggZW4gcHJlbWllciAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIZWFsZXJSb2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiUsO0bGUgU29pZ25ldXJcIixcclxuICAgICAgICAgICAgYDxwPjxzdHJvbmc+TGUgc291dGllbiBkZSBsJ8OpcXVpcGUgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q29tcMOpdGVuY2VzIGRlIHNvaW48L3N0cm9uZz4gLSBSZXN0YXVyZSBsZXMgUFY8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+QnVmZnMgZCfDqXF1aXBlPC9zdHJvbmc+IC0gQW3DqWxpb3JlIGxlcyBhbGxpw6lzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPk1hZ2llIMOpbGV2w6llPC9zdHJvbmc+IC0gU29pbnMgcGx1cyBwdWlzc2FudHM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8cD5MZSBTb2lnbmV1ciBkb2l0IHJlc3RlciBlbiBzw6ljdXJpdMOpIGRlcnJpw6hyZSBsYSBsaWduZSBkZSBmcm9udCAhPC9wPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBdXRvQmF0dGxlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbGVkUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIFwiQ29tYmF0IEF1dG9tYXRpcXVlXCIsXHJcbiAgICAgICAgICAgIGA8cD48c3Ryb25nPkNvbW1lbnQgZm9uY3Rpb25uZSBsZSBjb21iYXQgOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPkxlcyBjb21iYXRzIHNvbnQgPHN0cm9uZz5hdXRvbWF0aXF1ZXM8L3N0cm9uZz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkJhc8OpcyBzdXIgbGVzIDxzdHJvbmc+c3RhdGlzdGlxdWVzPC9zdHJvbmc+IGRlIHZvcyBow6lyb3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkNoYXF1ZSBwZXJzb25uYWdlIHV0aWxpc2Ugc2VzIDxzdHJvbmc+Y29tcMOpdGVuY2VzPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5MYSA8c3Ryb25nPnN0cmF0w6lnaWUgZCfDqXF1aXBlPC9zdHJvbmc+IGVzdCBpbXBvcnRhbnRlPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+Q29uY2VudHJlei12b3VzIHN1ciBsYSBmb3JtYXRpb24gZXQgbCfDqXF1aXBlbWVudCBkZSB2b3RyZSDDqXF1aXBlICE8L3A+YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpc2F0aW9uXHJcbndpbmRvdy5ndWlsZEd1aWRlID0gbnVsbDtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cuZ3VpbGRHdWlkZSA9IG5ldyBHdWlsZEd1aWRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfj7AgR3VpZGUgZGUgZ3VpbGRlIGluaXRpYWxpc8OpJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJyZXVyIGxvcnMgZGUgbFxcJ2luaXRpYWxpc2F0aW9uIGR1IGd1aWRlIGRlIGd1aWxkZTonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBWYXJpYWJsZXMgZ2xvYmFsZXMgcG91ciBsZSBtYXRjaG1ha2luZ1xyXG5sZXQgc3RhdHVzQ2hlY2tJbnRlcnZhbDtcclxubGV0IG1hdGNobWFraW5nID0ge1xyXG4gICAgaW5RdWV1ZTogZmFsc2UsXHJcbiAgICB0ZWFtSWQ6IG51bGxcclxufTtcclxuXHJcbi8vIEluaXRpYWxpc2VyIGxlIHN5c3TDqG1lIGF1IGNoYXJnZW1lbnQgZGUgbGEgcGFnZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpbml0aWFsaXplTWF0Y2htYWtpbmcoKTtcclxuICAgIGNoZWNrQ3VycmVudFN0YXR1cygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVNYXRjaG1ha2luZygpIHtcclxuICAgIC8vIEJvdXRvbiBkZSByZWNoZXJjaGUgZGUgbWF0Y2hcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmF0dGxlLWJ0bicpO1xyXG4gICAgaWYgKHNlYXJjaEJ0bikge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBqb2luTWF0Y2htYWtpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb3V0b24gZCdhbm51bGF0aW9uXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLXF1ZXVlJyk7XHJcbiAgICBpZiAoY2FuY2VsQnRuKSB7XHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNhbmNlbE1hdGNobWFraW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQm91dG9uIHJldG91ciDDoCBsYSByZWNoZXJjaGVcclxuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay10by1zZWFyY2gnKTtcclxuICAgIGlmIChiYWNrQnRuKSB7XHJcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXNldFRvU2VhcmNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpvaW5NYXRjaG1ha2luZygpIHtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmF0dGxlLWJ0bicpO1xyXG4gICAgY29uc3QgdGVhbUlkID0gc2VhcmNoQnRuPy5kYXRhc2V0LnRlYW1JZCB8fCAnMSc7IC8vIFZhbGV1ciBwYXIgZMOpZmF1dFxyXG4gICAgXHJcbiAgICAvLyBEw6lzYWN0aXZlciBsZSBib3V0b24gcGVuZGFudCBsYSByZXF1w6p0ZVxyXG4gICAgaWYgKHNlYXJjaEJ0bikge1xyXG4gICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2VhcmNoQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IENvbm5leGlvbi4uLic7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvam9pbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRlYW1faWQ6IHBhcnNlSW50KHRlYW1JZCkgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy50ZWFtSWQgPSB0ZWFtSWQ7XHJcbiAgICAgICAgICAgIHNob3dNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG4gICAgICAgICAgICBzdGFydFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvciB8fCAnRXJyZXVyIGxvcnMgZGUgbGEgcmVjaGVyY2hlIGRlIG1hdGNoJyk7XHJcbiAgICAgICAgICAgIHJlc2V0U2VhcmNoQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKTtcclxuICAgICAgICBhbGVydCgnRXJyZXVyIGRlIGNvbm5leGlvbicpO1xyXG4gICAgICAgIHJlc2V0U2VhcmNoQnV0dG9uKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsTWF0Y2htYWtpbmcoKSB7XHJcbiAgICBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy9jYW5jZWwnLCB7IG1ldGhvZDogJ1BPU1QnIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaGlkZU1hdGNobWFraW5nU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIHN0b3BTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdhbm51bGF0aW9uOicsIGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFNlYXJjaEJ1dHRvbigpIHtcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmF0dGxlLWJ0bicpO1xyXG4gICAgaWYgKHNlYXJjaEJ0bikge1xyXG4gICAgICAgIC8vIE5lIHBsdXMgZm9yY2VyIGwnYWN0aXZhdGlvbiAtIGxhaXNzZXIgdGVhbS1tYW5hZ2VtZW50LmpzIGfDqXJlciBsJ8OpdGF0XHJcbiAgICAgICAgc2VhcmNoQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+IFJlY2hlcmNoZXIgdW4gTWF0Y2gnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIHVuZSBpbnN0YW5jZSBkZSBUZWFtTWFuYWdlbWVudCBleGlzdGUsIGxhaXNzZXIgdXBkYXRlQmF0dGxlVGFiKCkgZ8OpcmVyIGwnw6l0YXRcclxuICAgICAgICBpZiAod2luZG93LnRlYW1NYW5hZ2VtZW50ICYmIHR5cGVvZiB3aW5kb3cudGVhbU1hbmFnZW1lbnQudXBkYXRlQmF0dGxlVGFiID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50ZWFtTWFuYWdlbWVudC51cGRhdGVCYXR0bGVUYWIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTaW5vbiB2w6lyaWZpZXIgbWFudWVsbGVtZW50IGxlIG5vbWJyZSBkZSBwZXJzb25uYWdlc1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtU2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItc2xvdC5vY2N1cGllZCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHRlYW1TaXplIDwgMykge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TWF0Y2htYWtpbmdTdGF0dXMoKSB7XHJcbiAgICBjb25zdCB0ZWFtU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0tc2VsZWN0aW9uJyk7XHJcbiAgICBjb25zdCBtYXRjaG1ha2luZ1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaG1ha2luZy1zdGF0dXMnKTtcclxuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLXJlc3VsdCcpO1xyXG4gICAgXHJcbiAgICBpZiAodGVhbVNlbGVjdGlvbikgdGVhbVNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWYgKG1hdGNobWFraW5nU3RhdHVzKSBtYXRjaG1ha2luZ1N0YXR1cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGlmIChtYXRjaFJlc3VsdCkgbWF0Y2hSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZU1hdGNobWFraW5nU3RhdHVzKCkge1xyXG4gICAgY29uc3QgdGVhbVNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLXNlbGVjdGlvbicpO1xyXG4gICAgY29uc3QgbWF0Y2htYWtpbmdTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0Y2htYWtpbmctc3RhdHVzJyk7XHJcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1yZXN1bHQnKTtcclxuICAgIFxyXG4gICAgaWYgKHRlYW1TZWxlY3Rpb24pIHRlYW1TZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBpZiAobWF0Y2htYWtpbmdTdGF0dXMpIG1hdGNobWFraW5nU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpZiAobWF0Y2hSZXN1bHQpIG1hdGNoUmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZXNldFNlYXJjaEJ1dHRvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TWF0Y2hSZXN1bHQocmVzdWx0KSB7XHJcbiAgICBjb25zdCB0ZWFtU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0tc2VsZWN0aW9uJyk7XHJcbiAgICBjb25zdCBtYXRjaG1ha2luZ1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaG1ha2luZy1zdGF0dXMnKTtcclxuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLXJlc3VsdCcpO1xyXG4gICAgXHJcbiAgICBpZiAodGVhbVNlbGVjdGlvbikgdGVhbVNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWYgKG1hdGNobWFraW5nU3RhdHVzKSBtYXRjaG1ha2luZ1N0YXR1cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWYgKG1hdGNoUmVzdWx0KSBtYXRjaFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQtY29udGVudCcpO1xyXG4gICAgY29uc3QgcmVzdWx0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXRpdGxlJyk7XHJcbiAgICBcclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGlzV2lubmVyID0gcmVzdWx0Lndpbm5lcl90ZWFtX2lkID09IG1hdGNobWFraW5nLnRlYW1JZDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocmVzdWx0VGl0bGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0VGl0bGUudGV4dENvbnRlbnQgPSAn4pqU77iPIENPTUJBVCBURVJNSU7DiSAhJztcclxuICAgICAgICAgICAgcmVzdWx0VGl0bGUuY2xhc3NOYW1lID0gJ3RleHQtaW5mbyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3VsdENvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNhcmQgY29tcGxldGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0Y2gtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+Vm90cmUgw6lxdWlwZTo8L3N0cm9uZz4gJHtyZXN1bHQudGVhbTFfcG93ZXIgfHwgJ04vQSd9IHB0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPsOJcXVpcGUgYWR2ZXJzZTo8L3N0cm9uZz4gJHtyZXN1bHQudGVhbTJfcG93ZXIgfHwgJ04vQSd9IHB0czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkR1csOpZTo8L3N0cm9uZz4gJHtyZXN1bHQuZHVyYXRpb24gfHwgJ04vQSd9IHJvdW5kczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1hdGNoLWNvbXBsZXRlZC1tZXNzYWdlXCI+TGUgY29tYmF0IHMnZXN0IGTDqXJvdWzDqSAhIFZvdWxlei12b3VzIHZvaXIgbGUgZMOpcm91bGVtZW50ID88L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXRjaC1hY3Rpb25zLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvbWJhdC12aWV3XCIgb25jbGljaz1cImdhbWVJbnRlcmZhY2Uuc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24oJHtyZXN1bHQubWF0Y2hfaWR9KVwiIHRpdGxlPVwiVm9pciBsZSBjb21iYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGxheS1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZvaXIgbGUgQ29tYmF0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW5ldy1tYXRjaFwiIG9uY2xpY2s9XCJyZXNldFRvU2VhcmNoKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcmVkb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm91dmVhdSBDb21iYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRUb1NlYXJjaCgpIHtcclxuICAgIG1hdGNobWFraW5nLmluUXVldWUgPSBmYWxzZTtcclxuICAgIGhpZGVNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFN0YXR1c0NoZWNrKCkge1xyXG4gICAgc3RhdHVzQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGNoZWNrU3RhdHVzLCAyMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcFN0YXR1c0NoZWNrKCkge1xyXG4gICAgaWYgKHN0YXR1c0NoZWNrSW50ZXJ2YWwpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHN0YXR1c0NoZWNrSW50ZXJ2YWwpO1xyXG4gICAgICAgIHN0YXR1c0NoZWNrSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1N0YXR1cygpIHtcclxuICAgIGZldGNoKCcvYXBpL21hdGNobWFraW5nL3N0YXR1cycpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICB1cGRhdGVTdGF0dXNEaXNwbGF5KGRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ01BVENIX1JFU1VMVF9QRU5ESU5HJykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0b3BTdGF0dXNDaGVjaygpO1xyXG4gICAgICAgICAgICBzaG93Q29tYmF0UGVuZGluZ1Jlc3VsdChkYXRhLm1hdGNoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnTUFUQ0hfRk9VTkQnKSB7XHJcbiAgICAgICAgICAgIG1hdGNobWFraW5nLmluUXVldWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RvcFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgICAgIHNob3dNYXRjaFJlc3VsdChkYXRhLm1hdGNoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnTk9UX0lOX1FVRVVFJykge1xyXG4gICAgICAgICAgICBtYXRjaG1ha2luZy5pblF1ZXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGhpZGVNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG4gICAgICAgICAgICBzdG9wU3RhdHVzQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSB2w6lyaWZpY2F0aW9uIGR1IHN0YXR1dDonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhdHVzRGlzcGxheShkYXRhKSB7XHJcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy10ZXh0Jyk7XHJcbiAgICBjb25zdCB3YWl0aW5nVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0aW5nLXRpbWUnKTtcclxuICAgIGNvbnN0IHBsYXllcnNJblF1ZXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnMtaW4tcXVldWUnKTtcclxuICAgIFxyXG4gICAgaWYgKHN0YXR1c1RleHQpIHtcclxuICAgICAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gZGF0YS5zdGF0dXMgPT09ICdTRUFSQ0hJTkcnID8gJ1JlY2hlcmNoZSBlbiBjb3Vycy4uLicgOiAnRW4gYXR0ZW50ZS4uLic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh3YWl0aW5nVGltZSAmJiBkYXRhLndhaXRpbmdfdGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FpdGluZ1RpbWUudGV4dENvbnRlbnQgPSBgVGVtcHMgZCdhdHRlbnRlOiAke2RhdGEud2FpdGluZ190aW1lfSBzZWNvbmRlc2A7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwbGF5ZXJzSW5RdWV1ZSAmJiBkYXRhLnBsYXllcnNfaW5fcXVldWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBsYXllcnNJblF1ZXVlLnRleHRDb250ZW50ID0gYEpvdWV1cnMgZW4gZmlsZTogJHtkYXRhLnBsYXllcnNfaW5fcXVldWV9YDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDdXJyZW50U3RhdHVzKCkge1xyXG4gICAgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvc3RhdHVzJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ1NFQVJDSElORycpIHtcclxuICAgICAgICAgICAgbWF0Y2htYWtpbmcuaW5RdWV1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNob3dNYXRjaG1ha2luZ1N0YXR1cygpO1xyXG4gICAgICAgICAgICBzdGFydFN0YXR1c0NoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgdsOpcmlmaWNhdGlvbiBkdSBzdGF0dXQgaW5pdGlhbDonLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gTm91dmVsbGUgZm9uY3Rpb24gcG91ciBhZmZpY2hlciB1biBtYXRjaCBlbiBhdHRlbnRlIGRlIHZpc3VhbGlzYXRpb25cclxuZnVuY3Rpb24gc2hvd0NvbWJhdFBlbmRpbmdSZXN1bHQobWF0Y2hEYXRhKSB7XHJcbiAgICBoaWRlTWF0Y2htYWtpbmdTdGF0dXMoKTtcclxuICAgIFxyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gJ2NvbWJhdC1wZW5kaW5nLW5vdGlmaWNhdGlvbic7XHJcbiAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZW5kaW5nLWNvbWJhdC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZW5kaW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPuKalO+4jyBDb21iYXQgVGVybWluw6kgITwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5Wb3RyZSBjb21iYXQgdmllbnQgZGUgc2UgdGVybWluZXIuIFZvdWxlei12b3VzIHZvaXIgY2UgcXVpIHMnZXN0IHBhc3PDqSA/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlbmRpbmctYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi12aWV3LWNvbWJhdFwiIG9uY2xpY2s9XCJ2aWV3Q29tYmF0VmlzdWFsaXphdGlvbigke21hdGNoRGF0YS5pZH0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPiBWb2lyIGxlIENvbWJhdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXNraXAtY29tYmF0XCIgb25jbGljaz1cInNraXBDb21iYXRWaXN1YWxpemF0aW9uKCR7bWF0Y2hEYXRhLmlkfSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1mb3J3YXJkXCI+PC9pPiBQYXNzZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufVxyXG5cclxuLy8gRXhwb3NpdGlvbiBkZXMgZm9uY3Rpb25zIGdsb2JhbGVzXHJcbndpbmRvdy52aWV3Q29tYmF0VmlzdWFsaXphdGlvbiA9IHZpZXdDb21iYXRWaXN1YWxpemF0aW9uO1xyXG53aW5kb3cuc2tpcENvbWJhdFZpc3VhbGl6YXRpb24gPSBza2lwQ29tYmF0VmlzdWFsaXphdGlvbjtcclxuXHJcbi8vIEZvbmN0aW9uIHBvdXIgdm9pciBsYSB2aXN1YWxpc2F0aW9uIGR1IGNvbWJhdFxyXG5hc3luYyBmdW5jdGlvbiB2aWV3Q29tYmF0VmlzdWFsaXphdGlvbihtYXRjaElkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1hcnF1ZXIgbGUgY29tYmF0IGNvbW1lIHZpc3VhbGlzw6lcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9tYXRjaG1ha2luZy9tYXRjaC8ke21hdGNoSWR9L21hcmstdmlld2VkYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsYSBub3RpZmljYXRpb25cclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tYmF0LXBlbmRpbmctbm90aWZpY2F0aW9uJyk7XHJcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFmZmljaGVyIGxhIHZpc3VhbGlzYXRpb24gZHUgY29tYmF0XHJcbiAgICAgICAgaWYgKHdpbmRvdy5nYW1lSW50ZXJmYWNlICYmIHdpbmRvdy5nYW1lSW50ZXJmYWNlLnNob3dDb21iYXRWaXN1YWxpemF0aW9uKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5nYW1lSW50ZXJmYWNlLnNob3dDb21iYXRWaXN1YWxpemF0aW9uKG1hdGNoSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVyZmFjZSBkZSBqZXUgbm9uIGRpc3BvbmlibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHZpc3VhbGlzYXRpb24gZHUgY29tYmF0OicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRm9uY3Rpb24gcG91ciBwYXNzZXIgbGEgdmlzdWFsaXNhdGlvblxyXG5hc3luYyBmdW5jdGlvbiBza2lwQ29tYmF0VmlzdWFsaXphdGlvbihtYXRjaElkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1hcnF1ZXIgbGUgY29tYmF0IGNvbW1lIHZpc3VhbGlzw6lcclxuICAgICAgICBhd2FpdCBmZXRjaChgL2FwaS9tYXRjaG1ha2luZy9tYXRjaC8ke21hdGNoSWR9L21hcmstdmlld2VkYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsYSBub3RpZmljYXRpb25cclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tYmF0LXBlbmRpbmctbm90aWZpY2F0aW9uJyk7XHJcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9wdGlvbm5lbDogYWZmaWNoZXIgdW4gbWVzc2FnZSBzaW1wbGUgYXZlYyBsZSByw6lzdWx0YXRcclxuICAgICAgICBzaG93U2ltcGxlTWF0Y2hSZXN1bHQobWF0Y2hJZCk7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGR1IHBhc3NhZ2UgZHUgY29tYmF0OicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRm9uY3Rpb24gcG91ciBhZmZpY2hlciB1biByw6lzdWx0YXQgc2ltcGxlIHNhbnMgYW5pbWF0aW9uXHJcbmFzeW5jIGZ1bmN0aW9uIHNob3dTaW1wbGVNYXRjaFJlc3VsdChtYXRjaElkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbWF0Y2htYWtpbmcvbWF0Y2gvJHttYXRjaElkfWApO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciB1biBzaW1wbGUgbWVzc2FnZSBkZSByw6lzdWx0YXRcclxuICAgICAgICBjb25zdCByZXN1bHRNZXNzYWdlID0gbWF0Y2hEYXRhLmlzX3dpbm5lciA/IFxyXG4gICAgICAgICAgICAn8J+OiSBWaWN0b2lyZSAhIFZvdXMgYXZleiByZW1wb3J0w6kgY2UgY29tYmF0ICEnIDogXHJcbiAgICAgICAgICAgICfwn5iUIETDqWZhaXRlLi4uIFZvdXMgcG91cnJleiB2b3VzIHZlbmdlciBsYSBwcm9jaGFpbmUgZm9pcyAhJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgdW5lIG5vdGlmaWNhdGlvbiBzaW1wbGVcclxuICAgICAgICBpZiAod2luZG93LnNob3dOb3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgd2luZG93LnNob3dOb3RpZmljYXRpb24ocmVzdWx0TWVzc2FnZSwgbWF0Y2hEYXRhLmlzX3dpbm5lciA/ICdzdWNjZXNzJyA6ICdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2FmZmljaGFnZSBkdSByw6lzdWx0YXQgc2ltcGxlOicsIGVycm9yKTtcclxuICAgIH1cclxufSIsIi8vID09PT09PT09PT09PT09PSBTWVNUw4hNRSBERSBHRVNUSU9OIEQnw4lRVUlQRSAtIFNBTlRPTlMgU0NSSVBUIFRBQ1RJQ1MgPT09PT09PT09PT09PT09XHJcblxyXG5jbGFzcyBUZWFtTWFuYWdlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSAndGVhbSc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUZWFtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2xvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFRhYnMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRQbGF5ZXJUZWFtKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkQ2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBHRVNUSU9OIERFUyBPTkdMRVRTID09PT09PT09PT09PT09PVxyXG4gICAgc2V0dXBUYWJzKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWJ1dHRvbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJOYW1lID0gYnV0dG9uLmRhdGFzZXQudGFiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIodGFiTmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRhYih0YWJOYW1lKSB7XHJcbiAgICAgICAgLy8gRMOpc2FjdGl2ZXIgdG91cyBsZXMgb25nbGV0c1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItYnV0dG9uJykuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXBhbmVsJykuZm9yRWFjaChwYW5lbCA9PiBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWN0aXZlciBsJ29uZ2xldCBzw6lsZWN0aW9ubsOpXHJcbiAgICAgICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiPVwiJHt0YWJOYW1lfVwiXWApO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFiTmFtZX0tcGFuZWxgKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYWN0aXZlQnV0dG9uKSBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVBhbmVsKSBhY3RpdmVQYW5lbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWJOYW1lO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBBY3Rpb25zIHNww6ljaWZpcXVlcyBwYXIgb25nbGV0XHJcbiAgICAgICAgaWYgKHRhYk5hbWUgPT09ICdjaGFyYWN0ZXJzJykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWJOYW1lID09PSAnYmF0dGxlJykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gR0VTVElPTiBERSBMJ8OJUVVJUEUgPT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBsb2FkUGxheWVyVGVhbSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL3RlYW0nKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkUGxheWVyVGVhbSByZXNwb25zZTonLCBkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyVGVhbSA9IGRhdGEudGVhbTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUZWFtRGlzcGxheShkYXRhLmNoYXJhY3RlcnMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllclRlYW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB0ZWFtIGZvdW5kLCBjcmVhdGluZyBhdXRvbWF0aWNhbGx5Li4uJyk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlIGxcXCfDqXF1aXBlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlVGVhbUF1dG9tYXRpY2FsbHkoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9tYXRjaG1ha2luZy90ZWFtL2NyZWF0ZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclRlYW0gPSBkYXRhLnRlYW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ8OJcXVpcGUgY3LDqcOpZSBhdXRvbWF0aXF1ZW1lbnQgIScsICdzdWNjZXNzJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY3LDqWF0aW9uIGRcXCfDqXF1aXBlOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGVhbURpc3BsYXkodGVhbUNoYXJhY3RlcnMgPSBbXSkge1xyXG4gICAgICAgIGNvbnN0IHNsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1zbG90Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gdGVhbUNoYXJhY3RlcnNbaW5kZXhdIHx8IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gc2xvdC5xdWVyeVNlbGVjdG9yKCcuc2xvdC1wbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JHtjaGFyYWN0ZXIubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYXJhY3Rlci1yb2xlXCI+JHtjaGFyYWN0ZXIucm9sZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXItc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5IUDogJHtjaGFyYWN0ZXIuaHB9IHwgQVRLOiAke2NoYXJhY3Rlci5hdGt9IHwgREVGOiAke2NoYXJhY3Rlci5kZWZ9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtY2hhcmFjdGVyXCIgZGF0YS1jaGFyYWN0ZXItaWQ9XCIke2NoYXJhY3Rlci5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gw4l2w6luZW1lbnQgZGUgc3VwcHJlc3Npb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IHNsb3QucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jaGFyYWN0ZXInKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Iw6lyb3MgJHtpbmRleCArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIHNsb3QuY2xhc3NMaXN0LnJlbW92ZSgnb2NjdXBpZWQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gw4l2w6luZW1lbnQgZCdham91dFxyXG4gICAgICAgICAgICAgICAgc2xvdC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTbG90ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoJ2NoYXJhY3RlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oJ1PDqWxlY3Rpb25uZXogdW4gcGVyc29ubmFnZSDDoCBham91dGVyJywgJ2luZm8nKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGb3JjZXIgbGEgbWlzZSDDoCBqb3VyIGR1IGJvdXRvbiBiYXRhaWxsZSBhdmVjIHVuIGTDqWxhaSBwbHVzIGxvbmdcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gR0VTVElPTiBERVMgUEVSU09OTkFHRVMgPT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBsb2FkQ2hhcmFjdGVycygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL21hdGNobWFraW5nL2NoYXJhY3RlcnMnKTtcclxuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDaGFyYWN0ZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyBwZXJzb25uYWdlczonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlDaGFyYWN0ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFyYWN0ZXJzLWdyaWQnKTtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lciB8fCAhdGhpcy5hdmFpbGFibGVDaGFyYWN0ZXJzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZUNoYXJhY3RlcnMuZm9yRWFjaChjaGFyYWN0ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NoYXJhY3Rlci1jYXJkJztcclxuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcmFjdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke2NoYXJhY3Rlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItcm9sZSByb2xlLSR7Y2hhcmFjdGVyLnJvbGUudG9Mb3dlckNhc2UoKX1cIj4ke2NoYXJhY3Rlci5yb2xlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJhY3Rlci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7inaTvuI8gJHtjaGFyYWN0ZXIuaHB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7impTvuI8gJHtjaGFyYWN0ZXIuYXRrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+boe+4jyAke2NoYXJhY3Rlci5kZWZ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5KoICR7Y2hhcmFjdGVyLnNwZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCflKUgJHtjaGFyYWN0ZXIuY3JpdH0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5KaICR7Y2hhcmFjdGVyLmhlYWwgfHwgMH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtY2hhcmFjdGVyLWJ0blwiIGRhdGEtY2hhcmFjdGVyLWlkPVwiJHtjaGFyYWN0ZXIuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4gQWpvdXRlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDDiXbDqW5lbWVudCBkJ2Fqb3V0XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ0biA9IGNhcmQucXVlcnlTZWxlY3RvcignLmFkZC1jaGFyYWN0ZXItYnRuJyk7XHJcbiAgICAgICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hhcmFjdGVyKGNoYXJhY3Rlci5pZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZENoYXJhY3RlcihjaGFyYWN0ZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvdGVhbS9hZGQtY2hhcmFjdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhcmFjdGVyX2lkOiBjaGFyYWN0ZXJJZCB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGxheWVyVGVhbSgpOyAvLyBSZWNoYXJnZXIgbCfDqXF1aXBlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYigndGVhbScpOyAvLyBSZXRvdXJuZXIgw6AgbCdvbmdsZXQgw6lxdWlwZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBGb3JjZXIgbGEgbWlzZSDDoCBqb3VyIGR1IGJvdXRvbiBiYXRhaWxsZSBhcHLDqHMgdW4gZMOpbGFpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJhdHRsZVRhYigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbihkYXRhLmVycm9yLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBkdSBwZXJzb25uYWdlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKCdFcnJldXIgZGUgY29ubmV4aW9uJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZUNoYXJhY3RlcihjaGFyYWN0ZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbWF0Y2htYWtpbmcvdGVhbS9yZW1vdmUtY2hhcmFjdGVyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhcmFjdGVyX2lkOiBjaGFyYWN0ZXJJZCB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oZGF0YS5tZXNzYWdlLCAnaW5mbycpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGxheWVyVGVhbSgpOyAvLyBSZWNoYXJnZXIgbCfDqXF1aXBlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZvcmNlciBsYSBtaXNlIMOgIGpvdXIgZHUgYm91dG9uIGJhdGFpbGxlIGFwcsOocyB1biBkw6lsYWlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQmF0dGxlVGFiKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKGRhdGEuZXJyb3IsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24gZHUgcGVyc29ubmFnZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PSBDT01CQVQgPT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGVCYXR0bGVUYWIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXR0bGUtYnRuJyk7XHJcbiAgICAgICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlLXNlYXJjaCAuaW5mby10ZXh0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFzZWFyY2hCdG4gfHwgIWluZm9UZXh0KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29tcHRlciBsZXMgcGVyc29ubmFnZXMgZGFucyBsJ8OpcXVpcGVcclxuICAgICAgICBjb25zdCB0ZWFtU2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyYWN0ZXItc2xvdC5vY2N1cGllZCcpLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGVhbVNpemUgPT09IDMgJiYgdGhpcy5wbGF5ZXJUZWFtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFTkFCTElORyBCVVRUT046IHRlYW1TaXplPTMsIHBsYXllclRlYW0gZXhpc3RzJyk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLmRhdGFzZXQudGVhbUlkID0gdGhpcy5wbGF5ZXJUZWFtLmlkO1xyXG4gICAgICAgICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9ICdWb3RyZSDDqXF1aXBlIGVzdCBwcsOqdGUgISBUcm91dmV6IHVuIGFkdmVyc2FpcmUuJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0J1dHRvbiBzdGF0ZSBhZnRlciBlbmFibGluZzonLCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogc2VhcmNoQnRuLmRpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgaGFzRGlzYWJsZWRBdHRyOiBzZWFyY2hCdG4uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpLFxyXG4gICAgICAgICAgICAgICAgaGFzRGlzYWJsZWRDbGFzczogc2VhcmNoQnRuLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRElTQUJMSU5HIEJVVFRPTjogdGVhbVNpemU9JyArIHRlYW1TaXplICsgJywgaGFzUGxheWVyVGVhbT0nICsgISF0aGlzLnBsYXllclRlYW0pO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgc2VhcmNoQnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXllclRlYW0pIHtcclxuICAgICAgICAgICAgICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gJ0NoYXJnZW1lbnQgZGUgdm90cmUgw6lxdWlwZS4uLic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IGBBam91dGV6ICR7MyAtIHRlYW1TaXplfSBwZXJzb25uYWdlKHMpIHBvdXIgY29tbWVuY2VyYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT0gTk9USUZJQ0FUSU9OUyA9PT09PT09PT09PT09PT1cclxuICAgIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0ke3R5cGV9YDtcclxuICAgICAgICBub3RpZmljYXRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS0ke3RoaXMuZ2V0Tm90aWZpY2F0aW9uSWNvbih0eXBlKX1cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdHlsZXMgaW5saW5lIHBvdXIgYXNzdXJlciBsJ2FmZmljaGFnZVxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMjBweDsgcmlnaHQ6IDIwcHg7IHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDsgYm9yZGVyLXJhZGl1czogNXB4OyBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyMyOGE3NDUnIDogdHlwZSA9PT0gJ2Vycm9yJyA/ICcjZGMzNTQ1JyA6ICcjMTdhMmI4J307XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZCdlbnRyw6llXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBub3RpZmljYXRpb24uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknLCAxMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3VwcHJlc3Npb24gYXV0b21hdGlxdWVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDEwMCUpJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90aWZpY2F0aW9uSWNvbih0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogJ2NoZWNrLWNpcmNsZScsXHJcbiAgICAgICAgICAgICdlcnJvcic6ICd0aW1lcy1jaXJjbGUnLFxyXG4gICAgICAgICAgICAnaW5mbyc6ICdpbmZvLWNpcmNsZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpY29uc1t0eXBlXSB8fCAnaW5mby1jaXJjbGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXNhdGlvbiBhdXRvbWF0aXF1ZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtaW50ZXJmYWNlJykpIHtcclxuICAgICAgICB3aW5kb3cudGVhbU1hbmFnZW1lbnQgPSBuZXcgVGVhbU1hbmFnZW1lbnQoKTtcclxuXHJcbiAgICB9XHJcbn0pOyIsIi8vID09PT09PT09PT09PT09PSBTWVNUw4hNRSBERSBUSMOITUVTIC0gTcOJREnDiVZBTCAvIERZU1RPUElRVUUgPT09PT09PT09PT09PT09XHJcblxyXG5jbGFzcyBUaGVtZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaGVtZSA9ICdtZWRpZXZhbCc7IC8vIFBhciBkw6lmYXV0IG3DqWRpw6l2YWxcclxuICAgICAgICB0aGlzLnRoZW1lcyA9IHtcclxuICAgICAgICAgICAgbWVkaWV2YWw6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNw6lkacOpdmFsJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eE1lZGlldmFsL2NpbWV0acOocmUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4TWVkaWV2YWwvY291cnMgZHUgY2hhdGVhdS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvcGxhdGVhdXhNZWRpZXZhbC9wbGFjZSBkdSB2aWxsYWdlLnBuZydcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL2JhY2tncm91bmRNZWRpZXZhbC9BZG9iZVN0b2NrXzI2NTM0MDE0NC5tb3YnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZXMvYmFja2dyb3VuZE1lZGlldmFsL2JnTWVkaWV2YWwxLm1wNCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiAnIzhiNDUxMycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiAnI2RhYTUyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZW50OiAnIzJkNGEyYidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHlzdG86IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEeXN0b3BpcXVlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eER5c3RvL2NoYW1wIGRlIGJhdGFpbGxlIGR5c3RvLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9wbGF0ZWF1eER5c3RvL2NvdXJzIG1vZGVybmUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL3BsYXRlYXV4RHlzdG8vcGxhY2UgdmlsbGFnZSBtb2Rlcm5lLnBuZydcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2VzL2JhY2tncm91bmREeXN0by9iZ0R5c3RvLm1vdicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlcy9iYWNrZ3JvdW5kRHlzdG8vYmdEeXN0bzEubW92J1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvbG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk6ICcjOGUyNmYwZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogJyM3MjA5YjcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VudDogJyNjNzE1ODUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaGVtZVN3aXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVWaWRlb0JhY2tncm91bmQoKTtcclxuICAgICAgICB0aGlzLmFwcGx5VGhlbWUodGhpcy5jdXJyZW50VGhlbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0UmFuZG9tQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuc2V0UmFuZG9tVmlkZW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaGVtZVN3aXRjaGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3dpdGNoZXIuY2xhc3NOYW1lID0gJ3RoZW1lLXN3aXRjaGVyJztcclxuICAgICAgICBzd2l0Y2hlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGVtZS1zd2l0Y2hlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0aGVtZS1idG5cIiBkYXRhLXRoZW1lPVwibWVkaWV2YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYXN0bGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TcOpZGnDqXZhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRoZW1lLWJ0blwiIGRhdGEtdGhlbWU9XCJkeXN0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNpdHlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RHlzdG9waXF1ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN3aXRjaGVyKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIHBvdXIgbGVzIGJvdXRvbnNcclxuICAgICAgICBjb25zdCB0aGVtZUJ1dHRvbnMgPSBzd2l0Y2hlci5xdWVyeVNlbGVjdG9yQWxsKCcudGhlbWUtYnRuJyk7XHJcbiAgICAgICAgdGhlbWVCdXR0b25zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhlbWUgPSBidG4uZGF0YXNldC50aGVtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhlbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVCdXR0b24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWaWRlb0JhY2tncm91bmQoKSB7XHJcbiAgICAgICAgLy8gQ3LDqWVyIGwnw6lsw6ltZW50IHZpZMOpbyBwb3VyIGxlIGJhY2tncm91bmQgZGUgbGEgcGFnZVxyXG4gICAgICAgIGxldCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtdmlkZW8tYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIGlmICghdmlkZW9FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5pZCA9ICd0aGVtZS12aWRlby1iYWNrZ3JvdW5kJztcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmNsYXNzTmFtZSA9ICd0aGVtZS12aWRlby1iYWNrZ3JvdW5kJztcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50Lmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQucGxheXNJbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTGEgdmlkw6lvIHV0aWxpc2UgdW5pcXVlbWVudCBsZXMgc3R5bGVzIENTUyBkw6lmaW5pcyBkYW5zIF90aGVtZS1zeXN0ZW0uc2Nzc1xyXG4gICAgICAgICAgICAvLyBQYXMgZGUgc3R5bGVzIGlubGluZSBwb3VyIHBlcm1ldHRyZSBhdSBDU1MgZGUgY29udHLDtGxlciBsJ2FwcGFyZW5jZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUodmlkZW9FbGVtZW50LCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDcsOpZXIgbCdvdmVybGF5IHNvbWJyZSBzw6lwYXLDqVxyXG4gICAgICAgIGxldCBvdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby1vdmVybGF5Jyk7XHJcbiAgICAgICAgaWYgKCFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudC5pZCA9ICd2aWRlby1vdmVybGF5JztcclxuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQuY2xhc3NOYW1lID0gJ3ZpZGVvLW92ZXJsYXknO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5zw6lyZXIgbCdvdmVybGF5IGFwcsOocyBsYSB2aWTDqW8gKGRvbmMgYXUtZGVzc3VzKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShvdmVybGF5RWxlbWVudCwgZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRoZW1lKHRoZW1lTmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRoZW1lc1t0aGVtZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhlbWVOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VGhlbWUodGhlbWVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRSYW5kb21CYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmFuZG9tVmlkZW8oKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVCdXR0b24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNhdXZlZ2FyZGVyIGxlIGNob2l4XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzc3QtdGhlbWUnLCB0aGVtZU5hbWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVGjDqG1lIGNoYW5nw6kgc2lsZW5jaWV1c2VtZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VGhlbWUodGhlbWVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lc1t0aGVtZU5hbWVdO1xyXG4gICAgICAgIGlmICghdGhlbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQXBwbGlxdWVyIGxlcyBjb3VsZXVycyBDU1MgY3VzdG9tIHByb3BlcnRpZXNcclxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtcHJpbWFyeScsIHRoZW1lLmNvbG9ycy5wcmltYXJ5KTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lLXNlY29uZGFyeScsIHRoZW1lLmNvbG9ycy5zZWNvbmRhcnkpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtYWNjZW50JywgdGhlbWUuY29sb3JzLmFjY2VudCk7XHJcblxyXG4gICAgICAgIC8vIEFqb3V0ZXIgY2xhc3NlIGRlIHRow6htZSBhdSBib2R5XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC90aGVtZS1cXHcrL2csICcnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWVOYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJhbmRvbUJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZV07XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQmcgPSB0aGVtZS5iYWNrZ3JvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGVtZS5iYWNrZ3JvdW5kcy5sZW5ndGgpXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBcHBsaXF1ZXIgbGUgYmFja2dyb3VuZCBkaXJlY3RlbWVudCBzdXIgbGEgZ2FtZS1jYXJkXHJcbiAgICAgICAgY29uc3QgZ2FtZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYXJkJyk7XHJcbiAgICAgICAgaWYgKGdhbWVDYXJkKSB7XHJcbiAgICAgICAgICAgIGdhbWVDYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFuZG9tQmd9JylgO1xyXG4gICAgICAgICAgICBnYW1lQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICAgICAgICAgIGdhbWVDYXJkLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICBnYW1lQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICAgICAgICAgIGdhbWVDYXJkLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgdW4gb3ZlcmxheSBwb3VyIGxhIGxpc2liaWxpdMOpXHJcbiAgICAgICAgICAgIGlmICghZ2FtZUNhcmQucXVlcnlTZWxlY3RvcignLnRoZW1lLW92ZXJsYXknKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc05hbWUgPSAndGhlbWUtb3ZlcmxheSc7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNDgsIDI0NywgMjQ0LCAwLjgpIDAlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI0OCwgMjQ3LCAyNDQsIDAuNykgNTAlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI0OCwgMjQ3LCAyNDQsIDAuOSkgMTAwJVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIGdhbWVDYXJkLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBTJ2Fzc3VyZXIgcXVlIGxlIGNvbnRlbnUgcmVzdGUgYXUtZGVzc3VzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IGdhbWVDYXJkLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkQ29udGVudFtpXSAhPT0gb3ZlcmxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkQ29udGVudFtpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRDb250ZW50W2ldLnN0eWxlLnpJbmRleCA9ICcyJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRSYW5kb21WaWRlbygpIHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHRoaXMudGhlbWVzW3RoaXMuY3VycmVudFRoZW1lXTtcclxuICAgICAgICBjb25zdCByYW5kb21WaWRlbyA9IHRoZW1lLnZpZGVvc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGVtZS52aWRlb3MubGVuZ3RoKV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXBwbGlxdWVyIGxhIHZpZMOpbyBkZSBiYWNrZ3JvdW5kIHN1ciB0b3V0ZSBsYSBwYWdlXHJcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXZpZGVvLWJhY2tncm91bmQnKTtcclxuICAgICAgICBpZiAodmlkZW9FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5zcmMgPSByYW5kb21WaWRlbztcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmxvYWQoKTsgLy8gUmVjaGFyZ2VyIGxhIHZpZMOpb1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUydhc3N1cmVyIHF1ZSBsYSB2aWTDqW8gZMOpbWFycmVcclxuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ltcG9zc2libGUgZGUgbGlyZSBsYSB2aWTDqW8gYXV0b21hdGlxdWVtZW50OicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWN0aXZlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGhlbWUtYnRuJyk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBidG4uZGF0YXNldC50aGVtZSA9PT0gdGhpcy5jdXJyZW50VGhlbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYXJnZXIgbGUgdGjDqG1lIHNhdXZlZ2FyZMOpXHJcbiAgICBsb2FkU2F2ZWRUaGVtZSgpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzc3QtdGhlbWUnKTtcclxuICAgICAgICBpZiAoc2F2ZWQgJiYgdGhpcy50aGVtZXNbc2F2ZWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gc2F2ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsaXNhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy50aGVtZVN5c3RlbSA9IG5ldyBUaGVtZVN5c3RlbSgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnaW5pdGlhbGlzYXRpb24gZHUgc3lzdMOobWUgZGUgdGjDqG1lczonLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vbmF2YmFyLmpzJztcclxuaW1wb3J0ICcuL0pTL2dhbWUtaW50ZXJmYWNlLmpzJztcclxuaW1wb3J0ICcuL0pTL2d1aWxkLWd1aWRlLmpzJztcclxuaW1wb3J0ICcuL0pTL3RoZW1lLXN5c3RlbS5qcyc7XHJcbi8vIGltcG9ydCAnLi9KUy9yYW5raW5nLXN5c3RlbS5qcyc7IC8vIGRlc2FjdGl2YXRpb24gZHUgY2xhc3NlbWVudCBnw6lyZXIgcGFyIGxlIEpTICggaWwgZXN0IGVuIHBocCBldCBlbiBKUyBkYW5zIGdhbWUtaW50ZXJmYWNlLmpzIGEgbGEgbGlnbmUgMzIwICkgamUgbCdhaSBwYXMgZW5jb3JlIHN1cHByaW3DqSBhdSBjYXMgb3Ugb24gZW4gYSBlbmNvcmUgYmVzb2luIG1haXMgaWwgZmF1ZHJhIGxlIGZhaXJlIGEgbGEgZmluXHJcblxyXG5pbXBvcnQgJy4vSlMvZGVidWdNYXRjaC5qcyc7XHJcbmltcG9ydCAnLi9KUy9tYXRjaG1ha2luZy1zeXN0ZW0uanMnO1xyXG5pbXBvcnQgJy4vSlMvdGVhbS1tYW5hZ2VtZW50LmpzJ1xyXG5cclxuY29uc29sZS5sb2coJ/Cfk6YgW0FQUF0gQXBwbGljYXRpb24gcHJpbmNpcGFsZSBjaGFyZ8OpZSBhdmVjIHN5c3TDqG1lIGRlIGNsYXNzZW1lbnQnKTtcclxuIiwiLy8gPT09PT09PT09PT09PT09IE5BVkJBUiBNT0RFUk5FIEFWRUMgRFJPUERPV04gPT09PT09PT09PT09PT09XHJcblxyXG5jbGFzcyBNb2Rlcm5OYXZiYXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldHVwTG9nbygpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cE91dHNpZGVDbGljaygpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFc2NhcGVLZXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cExvZ28oKSB7XHJcbiAgICAgICAgY29uc3QgbG9nb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbG9nbycpO1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kcm9wZG93bicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWxvZ28tY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIGlmIChsb2dvQnRuICYmIGRyb3Bkb3duICYmIGxvZ29Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbG9nb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBNb2JpbGVNZW51KCkge1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnVyZ2VyJyk7XHJcbiAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbW9iaWxlLW1lbnUnKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1cmdlckJ0biAmJiBtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgICAgIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE91dHNpZGVDbGljaygpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1kcm9wZG93bicpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1sb2dvLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tb2JpbGUtbWVudScpO1xyXG5cclxuICAgICAgICAgICAgLy8gRmVybWVyIGRyb3Bkb3duIHNpIGNsaWMgZXh0w6lyaWV1clxyXG4gICAgICAgICAgICBpZiAoZHJvcGRvd24gJiYgbG9nb0NvbnRhaW5lciAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLm5hdmJhci1sb2dvLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZlcm1lciBtZW51IG1vYmlsZSBzaSBjbGljIGV4dMOpcmlldXJcclxuICAgICAgICAgICAgaWYgKG1vYmlsZU1lbnUgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5uYXZiYXItYnVyZ2VyJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRW1ww6pjaGVyIGZlcm1ldHVyZSBzaSBjbGljIGRhbnMgZHJvcGRvd25cclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuICAgICAgICBpZiAoZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRXNjYXBlS2V5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuICAgICAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1sb2dvLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkcm9wZG93biAmJiBsb2dvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duLWFjdGl2ZScsICFpc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24nLCAhaXNBY3RpdmUgPyAnb3V2ZXJ0JyA6ICdmZXJtw6knKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEcm9wZG93bigpIHtcclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuICAgICAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1sb2dvLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkcm9wZG93biAmJiBsb2dvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2JpbGVNZW51KCkge1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnVyZ2VyJyk7XHJcbiAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbW9iaWxlLW1lbnUnKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1cmdlckJ0biAmJiBtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gbW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lbnUgbW9iaWxlJywgaXNBY3RpdmUgPyAnZmVybcOpJyA6ICdvdXZlcnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnVyZ2VyJyk7XHJcbiAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbW9iaWxlLW1lbnUnKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1cmdlckJ0biAmJiBtb2JpbGVNZW51KSB7XHJcbiAgICAgICAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGlzYXRpb25cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cubW9kZXJuTmF2YmFyID0gbmV3IE1vZGVybk5hdmJhcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZiYXIgbW9kZXJuZSBpbml0aWFsaXPDqWUnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJldXIgbG9ycyBkZSBsXFwnaW5pdGlhbGlzYXRpb24gZGUgbGEgbmF2YmFyOicsIGVycm9yKTtcclxuICAgIH1cclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInJlcXVpcmUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiR2FtZUludGVyZmFjZSIsImN1cnJlbnRUYWIiLCJpbml0Iiwic2V0dXBUYWJzIiwic2V0dXBSYW5raW5nRmlsdGVycyIsImxvYWRDaGFyYWN0ZXJzIiwiY2hlY2tVcmxUYWIiLCJ1cmxGcmFnbWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInJlcGxhY2UiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJ0YWJQYXJhbSIsImdldCIsInRhcmdldFRhYiIsImluY2x1ZGVzIiwic3dpdGNoVGFiIiwiX3RoaXMiLCJ0YWJCdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJOYW1lIiwiZGF0YXNldCIsInRhYiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbmNhdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwibG9hZFJhbmtpbmciLCJ1cGRhdGVCYXR0bGVUYWIiLCJ0ZWFtTWFuYWdlbWVudCIsImxvYWRNYXRjaEhpc3RvcnkiLCJfdGhpczIiLCJjb250YWluZXIiLCJpbm5lckhUTUwiLCJzYW1wbGVDaGFyYWN0ZXJzIiwiaWQiLCJuYW1lIiwicm9sZSIsInBvd2VyIiwic2V0VGltZW91dCIsImNoYXJhY3RlciIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hhcmFjdGVyQ2FyZCIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidG9Mb3dlckNhc2UiLCJzZWFyY2hCdG4iLCJpbmZvVGV4dCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsInRlYW1TaXplIiwiZGlzYWJsZWQiLCJ0ZXh0Q29udGVudCIsIl9sb2FkTWF0Y2hIaXN0b3J5IiwiX2NhbGxlZSIsImhpc3RvcnlDb250YWluZXIiLCJyZXNwb25zZSIsImRhdGEiLCJoaXN0b3J5SFRNTCIsIl90IiwiX2NvbnRleHQiLCJmZXRjaCIsImpzb24iLCJzdWNjZXNzIiwibWF0Y2hlcyIsInRvdGFsX21hdGNoZXMiLCJ3aW5zIiwibG9zc2VzIiwiTWF0aCIsInJvdW5kIiwibWF0Y2giLCJyZXN1bHRDbGFzcyIsImlzX3dpbm5lciIsInJlc3VsdEljb24iLCJyZXN1bHRUZXh0IiwicGxheWVyX3RlYW0iLCJwbGF5ZXJfcG93ZXIiLCJvcHBvbmVudF90ZWFtIiwib3Bwb25lbnRfcG93ZXIiLCJvcHBvbmVudF9wbGF5ZXIiLCJmaW5pc2hlZF9hdCIsImR1cmF0aW9uIiwiZXJyb3IiLCJzaG93Tm90aWZpY2F0aW9uIiwibWVzc2FnZSIsInR5cGUiLCJ1bmRlZmluZWQiLCJub3RpZmljYXRpb24iLCJnZXROb3RpZmljYXRpb25JY29uIiwiYm9keSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImljb25zIiwiX3RoaXMzIiwiZmlsdGVyQnV0dG9ucyIsImJ0biIsImZpbHRlciIsIl9sb2FkUmFua2luZyIsIl9jYWxsZWUyIiwicmFua2luZ0NvbnRhaW5lciIsImVtcHR5TWVzc2FnZSIsInJhbmtpbmdIVE1MIiwicGxheWVyIiwidG9wQ2xhc3MiLCJyYW5rQ2xhc3MiLCJyYW5rSWNvbiIsImNoYW5nZUNsYXNzIiwiY2hhbmdlU2lnbiIsIl9pIiwiX3BsYXllciIsIl9jaGFuZ2VDbGFzcyIsIl9jaGFuZ2VTaWduIiwiX2FyZ3MyIiwiX3QyIiwiX2NvbnRleHQyIiwicmFua2luZyIsInVwZGF0ZVVzZXJQb3NpdGlvbiIsImN1cnJlbnRfcGxheWVyX3Bvc2l0aW9uIiwiY3VycmVudF9wbGF5ZXJfbW1yIiwibWluIiwibW1yX2NoYW5nZSIsImlzX2N1cnJlbnRfcGxheWVyIiwicG9zaXRpb24iLCJ1c2VybmFtZSIsInVzZXJJbmZvIiwidXNlcm5hbWVDb2xvciIsIm1tciIsInVzZXJQb3NpdGlvbkVsZW1lbnQiLCJ1c2VyUmF0aW5nRWxlbWVudCIsImxvYWRNb3JlUmFua2luZyIsInN0YXJ0SW5kZXgiLCJfc2hvd0NvbWJhdFZpc3VhbGl6YXRpb24iLCJfY2FsbGVlMyIsIm1hdGNoSWQiLCJtYXRjaERhdGEiLCJfdDMiLCJfY29udGV4dDMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGlzcGxheUNvbWJhdFZpc3VhbGl6YXRpb25Nb2RhbCIsInNob3dDb21iYXRWaXN1YWxpemF0aW9uIiwiX3giLCJtb2RhbEhUTUwiLCJ0ZWFtX2IiLCJnZW5lcmF0ZVRlYW1DaGFyYWN0ZXJzIiwidGVhbV9hIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5pdENvbWJhdFZpc3VhbGl6YXRpb24iLCJiYXR0bGVmaWVsZCIsInJhbmRvbUJnIiwiZ2V0UmFuZG9tQmF0dGxlZmllbGQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhdHRsZWZpZWxkcyIsImZsb29yIiwicmFuZG9tIiwidGVhbSIsInRlYW1UeXBlIiwiX3RoaXM0IiwiY2hhcmFjdGVyc0hUTUwiLCJjaGFyYWN0ZXJzIiwiaW5kZXgiLCJyb2xlSWNvbiIsImdldFJvbGVJY29uIiwiY2hhcmFjdGVySW1hZ2UiLCJnZXRDaGFyYWN0ZXJJbWFnZSIsImdldFJvbGVOYW1lIiwiaHAiLCJhdGsiLCJkZWZhdWx0SW1hZ2UiLCJhcnR3b3JrVXJsIiwiY2hhcmFjdGVyTmFtZSIsImNoYXJhY3RlckltYWdlcyIsImltYWdlUGF0aCIsIm5vcm1hbGl6ZWROYW1lIiwicm9sZU5hbWVzIiwiX3RoaXM1IiwibW9kYWwiLCJjbG9zZUJ0biIsInN0YXJ0QnRuIiwic3BlZWRCdG5zIiwiY3VycmVudFNwZWVkU3BhbiIsImN1cnJlbnRTcGVlZCIsImlzUGxheWluZyIsImluaXRHdWlsZEd1aWRlIiwiY2xvc2VNb2RhbCIsImVzY2FwZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiYiIsInBhcnNlRmxvYXQiLCJzcGVlZCIsInNwZWVkQ29tbWVudHMiLCJzaG93R3VpbGRHdWlkZUNvbW1lbnQiLCJkaXNwbGF5IiwicGxheUNvbWJhdEFuaW1hdGlvbiIsImV2ZW50cyIsImd1aWxkR3VpZGVDb21tZW50cyIsImxhc3RDb21tZW50VGltZSIsImNvbW1lbnRDb29sZG93biIsInRleHQiLCJlbW9qaSIsImNvbW1lbnRhcnlUZXh0IiwiZ3VpZGVTdGF0dXMiLCJidWJibGUiLCJnZXRSYW5kb21HdWlsZENvbW1lbnQiLCJub3ciLCJEYXRlIiwiY29tbWVudHMiLCJfcGxheUNvbWJhdEFuaW1hdGlvbiIsIl9jYWxsZWU0Iiwib25Db21wbGV0ZSIsImNlbnRlckFuaW1hdGlvbiIsInBsYXllckluZm8iLCJlbmVteUluZm8iLCJiYXNlRGVsYXkiLCJhbmltYXRpb25EZWxheSIsImV2ZW50IiwicmFuZG9tQWN0aW9uIiwicmFuZG9tQ29tbWVudCIsIndpbm5lciIsIl9jb250ZXh0NCIsIm1heCIsImFkZEd1aWxkR3VpZGVDb21tZW50YXJ5IiwiYW5pbWF0ZUV2ZW50IiwiYWN0aW9uIiwic2xlZXAiLCJhbmltYXRlUmFuZG9tQ2hhcmFjdGVyQWN0aW9uIiwiZmluZCIsImFuaW1hdGVWaWN0b3J5IiwiX3gyIiwiX3gzIiwiX3g0IiwiX2FkZEd1aWxkR3VpZGVDb21tZW50YXJ5IiwiX2NhbGxlZTUiLCJldmVudEluZGV4IiwidG90YWxFdmVudHMiLCJjb21tZW50IiwiYXR0YWNrQ29tbWVudHMiLCJwcm9ncmVzcyIsIl90NCIsIl9jb250ZXh0NSIsInRhcmdldF9uYW1lIiwiX3g1IiwiX3g2IiwiX3g3IiwiX2FuaW1hdGVSYW5kb21DaGFyYWN0ZXJBY3Rpb24iLCJfY2FsbGVlNiIsImFjdGlvblR5cGUiLCJ0ZWFtcyIsInJhbmRvbVRlYW0iLCJyYW5kb21DaGFySW5kZXgiLCJjaGFyYWN0ZXJFbGVtZW50IiwiZWZmZWN0c0VsZW1lbnQiLCJlZmZlY3RIVE1MIiwiZWZmZWN0Q2xhc3MiLCJfY29udGV4dDYiLCJfeDgiLCJfYW5pbWF0ZUV2ZW50IiwiX2NhbGxlZTciLCJjZW50ZXJFbGVtZW50IiwiX3Q1IiwiX2NvbnRleHQ3IiwiYW5pbWF0ZUNvbWJhdFN0YXJ0IiwiYW5pbWF0ZVRlYW1QcmVzZW50YXRpb24iLCJhbmltYXRlUm91bmRTdGFydCIsImFuaW1hdGVDaGFyYWN0ZXJBY3Rpb24iLCJhbmltYXRlUm91bmRFbmQiLCJfeDkiLCJfeDAiLCJfeDEiLCJfeDEwIiwiX2FuaW1hdGVDb21iYXRTdGFydCIsIl9jYWxsZWU4IiwiX2NvbnRleHQ4IiwiX3gxMSIsIl9hbmltYXRlVGVhbVByZXNlbnRhdGlvbiIsIl9jYWxsZWU5IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0NCIsImlzVGVhbUEiLCJ0YXJnZXRFbGVtZW50IiwiX2NvbnRleHQ5IiwiX3gxMiIsIl94MTMiLCJfeDE0IiwiX2FuaW1hdGVSb3VuZFN0YXJ0IiwiX2NhbGxlZTAiLCJfY29udGV4dDAiLCJfeDE1IiwiX3gxNiIsIl9hbmltYXRlQ2hhcmFjdGVyQWN0aW9uIiwiX2NhbGxlZTEiLCJjaGFySW5kZXgiLCJyYW5kb21BY3Rpb25zIiwiX3Q2IiwiX2NvbnRleHQxIiwiaHRtbCIsIl94MTciLCJfeDE4IiwiX2FuaW1hdGVSb3VuZEVuZCIsIl9jYWxsZWUxMCIsIl9jb250ZXh0MTAiLCJfeDE5IiwiX2FuaW1hdGVWaWN0b3J5IiwiX2NhbGxlZTExIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0NSIsImlzUGxheWVyVmljdG9yeSIsIl9jb250ZXh0MTEiLCJfeDIwIiwiX3gyMSIsIm1zIiwiX3Nob3dNYXRjaFJlY2FwIiwiX2NhbGxlZTEyIiwiX3Q3IiwiX2NvbnRleHQxMiIsImRpc3BsYXlNYXRjaFJlY2FwTW9kYWwiLCJzaG93TWF0Y2hSZWNhcCIsIl94MjIiLCJfdGhpczYiLCJ3aW5uZXJfdGVhbSIsInN0YXJ0ZWRfYXQiLCJnZW5lcmF0ZUV2ZW50c0hUTUwiLCJmZXJtZXJCdG4iLCJwYXJ0YWdlckJ0biIsImNsb3NlTWF0Y2hSZWNhcCIsImdldEF0dHJpYnV0ZSIsInNoYXJlTWF0Y2hSZWNhcCIsImV2ZW50c0hUTUwiLCJldmVudENsYXNzIiwiZXZlbnRJY29uIiwiaXNfY3JpdCIsImFtb3VudFRleHQiLCJhbW91bnQiLCJhY3Rvcl9uYW1lIiwiY3JlYXRlZF9hdCIsIl90aGlzNyIsInNoYXJlVXJsIiwib3JpZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGV4dEFyZWEiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImVyciIsImdhbWVJbnRlcmZhY2VFbGVtZW50IiwiZ2FtZUludGVyZmFjZSIsIndhcm4iLCJHdWlsZEd1aWRlIiwiY3VycmVudEd1aWxkSW1hZ2UiLCJpc0xvZ2dlZEluIiwidXNlck5hbWUiLCJkaWFsb2d1ZVN0YXRlIiwiY2hlY2tVc2VyU3RhdHVzIiwiY3JlYXRlR3VpZGVJbnRlcmZhY2UiLCJzdGFydEltYWdlUm90YXRpb24iLCJndWlkZUhUTUwiLCJhdHRhY2hFdmVudExpc3RlbmVycyIsImF2YXRhciIsImRpYWxvZ3VlQm94Iiwib3BlbkRpYWxvZ3VlIiwiY2xvc2VEaWFsb2d1ZSIsImNvbnRhaW5zIiwic2V0SW50ZXJ2YWwiLCJpbWdFbGVtZW50Iiwic3JjIiwic2hvd1dlbGNvbWVNZXNzYWdlIiwidGV4dEVsIiwiYnV0dG9uc0VsIiwic2hvd0dhbWVwbGF5SGVscCIsInNob3dDaGFyYWN0ZXJSb2xlcyIsInNob3dUZWFtQ3JlYXRpb24iLCJzaG93RGV0YWlsZWRSZXNwb25zZSIsInNob3dGaW5kQmF0dGxlIiwidGl0bGUiLCJjb250ZW50IiwicmV0dXJuVG9QcmV2aW91c01lbnUiLCJzaG93VGVhbVN0cmF0ZWd5Iiwic2hvd0JhbGFuY2VkU3RyYXRlZ3kiLCJzaG93QWdncmVzc2l2ZVN0cmF0ZWd5Iiwic2hvd0RlZmVuc2l2ZVN0cmF0ZWd5Iiwic2hvd1RhbmtSb2xlIiwic2hvd0RQU1JvbGUiLCJzaG93SGVhbGVyUm9sZSIsInNob3dBdXRvQmF0dGxlIiwiZ3VpbGRHdWlkZSIsInN0YXR1c0NoZWNrSW50ZXJ2YWwiLCJtYXRjaG1ha2luZyIsImluUXVldWUiLCJ0ZWFtSWQiLCJpbml0aWFsaXplTWF0Y2htYWtpbmciLCJjaGVja0N1cnJlbnRTdGF0dXMiLCJwcmV2ZW50RGVmYXVsdCIsImpvaW5NYXRjaG1ha2luZyIsImNhbmNlbEJ0biIsImNhbmNlbE1hdGNobWFraW5nIiwiYmFja0J0biIsInJlc2V0VG9TZWFyY2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlYW1faWQiLCJwYXJzZUludCIsInNob3dNYXRjaG1ha2luZ1N0YXR1cyIsInN0YXJ0U3RhdHVzQ2hlY2siLCJhbGVydCIsInJlc2V0U2VhcmNoQnV0dG9uIiwiaGlkZU1hdGNobWFraW5nU3RhdHVzIiwic3RvcFN0YXR1c0NoZWNrIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidGVhbVNlbGVjdGlvbiIsIm1hdGNobWFraW5nU3RhdHVzIiwibWF0Y2hSZXN1bHQiLCJzaG93TWF0Y2hSZXN1bHQiLCJyZXN1bHQiLCJyZXN1bHRDb250ZW50IiwicmVzdWx0VGl0bGUiLCJpc1dpbm5lciIsIndpbm5lcl90ZWFtX2lkIiwidGVhbTFfcG93ZXIiLCJ0ZWFtMl9wb3dlciIsIm1hdGNoX2lkIiwiY2hlY2tTdGF0dXMiLCJjbGVhckludGVydmFsIiwidXBkYXRlU3RhdHVzRGlzcGxheSIsInNob3dDb21iYXRQZW5kaW5nUmVzdWx0Iiwic3RhdHVzVGV4dCIsIndhaXRpbmdUaW1lIiwicGxheWVyc0luUXVldWUiLCJ3YWl0aW5nX3RpbWUiLCJwbGF5ZXJzX2luX3F1ZXVlIiwidmlld0NvbWJhdFZpc3VhbGl6YXRpb24iLCJza2lwQ29tYmF0VmlzdWFsaXphdGlvbiIsIl92aWV3Q29tYmF0VmlzdWFsaXphdGlvbiIsIl9za2lwQ29tYmF0VmlzdWFsaXphdGlvbiIsInNob3dTaW1wbGVNYXRjaFJlc3VsdCIsIl9zaG93U2ltcGxlTWF0Y2hSZXN1bHQiLCJyZXN1bHRNZXNzYWdlIiwiVGVhbU1hbmFnZW1lbnQiLCJwbGF5ZXJUZWFtIiwiYXZhaWxhYmxlQ2hhcmFjdGVycyIsInNlbGVjdGVkU2xvdCIsIl9pbml0IiwibG9hZFBsYXllclRlYW0iLCJwYW5lbCIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZVBhbmVsIiwiZGlzcGxheUNoYXJhY3RlcnMiLCJfbG9hZFBsYXllclRlYW0iLCJ1cGRhdGVUZWFtRGlzcGxheSIsImNyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5IiwiX2NyZWF0ZVRlYW1BdXRvbWF0aWNhbGx5IiwidGVhbUNoYXJhY3RlcnMiLCJzbG90cyIsInNsb3QiLCJwbGFjZWhvbGRlciIsImRlZiIsInJlbW92ZUJ0biIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNoYXJhY3RlciIsIm9uY2xpY2siLCJfbG9hZENoYXJhY3RlcnMiLCJzcGQiLCJjcml0IiwiaGVhbCIsImFkZEJ0biIsImFkZENoYXJhY3RlciIsIl9hZGRDaGFyYWN0ZXIiLCJjaGFyYWN0ZXJJZCIsImNoYXJhY3Rlcl9pZCIsIl9yZW1vdmVDaGFyYWN0ZXIiLCJoYXNEaXNhYmxlZEF0dHIiLCJoYXNBdHRyaWJ1dGUiLCJoYXNEaXNhYmxlZENsYXNzIiwiY3NzVGV4dCIsInRyYW5zZm9ybSIsIlRoZW1lU3lzdGVtIiwiY3VycmVudFRoZW1lIiwidGhlbWVzIiwibWVkaWV2YWwiLCJiYWNrZ3JvdW5kcyIsInZpZGVvcyIsImNvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJhY2NlbnQiLCJkeXN0byIsImNyZWF0ZVRoZW1lU3dpdGNoZXIiLCJjcmVhdGVWaWRlb0JhY2tncm91bmQiLCJhcHBseVRoZW1lIiwic2V0UmFuZG9tQmFja2dyb3VuZCIsInNldFJhbmRvbVZpZGVvIiwic3dpdGNoZXIiLCJ0aGVtZUJ1dHRvbnMiLCJ0aGVtZSIsInN3aXRjaFRoZW1lIiwidXBkYXRlQWN0aXZlQnV0dG9uIiwidmlkZW9FbGVtZW50IiwiYXV0b3BsYXkiLCJtdXRlZCIsImxvb3AiLCJwbGF5c0lubGluZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdmVybGF5RWxlbWVudCIsImNoaWxkcmVuIiwidGhlbWVOYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsImdhbWVDYXJkIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwib3ZlcmxheSIsImNhcmRDb250ZW50IiwiekluZGV4IiwicmFuZG9tVmlkZW8iLCJsb2FkIiwicGxheSIsImJ1dHRvbnMiLCJ0b2dnbGUiLCJsb2FkU2F2ZWRUaGVtZSIsInNhdmVkIiwiZ2V0SXRlbSIsInRoZW1lU3lzdGVtIiwiTW9kZXJuTmF2YmFyIiwic2V0dXBMb2dvIiwic2V0dXBNb2JpbGVNZW51Iiwic2V0dXBPdXRzaWRlQ2xpY2siLCJzZXR1cEVzY2FwZUtleSIsImxvZ29CdG4iLCJkcm9wZG93biIsImxvZ29Db250YWluZXIiLCJ0b2dnbGVEcm9wZG93biIsImJ1cmdlckJ0biIsIm1vYmlsZU1lbnUiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VzdCIsImNsb3NlTW9iaWxlTWVudSIsImNsb3NlRHJvcGRvd24iLCJpc0FjdGl2ZSIsIm92ZXJmbG93IiwibW9kZXJuTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==