// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.moodle.ostaz';
    static appname = 'Ostaz Mobile';
    static desktopappname = 'Ostaz Desktop';
    static versioncode = 3900;
    static versionname = '3.9.0';
    static cache_update_frequency_usually = 420000;
    static cache_update_frequency_often = 1200000;
    static cache_update_frequency_sometimes = 3600000;
    static cache_update_frequency_rarely = 43200000;
    static default_lang = 'en';
    static languages: any = {
        'ar': 'عربي',
        'en-us': 'English - United States',
        'fr': 'Français'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {
        student: {
            url: 'https://school.moodledemo.net',
            username: 'student',
            password: 'moodle'
        },
        teacher: {
            url: 'https://school.moodledemo.net',
            username: 'teacher',
            password: 'moodle'
        }
    };
    static font_sizes: any = [
        62.5,
        75.89,
        93.75
];
    static customurlscheme = 'moodlemobile';
    static siteurl = '';
    static sitename = '';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://moodle.net/moodle-app-privacy/';
    static notificoncolor = '#f98012';
    static statusbarbg = false;
    static statusbarlighttext = false;
    static statusbarbgios = '#f98012';
    static statusbarlighttextios = true;
    static statusbarbgandroid = '#df7310';
    static statusbarlighttextandroid = true;
    static statusbarbgremotetheme = '#000000';
    static statusbarlighttextremotetheme = true;
    static enableanalytics = false;
    static enableonboarding = true;
    static forceColorScheme = '';
    static ioswebviewscheme = 'moodleappfs';
    static appstores: any = {
        android: 'com.moodle.ostaz',
        ios: 'id633359593',
        windows: 'moodle-desktop/9p9bwvhdc8c8',
        mac: 'id1255924440',
        linux: 'https://download.moodle.org/desktop/download.php?platform=linux&arch=64'
    };
    static compilationtime = 1595369910711;
    static lastcommit = 'efc7c9ec5863a46d697a9c0ef6e3fd0d0b43754d';
}
