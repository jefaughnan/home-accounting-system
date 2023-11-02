<?php
Namespace faughnan\Action;

Use faughnan\TemplateHelper;
Use faughnan\Template;

class MainAction extends Action
{
    public function __construct()
    {
        parent::__construct();
    }

    public function process()
    {
        echo TemplateHelper::getPageTemplate(Template::PAGE_INDEX, 'faughnan');
    }
}
